# JWT Authentication and Authorization API

A robust Node.js API implementing JWT-based authentication with role-based access control (RBAC).

## Project Screenshot
### API Running Successfully and this the database 
![database](https://github.com/user-attachments/assets/7875b5e7-2182-4bbe-b7e9-aa16a080a522)
### Creating a User  
![create user](https://github.com/user-attachments/assets/83bd1e48-9147-46c7-82ba-4f0c4e8040ec)
### Login
![login](https://github.com/user-attachments/assets/8672d3ca-1fbf-45dd-a3d2-218b29847973)
### Get profile of user
![profile](https://github.com/user-attachments/assets/2fa69a65-1a06-4960-a2c9-31286ffd8015)
### Admin
![admin](https://github.com/user-attachments/assets/d17a0640-91f3-48c9-b2ad-2785a13f399f)

## Features

- 🔐 **Secure Authentication**
  - User registration with encrypted passwords
  - JWT-based login system
  - Token refresh mechanism

- 👮 **Role-Based Authorization**
  - Three role levels: User, Admin, and Owner
  - Protected routes based on role permissions
  - Middleware for authentication and authorization

- 🛡️ **Security**
  - Password hashing with bcrypt
  - JWT token validation
  - Protection against common web vulnerabilities

## Project Structure

```
auth-api/
├── config/             # Configuration files
│   ├── db.js           # Database connection
│   └── jwt.js          # JWT utilities
├── controllers/        # Route controllers
│   ├── authController.js
│   └── userController.js
├── middleware/         # Custom middleware
│   ├── auth.js         # Authentication middleware
│   └── roleCheck.js    # Role-based authorization
├── models/             # Database models
│   └── User.js         # User model with schema
├── routes/             # API routes
│   ├── authRoutes.js
│   └── userRoutes.js
├── utils/              # Utility functions
│   └── errorHandler.js
├── .env                # Environment variables
├── server.js           # Main application entry
└── package.json        # Project dependencies
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login and receive JWT token
- `POST /api/auth/refresh-token` - Refresh authentication token

### User Management
- `GET /api/users/profile` - Get current user profile (all authenticated users)
- `GET /api/users` - Get all users (admin and owner only)
- `PUT /api/users/:id` - Update user (admin only)
- `DELETE /api/users/:id` - Delete user (owner only)

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/auth-api.git
   cd auth-api
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/auth_demo
   JWT_SECRET=your_super_strong_secret_key_here
   JWT_EXPIRE=1h
   ```

4. Start MongoDB
   ```bash
   # If using local MongoDB
   mongosh
   > use auth_demo
   ```

5. Start the server
   ```bash
   # Development mode with nodemon
   npm run dev
   
   # Production mode
   npm start
   ```

## Testing the API

### Using Postman

1. **Register a User**
   - Method: POST
   - URL: `http://localhost:5000/api/auth/register`
   - Body:
     ```json
     {
       "username": "testuser",
       "email": "test@example.com",
       "password": "password123"
     }
     ```

2. **Login**
   - Method: POST
   - URL: `http://localhost:5000/api/auth/login`
   - Body:
     ```json
     {
       "email": "test@example.com",
       "password": "password123"
     }
     ```
   - Response includes JWT token

3. **Access Protected Route**
   - Method: GET
   - URL: `http://localhost:5000/api/users/profile`
   - Headers:
     ```
     Authorization: Bearer <your_token_here>
     ```


## Security Considerations

- Store JWT secret in environment variables
- Use HTTPS in production
- Set appropriate token expiration
- Implement rate limiting for login attempts
