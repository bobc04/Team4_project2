# Local Community Business Revival App

---

## 📌 Overview
The **Local Community Business Revival App** is a full-stack web application designed to connect local service providers in Costa Rica with affluent, English-speaking residents who need various services. This platform allows locals to advertise their services at no cost, even if they do not speak English, helping them bypass traditional property management companies.

## 🎯 Features
- **User Registration & Authentication**: Secure JWT authentication with automatic logout after 1 hour of inactivity.
- **Service & Job Listings**: Users can post available jobs or services they offer.
- **Category-Based Search**: Search by profession (e.g., plumbing, cleaning, childcare, etc.).
- **Bilingual Support**: Integrated Spanish/English translation API.
- **User Profiles**: Includes name, phone number, and optional email since folks mostly have phones in Costa Rica and no email.
- **Responsive UI**: Built with Tailwind, React, & Vite for a smooth user experience.

## 🛠️ Tech Stack
### **Frontend:**
- React (Vite)
- TypeScript
- Zustand (for state management)
- React Router
- Tailwind CSS

### **Backend:**
- Node.js (Express.js)
- PostgreSQL (Sequelize ORM)
- JWT Authentication
- Google Translate API


### **Deployment:**
- Frontend & Backend hosted on **Render**
- Environment variables for security & configuration

## 🚀 Getting Started
### **1️⃣ Clone the Repository**
```sh
 git clone https://github.com/YOUR_GITHUB_USERNAME/local-community-business-revival.git
 cd local-community-business-revival
```

### **2️⃣ Install Dependencies**
#### Client (Frontend)
```sh
cd client
npm install
```
#### Server (Backend)
```sh
cd ../server
npm install
```

### **3️⃣ Set Up Environment Variables**
Create a `.env` file in the `server` directory with:
```sh
DATABASE_URL=your_postgres_database_url
JWT_SECRET=your_jwt_secret_key
TRANSLATE_API_KEY=your_google_translate_api_key
FIREBASE_API_KEY=your_firebase_api_key
```

### **4️⃣ Run the Application**
#### Start the Backend:
```sh
cd server
npm run dev
```
#### Start the Frontend:
```sh
cd client
npm run dev
```
The app will be available at `http://localhost:5173`

## 📂 Project Structure
```
local-community-business-revival/
│── client/ (React Frontend)
│── server/ (Express Backend)
│── database/ (PostgreSQL Scripts & Migrations)
│── seeders/ (Initial Data Population)
│── .env (Environment Variables)
│── README.md
```

## 📝 Future Enhancements
- **User Reviews & Ratings** button to translate entire page as well as text.
- **In-App Messaging** for direct communication.
- **Payment Integration** for seamless transactions.

## 🤝 Contributing
Want to contribute? Feel free to submit a pull request or open an issue!

## 📜 License
This project is licensed under the MIT License.

---
🔥 **Empowering Local Communities – One Connection at a Time!**




