# Elearning Backend

This is the backend for the AI Improved E-Learning platform.

## Tech Stack
- Node.js
- Express
- MongoDB (Mongoose)

## Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file with your MongoDB URI and JWT secret:
   ```env
   MONGODB_URI=mongodb://localhost:27017/elearning
   JWT_SECRET=mysecret123
   PORT=5000
   ```
3. Start the server:
   ```bash
   npm run dev
   ```

## Project Structure
- `controllers/` - Route logic
- `models/` - Mongoose models
- `routes/` - Express routes
- `middleware/` - Custom middleware (auth, roles)
- `app.js` - Entry point

## Roles
- Student
- Instructor
- Admin 