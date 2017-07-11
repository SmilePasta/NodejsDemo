var Sequelize = require('sequelize');

var connectUri = 'mysql://smile:123456@localhost:3306/reaca_wechat'
const sequelize = new Sequelize(connectUri, {
    define: {
        timestamps: false // true by default
    }
});

const User = sequelize.define('user', {}); // timestamps is false by default
const Post = sequelize.define('post', {}, {
    timestamps: true, //是否需要增加createdAt、updatedAt、deletedAt字段
    tableName: 'post', // 自定义表名
    freezeTableName: true, // 使得表名就是model名，不会自动添加后缀s
	createdAt: false, //不需要createdAt字段
	updatedAt: 'utime', //将updatedAt字段改个名
	deletedAt: 'dtime', //将deletedAt字段改个名
	paranoid: true //paranoid为true（此种模式下，删除数据时不会进行物理删除，而是设置deletedAt为当前时间)
});

//create table(not insert data,use model.create({}) insert data)
User.sync({ force: true });
Post.sync({ force: true });

//Promises
// User.findOne().then(user => {
//   console.log(user.get('id'));
// });
