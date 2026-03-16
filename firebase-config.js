// ─────────────────────────────────────────────────────────────────────────────
//  Firebase Configuration
//  Replace every placeholder value with your actual Firebase project settings.
//  Find them in the Firebase Console → Project Settings → Your apps.
// ─────────────────────────────────────────────────────────────────────────────

const firebaseConfig = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

// ─────────────────────────────────────────────────────────────────────────────
//  Initialise Firebase (compat SDK loaded via CDN in each HTML file)
// ─────────────────────────────────────────────────────────────────────────────
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db   = firebase.firestore();
