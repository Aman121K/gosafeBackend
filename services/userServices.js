const userModel = require('../models/userModal');

const getUsersList= async () => {
  return await userModel.getUserById();
};

module.exports = {
  getUsersList
};
