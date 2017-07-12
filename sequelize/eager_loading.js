//预加载
var Sequelize = require('sequelize');
var config = require('./config');
//多配置连接
//new Sequelize(database, [username=null], [password=null], [options={}])
var connectUri = 'mysql://smile:123456@localhost:3306/reaca_wechat'
const sequelize = new Sequelize(connectUri, {
    define: {
        freezeTableName: true
    }
});

var User = sequelize.define('user', { name: Sequelize.STRING })
  , Task = sequelize.define('task', { name: Sequelize.STRING })
  , Tool = sequelize.define('tool', { name: Sequelize.STRING });

Task.belongsTo(User)
User.hasMany(Task)
Tool.belongsTo(User)
User.hasMany(Tool)

//Model.sync()只会同步当前模型到数据库中，而sequelize.sync()会同步sequelize实例中定义所有模型。
sequelize.sync()

// User.create({
// 	'name':'小山'
// })
// Task.create({
// 	'name':'task1',
// 	'userId':1
// })
// Tool.create({
// 	'name':'tool1',
// 	'userId':1
// })

Task.findAll({include:[ User ]}).then(function(tasks){
	console.log(JSON.stringify(tasks));
})

// [
//     {
//         "id": 1,
//         "name": "tool1",
//         "createdAt": "2017-07-12T07:56:00.000Z",
//         "updatedAt": "2017-07-12T07:56:00.000Z",
//         "userId": 1,
//         "user": {
//             "id": 1,
//             "name": "小山",
//             "createdAt": "2017-07-12T07:53:57.000Z",
//             "updatedAt": "2017-07-12T07:53:57.000Z"
//         }
//     }
// ]
Tool.findAll({include:[ User ]}).then(function(tools){
	console.log(JSON.stringify(tools));
})

// 在Sequelize中建立关联关系，通过调用模型(源模型)的belongsTo、hasOne、hasMany、belongsToMany方法，
//再将要建立关系的模型(目标模型)做为参数传入即可。这些方法会按以下规则创建关联关系：

// hasOne - 与目标模型建立1:1关联关系，关联关系(外键)存在于目标模型中。详见：Model.hasOne()
// belongsTo - 与目标模型建立1:1关联关系，关联关系(外键)存在于源模型中。详见：Model.belongsTo()
// hasMany - 与目标模型建立1:N关联关系，关联关系(外键)存在于目标模型中。详见：Model.hasMany()
// belongsToMany - 与目标模型建立N:M关联关系，会通过sourceId和targetId创建交叉表。详见：Model.belongsToMany()
