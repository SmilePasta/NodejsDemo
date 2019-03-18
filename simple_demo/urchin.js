'use strict';

//Express是基于nodejs的web开发框架。优点是易上手、高性能、扩展性强。
const express = require('express')
//body-parser是非常常用的一个express中间件，作用是对post请求的请求体进行解析。使用非常简单，以下两行代码已经覆盖了大部分的使用场景。
const bodyParser = require('body-parser')
//Node.js 内置的fs模块就是文件系统模块，负责读写文件。和所有其他JS模块不同的是，fs模块同时提供了异步和同步的方法。
const fs = require('fs')
//时间
var sd = require('silly-datetime');
//文件读写工具类
var fileutil = require('./fileutil')

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


// 版本更新
app.route('/getVersionCode')
    .post((req, res) => {
        let allClient = fileutil.readText('version.json')
        console.log("allClient = " + allClient)
        let t = JSON.parse(allClient)
        let params = req.body
        console.log(params)
        let response
        if (params.versionCode != t.newsVersionCode) {
            response = {
                code: 200,
                data: t
            }
        } else {
            response = {
                code: 300,
                data: t
            }
        }
        res.status(200)
        res.send(response)
    })

// 写入图片路径
app.route('/addImage')
    .post((req, res) => {
        let params = req.body
        var time = sd.format(new Date(), 'YYYY-MM-DD');
        console.log(params)
        var file = './images/' + time + '.txt'
        fs.exists(file, function(exists) {
            if (!exists) {
                //创建文件
              fs.createWriteStream(file)
            }
            // 写入文件后，都统一加一个都好分隔符
            fileutil.writeText(file, params.imageUrls + ",")
            let response = {
                code: 200,
                data: {}
            }
            res.status(200)
            res.send(response)
        })

    })

// 读取图片路径
app.route('/getImage')
    .get((req, res) => {
        fs.readdir('./images', (err, files) => {
            var imageUrlArr = []
            files.forEach(file => {
                var fileContent = fileutil.readText('./images/' + file)
                var index = file.indexOf(".txt")
                if (index != -1) {
                    file = file.substring(0, index)
                }
                var dayImages = {
                    day: file,
                    images: fileContent.substring(0, fileContent.length - 1)
                }
                imageUrlArr.push(dayImages)
            });
            let response = {
                code: 200,
                data: { imageArr: imageUrlArr }
            }
            res.status(200)
            res.send(response)
        })

    })

// 开启服务器
const server = app.listen(9999, function() {
    var host = server.address().address
    var port = server.address().port
    console.log('Example app listening at http://%s:%s', host, port)
})