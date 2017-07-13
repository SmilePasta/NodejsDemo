//格式化日期
Date.prototype.Format = function(fmt) {
    var o = {
        "y+": this.getFullYear(),
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S+": this.getMilliseconds() //毫秒
    };
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            if (k == "y+") {
                fmt = fmt.replace(RegExp.$1, ("" + o[k]).substr(4 - RegExp.$1.length));
            } else if (k == "S+") {
                var lens = RegExp.$1.length;
                lens = lens == 1 ? 3 : lens;
                fmt = fmt.replace(RegExp.$1, ("00" + o[k]).substr(("" + o[k]).length - 1, lens));
            } else {
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
    }
    return fmt;
}

var winston = require('winston');
var logger = new(winston.Logger)({
    transports: [
        new(winston.transports.File)({
            name: 'info-file',
            filename: 'log-info.log',
            level: 'info',
            timestamp: function() {
                return new Date().Format("yyyy-MM-dd hh:mm:ss");
            }
        }),
        new(winston.transports.File)({
            name: 'error-file',
            filename: 'log-error.log',
            level: 'error',
            timestamp: function() {
                return new Date().Format("yyyy-MM-dd hh:mm:ss");
            }
        }),
        //输出到控制台
        new(winston.transports.Console)({
            colorize: 'all'
        })
    ]
});
logger.info('info', 'Hello distributed log files!');
logger.error('error', 'error1 error2 error3');
logger.warn('warn', 'warn warn warncle');
