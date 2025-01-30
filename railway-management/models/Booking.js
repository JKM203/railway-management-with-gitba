const pool = require('../../config/db');

const bookSeat = async (userId, trainId) => {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');

        const seatCheckQuery = `SELECT available_seats FROM trains WHERE id = $1 FOR UPDATE`;
        const seatResult = await client.query(seatCheckQuery, [trainId]);

        if (seatResult.rows[0].available_seats <= 0) {
            throw new Error('No seats available');
        }

        const bookingQuery = `INSERT INTO bookings (user_id, train_id) VALUES ($1, $2) RETURNING *`;
        const bookingResult = await client.query(bookingQuery, [userId, trainId]);

        const updateSeatsQuery = `UPDATE trains SET available_seats = available_seats - 1 WHERE id = $1`;
        await client.query(updateSeatsQuery, [trainId]);

        await client.query('COMMIT');
        return bookingResult.rows[0];
    } catch (error) {
        await client.query('ROLLBACK');
        throw error;
    } finally {
        client.release();
    }
};

module.exports = { bookSeat };
