// Updated showAddBillModal function with new date fields
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
                    <div class="form-group">
                        <label class="form-label">Rent Start Date</label>
                        <input type="date" class="form-input" id="bill-rent-start-date" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Rent End Date</label>
                        <input type="date" class="form-input" id="bill-rent-end-date" required>
                    </div>
                    <div class="form-group">
                        <label class="form-label">Cash Paid Date</label>
                        <input type="date" class="form-input" id="bill-cash-paid-date">
                        <small style="color: #94a3b8; font-size: 0.875rem;">Leave empty if not paid yet</small>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary" style="width:100%;margin-top:1rem">Create Bill</button>
            </form>
        </div>
    `;
    document.body.appendChild(modal);
}

// Updated addBill function to save new date fields
function addBill(e, buildingId) {
    e.preventDefault();
    const building = buildingsData[buildingId];
    const customerId = parseInt(document.getElementById('bill-customer').value);
    const customer = building.customers.find(c => c.id === customerId);

    const cashPaidDate = document.getElementById('bill-cash-paid-date').value;

    const newBill = {
        id: Math.max(...building.bills.map(b => b.id), 0) + 1,
        customerId,
        customerName: customer.name,
        room: customer.room,
        month: document.getElementById('bill-month').value,
        amount: parseInt(document.getElementById('bill-amount').value),
        dueDate: document.getElementById('bill-due-date').value,
        rentStartDate: document.getElementById('bill-rent-start-date').value,
        rentEndDate: document.getElementById('bill-rent-end-date').value,
        cashPaidDate: cashPaidDate || null,
        paidDate: cashPaidDate || null,
        status: cashPaidDate ? 'paid' : 'pending'
    };

    building.bills.push(newBill);
    saveToLocalStorage();
    e.target.closest('.modal').remove();
    showBillingPage(buildingId);
}

// Copy these two functions and replace the existing ones in app.js (lines 264-325)
