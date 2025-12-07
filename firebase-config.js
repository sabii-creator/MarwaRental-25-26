// Firebase Configuration
// Replace these values with your own Firebase project credentials
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com"
};

// Initialize Firebase
let app, database;

function initializeFirebase() {
    try {
        // Check if Firebase is loaded
        if (typeof firebase === 'undefined') {
            console.warn('Firebase SDK not loaded. Using local storage fallback.');
            return false;
        }

        app = firebase.initializeApp(firebaseConfig);
        database = firebase.database();
        console.log('Firebase initialized successfully');
        return true;
    } catch (error) {
        console.error('Error initializing Firebase:', error);
        return false;
    }
}

// Database operations
const db = {
    // Save all buildings data to Firebase
    saveData: async function (data) {
        if (!database) {
            // Fallback to localStorage
            localStorage.setItem('rentalManagementData', JSON.stringify(data));
            return;
        }

        try {
            await database.ref('buildings').set(data);
            console.log('Data saved to Firebase');
        } catch (error) {
            console.error('Error saving to Firebase:', error);
            // Fallback to localStorage
            localStorage.setItem('rentalManagementData', JSON.stringify(data));
        }
    },

    // Load all buildings data from Firebase
    loadData: async function () {
        if (!database) {
            // Fallback to localStorage
            const localData = localStorage.getItem('rentalManagementData');
            return localData ? JSON.parse(localData) : null;
        }

        try {
            const snapshot = await database.ref('buildings').once('value');
            const data = snapshot.val();
            console.log('Data loaded from Firebase');
            return data;
        } catch (error) {
            console.error('Error loading from Firebase:', error);
            // Fallback to localStorage
            const localData = localStorage.getItem('rentalManagementData');
            return localData ? JSON.parse(localData) : null;
        }
    },

    // Save specific building data
    saveBuilding: async function (buildingId, buildingData) {
        if (!database) {
            // Update in localStorage
            const allData = JSON.parse(localStorage.getItem('rentalManagementData') || '{}');
            allData[buildingId] = buildingData;
            localStorage.setItem('rentalManagementData', JSON.stringify(allData));
            return;
        }

        try {
            await database.ref(`buildings/${buildingId}`).set(buildingData);
            console.log(`Building ${buildingId} saved to Firebase`);
        } catch (error) {
            console.error('Error saving building to Firebase:', error);
        }
    },

    // Real-time listener for data changes
    onDataChange: function (callback) {
        if (!database) return;

        database.ref('buildings').on('value', (snapshot) => {
            const data = snapshot.val();
            if (data) {
                callback(data);
            }
        });
    }
};

// Auto-save functionality
let autoSaveTimeout;
function scheduleAutoSave(data) {
    clearTimeout(autoSaveTimeout);
    autoSaveTimeout = setTimeout(() => {
        db.saveData(data);
    }, 1000); // Save 1 second after last change
}
