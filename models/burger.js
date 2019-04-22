var orm = require('../config/orm.js');

var burgermodel = {
	selectAll: function (cb) {     
		orm.selectAll('burgers', function (res) {
			cb(res);
			console.log("orm model ALL is working")
		});
	},
	insertOne: function (column, values, cb) {
		orm.insertOne('burgers',column,values, function (res) {
			cb(res);
			console.log("orm model CREATE is working")
		});
	},
	updateOne: function (column, newValue, condition, cb) {
		orm.updateOne('burgers', column, newValue, condition, function (res) {
			cb(res);
			console.log("orm model UPDATE is working")
		});
	},
	delete: function (condition, cb) {
		console.log("workings??")
		orm.delete('burgers',condition, function (res) {
			console.log("workings11111??")
			cb(res);
			console.log("orm model DELELTE is working")
		});
	}
};




module.exports = burgermodel;