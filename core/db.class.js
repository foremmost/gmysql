import mysql from "mysql2"

let connection = mysql.createConnection({
	database: 'binance',
	host     : 'localhost',
	user     : 'root',
	password : ''
});

connection.connect();

connection.query('SELECT * FROM `orders`', function(err, rows, fields) {
	if (err) throw err;
	console.log('The solution is: ', rows[0]);
});

class Db{
	constructor(props) {

	}
	
}