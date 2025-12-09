// ========================================
// MARWA RENTAL MANAGEMENT SYSTEM 2025-26
// Fixed and Working Version
// ========================================

// Sample data structure for buildings
const buildingsData = {
    'kidaren-new': {
        name: 'KIDAREN NEW',
        rooms: 12,
        customers: [
            { id: 1, name: 'John Smith', room: '101', phone: '+91 98765 43210', email: 'john.smith@email.com', rent: 8000, joinDate: '2024-01-15', status: 'active' },
            { id: 2, name: 'Sarah Johnson', room: '102', phone: '+91 98765 43211', email: 'sarah.j@email.com', rent: 8500, joinDate: '2024-02-01', status: 'active' },
            { id: 3, name: 'Michael Chen', room: '103', phone: '+91 98765 43212', email: 'michael.c@email.com', rent: 8000, joinDate: '2024-03-10', status: 'active' },
            { id: 4, name: 'Emily Davis', room: '201', phone: '+91 98765 43213', email: 'emily.d@email.com', rent: 9000, joinDate: '2024-01-20', status: 'active' },
            { id: 5, name: 'David Wilson', room: '202', phone: '+91 98765 43214', email: 'david.w@email.com', rent: 9000, joinDate: '2024-04-05', status: 'active' }
        ],
        bills: [
            { id: 1, customerId: 1, customerName: 'John Smith', room: '101', month: 'December 2025', amount: 8000, dueDate: '2025-12-05', paidDate: '2025-12-03', status: 'paid' },
            { id: 2, customerId: 2, customerName: 'Sarah Johnson', room: '102', month: 'December 2025', amount: 8500, dueDate: '2025-12-05', paidDate: null, status: 'pending' },
            { id: 3, customerId: 3, customerName: 'Michael Chen', room: '103', month: 'December 2025', amount: 8000, dueDate: '2025-12-05', paidDate: null, status: 'pending' },
            { id: 4, customerId: 4, customerName: 'Emily Davis', room: '201', month: 'November 2025', amount: 9000, dueDate: '2025-11-05', paidDate: null, status: 'overdue' },
            { id: 5, customerId: 5, customerName: 'David Wilson', room: '202', month: 'December 2025', amount: 9000, dueDate: '2025-12-05', paidDate: '2025-12-01', status: 'paid' }
        ]
    },
    'kidaren-old': {
        name: 'KIDAREN OLD',
        rooms: 10,
        customers: [
            { id: 6, name: 'Robert Taylor', room: '101', phone: '+91 98765 43215', email: 'robert.t@email.com', rent: 7000, joinDate: '2023-06-15', status: 'active' },
            { id: 7, name: 'Lisa Anderson', room: '102', phone: '+91 98765 43216', email: 'lisa.a@email.com', rent: 7000, joinDate: '2023-08-20', status: 'active' },
            { id: 8, name: 'James Martinez', room: '103', phone: '+91 98765 43217', email: 'james.m@email.com', rent: 7500, joinDate: '2024-01-10', status: 'active' },
            { id: 9, name: 'Patricia Brown', room: '201', phone: '+91 98765 43218', email: 'patricia.b@email.com', rent: 7500, joinDate: '2023-12-05', status: 'active' }
        ],
        bills: [
            { id: 6, customerId: 6, customerName: 'Robert Taylor', room: '101', month: 'December 2025', amount: 7000, dueDate: '2025-12-05', paidDate: '2025-12-02', status: 'paid' },
            { id: 7, customerId: 7, customerName: 'Lisa Anderson', room: '102', month: 'December 2025', amount: 7000, dueDate: '2025-12-05', paidDate: null, status: 'pending' },
            { id: 8, customerId: 8, customerName: 'James Martinez', room: '103', month: 'December 2025', amount: 7500, dueDate: '2025-12-05', paidDate: null, status: 'pending' },
            { id: 9, customerId: 9, customerName: 'Patricia Brown', room: '201', month: 'December 2025', amount: 7500, dueDate: '2025-12-05', paidDate: '2025-12-04', status: 'paid' }
        ]
    },
    'mahe': {
        name: 'MAHE',
        rooms: 15,
        customers: [
            { id: 10, name: 'Christopher Lee', room: '101', phone: '+91 98765 43219', email: 'chris.l@email.com', rent: 10000, joinDate: '2024-01-05', status: 'active' },
            { id: 11, name: 'Jennifer White', room: '102', phone: '+91 98765 43220', email: 'jennifer.w@email.com', rent: 10000, joinDate: '2024-02-15', status: 'active' },
            { id: 12, name: 'Daniel Harris', room: '103', phone: '+91 98765 43221', email: 'daniel.h@email.com', rent: 10500, joinDate: '2024-03-01', status: 'active' },
            { id: 13, name: 'Jessica Clark', room: '201', phone: '+91 98765 43222', email: 'jessica.c@email.com', rent: 11000, joinDate: '2024-01-20', status: 'active' },
            { id: 14, name: 'Matthew Lewis', room: '202', phone: '+91 98765 43223', email: 'matthew.l@email.com', rent: 11000, joinDate: '2024-04-10', status: 'active' },
            { id: 15, name: 'Amanda Walker', room: '203', phone: '+91 98765 43224', email: 'amanda.w@email.com', rent: 10500, joinDate: '2024-05-01', status: 'active' }
        ],
        bills: [
            { id: 10, customerId: 10, customerName: 'Christopher Lee', room: '101', month: 'December 2025', amount: 10000, dueDate: '2025-12-05', paidDate: '2025-12-01', status: 'paid' },
            { id: 11, customerId: 11, customerName: 'Jennifer White', room: '102', month: 'December 2025', amount: 10000, dueDate: '2025-12-05', paidDate: null, status: 'pending' },
            { id: 12, customerId: 12, customerName: 'Daniel Harris', room: '103', month: 'December 2025', amount: 10500, dueDate: '2025-12-05', paidDate: null, status: 'pending' },
            { id: 13, customerId: 13, customerName: 'Jessica Clark', room: '201', month: 'December 2025', amount: 11000, dueDate: '2025-12-05', paidDate: '2025-12-03', status: 'paid' },
            { id: 14, customerId: 14, customerName: 'Matthew Lewis', room: '202', month: 'November 2025', amount: 11000, dueDate: '2025-11-05', paidDate: null, status: 'overdue' },
            { id: 15, customerId: 15, customerName: 'Amanda Walker', room: '203', month: 'December 2025', amount: 10500, dueDate: '2025-12-05', paidDate: null, status: 'pending' }
        ]
    }
};

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    loadFromLocalStorage();
    initializeApp();
    updateDashboardStats();
    setupScrollAnimation();
});

function loadFromLocalStorage() {
    try {
        const saved = localStorage.getItem('rentalData');
        if (saved) {
            Object.assign(buildingsData, JSON.parse(saved));
        }
    } catch (e) {
        console.error('Error loading data:', e);
    }
}

function saveToLocalStorage() {
    try {
        localStorage.setItem('rentalData', JSON.stringify(buildingsData));
    } catch (e) {
        console.error('Error saving data:', e);
    }
}

function initializeApp() {
    Object.keys(buildingsData).forEach(buildingId => {
        const building = buildingsData[buildingId];
        const roomsEl = document.getElementById(`${buildingId}-rooms`);
        const occupiedEl = document.getElementById(`${buildingId}-occupied`);
        if (roomsEl) roomsEl.textContent = building.rooms;
        if (occupiedEl) occupiedEl.textContent = building.customers.length;
    });
}

function updateDashboardStats() {
    const total = Object.values(buildingsData).reduce((sum, b) => sum + b.customers.length, 0);
    const el = document.getElementById('total-tenants');
    if (el) animateNumber(el, 0, total, 1500);
}

function animateNumber(el, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            el.textContent = end;
            clearInterval(timer);
        } else {
            el.textContent = Math.floor(current);
        }
    }, 16);
}

function setupScrollAnimation() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

function navigateTo(page, buildingId) {
    if (page === 'billing') {
        showBillingPage(buildingId);
    } else if (page === 'customers') {
        showCustomersPage(buildingId);
    } else if (page === 'rooms') {
        showRoomsPage(buildingId);
    } else if (page === 'proofs') {
        showProofsPage(buildingId);
    }
}

function goBack() {
    document.getElementById('dynamic-content').innerHTML = '';
    document.getElementById('buildings').scrollIntoView({ behavior: 'smooth' });
}

// ========================================
// BILLING PAGE
// ========================================

function showBillingPage(buildingId) {
    const building = buildingsData[buildingId];
    const content = document.getElementById('dynamic-content');

    content.innerHTML = `
        <div class="page-container">
            <div class="container">
                <div class="page-header">
                    <h1 class="page-title">
                        <button class="back-button" onclick="goBack()">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 12H5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 19L5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                        <span>Billing - ${building.name}</span>
                    </h1>
                    <p class="page-subtitle">Manage rent payments and billing records</p>
                </div>
                
                <div class="table-container">
                    <div class="table-header">
                        <h3 class="table-title">Payment Records</h3>
                        <div class="table-actions">
                            <div class="search-box">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2"/>
                                    <path d="M21 21L16.65 16.65" stroke="currentColor" stroke-width="2"/>
                                </svg>
                                <input type="text" placeholder="Search bills..." id="billing-search" onkeyup="filterBills('${buildingId}')">
                            </div>
                            <button class="btn btn-primary" onclick="showAddBillModal('${buildingId}')">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" stroke-width="2"/>
                                    <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" stroke-width="2"/>
                                </svg>
                                Add Bill
                            </button>
                        </div>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Customer</th>
                                <th>Room</th>
                                <th>Month</th>
                                <th>Amount</th>
                                <th>Due Date</th>
                                <th>Paid Date</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody id="billing-tbody">
                            ${renderBills(building.bills, buildingId)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;

    content.scrollIntoView({ behavior: 'smooth' });
}

function renderBills(bills, buildingId) {
    return bills.map(bill => `
        <tr>
            <td>${bill.customerName}</td>
            <td>${bill.room}</td>
            <td>${bill.month}</td>
            <td>₹${bill.amount.toLocaleString()}</td>
            <td>${bill.dueDate}</td>
            <td>${bill.paidDate || '-'}</td>
            <td><span class="status-badge status-${bill.status}">${bill.status}</span></td>
            <td>
                ${bill.status !== 'paid' ? `
                    <button class="btn btn-success" style="padding:6px 12px;font-size:0.875rem;margin-right:0.5rem" onclick="markPaid(${bill.id}, '${buildingId}')">Mark Paid</button>
                ` : ''}
                <button class="btn btn-secondary" style="padding:6px 12px;font-size:0.875rem;margin-right:0.5rem" onclick="editBill(${bill.id}, '${buildingId}')">Edit</button>
                <button class="btn btn-danger" style="padding:6px 12px;font-size:0.875rem" onclick="deleteBill(${bill.id}, '${buildingId}')">Delete</button>
            </td>
        </tr>
    `).join('');
}

function filterBills(buildingId) {
    const search = document.getElementById('billing-search').value.toLowerCase();
    const building = buildingsData[buildingId];
    const filtered = building.bills.filter(b =>
        b.customerName.toLowerCase().includes(search) ||
        b.room.toLowerCase().includes(search) ||
        b.month.toLowerCase().includes(search)
    );
    document.getElementById('billing-tbody').innerHTML = renderBills(filtered, buildingId);
}

function markPaid(billId, buildingId) {
    const bill = buildingsData[buildingId].bills.find(b => b.id === billId);
    if (bill) {
        bill.status = 'paid';
        bill.paidDate = new Date().toISOString().split('T')[0];
        saveToLocalStorage();
        showBillingPage(buildingId);
    }
}

function showAddBillModal(buildingId) {
    const building = buildingsData[buildingId];
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title">Add New Bill</h2>
                <button class="modal-close" onclick="this.closest('.modal').remove()">×</button>
            </div>
            <form onsubmit="addBill(event, '${buildingId}')">
                <div class="form-grid">
                    <div class="form-group">
                        <label class="form-label">Customer</label>
                        <select class="form-select" id="bill-customer" required>
                            <option value="">Select Customer</option>
                            ${building.customers.map(c => `<option value="${c.id}">${c.name} - Room ${c.room}</option>`).join('')}
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Month</label>
                        <input type="text" class="form-input" id="bill-month" placeholder="e.g., January 2026" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Amount (₹)</label>
                        <input type="number" class="form-input" id="bill-amount" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Due Date</label>
                        <input type="date" class="form-input" id="bill-due-date" required>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary" style="width:100%;margin-top:1rem">Create Bill</button>
            </form>
        </div>
    `;
    document.body.appendChild(modal);
}

function addBill(e, buildingId) {
    e.preventDefault();
    const building = buildingsData[buildingId];
    const customerId = parseInt(document.getElementById('bill-customer').value);
    const customer = building.customers.find(c => c.id === customerId);

    const newBill = {
        id: Math.max(...building.bills.map(b => b.id), 0) + 1,
        customerId,
        customerName: customer.name,
        room: customer.room,
        month: document.getElementById('bill-month').value,
        amount: parseInt(document.getElementById('bill-amount').value),
        dueDate: document.getElementById('bill-due-date').value,
        paidDate: null,
        status: 'pending'
    };

    building.bills.push(newBill);
    saveToLocalStorage();
    e.target.closest('.modal').remove();
    showBillingPage(buildingId);
}

function editBill(billId, buildingId) {
    alert('Edit bill feature - Bill ID: ' + billId);
}

function deleteBill(billId, buildingId) {
    if (confirm('Delete this bill?')) {
        const building = buildingsData[buildingId];
        building.bills = building.bills.filter(b => b.id !== billId);
        saveToLocalStorage();
        showBillingPage(buildingId);
    }
}

// ========================================
// CUSTOMERS PAGE
// ========================================

function showCustomersPage(buildingId) {
    const building = buildingsData[buildingId];
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
                        <span>Customers - ${building.name}</span>
                    </h1>
                    <p class="page-subtitle">Manage tenant information</p>
                </div>
                
                <div class="table-container">
                    <div class="table-header">
                        <h3 class="table-title">Tenant Directory</h3>
                        <div class="table-actions">
                            <div class="search-box">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2"/>
                                    <path d="M21 21L16.65 16.65" stroke="currentColor" stroke-width="2"/>
                                </svg>
                                <input type="text" placeholder="Search customers..." id="customer-search" onkeyup="filterCustomers('${buildingId}')">
                            </div>
                            <button class="btn btn-primary" onclick="showAddCustomerModal('${buildingId}')">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" stroke-width="2"/>
                                    <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" stroke-width="2"/>
                                </svg>
                                Add Customer
                            </button>
                        </div>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Room</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Monthly Rent</th>
                                <th>Join Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody id="customer-tbody">
                            ${renderCustomers(building.customers, buildingId)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;

    content.scrollIntoView({ behavior: 'smooth' });
}

function renderCustomers(customers, buildingId) {
    return customers.map(c => `
        <tr>
            <td><strong>${c.name}</strong></td>
            <td>${c.room}</td>
            <td>${c.phone}</td>
            <td>${c.email}</td>
            <td>₹${c.rent.toLocaleString()}</td>
            <td>${c.joinDate}</td>
            <td>
                <button class="btn btn-secondary" style="padding:6px 12px;font-size:0.875rem;margin-right:0.5rem" onclick="editCustomer(${c.id}, '${buildingId}')">Edit</button>
                <button class="btn btn-danger" style="padding:6px 12px;font-size:0.875rem" onclick="deleteCustomer(${c.id}, '${buildingId}')">Delete</button>
            </td>
        </tr>
    `).join('');
}

function filterCustomers(buildingId) {
    const search = document.getElementById('customer-search').value.toLowerCase();
    const building = buildingsData[buildingId];
    const filtered = building.customers.filter(c =>
        c.name.toLowerCase().includes(search) ||
        c.room.toLowerCase().includes(search) ||
        c.phone.toLowerCase().includes(search) ||
        c.email.toLowerCase().includes(search)
    );
    document.getElementById('customer-tbody').innerHTML = renderCustomers(filtered, buildingId);
}

function showAddCustomerModal(buildingId) {
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title">Add New Customer</h2>
                <button class="modal-close" onclick="this.closest('.modal').remove()">×</button>
            </div>
            <form onsubmit="addCustomer(event, '${buildingId}')">
                <div class="form-grid">
                    <div class="form-group">
                        <label class="form-label">Full Name</label>
                        <input type="text" class="form-input" id="customer-name" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Room Number</label>
                        <input type="text" class="form-input" id="customer-room" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Phone</label>
                        <input type="tel" class="form-input" id="customer-phone" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Email</label>
                        <input type="email" class="form-input" id="customer-email" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Monthly Rent (₹)</label>
                        <input type="number" class="form-input" id="customer-rent" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Join Date</label>
                        <input type="date" class="form-input" id="customer-join-date" required>
                    </div>
                    <div class="form-group" style="grid-column: 1 / -1;">
                        <label class="form-label">ID Proof (Aadhar, Passport, etc.)</label>
                        <input type="file" class="form-input" id="customer-id-proof" accept="image/*,.pdf" onchange="handleFileUpload(this)">
                        <small style="color: #94a3b8; font-size: 0.875rem;">Upload image or PDF (Max 5MB)</small>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary" style="width:100%;margin-top:1rem">Add Customer</button>
            </form>
        </div>
    `;
    document.body.appendChild(modal);
}

function addCustomer(e, buildingId) {
    e.preventDefault();

    // Check if file is still uploading
    if (window.isUploading) {
        alert('Please wait for the ID proof to finish processing...');
        return;
    }

    const building = buildingsData[buildingId];
    const allCustomers = Object.values(buildingsData).flatMap(b => b.customers);
    const maxId = Math.max(...allCustomers.map(c => c.id), 0);

    const newCustomer = {
        id: maxId + 1,
        name: document.getElementById('customer-name').value,
        room: document.getElementById('customer-room').value,
        phone: document.getElementById('customer-phone').value,
        email: document.getElementById('customer-email').value,
        rent: parseInt(document.getElementById('customer-rent').value),
        joinDate: document.getElementById('customer-join-date').value,
        status: 'active',
        idProof: window.uploadedFileData || null
    };

    building.customers.push(newCustomer);
    window.uploadedFileData = null;
    saveToLocalStorage();
    e.target.closest('.modal').remove();
    showCustomersPage(buildingId);
    initializeApp();
    updateDashboardStats();
}

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


function deleteCustomer(customerId, buildingId) {
    if (confirm('Delete this customer and all their bills?')) {
        const building = buildingsData[buildingId];
        building.customers = building.customers.filter(c => c.id !== customerId);
        building.bills = building.bills.filter(b => b.customerId !== customerId);
        saveToLocalStorage();
        showCustomersPage(buildingId);
        initializeApp();
        updateDashboardStats();
    }
}

// ========================================
// REPORTS/STATEMENTS
// ========================================

function showStatementModal() {
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title">Generate Statement</h2>
                <button class="modal-close" onclick="this.closest('.modal').remove()">×</button>
            </div>
            <div class="form-grid">
                <div class="form-group">
                    <label class="form-label">Statement Type</label>
                    <select class="form-select" id="statement-type" onchange="updateStatementForm()">
                        <option value="individual">Individual Customer</option>
                        <option value="building">Single Building</option>
                        <option value="all">All Buildings</option>
                    </select>
                </div>
            </div>
            <div id="statement-form"></div>
        </div>
    `;
    document.body.appendChild(modal);
    updateStatementForm();
}

function updateStatementForm() {
    const type = document.getElementById('statement-type').value;
    const form = document.getElementById('statement-form');

    if (type === 'individual') {
        const allCustomers = [];
        Object.keys(buildingsData).forEach(bid => {
            buildingsData[bid].customers.forEach(c => {
                allCustomers.push({ ...c, buildingId: bid, buildingName: buildingsData[bid].name });
            });
        });

        form.innerHTML = `
            <div class="form-grid">
                <div class="form-group">
                    <label class="form-label">Customer</label>
                    <select class="form-select" id="stmt-customer" required>
                        <option value="">Choose customer</option>
                        ${allCustomers.map(c => `<option value="${c.id}">${c.name} - ${c.buildingName}</option>`).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">From Date</label>
                    <input type="date" class="form-input" id="stmt-from" required>
                </div>
                <div class="form-group">
                    <label class="form-label">To Date</label>
                    <input type="date" class="form-input" id="stmt-to" required>
                </div>
            </div>
            <button class="btn btn-primary" style="width:100%;margin-top:1rem" onclick="generateIndividualStatement()">Generate</button>
        `;
    } else if (type === 'building') {
        form.innerHTML = `
            <div class="form-grid">
                <div class="form-group">
                    <label class="form-label">Building</label>
                    <select class="form-select" id="stmt-building" required>
                        <option value="">Choose building</option>
                        <option value="kidaren-new">KIDAREN NEW</option>
                        <option value="kidaren-old">KIDAREN OLD</option>
                        <option value="mahe">MAHE</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">From Date</label>
                    <input type="date" class="form-input" id="stmt-from" required>
                </div>
                <div class="form-group">
                    <label class="form-label">To Date</label>
                    <input type="date" class="form-input" id="stmt-to" required>
                </div>
            </div>
            <button class="btn btn-primary" style="width:100%;margin-top:1rem" onclick="generateBuildingStatement()">Generate</button>
        `;
    } else {
        form.innerHTML = `
            <div class="form-grid">
                <div class="form-group">
                    <label class="form-label">From Date</label>
                    <input type="date" class="form-input" id="stmt-from" required>
                </div>
                <div class="form-group">
                    <label class="form-label">To Date</label>
                    <input type="date" class="form-input" id="stmt-to" required>
                </div>
            </div>
            <button class="btn btn-primary" style="width:100%;margin-top:1rem" onclick="generateAllStatement()">Generate</button>
        `;
    }
}

function generateIndividualStatement() {
    alert('Individual statement generation - Feature coming soon!');
}

function generateBuildingStatement() {
    alert('Building statement generation - Feature coming soon!');
}

function generateAllStatement() {
    alert('All buildings statement generation - Feature coming soon!');
}

// ========================================
// ROOMS MANAGEMENT
// ========================================

function showRoomsPage(buildingId) {
    const building = buildingsData[buildingId];

    // Initialize rooms array if it doesn't exist
    if (!building.roomsList) {
        building.roomsList = [];
        // Generate default rooms based on rooms count
        for (let i = 1; i <= building.rooms; i++) {
            const roomNumber = i < 10 ? `10${i}` : `${100 + i}`;
            const isOccupied = building.customers.some(c => c.room === roomNumber);
            building.roomsList.push({
                id: i,
                number: roomNumber,
                floor: Math.ceil(i / 6),
                type: i <= 6 ? 'Standard' : 'Deluxe',
                status: isOccupied ? 'occupied' : 'vacant',
                rent: i <= 6 ? 8000 : 9000
            });
        }
    }

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
                        <span>Rooms - ${building.name}</span>
                    </h1>
                    <p class="page-subtitle">Manage room information and availability</p>
                </div>
                
                <div class="table-container">
                    <div class="table-header">
                        <h3 class="table-title">Room Directory</h3>
                        <div class="table-actions">
                            <div class="search-box">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2"/>
                                    <path d="M21 21L16.65 16.65" stroke="currentColor" stroke-width="2"/>
                                </svg>
                                <input type="text" placeholder="Search rooms..." id="room-search" onkeyup="filterRooms('${buildingId}')">
                            </div>
                            <button class="btn btn-primary" onclick="showAddRoomModal('${buildingId}')">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" stroke-width="2"/>
                                    <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" stroke-width="2"/>
                                </svg>
                                Add Room
                            </button>
                        </div>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Room Number</th>
                                <th>Floor</th>
                                <th>Type</th>
                                <th>Rent (₹)</th>
                                <th>Status</th>
                                <th>Tenant</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody id="rooms-tbody">
                            ${renderRooms(building.roomsList, building.customers, buildingId)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;

    content.scrollIntoView({ behavior: 'smooth' });
}

function renderRooms(rooms, customers, buildingId) {
    return rooms.map(room => {
        const tenant = customers.find(c => c.room === room.number);
        return `
            <tr>
                <td><strong>${room.number}</strong></td>
                <td>Floor ${room.floor}</td>
                <td>${room.type}</td>
                <td>₹${room.rent.toLocaleString()}</td>
                <td><span class="status-badge status-${room.status}">${room.status}</span></td>
                <td>${tenant ? tenant.name : '-'}</td>
                <td>
                    <button class="btn btn-secondary" style="padding:6px 12px;font-size:0.875rem;margin-right:0.5rem" onclick="editRoom(${room.id}, '${buildingId}')">Edit</button>
                    <button class="btn btn-danger" style="padding:6px 12px;font-size:0.875rem" onclick="deleteRoom(${room.id}, '${buildingId}')">Delete</button>
                </td>
            </tr>
        `;
    }).join('');
}

function filterRooms(buildingId) {
    const search = document.getElementById('room-search').value.toLowerCase();
    const building = buildingsData[buildingId];
    const filtered = building.roomsList.filter(r =>
        r.number.toLowerCase().includes(search) ||
        r.type.toLowerCase().includes(search) ||
        r.status.toLowerCase().includes(search)
    );
    document.getElementById('rooms-tbody').innerHTML = renderRooms(filtered, building.customers, buildingId);
}

function showAddRoomModal(buildingId) {
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title">Add New Room</h2>
                <button class="modal-close" onclick="this.closest('.modal').remove()">×</button>
            </div>
            <form onsubmit="addRoom(event, '${buildingId}')">
                <div class="form-grid">
                    <div class="form-group">
                        <label class="form-label">Room Number</label>
                        <input type="text" class="form-input" id="room-number" placeholder="e.g., 101" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Floor</label>
                        <input type="number" class="form-input" id="room-floor" min="1" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Room Type</label>
                        <select class="form-select" id="room-type" required>
                            <option value="">Select Type</option>
                            <option value="Standard">Standard</option>
                            <option value="Deluxe">Deluxe</option>
                            <option value="Suite">Suite</option>
                            <option value="Premium">Premium</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Monthly Rent (₹)</label>
                        <input type="number" class="form-input" id="room-rent" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Status</label>
                        <select class="form-select" id="room-status" required>
                            <option value="vacant">Vacant</option>
                            <option value="occupied">Occupied</option>
                            <option value="maintenance">Maintenance</option>
                        </select>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary" style="width:100%;margin-top:1rem">Add Room</button>
            </form>
        </div>
    `;
    document.body.appendChild(modal);
}

function addRoom(e, buildingId) {
    e.preventDefault();
    const building = buildingsData[buildingId];

    if (!building.roomsList) {
        building.roomsList = [];
    }

    const maxId = building.roomsList.length > 0 ? Math.max(...building.roomsList.map(r => r.id)) : 0;

    const newRoom = {
        id: maxId + 1,
        number: document.getElementById('room-number').value,
        floor: parseInt(document.getElementById('room-floor').value),
        type: document.getElementById('room-type').value,
        rent: parseInt(document.getElementById('room-rent').value),
        status: document.getElementById('room-status').value
    };

    building.roomsList.push(newRoom);
    building.rooms = building.roomsList.length;
    saveToLocalStorage();
    e.target.closest('.modal').remove();
    showRoomsPage(buildingId);
    initializeApp();
}

function editRoom(roomId, buildingId) {
    const building = buildingsData[buildingId];
    const room = building.roomsList.find(r => r.id === roomId);

    if (!room) return;

    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title">Edit Room</h2>
                <button class="modal-close" onclick="this.closest('.modal').remove()">×</button>
            </div>
            <form onsubmit="updateRoom(event, ${roomId}, '${buildingId}')">
                <div class="form-grid">
                    <div class="form-group">
                        <label class="form-label">Room Number</label>
                        <input type="text" class="form-input" id="edit-room-number" value="${room.number}" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Floor</label>
                        <input type="number" class="form-input" id="edit-room-floor" value="${room.floor}" min="1" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Room Type</label>
                        <select class="form-select" id="edit-room-type" required>
                            <option value="Standard" ${room.type === 'Standard' ? 'selected' : ''}>Standard</option>
                            <option value="Deluxe" ${room.type === 'Deluxe' ? 'selected' : ''}>Deluxe</option>
                            <option value="Suite" ${room.type === 'Suite' ? 'selected' : ''}>Suite</option>
                            <option value="Premium" ${room.type === 'Premium' ? 'selected' : ''}>Premium</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Monthly Rent (₹)</label>
                        <input type="number" class="form-input" id="edit-room-rent" value="${room.rent}" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Status</label>
                        <select class="form-select" id="edit-room-status" required>
                            <option value="vacant" ${room.status === 'vacant' ? 'selected' : ''}>Vacant</option>
                            <option value="occupied" ${room.status === 'occupied' ? 'selected' : ''}>Occupied</option>
                            <option value="maintenance" ${room.status === 'maintenance' ? 'selected' : ''}>Maintenance</option>
                        </select>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary" style="width:100%;margin-top:1rem">Update Room</button>
            </form>
        </div>
    `;
    document.body.appendChild(modal);
}

function updateRoom(e, roomId, buildingId) {
    e.preventDefault();
    const building = buildingsData[buildingId];
    const room = building.roomsList.find(r => r.id === roomId);

    if (room) {
        room.number = document.getElementById('edit-room-number').value;
        room.floor = parseInt(document.getElementById('edit-room-floor').value);
        room.type = document.getElementById('edit-room-type').value;
        room.rent = parseInt(document.getElementById('edit-room-rent').value);
        room.status = document.getElementById('edit-room-status').value;

        saveToLocalStorage();
        e.target.closest('.modal').remove();
        showRoomsPage(buildingId);
    }
}

function deleteRoom(roomId, buildingId) {
    if (confirm('Delete this room?')) {
        const building = buildingsData[buildingId];
        building.roomsList = building.roomsList.filter(r => r.id !== roomId);
        building.rooms = building.roomsList.length;
        saveToLocalStorage();
        showRoomsPage(buildingId);
        initializeApp();
    }
}


// Close modals on background click
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.remove();
    }
});

console.log('✅ Marwa Rental Management System loaded successfully!');
