const userService = require('../services/userServices');
const { sendResponse } = require('../utils/sendResponse');
const getUser = async (req, res) => {
  try {
    const user = await userService.getUsersList();

    if (!user) {
      return sendResponse(res, 404, 'User not found');
    }

    sendResponse(res, 200, 'User retrieved successfully', user);
  } catch (err) {
    sendResponse(res, 500, 'Internal server error');
  }
};

module.exports = {
  getUser,
};