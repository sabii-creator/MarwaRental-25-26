const CloudSync = {
    db: null,
    // Hardcoded Config for Marwa Rental
    config: {
        apiKey: "AIzaSyD7zd-gfc8VAnQHEb60Iz0zEEDWUmBfTeY",
        authDomain: "marwa-rental-1a025.firebaseapp.com",
        databaseURL: "https://marwa-rental-1a025-default-rtdb.firebaseio.com",
        projectId: "marwa-rental-1a025",
        storageBucket: "marwa-rental-1a025.firebasestorage.app",
        messagingSenderId: "990448578016",
        appId: "1:990448578016:web:308dcf33f7fc030f608f85"
    },

    init: function () {
        try {
            // Initialize with hardcoded config
            if (!firebase.apps.length) {
                firebase.initializeApp(this.config);
            }
            this.db = firebase.database();
            console.log("✅ Cloud Sync Active (Auto-connected)");
            return true;
        } catch (e) {
            console.error("Cloud init failed", e);
            return false;
        }
    },

    save: function (data) {
        if (this.db) {
            this.db.ref('rentalData').set(data)
                .then(() => {
                    console.log("☁️ Saved to Cloud");
                    this.showToast("☁️ Saved to Cloud");
                })
                .catch(e => console.error("Cloud save error", e));
        }
    },

    subscribe: function (callback) {
        if (this.db) {
            console.log("📡 Listening for cloud changes...");
            this.db.ref('rentalData').on('value', (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    console.log("📥 Cloud data received");
                    callback(data);
                    // Don't toast on initial load to avoid annoyance, maybe log only
                }
            });
        }
    },

    // Called when clicking "Sync" button (formerly Setup)
    showSetupModal: function () {
        if (this.db) {
            alert("✅ System is online and syncing automatically.\n\nConnected to project: " + this.config.projectId);
        } else {
            // Try to init again
            if (this.init()) {
                alert("✅ Connection re-established!");
            } else {
                alert("❌ Connection failed. Check console for errors.");
            }
        }
    },

    showToast: function (msg) {
        // Simple toast notification
        const toast = document.createElement('div');
        toast.textContent = msg;
        toast.style.cssText = "position:fixed; bottom:20px; right:20px; background:#10b981; color:white; padding:10px 20px; border-radius:8px; z-index:9999; box-shadow: 0 4px 6px rgba(0,0,0,0.1); font-family: sans-serif; animation: fadeOut 2.5s forwards;";
        document.body.appendChild(toast);
        setTimeout(() => toast.remove(), 2500);
    }
};

// Add fadeOut animation style
const style = document.createElement('style');
style.textContent = `@keyframes fadeOut { 0% {opacity:1; transform: translateY(0);} 80% {opacity:1; transform: translateY(0);} 100% {opacity:0; transform: translateY(10px);} }`;
document.head.appendChild(style);
