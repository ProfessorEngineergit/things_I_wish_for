# things_I_wish_for

A personal wishlist website hosted on **GitHub Pages**.  
Public visitors see the wishes I have marked as public. I can log in with Google (Firebase) to add, edit, delete, and toggle the visibility of wishes.

## Features

- 🌐 **Public landing page** (`index.html`) – about section, link to [my portfolio](https://professorengineergit.github.io/Bahrian_Novotny_My_Universe/), and the public wish grid
- 🔐 **Google Sign-In** – single sign-in button; only the authenticated owner can manage wishes
- 🛠️ **Admin page** (`admin.html`) – add / edit / delete wishes; toggle each wish between *public* and *private*
- 🔥 **Firebase Firestore** – wishes are stored in the cloud; the public page loads only wishes marked `isPublic: true`
- 🎨 Dark glassmorphism design matching my portfolio

## Setup

### 1 – Firebase project

1. Go to [console.firebase.google.com](https://console.firebase.google.com) and create a new project.
2. Enable **Google** as a sign-in provider under *Authentication → Sign-in method*.
3. Create a **Firestore** database in *production mode*.
4. Add the domain `professorengineergit.github.io` to the *Authorised domains* list under *Authentication → Settings*.

### 2 – Firestore security rules

Paste the following rules in *Firestore → Rules*:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Anyone can read public wishes
    match /wishes/{wishId} {
      allow read: if resource.data.isPublic == true;
      // Only the signed-in owner (replace with your UID) can write
      allow read, write: if request.auth != null
                         && request.auth.uid == "YOUR_FIREBASE_UID";
    }
  }
}
```

Replace `YOUR_FIREBASE_UID` with your Google account's Firebase UID (visible in *Authentication → Users*).

### 3 – Firebase config

Open `firebase-config.js` and replace every placeholder value with the actual values from *Firebase Console → Project Settings → Your apps → Web app → SDK setup and configuration*:

```js
const firebaseConfig = {
  apiKey:            "AIzaSy…",
  authDomain:        "your-project.firebaseapp.com",
  projectId:         "your-project",
  storageBucket:     "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId:             "1:123…"
};
```

### 4 – GitHub Pages

In *Repository Settings → Pages*, set the source to **Deploy from branch → main → / (root)**.  
The site will be published at `https://professorengineergit.github.io/things_I_wish_for/`.

## File overview

| File | Description |
|------|-------------|
| `index.html` | Public landing page |
| `admin.html` | Protected admin dashboard |
| `firebase-config.js` | Firebase initialisation (fill in your config) |
| `style.css` | Shared dark glassmorphism styles |
| `.nojekyll` | Disables Jekyll processing on GitHub Pages |
