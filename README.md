# React Job Portal

This is a **CRUD Job Portal application** built using **React** and a **mock API**. It allows users to view, add, update, and delete job listings. The UI is responsive and styled with **Tailwind CSS**, and the app provides success messages using **React Toastify** and includes a custom **404 Page** for invalid routes.

---

## 🚀 Features

- View all available jobs  
- Add a new job listing  
- Update existing job listings  
- Delete job listings  
- Responsive UI with **Tailwind CSS**  
- Toast notifications for user actions using **React Toastify**  
- Icons from **React Icons**  
- Custom **404 Not Found Page** for unmatched routes

---

## 🛠️ Tech Stack

- **React** (with React Router DOM for routing)  
- **Tailwind CSS** (UI framework)  
- **JSON Server** (mock API)  
- **React Toastify** (for success/error toasts)  
- **React Icons**  
- **Git & GitHub** (version control and deployment)

---

## 📂 API Endpoint Example

The mock API uses a `jobs` endpoint with data like:

```json
"jobs": [
  {
    "id": "1",
    "title": "Senior React Developer",
    "type": "Full-Time",
    "description": "We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript, with experience working with modern JavaScript frameworks such as React or Angular.",
    "location": "Boston, MA",
    "salary": "$70K - $80K",
    "company": {
      "name": "NewTek Solutions",
      "description": "NewTek Solutions is a leading technology company specializing in web development and digital solutions. We pride ourselves on delivering high-quality products and services to our clients while fostering a collaborative and innovative work environment.",
      "contactEmail": "contact@teksolutions.com",
      "contactPhone": "555-555-5555"
    }
  }
]
```

---

## 📦 Installation & Running the Project

1. **Clone the repository**

```bash
git clone https://github.com/codegeek2005/react-job-portal.git
cd react-job-portal
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the mock API server**

```bash
npm run server
```

4. **Start the React application**

```bash
npm start
```

---

## 🌱 Future Improvements

- Replace mock API with a **real backend** (e.g., MongoDB, Supabase, Firebase)  
- Add **authentication** for employers & employees  
- Restrict **update/delete** permissions to job creators  
- Form validation, search & filters  
- Add pagination or infinite scroll  
- Deploy on **Vercel** or **Netlify**

---

## 📬 Contact the Developer

For questions, suggestions, or issues:  
📧 **muhammadbinramzan2005@gmail.com**

---

## 🎓 Inspiration

This project was inspired by a tutorial by **Traversy Media**.  
Grateful for the content and learning opportunity!
