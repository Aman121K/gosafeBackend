const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/auth/send-otp', authController.sendOTP);
router.post('/auth/verify-otp', authController.verifyOtp);
// Add more auth-related routes here

module.exports = router;