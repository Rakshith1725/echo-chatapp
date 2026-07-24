# 💬 Echo — Real-Time Chat Application

Echo is a modern full-stack real-time chat application built with the **MERN Stack** and **Socket.IO**. It enables seamless one-to-one messaging with secure authentication, image sharing, and a responsive user interface.

---

## 🚀 Features

- 🔐 Secure JWT Authentication
- 💬 Real-time one-to-one messaging using Socket.IO
- 🟢 Online/Offline user status
- 🖼️ Image sharing with Cloudinary
- 😊 Emoji support
- 📱 Responsive UI for desktop and mobile
- 🍪 Secure HTTP-only cookie authentication
- 🎨 Modern UI built with Tailwind CSS and DaisyUI
- ⚡ Fast state management using Zustand
- 📩 Email integration using Resend
- 🔒 Protected API routes with authentication middleware

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- DaisyUI
- Zustand
- Axios
- React Router
- Socket.IO Client

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Socket.IO
- JWT Authentication
- bcryptjs
- Cloudinary
- Cookie Parser
- Resend

---


## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/yourusername/echo-chat-app.git
cd echo-chat-app
```

---

### Install Backend Dependencies

```bash
cd backend
npm install
```

---

### Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **backend** directory.

```env
PORT=8080

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

NODE_ENV=development

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

RESEND_API_KEY=your_resend_api_key

CLIENT_URL=http://localhost:5173
```

---

## ▶️ Running the Project

### Backend

```bash
cd backend
npm run dev
```

---

### Frontend

```bash
cd frontend
npm run dev
```

---


## 📈 Future Enhancements

- Group Chats
- Voice & Video Calling
- Message Reactions
- Typing Indicators
- Message Search
- Dark/Light Theme Toggle
- End-to-End Encryption

---

