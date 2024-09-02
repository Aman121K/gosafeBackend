const authServices = require('../services/authServices');
const { sendResponse } = require('../utils/sendResponse');
const sendOTP = async (req, res) => {
  try {
    const otpResponse = await authServices.sendOtp(req);

    if (!otpResponse) {
      return sendResponse(res, 404, 'some issue while sending otp');
    }

    sendResponse(res, 200, 'OTP successfully send to your mention number');
  } catch (err) {
    sendResponse(res, 500, 'Internal server error');
  }
};

module.exports = {
    sendOTP,
};