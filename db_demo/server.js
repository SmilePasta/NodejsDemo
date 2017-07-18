//参考github: https://github.com/sequelize/express-example

var models = require('./models');

// var User = models.User.create({
// 	'username': 'Jiang'
// });

models.User.findAll({
// include: [ models.Task ]
}).then(function(users) {
console.log(JSON.stringify(users));
});