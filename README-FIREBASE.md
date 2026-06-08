# H.R Super Market Firebase Setup

This site is now structured so shared reviews, shared photos, real Google sign-in, email sign-up, admin offers, and admin products can work through Firebase.

## 1. Fill the Firebase config

Open `js/firebase-config.js` and replace the empty values with your Firebase Web App config:

- `apiKey`
- `authDomain`
- `projectId`
- `storageBucket`
- `messagingSenderId`
- `appId`

Also replace the admin email:

- `owner@example.com`

with the Google or email account that should control offers and products.

## 2. Enable Firebase products

In Firebase console enable:

- Authentication
- Google provider
- Email/Password provider
- Firestore Database
- Storage

## 3. Firestore collections used by the site

- `reviews`
- `photos`
- `products`
- `offers`
- `pageViews`

## 4. Apply security rules

Use:

- `firestore.rules`
- `storage.rules`

## 5. What the pages do

- `index.html`: homepage, live offer banner, photo cards, reviews, featured products
- `products.html`: all products with search and category filters
- `photos.html`: full photo gallery and customer photo uploads
- `admin.html`: admin-only offer and product publishing

## 6. Important note

Without valid Firebase config, the site still shows demo content, but shared reviews, real sign-in, photo uploads, and admin publishing will not work.
