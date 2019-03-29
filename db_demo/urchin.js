'use strict';

//Express是基于nodejs的web开发框架。优点是易上手、高性能、扩展性强。
const express = require('express')
//body-parser是非常常用的一个express中间件，作用是对post请求的请求体进行解析。使用非常简单，以下两行代码已经覆盖了大部分的使用场景。
const bodyParser = require('body-parser')
//Node.js 内置的fs模块就是文件系统模块，负责读写文件。和所有其他JS模块不同的是，fs模块同时提供了异步和同步的方法。
const fs = require('fs')
//时间
var sd = require('silly-datetime');
//创建数据实体
var models = require('./models');

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
        let params = req.body
        models.version.findOne({
                where: {
                    platform_code: params.platform_code
                }
            })
            .then(function(version) {
                var response;
                if (params.version_code != version.version_code) {
                    response = {
                        code: 200, //需要更新版本
                        data: version
                    }
                } else {
                    response = {
                        code: 300, //不需要更新版本
                        data: version
                    }
                }
                res.status(200)
                res.send(response)
            });

    })

// 写入图片路径
app.route('/addImage')
    .post((req, res) => {
        let params = req.body
        var time = sd.format(new Date(), 'YYYY-MM-DD');
        (async () => {
            var image = await models.image_history.findOne({
                where: {
                    image_flag: time
                }
            })
            if (image == undefined) {
                image = await models.image_history.create({
                    images: params.images,
                    image_flag: time,
                    desc: params.desc
                })
            } else {
                image.updatedAt = Date.now()
                image.images = image.images + ',' + params.images
                image.desc = image.desc + '。' + params.desc
                await image.save()
            }
            var response = {
                code: 200,
                data: image
            }
            res.status(200)
            res.send(response)
        })()
    })

// 读取图片路径
//默认返回多少条
var page_size = 5
//默认第几页
var page_index = 1
app.route('/getImage')
    .post((req, res) => {
        let params = req.body
        console.log(params)
        page_index = params.page_index
        page_size = params.page_size
        let offset = (page_index - 1) * page_size;

        (async () => {
            var images = await models.image_history.findAndCountAll({
                limit: parseInt(page_size),
                order: [['updatedAt', 'DESC']],
                offset
            })
            let response
            if (images != undefined && images.rows.length != 0) {
                response = {
                    code: 200,
                    data: images.rows
                }
            } else {
                response = {
                    code: 300,
                    msg: "没有更多数据了"
                }
            }
            res.status(200)
            res.send(response)
        })()
    })

// 开启服务器
const server = app.listen(9999, function() {
    var host = server.address().address
    var port = server.address().port
    console.log('Example app listening at http://%s:%s', host, port)
})
