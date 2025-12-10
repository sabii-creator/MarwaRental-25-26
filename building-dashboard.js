
// ===================================
// BUILDING DASHBOARD (New Navigation)
// ===================================

function showBuildingDashboard(buildingId) {
    const building = buildingsData[buildingId];
    const content = document.getElementById('dynamic-content');

    // Hide main buildings list if visible
    const buildingsSection = document.getElementById('buildings');
    const statsSection = document.getElementById('stats-section');
    if (buildingsSection) buildingsSection.style.display = 'none';
    if (statsSection) statsSection.style.display = 'none';

    // Calculate stats
    const totalRooms = building.rooms;
    const occupied = building.customers.length;
    const vacant = totalRooms - occupied;
    const occupancyRate = Math.round((occupied / totalRooms) * 100) || 0;

    content.innerHTML = `
        <div class="page-container" style="animation: fadeIn 0.3s ease;">
            <div class="container">
                <!-- Header -->
                <div class="page-header">
                    <h1 class="page-title">
                        <button class="back-button" onclick="showMainDashboard()">
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 12H5" stroke="currentColor" stroke-width="2"/>
                                <path d="M12 19L5 12L12 5" stroke="currentColor" stroke-width="2"/>
                            </svg>
                        </button>
                        <span>${building.name} Dashboard</span>
                    </h1>
                     <div class="stat-badge" style="background: rgba(59, 130, 246, 0.1); color: #60a5fa; padding: 0.5rem 1rem; border-radius: 20px;">
                        ${occupancyRate}% Occupancy
                    </div>
                </div>

                <!-- Building Stats Summary -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
                    <div class="stat-card">
                        <h3>Total Rooms</h3>
                        <p class="stat-number">${totalRooms}</p>
                    </div>
                    <div class="stat-card">
                        <h3>Occupied</h3>
                        <p class="stat-number" style="color: #4ade80">${occupied}</p>
                    </div>
                    <div class="stat-card">
                        <h3>Vacant</h3>
                        <p class="stat-number" style="color: #f87171">${vacant}</p>
                    </div>
                </div>

                <!-- Feature Navigation Cards -->
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem;">
                    
                    <!-- Billing -->
                    <div class="building-card" style="cursor: pointer; transition: transform 0.2s;" onclick="showBillingPage('${buildingId}')" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='translateY(0)'">
                         <div style="background: rgba(59, 130, 246, 0.1); width: 50px; height: 50px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                <polyline points="10 9 9 9 8 9"></polyline>
                            </svg>
                        </div>
                        <h3>Billing</h3>
                        <p style="color: #94a3b8; font-size: 0.9rem;">Manage invoices, rent payments, and history.</p>
                    </div>

                    <!-- Customers -->
                    <div class="building-card" style="cursor: pointer; transition: transform 0.2s;" onclick="showCustomersPage('${buildingId}')" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='translateY(0)'">
                         <div style="background: rgba(16, 185, 129, 0.1); width: 50px; height: 50px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                        </div>
                        <h3>Customers</h3>
                        <p style="color: #94a3b8; font-size: 0.9rem;">View tenants, add new residents, and edit details.</p>
                    </div>

                    <!-- Rooms -->
                    <div class="building-card" style="cursor: pointer; transition: transform 0.2s;" onclick="showRoomsPage('${buildingId}')" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='translateY(0)'">
                         <div style="background: rgba(245, 158, 11, 0.1); width: 50px; height: 50px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2">
                                <rect x="3" y="3" width="7" height="7"></rect>
                                <rect x="14" y="3" width="7" height="7"></rect>
                                <rect x="14" y="14" width="7" height="7"></rect>
                                <rect x="3" y="14" width="7" height="7"></rect>
                            </svg>
                        </div>
                        <h3>Rooms</h3>
                        <p style="color: #94a3b8; font-size: 0.9rem;">Manage room availability, types, and status.</p>
                    </div>

                    <!-- Proofs -->
                    <div class="building-card" style="cursor: pointer; transition: transform 0.2s;" onclick="showProofsPage('${buildingId}')" onmouseover="this.style.transform='translateY(-5px)'" onmouseout="this.style.transform='translateY(0)'">
                         <div style="background: rgba(139, 92, 246, 0.1); width: 50px; height: 50px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="2">
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                                <line x1="12" y1="18" x2="12" y2="12"></line>
                                <line x1="9" y1="15" x2="15" y2="15"></line>
                            </svg>
                        </div>
                        <h3>ID Proofs</h3>
                        <p style="color: #94a3b8; font-size: 0.9rem;">View and manage uploaded customer documents.</p>
                    </div>

                </div>
            </div>
        </div>
    `;

    content.scrollIntoView({ behavior: 'smooth' });
}

function showMainDashboard() {
    document.getElementById('dynamic-content').innerHTML = '';
    const buildingsSection = document.getElementById('buildings');
    const statsSection = document.getElementById('stats-section');
    if (buildingsSection) buildingsSection.style.display = 'block';
    if (statsSection) statsSection.style.display = 'grid';
    // Using simple scroll pattern if available or just optional
}
