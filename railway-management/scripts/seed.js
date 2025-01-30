const pool = require('../config/db');
const bcrypt = require('bcrypt');

const seedDatabase = async () => {
    try {
        // Hash password for admin
        const hashedPassword = await bcrypt.hash('admin123', 10);

        // Insert admin user
        await pool.query(`
            INSERT INTO users (name, email, password, role) 
            VALUES ('Admin', 'admin@example.com', '${hashedPassword}', 'admin')
            ON CONFLICT (email) DO NOTHING;
        `);

        // Insert sample trains
        await pool.query(`
            INSERT INTO trains (name, source, destination, total_seats, available_seats) 
            VALUES 
                ('Express A', 'New York', 'Los Angeles', 100, 100),
                ('Express B', 'Chicago', 'San Francisco', 120, 120)
            ON CONFLICT (name) DO NOTHING;
        `);

        console.log('Database seeded successfully!');
        process.exit();
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedDatabase();
