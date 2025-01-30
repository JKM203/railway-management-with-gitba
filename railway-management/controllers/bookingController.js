const pool = require('../config/db');
exports.bookSeat = async (req, res) => {
  try {
    const { train_id } = req.body;
    await pool.query('BEGIN');
    const train = await pool.query('SELECT * FROM trains WHERE id = $1 FOR UPDATE', [train_id]);
    if (train.rows[0].available_seats <= 0) return res.status(400).json({ error: 'No seats available' });
    await pool.query('UPDATE trains SET available_seats = available_seats - 1 WHERE id = $1', [train_id]);
    const booking = await pool.query('INSERT INTO bookings (user_id, train_id) VALUES ($1, $2) RETURNING *', [req.user.userId, train_id]);
    await pool.query('COMMIT');
    res.json(booking.rows[0]);
  } catch (err) {
    await pool.query('ROLLBACK');
    res.status(500).json({ error: err.message });
  }
};