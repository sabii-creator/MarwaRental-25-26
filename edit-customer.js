function editCustomer(customerId, buildingId) {
    const building = buildingsData[buildingId];
    const customer = building.customers.find(c => c.id === customerId);

    if (!customer) return;

    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title">Edit Customer</h2>
                <button class="modal-close" onclick="this.closest('.modal').remove()">×</button>
            </div>
            <form onsubmit="updateCustomer(event, ${customerId}, '${buildingId}')">
                <div class="form-grid">
                    <div class="form-group">
                        <label class="form-label">Full Name</label>
                        <input type="text" class="form-input" id="edit-customer-name" value="${customer.name}" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Room Number</label>
                        <input type="text" class="form-input" id="edit-customer-room" value="${customer.room}" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Phone</label>
                        <input type="tel" class="form-input" id="edit-customer-phone" value="${customer.phone}" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Email</label>
                        <input type="email" class="form-input" id="edit-customer-email" value="${customer.email}" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Monthly Rent (₹)</label>
                        <input type="number" class="form-input" id="edit-customer-rent" value="${customer.rent}" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Join Date</label>
                        <input type="date" class="form-input" id="edit-customer-join-date" value="${customer.joinDate}" required>
                    </div>
                    <div class="form-group" style="grid-column: 1 / -1;">
                        <label class="form-label">ID Proof</label>
                        ${customer.idProof ? `
                            <div style="background:rgba(59, 130, 246, 0.1); padding:0.5rem; border-radius:4px; margin-bottom:0.5rem; display:flex; align-items:center; gap:0.5rem;">
                                <span style="color:#60a5fa">📄 ${customer.idProof.name}</span>
                                <small style="color:#94a3b8">(Current)</small>
                            </div>
                        ` : ''}
                        <input type="file" class="form-input" accept="image/*,.pdf" onchange="handleFileUpload(this)">
                        <small style="color: #94a3b8; font-size: 0.875rem;">Upload to replace current proof (Max 5MB)</small>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary" style="width:100%;margin-top:1rem">Save Changes</button>
            </form>
        </div>
    `;
    document.body.appendChild(modal);
}

function updateCustomer(e, customerId, buildingId) {
    e.preventDefault();

    // Check if uploading
    if (window.isUploading) {
        alert('Please wait for the file to finish processing...');
        return;
    }

    const building = buildingsData[buildingId];
    const customer = building.customers.find(c => c.id === customerId);

    if (!customer) return;

    customer.name = document.getElementById('edit-customer-name').value;
    customer.room = document.getElementById('edit-customer-room').value;
    customer.phone = document.getElementById('edit-customer-phone').value;
    customer.email = document.getElementById('edit-customer-email').value;
    customer.rent = parseInt(document.getElementById('edit-customer-rent').value);
    customer.joinDate = document.getElementById('edit-customer-join-date').value;

    // Only update ID proof if a new one was uploaded
    if (window.uploadedFileData) {
        customer.idProof = window.uploadedFileData;
        window.uploadedFileData = null;
    }

    saveToLocalStorage();
    e.target.closest('.modal').remove();
    showCustomersPage(buildingId);
    updateDashboardStats();
}
