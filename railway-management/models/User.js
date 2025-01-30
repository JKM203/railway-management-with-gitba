const pool = require('../../config/db');

const createUser = async (name, email, password, role) => {
    const query = `INSERT INTO users (name, email, password, role) VALUES ($1, $2, $3, $4) RETURNING id, name, email, role`;
    const values = [name, email, password, role];
    const res = await pool.query(query, values);
    return res.rows[0];
};

const findUserByEmail = async (email) => {
    const query = `SELECT * FROM users WHERE email = $1`;
    const res = await pool.query(query, [email]);
    return res.rows[0];
};

module.exports = { createUser, findUserByEmail };
