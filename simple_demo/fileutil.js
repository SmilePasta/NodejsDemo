'use strict';

//Node.js 内置的fs模块就是文件系统模块，负责读写文件。和所有其他JS模块不同的是，fs模块同时提供了异步和同步的方法。
const fs = require('fs')

//读取文件
function readText(pathname) {
    var bin = fs.readFileSync(pathname)

    if (bin[0] === 0xEF && bin[1] === 0xBB && bin[2] === 0xBF) {
        bin = bin.slice(3)
    }

    return bin.toString('utf-8')
}

//追加写入文件
function writeText(pathname, content) {
    fs.appendFile(pathname, content, function(error) {
        if (error) {
            console.log(error);
            return false;
        }
        console.log('write success');
    })
}

module.exports = {
    readText,
    writeText
}