const pool = require('../../config/db');

const addTrain = async (name, source, destination, totalSeats) => {
    const query = `INSERT INTO trains (name, source, destination, total_seats, available_seats) VALUES ($1, $2, $3, $4, $4) RETURNING *`;
    const values = [name, source, destination, totalSeats];
    const res = await pool.query(query, values);
    return res.rows[0];
};

const getTrainsBetweenStations = async (source, destination) => {
    const query = `SELECT * FROM trains WHERE source = $1 AND destination = $2`;
    const res = await pool.query(query, [source, destination]);
    return res.rows;
};

module.exports = { addTrain, getTrainsBetweenStations };
