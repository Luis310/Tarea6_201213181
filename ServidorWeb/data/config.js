const mysql = require('mysql');

// Set database connection credentials
const config = {
    host: 'localhost',
    port:'3309',
    user: 'root',
    password: '1234',
    database: 'tarea6',
    insecureAuth:true
};

// Create a MySQL pool
const pool = mysql.createPool(config);

// Export the pool
module.exports = pool;