# 🏡 My Estate

A modern **real estate landing page** built with **Vite + React.js** and **Tailwind CSS**, featuring **Framer Motion animations** and a fully responsive design for a smooth user experience.

[![Live Demo](https://img.shields.io/badge/LIVE%20DEMO-000?style=for-the-badge&logo=vercel&logoColor=white)](https://my-estate-black.vercel.app)

---

## 📌 About the Project

**My Estate** is a practice project created to sharpen my skills in **React.js** and **Tailwind CSS**. It showcases a clean, modern, and mobile-friendly design with property listings, animations, and a working contact form.

---

## ✨ Features

- 📋 **Property Listings** – Displays multiple real estate projects.
- 📱 **Fully Responsive** – Works seamlessly across devices.
- 🎞 **Smooth Animations** – Powered by **Framer Motion**.
- 📧 **Working Contact Form** – Integrated via **Web3 Forms**.
- 🔔 **Toast Notifications** – Implemented with **react-toastify**.
- 🖼 **Swipeable Projects Section** – Interactive property viewing.

---

## 🛠 Tech Stack

- **Frontend:** Vite + React.js  
- **Styling:** Tailwind CSS  
- **Animations:** Framer Motion  
- **Form Handling:** Web3 Forms  
- **Notifications:** react-toastify  
- **Data:** Local data from `./src/assets/assets.js`

---

## 📁 File & Folder Structure

Below is the project structure used for My Estate.
```
My-Estate/
├─ public/
│  └─ vite.svg
├─ src/
│  ├─ assets/
│  │  └─ assets.js   # And all th pictures included   
│  ├─ components/
│  │  ├─ Navbar.jsx
│  │  ├─ Header.jsx
│  │  ├─ Projects.jsx
│  │  ├─ About.jsx
│  │  ├─ Contact.jsx
│  │  └─ Footer.jsx
│  │  └─ Testimonials.jsx
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ .gitignore
├─ README.md
├─ package.json
├─ package-lock.json
├─ vite.config.js
├─ vercel.json
├─ index.html
└─ eslint.config.js
```

Note: Don't forget to add .env and VITE_WEB3_KEY="Your Real Web3 forms Public key `Not API key` jus so the Message sents in the Website would be directly sents to you"

---

## 📥 Installation & Setup

Follow these steps to run the project locally:

```bash
# 1️⃣ Clone the repository
git clone https://github.com/ibsa-a1/My-Estate.git

# 2️⃣ Navigate into the project folder
cd My-Estate

# 3️⃣ Install dependencies
npm install

# 4️⃣ Start the development server
npm run dev
The app will be running at http://localhost:5173 (default Vite port).
```
---

## 🚀 Usage
Once running locally:

Browse Listings – Scroll or swipe through property projects.

View Details – Explore property details and images.

Contact Form – Send a message directly to the owner (email integration works via Web3 Forms).

Responsive UI – Try resizing the browser to see the responsive design in action.

---

## 🙏 Credits

Inspired by GreatStack.

---

## 📄 License

No license specified for this repository.
---
`Happy Coding`
---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
