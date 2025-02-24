const express = require('express');
const { 
  getProfile, 
  getUsers, 
  updateUser, 
  deleteUser 
} = require('../controllers/userController');
const { protect } = require('../middleware/auth');
const { authorize } = require('../middleware/roleCheck');

const router = express.Router();

// Apply protect middleware to all routes
router.use(protect);

// User routes
router.get('/profile', getProfile);

// Admin/Owner routes
router.get('/', authorize('admin', 'owner'), getUsers);

// Admin routes
router.put('/:id', authorize('admin'), updateUser);

// Owner routes
router.delete('/:id', authorize('owner'), deleteUser);

module.exports = router;