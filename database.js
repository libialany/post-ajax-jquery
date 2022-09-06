var mysql = require('mysql');
var { database } =  require('./keys');
const { promisify } = require('util');
const pool = mysql.createPool(database);
pool.getConnection(function(err, connection) {
    if (err) throw err; // not connected!
});
pool.query = promisify(pool.query);
module.exports = pool;
