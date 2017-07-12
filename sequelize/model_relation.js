//model与model之间的定义
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


var Account = sequelize.define('account', {
    'email': {
        'type': Sequelize.CHAR(20),
        'allowNull': false,
        get: function() {
            return this.getDataValue('email');
        },
        set: function(email) {
            this.setDataValue('email', email.toUpperCase());
        }
    },
    'phone': {
        'type': Sequelize.CHAR(11),
        'allowNull': false,
        get: function() {
            return this.getDataValue('phone');
        },
        set: function(phone) {
            this.setDataValue('phone', phone.toUpperCase());
        }
    }
});

var Person = sequelize.define('person', {
    'person_id': {
        'type': Sequelize.CHAR(10),
        'allowNull': false,
        'unique': true
    },
    // 外键
    'account_id': {
        'type': Sequelize.INTEGER,
        references: {
            model: Account,
            key: 'id'
        }
    }
});

// Account.sync({ force: true });
// Person.sync({ force: true });

// Account.create({
// 	'email': 'mtest@gmail.com',
// 	'phone': '12345678901'
// });

Account.findAll().then(accounts => {
    accounts.forEach(function(account) {
        console.log('id:=' + account.dataValues.id + '   email:=' + account.get('email') + '  phone:=' + account.get('phone'));
    })
});
