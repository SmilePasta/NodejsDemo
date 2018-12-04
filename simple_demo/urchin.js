'use strict';

//Express是基于nodejs的web开发框架。优点是易上手、高性能、扩展性强。
const express = require('express')
//body-parser是非常常用的一个express中间件，作用是对post请求的请求体进行解析。使用非常简单，以下两行代码已经覆盖了大部分的使用场景。
const bodyParser = require('body-parser')
//Node.js 内置的fs模块就是文件系统模块，负责读写文件。和所有其他JS模块不同的是，fs模块同时提供了异步和同步的方法。
const fs = require('fs')

function readText(pathname) {
    var bin = fs.readFileSync(pathname)

    if (bin[0] === 0xEF && bin[1] === 0xBB && bin[2] === 0xBF) {
        bin = bin.slice(3)
    }

    return bin.toString('utf-8')
}

var newsVersionCode = 100

// 创建express实例
const app = express()
// 设置跨域访问
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, accept, origin, content-type')
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    res.header('X-Powered-By', ' 3.2.1')
    res.header('Content-Type', 'application/json;charset=utf-8')
    next()
})
// 将请求体变成熟悉的键值对样子
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


// 开始写接口
app.route('/getVersionCode')
    .post((req, res) => {
        // let allClient = readText('version.json')
        // console.log("allClient = "+allClient)
        // let t = JSON.parse(allClient)
        let params = req.body
        console.log(params)
        var message = new Object()
        let response
        if (params.versionCode != newsVersionCode) {
            //版本号不相等，就要更新应用
            if (params.language === 'zh') {
                message.tips = '发现新版本，请更新'
            } else {
                message.tips = 'Found a new version, please update'
            }
            message.versionCode = newsVersionCode
            message.apkUrl = 'https://cdn.smilepasta.com/urchin_v1.0.2_100_20181204_debug.apk'
            message.isFocreUpdate = 1
            response = {
                code: 200,
                data: message
            }
        } else {
            response = {
                code: 300,
                data: message
            }
        }
        res.status(200)
        res.send(response)
    })
// 开启服务器
const server = app.listen(9999, function() {
    var host = server.address().address
    var port = server.address().port
    console.log('Example app listening at http://%s:%s', host, port)
})