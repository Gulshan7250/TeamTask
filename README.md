🚀 TeamTask – Full Stack Task Management System

TeamTask is a full-stack web application designed to help teams manage projects, assign tasks, and track progress efficiently. It provides a clean interface with role-based access control for Admins and Members.

🌐 Live Links
🔗 Frontend: https://your-frontend-url
🔗 Backend API: https://your-backend-url
📌 Overview

This application allows users to:

Create and manage projects
Add team members to projects
Assign tasks and track their status
Work with role-based permissions (Admin / Member)

The goal of this project was to build a production-ready system with proper backend structure, authentication, and deployment.

✨ Features
🔐 Authentication
User Signup & Login
JWT-based authentication
Persistent login using local storage
📁 Project Management
Create, update, delete projects
Add members using email
Only admin can modify project
✅ Task Management
Create tasks under projects
Assign tasks to members
Update task status:
Todo
In Progress
Done
Admin can delete tasks
📊 Dashboard
View all assigned tasks
Track status updates
Clean UI for quick overview
🔒 Role-Based Access Control
Role	Permissions
Admin	Full access (projects + tasks + members)
Member	View tasks + update own tasks
🛠️ Tech Stack
Frontend
React.js
Tailwind CSS
Axios
React Router
Backend
Node.js
Express.js
MongoDB (Mongoose)
JWT Authentication
Deployment
Railway (Frontend + Backend)
⚙️ Setup Instructions
1. Clone the repository
git clone https://github.com/your-username/TeamTask.git
cd TeamTask
2. Backend Setup
cd server
npm install

Create a .env file:

PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key

Run backend:

npm run dev
3. Frontend Setup
cd client
npm install
npm run dev

Create .env:

VITE_API_URL=http://localhost:5000
🚀 Deployment

Both frontend and backend are deployed on Railway.

Important configs:

Frontend uses VITE_API_URL
Backend routes are prefixed with /api
Production build served using serve
🎥 Demo

A short demo video is included in submission showing:

Signup/Login
Project creation
Adding members
Task assignment
Status updates
📌 Key Highlights
Clean and structured backend architecture
Proper REST API design
Role-based authorization
Fully deployed and working system
Real-world use case implementation
🙌 Final Note

This project was built with a focus on learning real-world full-stack development, including deployment and handling production-level issues.

📧 Contact

Gulshan Kumar
📩 gulshankumar725044@gmail.com

⭐ If you like this project, feel free to give it a star!
