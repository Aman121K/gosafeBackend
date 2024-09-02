const pool = require('../config/database');

const getUserById = async (id) => {
  const [rows] = await pool.query('SELECT * FROM users');
  return rows;
};

module.exports = {
  getUserById
};
