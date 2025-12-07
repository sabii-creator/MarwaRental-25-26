// ========================================
// DATA MANAGEMENT
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

document.addEventListener('DOMContentLoaded', async () => {
    // Initialize Firebase
    const firebaseEnabled = initializeFirebase();

    // Load data from cloud or localStorage
    await loadDataFromStorage();

    initializeApp();
    updateDashboardStats();
    setupScrollAnimation();

    // Set up real-time sync if Firebase is enabled
    if (firebaseEnabled && database) {
        db.onDataChange((data) => {
            Object.assign(buildingsData, data);
            initializeApp();
            updateDashboardStats();
        });
    }
});

async function loadDataFromStorage() {
    try {
        const savedData = await db.loadData();
        if (savedData) {
            // Merge saved data with default data
            Object.keys(savedData).forEach(buildingId => {
                if (buildingsData[buildingId]) {
                    buildingsData[buildingId] = savedData[buildingId];
                }
            });
            console.log('Data loaded from storage');
        }
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

function saveData() {
    scheduleAutoSave(buildingsData);
}

function initializeApp() {
    // Update building statistics
    Object.keys(buildingsData).forEach(buildingId => {
        const building = buildingsData[buildingId];
        const roomsElement = document.getElementById(`${buildingId}-rooms`);
        const occupiedElement = document.getElementById(`${buildingId}-occupied`);

        if (roomsElement) roomsElement.textContent = building.rooms;
        if (occupiedElement) occupiedElement.textContent = building.customers.length;
    });
}

function updateDashboardStats() {
    const totalTenants = Object.values(buildingsData).reduce((sum, building) => sum + building.customers.length, 0);
    const totalTenantsElement = document.getElementById('total-tenants');
    if (totalTenantsElement) {
        animateNumber(totalTenantsElement, 0, totalTenants, 1500);
    }
}

function animateNumber(element, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            element.textContent = end;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ========================================
// NAVIGATION
// ========================================

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

function navigateTo(page, building) {
    const dynamicContent = document.getElementById('dynamic-content');

    if (page === 'billing') {
        showBillingPage(building);
    } else if (page === 'customers') {
        showCustomersPage(building);
    }

    // Smooth scroll to content
    setTimeout(() => {
        dynamicContent.scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

function goBack() {
    const dynamicContent = document.getElementById('dynamic-content');
    dynamicContent.innerHTML = '';

    // Scroll to buildings section
    const buildingsSection = document.getElementById('buildings');
    buildingsSection.scrollIntoView({ behavior: 'smooth' });
}

// ========================================
// BILLING PAGE
// ========================================

function showBillingPage(buildingId) {
    const building = buildingsData[buildingId];
    const dynamicContent = document.getElementById('dynamic-content');

    const html = `
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
                                    <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M21 21L16.65 16.65" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <input type="text" placeholder="Search bills..." id="billing-search" onkeyup="filterBillingTable('${buildingId}')">
                            </div>
                            <button class="btn btn-primary" onclick="showAddBillModal('${buildingId}')">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                Add Bill
                            </button>
                        </div>
                    </div>
                    <table id="billing-table">
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
                            ${generateBillingRows(building.bills, buildingId)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;

    dynamicContent.innerHTML = html;
}

function generateBillingRows(bills, buildingId) {
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
                    <button class="btn btn-success" style="padding: 6px 12px; font-size: 0.875rem; margin-right: 0.5rem;" onclick="markAsPaid(${bill.id}, '${buildingId}')">
                        Mark Paid
                    </button>
                ` : `
                    <button class="btn btn-secondary" style="padding: 6px 12px; font-size: 0.875rem; margin-right: 0.5rem;" onclick="viewReceipt(${bill.id})">
                        Receipt
                    </button>
                `}
                <button class="btn btn-secondary" style="padding: 6px 12px; font-size: 0.875rem; margin-right: 0.5rem;" onclick="editBill(${bill.id}, '${buildingId}')">
                    Edit
                </button>
                <button class="btn btn-danger" style="padding: 6px 12px; font-size: 0.875rem;" onclick="deleteBill(${bill.id}, '${buildingId}')">
                    Delete
                </button>
            </td>
        </tr>
    `).join('');
}

function filterBillingTable(buildingId) {
    const searchInput = document.getElementById('billing-search').value.toLowerCase();
    const tbody = document.getElementById('billing-tbody');
    const building = buildingsData[buildingId];

    const filteredBills = building.bills.filter(bill =>
        bill.customerName.toLowerCase().includes(searchInput) ||
        bill.room.toLowerCase().includes(searchInput) ||
        bill.month.toLowerCase().includes(searchInput)
    );

    tbody.innerHTML = generateBillingRows(filteredBills, buildingId);
}

function markAsPaid(billId, buildingId) {
    // Find and update the bill
    Object.values(buildingsData).forEach(building => {
        const bill = building.bills.find(b => b.id === billId);
        if (bill) {
            bill.status = 'paid';
            bill.paidDate = new Date().toISOString().split('T')[0];
            saveData();

            // Refresh the current view
            const currentBuilding = Object.keys(buildingsData).find(key =>
                buildingsData[key].bills.includes(bill)
            );
            showBillingPage(currentBuilding);
        }
    });
}

function viewReceipt(billId) {
    alert('Receipt viewer would open here. Bill ID: ' + billId);
}

function showAddBillModal(buildingId) {
    const building = buildingsData[buildingId];
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title">Add New Bill</h2>
                <button class="modal-close" onclick="closeModal(this)">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
            <form onsubmit="submitBill(event, '${buildingId}')">
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
                <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 1rem;">
                    Create Bill
                </button>
            </form>
        </div>
    `;
    document.body.appendChild(modal);
}

function submitBill(event, buildingId) {
    event.preventDefault();

    const customerId = parseInt(document.getElementById('bill-customer').value);
    const building = buildingsData[buildingId];
    const customer = building.customers.find(c => c.id === customerId);

    const newBill = {
        id: Math.max(...building.bills.map(b => b.id)) + 1,
        customerId: customerId,
        customerName: customer.name,
        room: customer.room,
        month: document.getElementById('bill-month').value,
        amount: parseInt(document.getElementById('bill-amount').value),
        dueDate: document.getElementById('bill-due-date').value,
        paidDate: null,
        status: 'pending'
    };

    building.bills.push(newBill);
    saveData();
    closeModal(event.target);
    showBillingPage(buildingId);
}

// ========================================
// CUSTOMERS PAGE
// ========================================

function showCustomersPage(buildingId) {
    const building = buildingsData[buildingId];
    const dynamicContent = document.getElementById('dynamic-content');

    const html = `
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
                        <span>Customers - ${building.name}</span>
                    </h1>
                    <p class="page-subtitle">Manage tenant information and records</p>
                </div>
                
                <div class="table-container">
                    <div class="table-header">
                        <h3 class="table-title">Tenant Directory</h3>
                        <div class="table-actions">
                            <div class="search-box">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M21 21L16.65 16.65" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <input type="text" placeholder="Search customers..." id="customer-search" onkeyup="filterCustomerTable('${buildingId}')">
                            </div>
                            <button class="btn btn-primary" onclick="showAddCustomerModal('${buildingId}')">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="12" y1="5" x2="12" y2="19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                Add Customer
                            </button>
                        </div>
                    </div>
                    <table id="customer-table">
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
                            ${generateCustomerRows(building.customers)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;

    dynamicContent.innerHTML = html;
}

function generateCustomerRows(customers) {
    return customers.map(customer => {
        // Find which building this customer belongs to
        let buildingId = null;
        Object.keys(buildingsData).forEach(key => {
            if (buildingsData[key].customers.find(c => c.id === customer.id)) {
                buildingId = key;
            }
        });

        return `
            <tr>
                <td><strong>${customer.name}</strong></td>
                <td>${customer.room}</td>
                <td>${customer.phone}</td>
                <td>${customer.email}</td>
                <td>₹${customer.rent.toLocaleString()}</td>
                <td>${customer.joinDate}</td>
                <td>
                    <button class="btn btn-secondary" style="padding: 6px 12px; font-size: 0.875rem; margin-right: 0.5rem;" onclick="editCustomer(${customer.id})">
                        Edit
                    </button>
                    <button class="btn btn-danger" style="padding: 6px 12px; font-size: 0.875rem;" onclick="deleteCustomer(${customer.id}, '${buildingId}')">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    }).join('');
}

function filterCustomerTable(buildingId) {
    const searchInput = document.getElementById('customer-search').value.toLowerCase();
    const tbody = document.getElementById('customer-tbody');
    const building = buildingsData[buildingId];

    const filteredCustomers = building.customers.filter(customer =>
        customer.name.toLowerCase().includes(searchInput) ||
        customer.room.toLowerCase().includes(searchInput) ||
        customer.phone.toLowerCase().includes(searchInput) ||
        customer.email.toLowerCase().includes(searchInput)
    );

    tbody.innerHTML = generateCustomerRows(filteredCustomers);
}

function showAddCustomerModal(buildingId) {
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title">Add New Customer</h2>
                <button class="modal-close" onclick="closeModal(this)">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
            <form onsubmit="submitCustomer(event, '${buildingId}')">
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
                </div>
                <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 1rem;">
                    Add Customer
                </button>
            </form>
        </div>
    `;
    document.body.appendChild(modal);
}

function submitCustomer(event, buildingId) {
    event.preventDefault();

    const building = buildingsData[buildingId];
    const allCustomers = Object.values(buildingsData).flatMap(b => b.customers);
    const maxId = Math.max(...allCustomers.map(c => c.id));

    const newCustomer = {
        id: maxId + 1,
        name: document.getElementById('customer-name').value,
        room: document.getElementById('customer-room').value,
        phone: document.getElementById('customer-phone').value,
        email: document.getElementById('customer-email').value,
        rent: parseInt(document.getElementById('customer-rent').value),
        joinDate: document.getElementById('customer-join-date').value,
        status: 'active'
    };

    building.customers.push(newCustomer);
    saveData();
    closeModal(event.target);
    showCustomersPage(buildingId);
    initializeApp();
    updateDashboardStats();
}

function editCustomer(customerId) {
    // Find the customer across all buildings
    let customer = null;
    let buildingId = null;

    Object.keys(buildingsData).forEach(key => {
        const found = buildingsData[key].customers.find(c => c.id === customerId);
        if (found) {
            customer = found;
            buildingId = key;
        }
    });

    if (!customer) return;

    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title">Edit Customer</h2>
                <button class="modal-close" onclick="closeModal(this)">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
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
                </div>
                <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 1rem;">
                    Update Customer
                </button>
            </form>
        </div>
    `;
    document.body.appendChild(modal);
}

function updateCustomer(event, customerId, buildingId) {
    event.preventDefault();

    const building = buildingsData[buildingId];
    const customer = building.customers.find(c => c.id === customerId);

    if (customer) {
        customer.name = document.getElementById('edit-customer-name').value;
        function deleteBill(billId, buildingId) {
            if (!confirm('Are you sure you want to delete this bill? This action cannot be undone.')) {
                return;
            }

            const building = buildingsData[buildingId];
            const billIndex = building.bills.findIndex(b => b.id === billId);

            if (billIndex !== -1) {
                building.bills.splice(billIndex, 1);
                saveData();
                showBillingPage(buildingId);
            }
        }

        // ========================================
        // STATEMENT GENERATION
        // ========================================

        function showStatementModal() {
            const modal = document.createElement('div');
            modal.className = 'modal active';
            modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2 class="modal-title">Generate Statement</h2>
                <button class="modal-close" onclick="closeModal(this)">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
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
            <div id="statement-form-content">
                <!-- Dynamic content based on selection -->
            </div>
        </div>
    `;
            document.body.appendChild(modal);
            updateStatementForm();
        }

        function updateStatementForm() {
            const statementType = document.getElementById('statement-type').value;
            const formContent = document.getElementById('statement-form-content');

            let html = '';

            if (statementType === 'individual') {
                // Get all customers from all buildings
                const allCustomers = [];
                Object.keys(buildingsData).forEach(buildingId => {
                    buildingsData[buildingId].customers.forEach(customer => {
                        allCustomers.push({
                            ...customer,
                            buildingId: buildingId,
                            buildingName: buildingsData[buildingId].name
                        });
                    });
                });

                html = `
            <div class="form-grid">
                <div class="form-group">
                    <label class="form-label">Select Customer</label>
                    <select class="form-select" id="statement-customer" required>
                        <option value="">Choose a customer</option>
                        ${allCustomers.map(c => `<option value="${c.id}">${c.name} - ${c.buildingName} - Room ${c.room}</option>`).join('')}
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">From Date</label>
                    <input type="date" class="form-input" id="statement-from-date" required>
                </div>
                <div class="form-group">
                    <label class="form-label">To Date</label>
                    <input type="date" class="form-input" id="statement-to-date" required>
                </div>
            </div>
            <button class="btn btn-primary" style="width: 100%; margin-top: 1rem;" onclick="generateIndividualStatement()">
                Generate Statement
            </button>
        `;
            } else if (statementType === 'building') {
                html = `
            <div class="form-grid">
                <div class="form-group">
                    <label class="form-label">Select Building</label>
                    <select class="form-select" id="statement-building" required>
                        <option value="">Choose a building</option>
                        <option value="kidaren-new">KIDAREN NEW</option>
                        <option value="kidaren-old">KIDAREN OLD</option>
                        <option value="mahe">MAHE</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">From Date</label>
                    <input type="date" class="form-input" id="statement-from-date" required>
                </div>
                <div class="form-group">
                    <label class="form-label">To Date</label>
                    <input type="date" class="form-input" id="statement-to-date" required>
                </div>
            </div>
            <button class="btn btn-primary" style="width: 100%; margin-top: 1rem;" onclick="generateBuildingStatement()">
                Generate Statement
            </button>
        `;
            } else if (statementType === 'all') {
                html = `
            <div class="form-grid">
                <div class="form-group">
                    <label class="form-label">From Date</label>
                    <input type="date" class="form-input" id="statement-from-date" required>
                </div>
                <div class="form-group">
                    <label class="form-label">To Date</label>
                    <input type="date" class="form-input" id="statement-to-date" required>
                </div>
            </div>
            <button class="btn btn-primary" style="width: 100%; margin-top: 1rem;" onclick="generateAllBuildingsStatement()">
                Generate Statement
            </button>
        `;
            }

            formContent.innerHTML = html;
        }

        function generateIndividualStatement() {
            const customerId = parseInt(document.getElementById('statement-customer').value);
            const fromDate = document.getElementById('statement-from-date').value;
            const toDate = document.getElementById('statement-to-date').value;

            if (!customerId || !fromDate || !toDate) {
                alert('Please fill all fields');
                return;
            }

            // Find customer and their bills
            let customer = null;
            let buildingId = null;
            let bills = [];

            Object.keys(buildingsData).forEach(key => {
                const found = buildingsData[key].customers.find(c => c.id === customerId);
                if (found) {
                    customer = found;
                    buildingId = key;
                    bills = buildingsData[key].bills.filter(b =>
                        b.customerId === customerId &&
                        b.dueDate >= fromDate &&
                        b.dueDate <= toDate
                    );
                }
            });

            if (!customer) return;

            const totalAmount = bills.reduce((sum, bill) => sum + bill.amount, 0);
            const paidAmount = bills.filter(b => b.status === 'paid').reduce((sum, bill) => sum + bill.amount, 0);
            const pendingAmount = totalAmount - paidAmount;

            showStatementView({
                title: `Statement for ${customer.name}`,
                subtitle: `${buildingsData[buildingId].name} - Room ${customer.room} | ${fromDate} to ${toDate}`,
                bills: bills,
                summary: {
                    total: totalAmount,
                    paid: paidAmount,
                    pending: pendingAmount
                }
            });
        }

        function generateBuildingStatement() {
            const buildingId = document.getElementById('statement-building').value;
            const fromDate = document.getElementById('statement-from-date').value;
            const toDate = document.getElementById('statement-to-date').value;

            if (!buildingId || !fromDate || !toDate) {
                alert('Please fill all fields');
                return;
            }

            const building = buildingsData[buildingId];
            const bills = building.bills.filter(b =>
                b.dueDate >= fromDate &&
                b.dueDate <= toDate
            );

            const totalAmount = bills.reduce((sum, bill) => sum + bill.amount, 0);
            const paidAmount = bills.filter(b => b.status === 'paid').reduce((sum, bill) => sum + bill.amount, 0);
            const pendingAmount = totalAmount - paidAmount;

            showStatementView({
                title: `Statement for ${building.name}`,
                subtitle: `${fromDate} to ${toDate}`,
                bills: bills,
                summary: {
                    total: totalAmount,
                    paid: paidAmount,
                    pending: pendingAmount
                }
            });
        }

        function generateAllBuildingsStatement() {
            const fromDate = document.getElementById('statement-from-date').value;
            const toDate = document.getElementById('statement-to-date').value;

            if (!fromDate || !toDate) {
                alert('Please fill all fields');
                return;
            }

            let allBills = [];
            Object.keys(buildingsData).forEach(buildingId => {
                const building = buildingsData[buildingId];
                const bills = building.bills.filter(b =>
                    b.dueDate >= fromDate &&
                    b.dueDate <= toDate
                ).map(bill => ({
                    ...bill,
                    buildingName: building.name
                }));
                allBills = allBills.concat(bills);
            });

            const totalAmount = allBills.reduce((sum, bill) => sum + bill.amount, 0);
            const paidAmount = allBills.filter(b => b.status === 'paid').reduce((sum, bill) => sum + bill.amount, 0);
            const pendingAmount = totalAmount - paidAmount;

            showStatementView({
                title: 'Statement for All Buildings',
                subtitle: `${fromDate} to ${toDate}`,
                bills: allBills,
                summary: {
                    total: totalAmount,
                    paid: paidAmount,
                    pending: pendingAmount
                },
                showBuilding: true
            });
        }

        function showStatementView(data) {
            // Close the statement modal
            const modals = document.querySelectorAll('.modal');
            modals.forEach(m => m.remove());

            const dynamicContent = document.getElementById('dynamic-content');

            const html = `
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
                        <span>${data.title}</span>
                    </h1>
                    <p class="page-subtitle">${data.subtitle}</p>
                </div>
                
                <!-- Summary Cards -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
                    <div class="stat-card">
                        <div class="stat-icon" style="background: var(--accent-gradient);">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="stat-info">
                            <div class="stat-value">₹${data.summary.total.toLocaleString()}</div>
                            <div class="stat-label">Total Amount</div>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon" style="background: var(--success-gradient);">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.7088 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.76489 14.1003 1.98232 16.07 2.86" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="stat-info">
                            <div class="stat-value">₹${data.summary.paid.toLocaleString()}</div>
                            <div class="stat-label">Paid Amount</div>
                        </div>
                    </div>
                    <div class="stat-card">
                        <div class="stat-icon" style="background: var(--secondary-gradient);">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 8V12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 16H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="stat-info">
                            <div class="stat-value">₹${data.summary.pending.toLocaleString()}</div>
                            <div class="stat-label">Pending Amount</div>
                        </div>
                    </div>
                </div>
                
                <div class="table-container">
                    <div class="table-header">
                        <h3 class="table-title">Transaction Details</h3>
                        <button class="btn btn-primary" onclick="printStatement()">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9V2H18V9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6 18H4C3.46957 18 2.96086 17.7893 2.58579 17.4142C2.21071 17.0391 2 16.5304 2 16V11C2 10.4696 2.21071 9.96086 2.58579 9.58579C2.96086 9.21071 3.46957 9 4 9H20C20.5304 9 21.0391 9.21071 21.4142 9.58579C21.7893 9.96086 22 10.4696 22 11V16C22 16.5304 21.7893 17.0391 21.4142 17.4142C21.0391 17.7893 20.5304 18 20 18H18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M18 14H6V22H18V14Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            Print
                        </button>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                ${data.showBuilding ? '<th>Building</th>' : ''}
                                <th>Customer</th>
                                <th>Room</th>
                                <th>Month</th>
                                <th>Amount</th>
                                <th>Due Date</th>
                                <th>Paid Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${data.bills.map(bill => `
                                <tr>
                                    ${data.showBuilding ? `<td>${bill.buildingName}</td>` : ''}
                                    <td><strong>${bill.customerName}</strong></td>
                                    <td>${bill.room}</td>
                                    <td>${bill.month}</td>
                                    <td>₹${bill.amount.toLocaleString()}</td>
                                    <td>${bill.dueDate}</td>
                                    <td>${bill.paidDate || '-'}</td>
                                    <td><span class="status-badge status-${bill.status}">${bill.status}</span></td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;

            dynamicContent.innerHTML = html;
            dynamicContent.scrollIntoView({ behavior: 'smooth' });
        }

        function printStatement() {
            window.print();
        }

        // ========================================
        // MODAL UTILITIES
        // ========================================

        function closeModal(element) {
            const modal = element.closest('.modal');
            if (modal) {
                modal.classList.remove('active');
                setTimeout(() => modal.remove(), 300);
            }
        }

        // Close modal on background click
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                closeModal(e.target);
            }
        });
