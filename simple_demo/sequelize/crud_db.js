//官方文档
//http://docs.sequelizejs.com/manual/installation/getting-started.html

//JavaScript 严格模式(use strict)
//     - 消除Javascript语法的一些不合理、 不严谨之处， 减少一些怪异行为;
// 　　- 消除代码运行的一些不安全之处，保证代码运行的安全；
// 　　- 提高编译器效率，增加运行速度；
// 　　- 为未来新版本的Javascript做好铺垫。

'use strict';

var Sequelize = require('sequelize');
var config = require('./config');
//多配置连接
//new Sequelize(database, [username=null], [password=null], [options={}])
const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host, // 数据库地址
    dialect: config.type, // 指定连接的数据库类型

    pool: {
        max: 5, // 连接池中最大连接数量
        min: 0, // 连接池中最小连接数量
        idle: 10000 // 如果一个线程 10 秒钟内没有被使用过的话，那么就释放线程
    },
});

const Post = sequelize.define('post', {
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
    }
}, {});

//增
//method.1 build后保存到内存，需要save后才能操作db
// var post = Post.build({
// 	'firstName': 'Jiang',
// 	'lastName': 'Xiaoming'
// });

// console.log('A')
// post =  post.save();
// console.log('B')

//method.2 直接操作db
// var post = Post.create({
// 	'firstName': 'Huang',
// 	'lastName': 'Xiaoming'
// });

//改
// Post.findOne().then(post => {
// 	//method.1
//     // post.firstName = 'changeFirstName';
//     // post.save();

//     //method.2
//     post.update({
//     	lastName:'m2_value'
//     });
// });

//删
// Post.findOne().then(post => {
//     post.destroy();
// });




