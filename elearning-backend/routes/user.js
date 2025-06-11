const express = require('express');
const auth = require('../middleware/auth');
const roleCheck = require('../middleware/role');

const router = express.Router();

// Accessible by all authenticated users
router.get('/profile', auth, (req, res) => {
  res.json({ message: `Hello, ${req.user.role}` });
});

// Only for Instructors
router.get('/instructor', auth, roleCheck(['Instructor']), (req, res) => {
  res.json({ message: 'Welcome, Instructor!' });
});

// Only for Admins
router.get('/admin', auth, roleCheck(['Admin']), (req, res) => {
  res.json({ message: 'Welcome, Admin!' });
});

module.exports = router; 