const pool = require('../config/database');

const getOTP = async (id) => {
  const [rows] = await pool.query('SELECT * FROM users');
  return rows;
};

module.exports = {
    getOTP
};
