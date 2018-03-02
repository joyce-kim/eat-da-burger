var connection = require('./connection.js');

printQuestionMarks = (num) => {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push('?');
	}

	return arr.toString();
}

objToSql = (obj) => {
	var arr[];

	for (var key in obj) {
		var val = obj[key];
		if (Object.hasOwnProperty.call(obj, key)) {
			if (typeof value === 'string' && value.indexOf(' ') >= 0) {
				value = "'" + value + "'";
			}
		}
		arr.push(key + "=" + value);
	}
}

var orm = {
	selectAll: function(tableName, cb) {
		var queryString = "SELECT * FROM " + tableName + ";";
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
				cb(result);
			});
	},
	insertOne: function(tableName, cols, vals, cb) {
		var queryString = "INSERT INTO " + tableName 
			+ " (" + cols.toString() + ") VALUES (" + printQuestionMarks(vals.length) + ") ";
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
				cb(result);
			});
	},
	updateOne: function(tableName, cb) {
		var queryString = "SELECT * FROM " + tableName + ";";
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
				cb(result);
			});
	}

};

module.exports = orm;

INSERT INTO burgers (burger_name, devoured) VALUES ('Hamburger', FALSE);