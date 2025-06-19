const pool = require('../db/db.js');

async function getAllClothing() {
    const res = await pool.query('SELECT * FROM clothing');
    return res.rows;
}

async function addClothing({name, type, color, image, tags}) {
    const res = await pool.query(
        'INSERT INTO clothing (name, type, color, image, tags) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [name, type, color, image, tags]
    );
    return res.rows[0];
}

module.exports = { getAllClothing, addClothing };