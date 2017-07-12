//model 属性验证
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
        //从数据为获取
        get: function() {
            return this.getDataValue('email');
        },
        //改变数据库的值
        set: function(email) {
            this.setDataValue('email', email.toUpperCase());
        },
        //验证
        validate:{
        	isEmail:{
        		msg:'email address format error,please check up email address.'
        	}
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
},{
	//自定义全局验证，在执行数据库操作之前会进入该validate
	validate:{
		validateEnter:function(){
			console.log('start validate function');
		}
	}
});

Account.create({
	'email': 'mmtest@gmail.com', //error format
	'phone': '12345678901'
});


// var ValidateMe = sequelize.define('foo', {
//   foo: {
//     type: Sequelize.STRING,
//     validate: {
//       is: ["^[a-z]+$",'i'],     // 只允许字母
//       is: /^[a-z]+$/i,          // 只允许字母
//       not: ["[a-z]",'i'],       // 不能使用字母
//       isEmail: true,            // 检测邮箱格式 (foo@bar.com)
//       isUrl: true,              // 检查Url格式 (http://foo.com)
//       isIP: true,               // 检查 IPv4 或 IPv6 格式
//       isIPv4: true,             // 检查 IPv4
//       isIPv6: true,             // 检查 IPv6
//       isAlpha: true,            // 不能使用字母
//       isAlphanumeric: true,     // 只允许字母数字字符
//       isNumeric: true,          // 只能使用数字
//       isInt: true,              // 只能是整数
//       isFloat: true,            // 只能是浮点数
//       isDecimal: true,          // 检查数字
//       isLowercase: true,        // 检查小写字母
//       isUppercase: true,        // 检查大写字母
//       notNull: true,            // 不允许null
//       isNull: true,             // 只能为null
//       notEmpty: true,           // 不能空字符串
//       equals: 'specific value', // 只能使用指定值
//       contains: 'foo',          // 必须包含子字符串
//       notIn: [['foo', 'bar']],  // 不能是数组中的任意一个值
//       isIn: [['foo', 'bar']],   // 只能是数组中的任意一个值
//       notContains: 'bar',       // 不能包含子字符串
//       len: [2, 10],              // 值的长度必在 2 和 10 之间
//       isUUID: 4,                // 只能是UUID
//       isDate: true,             // 只能是日期字符串
//       isAfter: "2011-11-05",    // 只能使用指定日期之后的时间
//       isBefore: "2011-11-05",   // 只能使用指定日期之前的时间
//       max: 23,                  // 允许的最大值
//       min: 23,                  // 允许的最小值
//       isArray: true,            // 不能使用数组
//       isCreditCard: true,       // 检查是有效的信用卡

//       // 也可以自定义验证:
//       isEven: function(value) {
//         if(parseInt(value) % 2 != 0) {
//           throw new Error('Only even values are allowed!')
//         // we also are in the model's context here, so this.otherField
//         // would get the value of otherField if it existed
//         }
//       }
//     }
//   }
// });