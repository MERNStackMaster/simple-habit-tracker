const db = require('../models');

module.exports = {
	createUser: function(req, res) {
		db.User.create(req.body)
			.then(data => {
				console.log(data);

				res.send('User successfully added.');
			})
			.catch(err => console.log(err));
	}
};