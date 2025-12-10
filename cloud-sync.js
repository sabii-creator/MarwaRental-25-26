const CloudSync = {
    db: null,
    CONFIG_KEY: 'firebase_settings',

    init: function () {
        // Try to load config from storage
        const storedConfig = localStorage.getItem(this.CONFIG_KEY);

        if (storedConfig) {
            try {
                const config = JSON.parse(storedConfig);
                // Initialize Firebase if not already initialized
                if (!firebase.apps.length) {
                    firebase.initializeApp(config);
                }
                this.db = firebase.database();
                console.log("✅ Cloud Sync Active");
                return true;
            } catch (e) {
                console.error("Cloud init failed", e);
                return false;
            }
        }
        return false;
    },

    save: function (data) {
        if (this.db) {
            this.db.ref('rentalData').set(data)
                .then(() => console.log("☁️ Saved to Cloud"))
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
                }
            });
        }
    },

    showSetupModal: function () {
        const isConnected = !!localStorage.getItem(this.CONFIG_KEY);
        const modal = document.createElement('div');
        modal.className = 'modal active';
        modal.innerHTML = `
            <div class="modal-content" style="max-width: 500px;">
                <div class="modal-header">
                    <h2 class="modal-title">☁️ Cloud Sync Setup</h2>
                    <button class="modal-close" onclick="this.closest('.modal').remove()">×</button>
                </div>
                <div style="padding: 1.5rem;">
                    <p style="color: #cbd5e1; margin-bottom: 1rem;">
                        Sync your data across all devices using Firebase Realtime Database.
                    </p>
                    
                    ${isConnected ?
                `<div style="background: rgba(16, 185, 129, 0.1); padding: 1rem; border-radius: 8px; margin-bottom: 1rem; color: #34d399;">
                            ✅ <strong>Connected</strong> to Cloud
                        </div>` :
                `<div style="background: rgba(59, 130, 246, 0.1); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                            ℹ️ <strong>Instructions:</strong><br>
                            1. Go to <a href="https://console.firebase.google.com/" target="_blank" style="color: #60a5fa;">Firebase Console</a><br>
                            2. Create a project > Add Web App<br>
                            3. Copy the "firebaseConfig" object<br>
                            4. Paste it below
                        </div>`
            }

                    <div class="form-group">
                        <label class="form-label">Firebase Config JSON</label>
                        <textarea id="firebase-config-input" class="form-input" style="height: 150px; font-family: monospace; font-size: 0.8rem; background: #0f172a; color: #e2e8f0;" placeholder='{
  "apiKey": "AIzaSy...",
  "authDomain": "...",
  "projectId": "...",
  "storageBucket": "...",
  "messagingSenderId": "...",
  "appId": "..."
}'></textarea>
                    </div>
                    
                    <button class="btn btn-primary" style="width: 100%; margin-top: 1rem;" onclick="CloudSync.saveConfig()">
                        ${isConnected ? 'Update Configuration' : 'Connect Cloud'}
                    </button>
                    
                    ${isConnected ? `
                        <button class="btn btn-danger" style="width: 100%; margin-top: 0.5rem;" onclick="CloudSync.disconnect()">
                            Disconnect & Stop Syncing
                        </button>
                    ` : ''}
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    },

    saveConfig: function () {
        try {
            const input = document.getElementById('firebase-config-input').value;
            // Clean up input if user pasted "const firebaseConfig = { ... };"
            let cleanInput = input;
            if (input.includes('=')) {
                cleanInput = input.substring(input.indexOf('=') + 1);
                if (cleanInput.trim().endsWith(';')) {
                    cleanInput = cleanInput.trim().slice(0, -1);
                }
            }

            // Validate JSON
            const config = JSON.parse(cleanInput);
            if (!config.apiKey) throw new Error("Missing apiKey");

            localStorage.setItem(this.CONFIG_KEY, JSON.stringify(config));
            alert("✅ Configuration Saved! Reloading to apply changes...");
            location.reload();
        } catch (e) {
            alert("❌ Invalid Configuration JSON: " + e.message);
        }
    },

    disconnect: function () {
        if (confirm("Are you sure? Data will stop syncing to other devices.")) {
            localStorage.removeItem(this.CONFIG_KEY);
            location.reload();
        }
    }
};
