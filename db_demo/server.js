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

// console.log(models.sequelize.QueryTypes.SELECT);

//原生sql(https://itbilu.com/nodejs/npm/VJIR1CjMb.html)
models.sequelize.query("SELECT * FROM `user`", { type: models.sequelize.QueryTypes.SELECT})
  .then(function(users) {
  	console.log(JSON.stringify(users))
  })