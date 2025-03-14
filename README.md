


# **HafaRetails** - Online Retail Store Web & Mobile App  

## 🌍 **Connecting Local Businesses to Customers in Cameroon**  

HafaRetails is a web and mobile application designed to help **restaurants, shops, and other retail businesses** advertise their products while allowing customers to discover, order, and pay securely using **MTN Mobile Money and Orange Mobile Money**.  

The platform supports classified ads based on **regions and towns** in Cameroon and integrates **Google Maps** for easy navigation and door-to-door delivery services.

---

# 📌 **Table of Contents**  
1. [Project Overview](#project-overview)  
2. [Key Features](#key-features)  
3. [Architecture Diagram](#architecture-diagram)  
4. [Project Structure](#project-structure)  
5. [Technology Stack](#technology-stack)  
6. [Installation Guide](#installation-guide)  
7. [How to Contribute](#how-to-contribute)  
8. [License](#license)  

---

## 🚀 **1. Project Overview**  
HafaRetails aims to **digitally transform the retail and restaurant industry** in Cameroon by providing an easy-to-use marketplace where businesses can showcase products, customers can place orders, and payments can be made via **MTN Mobile Money and Orange Mobile Money**.  

The platform ensures seamless transactions while offering convenient delivery options.  

---

## 🛠 **2. Key Features**  

### ✅ **For Businesses (Vendors):**  
- Register and list products with images, prices, and descriptions.  
- Categorize products under restaurants, shops, and other retail businesses.  
- Get listed in a classified directory based on location.  

### ✅ **For Customers:**  
- Search for products and businesses based on location.  
- Order products from nearby shops and restaurants.  
- Track orders and receive real-time updates.  
- Make payments using **MTN Mobile Money & Orange Mobile Money**.  

### ✅ **Additional Features:**  
- **Google Maps Integration**: Helps customers locate businesses easily.  
- **Door-to-Door Delivery Services**: Ensures convenient order fulfillment.  
- **Multi-Platform Support**: Available on Web, Android, and iOS.  

---

## 📊 **3. Architecture Diagram**  

Here is the **high-level AWS architecture** for the HafaRetails platform:  

🔹 **Frontend** (React.js for Web, React Native for Mobile)  
🔹 **Backend** (AWS Lambda + API Gateway)  
🔹 **Database** (Amazon DynamoDB)  
🔹 **Authentication** (Amazon Cognito)  
🔹 **Storage** (Amazon S3 for product images)  
🔹 **Payments** (MTN Mobile Money & Orange Mobile Money)  
🔹 **Notifications** (Amazon SNS for SMS updates)  

### **📌 High-Level AWS Architecture**
![HafaRetails AWS Architecture](https://raw.githubusercontent.com/BishopDavid7/HafaRetails/main/docs/architecture-diagram.png)  

---

## 📁 **4. Project Structure**  
```
HafaRetails/
│── backend/                  # Backend services
│   ├── lambda-functions/     # AWS Lambda functions (Node.js)
│   ├── api/                  # API Gateway configurations
│   ├── models/               # Data models for users, orders, products
│   ├── routes/               # API routes for handling requests
│   ├── package.json          # Backend dependencies
│── frontend/                 # Frontend (React.js + React Native)
│   ├── src/                  # React app source files
│   ├── public/               # Static assets
│   ├── package.json          # Frontend dependencies
│── mobile/                   # Mobile app (React Native)
│   ├── android/              # Android-specific files
│   ├── ios/                  # iOS-specific files
│   ├── src/                  # Mobile app source files
│── infrastructure/           # AWS CloudFormation templates
│   ├── cloudformation.yml    # Infrastructure as Code (IaC)
│── docs/                     # Documentation files
│   ├── architecture.md       # Detailed architecture breakdown
│   ├── api-documentation.md  # API endpoints and usage guide
│── .gitignore                # Ignore unnecessary files
│── README.md                 # Main project documentation
```

---

## 🔧 **5. Technology Stack**  

### **Frontend (Web & Mobile):**  
- **React.js** (Web)  
- **React Native** (Mobile)  
- **Redux Toolkit** (State Management)  
- **Axios** (API Calls)  
- **Tailwind CSS** (Styling for Web)  

### **Backend & API:**  
- **Node.js** (Server-side)  
- **AWS Lambda** (Serverless Backend)  
- **Amazon API Gateway** (API Endpoints)  
- **Amazon DynamoDB** (NoSQL Database)  

### **Authentication & Payments:**  
- **Amazon Cognito** (User Authentication)  
- **MTN Mobile Money API**  
- **Orange Mobile Money API**  

### **Storage & Hosting:**  
- **Amazon S3** (Image Storage)  
- **AWS Amplify** (Frontend Hosting)  

---

## 🛠 **6. Installation Guide**  

### **🔹 6.1 Prerequisites**  
Ensure you have the following installed on your system:  
- **Node.js** (v18 or later)  
- **AWS CLI** (Configured with your IAM credentials)  
- **Docker** (For containerized deployment)  

---

### **🔹 6.2 Setting Up the Backend**  

1️⃣ **Clone the repository**  
```bash
git clone https://github.com/BishopDavid7/HafaRetails.git
cd HafaRetails/backend
```

2️⃣ **Install dependencies**  
```bash
npm install
```

3️⃣ **Run locally**  
```bash
npm start
```

4️⃣ **Deploy to AWS Lambda**  
```bash
serverless deploy
```

---

### **🔹 6.3 Setting Up the Frontend**  

1️⃣ **Navigate to frontend directory**  
```bash
cd ../frontend
```

2️⃣ **Install dependencies**  
```bash
npm install
```

3️⃣ **Run the app**  
```bash
npm start
```

---

### **🔹 6.4 Setting Up the Mobile App**  

1️⃣ **Navigate to mobile directory**  
```bash
cd ../mobile
```

2️⃣ **Install dependencies**  
```bash
npm install
```

3️⃣ **Run on Android Emulator**  
```bash
npx react-native run-android
```

4️⃣ **Run on iOS Simulator** (Mac Only)  
```bash
npx react-native run-ios
```

---

## 🤝 **7. How to Contribute**  

We welcome contributions! Follow these steps to contribute:  

1️⃣ **Fork the repository**  
2️⃣ **Create a feature branch**  
   ```bash
   git checkout -b feature-name
   ```
3️⃣ **Commit your changes**  
   ```bash
   git commit -m "Added new feature"
   ```
4️⃣ **Push to GitHub**  
   ```bash
   git push origin feature-name
   ```
5️⃣ **Create a pull request**  

---

## 📜 **8. License**  
This project is **open-source** and licensed under the **MIT License**.  

---

### 🔗 **Project Links**
- **GitHub Repository:** [HafaRetails](https://github.com/BishopDavid7/HafaRetails)  
- **Live Demo:** _Coming Soon_  
- **API Documentation:** _Coming Soon_  

---

## ⭐ **Support & Feedback**
If you find this project helpful, please ⭐ star the repository and share your feedback in the Issues section! 🚀  

---
