const authModal = require('../models/authModal');

const sendOtp = async () => {
    return await authModal.getOTP();
};

module.exports = {
    sendOtp
};
