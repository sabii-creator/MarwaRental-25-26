// ========================================
// ID PROOF MANAGEMENT
// ========================================

// Temporary storage for uploaded file
window.uploadedFileData = null;

function handleFileUpload(input) {
    const file = input.files[0];
    if (!file) {
        window.uploadedFileData = null;
        return;
    }

    // Check file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        input.value = '';
        window.uploadedFileData = null;
        return;
    }

    // Read file as base64
    const reader = new FileReader();
    reader.onload = function (e) {
        window.uploadedFileData = {
            name: file.name,
            type: file.type,
            size: file.size,
            data: e.target.result,
            uploadDate: new Date().toISOString()
        };
    };
    reader.readAsDataURL(file);
}

function showProofsPage(buildingId) {
    const building = buildingsData[buildingId];
    const customersWithProofs = building.customers.filter(c => c.idProof);

    const content = document.getElementById('dynamic-content');

    content.innerHTML = `
        <div class="page-container">
            <div class="container">
                <div class="page-header">
                    <h1 class="page-title">
                        <button class="back-button" onclick="goBack()">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 12H5" stroke="currentColor" stroke-width="2"/>
                                <path d="M12 19L5 12L12 5" stroke="currentColor" stroke-width="2"/>
                            </svg>
                        </button>
                        <span>ID Proofs - ${building.name}</span>
                    </h1>
                    <p class="page-subtitle">View customer identification documents</p>
                </div>
                
                <div class="table-container">
                    <div class="table-header">
                        <h3 class="table-title">Customer ID Proofs</h3>
                    </div>
                    ${customersWithProofs.length > 0 ? `
                        <table>
                            <thead>
                                <tr>
                                    <th>Customer Name</th>
                                    <th>Room</th>
                                    <th>Document Name</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${customersWithProofs.map(c => `
                                    <tr>
                                        <td><strong>${c.name}</strong></td>
                                        <td>${c.room}</td>
                                        <td>${c.idProof.name}</td>
                                        <td>
                                            <button class="btn btn-primary" style="padding:6px 12px;font-size:0.875rem" onclick="viewProof(${c.id}, '${buildingId}')">View</button>
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    ` : `
                        <div style="text-align:center;padding:3rem;color:#94a3b8;">
                            <h3>No ID Proofs Uploaded</h3>
                            <p>Add customers with ID proofs to see them here</p>
                        </div>
                    `}
                </div>
            </div>
        </div>
    `;

    content.scrollIntoView({ behavior: 'smooth' });
}

function viewProof(customerId, buildingId) {
    const building = buildingsData[buildingId];
    const customer = building.customers.find(c => c.id === customerId);

    if (!customer || !customer.idProof) {
        alert('No ID proof found');
        return;
    }

    const modal = document.createElement('div');
    modal.className = 'modal active';

    const isImage = customer.idProof.type.startsWith('image/');

    modal.innerHTML = `
        <div class="modal-content" style="max-width: 90%;">
            <div class="modal-header">
                <h2 class="modal-title">ID Proof - ${customer.name}</h2>
                <button class="modal-close" onclick="this.closest('.modal').remove()">×</button>
            </div>
            <div style="padding: 1.5rem;">
                <div style="margin-bottom: 1rem; padding: 1rem; background: rgba(100, 116, 139, 0.1); border-radius: 8px;">
                    <p style="margin: 0 0 0.5rem; color: #cbd5e1;"><strong>Customer:</strong> ${customer.name}</p>
                    <p style="margin: 0 0 0.5rem; color: #cbd5e1;"><strong>Room:</strong> ${customer.room}</p>
                    <p style="margin: 0; color: #cbd5e1;"><strong>Document:</strong> ${customer.idProof.name}</p>
                </div>
                ${isImage ? `
                    <img src="${customer.idProof.data}" style="width: 100%; height: auto; border-radius: 8px;" alt="ID Proof">
                ` : `
                    <p style="text-align: center; color: #94a3b8;">Preview not available for this file type</p>
                    <p style="text-align: center; margin-top: 1rem;"><a href="${customer.idProof.data}" download="${customer.idProof.name}" class="btn btn-primary">Download Document</a></p>
                `}
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}
