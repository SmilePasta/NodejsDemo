//官方文档
//http://docs.sequelizejs.com/manual/installation/getting-started.html

var Sequelize = require('sequelize');

//多配置连接
//new Sequelize(database, [username=null], [password=null], [options={}])
const sequelize = new Sequelize('reaca_wechat', 'smile', '123456', {
    host: 'localhost', // 数据库地址
    dialect: 'mysql', // 指定连接的数据库类型

    pool: {
        max: 5, // 连接池中最大连接数量
        min: 0, // 连接池中最小连接数量
        idle: 10000 // 如果一个线程 10 秒钟内没有被使用过的话，那么就释放线程
    },
});

//通过uri连接数据库(未测)
// const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

//define model
//sequelize.define(tableName,{})
const User = sequelize.define('user',{
	firstName: {
		type:Sequelize.STRING
	},
	lastName: {
		type:Sequelize.STRING
	}
});

//在数据库中创建User Model,并且插入数据
//force:如果表已存在刚drop
// User.sync({force:true}).then(() => {
// 	return User.create({
// 		firstName:'John',
// 		lastName:'Hancock'
// 	},{
// 		firstName:'Marry',
// 		lastName:'Lu'
// 	});
// });

//查询所有
// User.findAll().then(users => {
// 	console.log(users.dataValues);
// });

//根据Id查询
// User.findById(1).then(user => {
// 	console.log(user);
// })

User.findOne({where:{firstName:'john'}})
	.then(user => {
		console.log(user);
	});




