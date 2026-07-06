<div align="center">

# 🏨 Hotel Management System

### A Modern Full Stack Hotel Management System

<img src="https://img.shields.io/badge/Node.js-20.x-green?style=for-the-badge&logo=node.js">
<img src="https://img.shields.io/badge/Express.js-Backend-black?style=for-the-badge&logo=express">
<img src="https://img.shields.io/badge/PostgreSQL-Neon-blue?style=for-the-badge&logo=postgresql">
<img src="https://img.shields.io/badge/Frontend-HTML%20%7C%20CSS%20%7C%20JavaScript-orange?style=for-the-badge">

---

### 🏨 A Complete Hotel Management Solution

A modern **Full Stack Hotel Management System** built using **Node.js**, **Express.js**, **PostgreSQL (Neon Database)**, and **Vanilla JavaScript**. The system provides a centralized platform for managing hotel operations, including rooms, reservations, guests, employees, payments, billing, housekeeping, maintenance, and guest services through a responsive web interface and RESTful APIs.

</div>

---

# 📖 Project Description

The **Hotel Management System** is designed to digitize and simplify the daily operations of hotels by replacing manual record keeping with an efficient, cloud-connected management platform. It enables hotel staff and administrators to manage reservations, room availability, guest information, employee records, billing, payments, housekeeping, maintenance, and additional services from a single dashboard.

The backend is developed using **Node.js** and **Express.js**, exposing RESTful APIs that interact with a **Neon PostgreSQL** cloud database for secure and reliable data storage. The frontend is built using **HTML**, **CSS**, and **JavaScript**, offering a clean and interactive user interface for performing CRUD operations and monitoring hotel activities in real time.

The application follows a modular architecture, making it scalable, maintainable, and easy to extend with future enhancements such as authentication, role-based access control, analytics dashboards, online payments, report generation, and email notifications. This project demonstrates practical implementation of full-stack web development, REST API design, cloud database integration, and relational database management.

---

# 🎯 Project Objectives

- 🏨 Automate hotel management operations.
- 🛏 Manage room availability and room types.
- 📅 Handle reservations, check-ins, and check-outs.
- 👤 Maintain guest records efficiently.
- 👨‍💼 Manage employees and departments.
- 💳 Process payments and generate bills.
- 🧹 Track housekeeping schedules and room cleaning.
- 🔧 Manage maintenance requests and repairs.
- 🛎 Record guest service requests.
- ☁️ Store data securely using Neon PostgreSQL Cloud Database.
- ⚡ Provide RESTful APIs for seamless frontend integration.
- 📊 Improve operational efficiency through centralized management.

---

# ✨ Features

### 🏨 Hotel Management
- Create Hotel
- Update Hotel
- Delete Hotel
- View Hotels

### 🌍 Branch Management
- Multiple Branch Support
- Branch Information
- Branch CRUD

### 🛏 Room Management
- Room Types
- Room Availability
- Room Status
- Room CRUD

### 👤 Guest Management
- Register Guests
- Update Guest Details
- Search Guests
- Delete Guests

### 📅 Reservation System
- Book Rooms
- Cancel Reservations
- Reservation History
- Check Availability

### 💳 Payment Management
- Payment Records
- Multiple Payment Methods
- Payment History

### 🧾 Billing System
- Generate Bills
- Service Charges
- Room Charges
- Taxes

### 👨‍💼 Employee Management
- Employee Records
- Departments
- Salary Information

### 🧹 Housekeeping
- Cleaning Schedule
- Room Status
- Staff Assignment

### 🔧 Maintenance
- Maintenance Requests
- Issue Tracking
- Repair Status

### 🛎 Guest Services
- Service Requests
- Room Service
- Additional Services

---

# 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| 🟢 Node.js | Backend Runtime |
| ⚡ Express.js | REST API Development |
| 🐘 PostgreSQL | Relational Database |
| ☁️ Neon | Cloud PostgreSQL Database |
| 🌐 HTML5 | Frontend Structure |
| 🎨 CSS3 | Styling |
| ⚙️ JavaScript | Frontend Functionality |

---

# 📁 Project Structure

```text
HotelManagementSystem
│
├── Api
│   ├── routes/
│   ├── db.js
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── .env
│
├── Frontend
│   ├── css/
│   ├── js/
│   ├── index.html
│
└── README.md
```

---

# 🚀 Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/HotelManagementSystem.git
```

or download the ZIP file.

---

## 2️⃣ Navigate to the Project

```bash
cd HotelManagementSystem
```

---

## 3️⃣ Install Dependencies

Navigate to the API folder and install the required packages.

```bash
cd Api
npm install
```

---

## 4️⃣ Configure Environment Variables

Create a `.env` file inside the **Api** folder.

```env
DATABASE_URL=your_neon_database_connection_string
PORT=5000
```

Example:

```env
DATABASE_URL=postgresql://username:password@ep-example.us-east-2.aws.neon.tech/hoteldb?sslmode=require
PORT=5000
```

---

## ☁️ Connect to Neon Database

Create a PostgreSQL database on **Neon**, copy the generated connection string, and paste it into the `DATABASE_URL` variable in your `.env` file.

---

## ▶️ Run the Backend Server

```bash
node server.js
```

If configured correctly, you should see:

```text
🚀 Server running on Port 5000
✅ Connected to Neon PostgreSQL Database
```

---

## 🌐 Run the Frontend

Open the **Frontend/index.html** file directly in your browser or use the **Live Server** extension in Visual Studio Code.

---

# 📦 Required Packages

Install all dependencies:

```bash
npm install
```

Or install individually:

```bash
npm install express
npm install pg
npm install cors
npm install dotenv
```

---

# 📂 API Modules

| Module | CRUD Support |
|---------|--------------|
| 🏨 Hotels | ✅ |
| 🌍 Branches | ✅ |
| 🛏 Rooms | ✅ |
| 📦 Room Types | ✅ |
| 👤 Guests | ✅ |
| 📅 Reservations | ✅ |
| ✔ Check-In | ✅ |
| ✔ Check-Out | ✅ |
| 💳 Payments | ✅ |
| 🧾 Bills | ✅ |
| 👨‍💼 Employees | ✅ |
| 🏢 Departments | ✅ |
| 🛎 Services | ✅ |
| 🧹 Housekeeping | ✅ |
| 🔧 Maintenance | ✅ |

---

# 🔥 Example REST API

```http
GET     /api/hotels
GET     /api/hotels/:id
POST    /api/hotels
PUT     /api/hotels/:id
DELETE  /api/hotels/:id
```

All other modules follow the same CRUD pattern.

---

# 💻 Useful Commands

## Install Dependencies

```bash
npm install
```

## Start Backend Server

```bash
node server.js
```

## Install a Package

```bash
npm install package-name
```

## Remove a Package

```bash
npm uninstall package-name
```

## Update Packages

```bash
npm update
```

## View Installed Packages

```bash
npm list
```

## Check Node.js Version

```bash
node -v
```

## Check NPM Version

```bash
npm -v
```

---

# 🗄 Database

- ☁️ Neon PostgreSQL Cloud Database
- Primary Keys
- Foreign Keys
- Constraints
- Normalized Relational Schema
- SQL Joins
- CRUD Operations
- Cloud Hosted

---

# 🔒 Environment Variables

```env
DATABASE_URL=
PORT=
```

> ⚠️ Never commit your `.env` file to GitHub.

---

# 🚀 Future Improvements

- 🔐 JWT Authentication
- 👥 Role-Based Access Control
- 📊 Dashboard Analytics
- 📄 PDF Invoice Generation
- 📧 Email Notifications
- 💳 Online Payment Gateway
- 📱 Fully Responsive Design
- 🌙 Dark Mode
- 📈 Business Reports
- 📤 Export Data (PDF & Excel)

---

# 🤝 Contributing

Contributions are welcome!

1. Fork this repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push to GitHub

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# 👨‍💻 Author

**Muhammad Ayaan**

**SZABIST University**

Full Stack Web Developer

---

# ⭐ Show Your Support

If you like this project, consider giving it a **⭐ Star** on GitHub. It helps others discover the project and motivates future improvements.

---

<div align="center">

### ❤️ Built with Node.js • Express.js • Neon PostgreSQL • HTML • CSS • JavaScript

</div>
