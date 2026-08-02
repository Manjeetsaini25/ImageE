# 🚀 Project Name

Pixxel, Ai Powered Image Editor.

---
## 🌐 Live Demo

Experience the application live by visiting the deployed website:

**🔗 Live URL:** https://imagee-ikh2.onrender.com/

> **Note:** The application is hosted on Render. The initial request may take a few seconds if the server has been idle.

## 📌 Features

* Responsive User Interface
* Authentication System
* 20+ Image Upload
* Different Tools (Resize, filters, Background Remover, Ai Extender, Text etc)
* Modern React Architecture
* Fast and Optimized Performance

---

## 🛠️ Tech Stack

* next.js
* Clerk
* CSS3 / Tailwind CSS
* Convex
* Imagekit
* Fabric.js
* Shadcn
---

## 📂 Clone the Repository

```bash
git clone https://github.com/Manjeetsaini25/pixxel.git
```

Move into the project directory:

```bash
cd pixxel
```

---

## 📦 Install Dependencies

```bash
npm install
```
## ⚙️ Environment Variables

Create a `.env.local` file in the project root and add the following:

```env
# Convex
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
CLERK_JWT_ISSUER_DOMAIN=

# ImageKit
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=
NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=
IMAGEKIT_PRIVATE_KEY=

# Unsplash
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=
```
> **Important:** Never commit your `.env.local` file or expose secret keys (`CLERK_SECRET_KEY` and `IMAGEKIT_PRIVATE_KEY`) in your repository.
---

## ▶️ Run the Project

```bash
npm run dev
```

The application will start on:

```
http://localhost:3000
```


