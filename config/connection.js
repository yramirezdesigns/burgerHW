var mysql = require('mysql');
var connection;


var connection = mysql.createConnection({
	host: 'localhost',
	port: "8889",
	user: 'root',
	password:'root',
	database: 'burgers_db'
});

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('Connection Sucessful!' + connection.threadId);
});

module.exports = connection;