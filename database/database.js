const { ClassicLevel } = require('classic-level');

const db_path = process.env.DB_PATH || './data/db';
const db = new ClassicLevel(db_path, { valueEncoding: 'json' });

module.exports = db;
