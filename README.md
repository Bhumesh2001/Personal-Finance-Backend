# Personal Finance Backend

## 📌 Overview

The **Personal Finance Backend** is a **Node.js and Express-based API** designed to manage financial transactions, budgets, and category-wise expense tracking. It integrates with **MongoDB** for secure data storage and provides **CRUD operations** for transactions and budgets.

## 🚀 Features

- **User-Friendly API**: RESTful API structure for smooth integration.
- **Transaction Management**: Add, edit, delete, and fetch financial transactions.
- **Budgeting System**: Set and track monthly category budgets.
- **MongoDB Integration**: Efficient and scalable database storage.
- **Data Security**: Proper validation and structured API response handling.

## 🛠 Tech Stack

- **Node.js** – Backend runtime
- **Express.js** – Web framework
- **MongoDB & Mongoose** – Database & ODM
- **Dotenv** – Environment variable management
- **Cors & Morgan** – Middleware for security and logging

## 📂 Folder Structure

```
backend/
├── controllers/    # Business logic
├── models/         # Mongoose schemas
├── routes/         # API routes
├── config/         # Database configuration
├── server.js       # Main application file
│── .env            # Environment variables
│── package.json    # Dependencies
│── README.md       # Project documentation
```

## 🔧 Installation & Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Bhumesh2001/Personal-Finance-Backend.git
   cd personal-finance-backend
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Set up environment variables:**
   Create a `.env` file and add:
   ```sh
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```
4. **Run the server:**
   ```sh
   npm start
   ```
   The API will be available at `http://localhost:5000`

## 📌 API Endpoints

### **Transactions**

- `POST /api/transactions` – Add a new transaction
- `GET /api/transactions` – Fetch all transactions
- `PUT /api/transactions/:id` – Update a transaction
- `DELETE /api/transactions/:id` – Delete a transaction

### **Budgets**

- `POST /api/budgets` – Set a budget
- `GET /api/budgets/summary` – Get all budgets

## 📜 License

This project is licensed under the **MIT License**.

---

### 💡 Need Help?

Feel free to open an issue or reach out if you have any questions! 🚀
