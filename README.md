# Lost & Found Network

A modern full-stack web application for reporting, searching, and managing lost and found items. Built with React, Node.js, Express, and MongoDB.

---

## 🚀 Features
- User authentication (JWT-based)
- Report lost or found items (with image upload)
- Browse and search all items (publicly visible)
- Responsive, modern UI
- Persistent data storage in MongoDB
- Secure item posting (only logged-in users can add items)

---

## 🗂️ Project Structure
```
LostandFoundNet/
  backend/
    models/
    routes/
    server.js
    package.json
    .env.example
  frontend/
    src/
    public/
    package.json
  README.md
```

---

## ⚙️ Setup Instructions

### 1. **Clone the Repository**
```bash
git clone <your-repo-url>
cd LostandFoundNet
```

### 2. **Backend Setup**
```bash
cd backend
npm install
```
- Create a `.env` file in the `backend/` directory (see `.env.example`):

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

- Start the backend server:
```bash
node server.js
# or
npm start
```

### 3. **Frontend Setup**
```bash
cd ../frontend
npm install
npm run dev
```

- The frontend will run on [http://localhost:5173](http://localhost:5173) by default.

---

## 📝 Environment Variables
Create a `.env` file in the `backend/` directory with the following:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

- **MONGO_URI:** Your MongoDB connection string (local or Atlas)
- **JWT_SECRET:** Any random string for signing JWT tokens

---

## 🛠️ Usage
- **Browse Items:** Anyone can view lost and found items.
- **Report Item:** Log in or sign up to report a new lost or found item (with optional image).
- **Logout:** Log out to end your session. Items remain visible to all users.

---

## 🖼️ Image Storage
- Images are stored as base64 strings in MongoDB (no external file storage required).
- If no image is uploaded, the `image` field will be `null` or missing.

---

## ❓ Troubleshooting
- **MongoDB connection errors:**
  - Check your `MONGO_URI` in `.env`.
  - Make sure your IP is whitelisted in MongoDB Atlas.
- **401 Unauthorized errors:**
  - Ensure you are logged in to post items.
  - Check that your `JWT_SECRET` matches in `.env`.
- **Port conflicts:**
  - Change the default ports in `server.js` (backend) or `vite.config.js` (frontend) if needed.

---

## 📦 Deployment
- For production, build the frontend with `npm run build` in `/frontend`.
- Use process managers like PM2 for backend deployment.
- Set environment variables securely on your server.

---

## 🙏 Credits
- Designed & developed by Pooja Shetty.
- Built with React, Node.js, Express, and MongoDB.

---

## 📄 License
This project is licensed under the MIT License. 