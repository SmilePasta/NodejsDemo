//参考github: https://github.com/sequelize/express-example

var models = require('./models');

// models.version.create({
//     apkUrl: 'cdn.smilepasta.com',
//     isFocreUpdate: false,
//     versionName: '1.0.1',
//     versionCode: 100
// }).then(function(result) {
//     console.log('inserted Ok');
// }).catch(function(err) {
//     console.log('inserted fail');
//     console.log(err.message);
// });

//查询所有数据
// models.version.findAll({})
//     .then(function(versions) {
//         console.log(JSON.stringify(versions));
//     });



//插入数据
// models.image_history.create({
// 	images: "cdn.smilepasta.com",
// 	image_flag: "2019-03-18",
// 	desc: "我们从这里起航，走向遥远的地方"
// }).then(function(result) {
//     console.log('inserted Ok');
// }).catch(function(err) {
//     console.log('inserted fail');
//     console.log(err.message);
// });

//发现一个数据
// models.image_history.findOne({
//         where: {
//             image_flag: '2019-03-18'
//         }
//     })
//     .then(function(image) {
//     	console.log('======'+image.images)
//     	console.log(JSON.stringify(image))
//     });

//查出数据再保存数据
// (async () => {
//     var image = await models.image_history.findOne({
//         where: {
//             image_flag: '2019-03-18'
//         }
//     })
//     image.updatedAt = Date.now()
//     image.images = 'cdn.smilepatsa.dddddd'
//     await image.save()
// })()

//直接更新数据
// models.image_history.update({
// 	images:'cdn.smilepasta.ccccccc'
// },{
// 	where:{
// 		image_flag:'2019-03-18'	
// 	}
// }).then(function(result){
//     console.log('updated success');
//     console.log(result);
// });


// models.User.findAll({
// // include: [ models.Task ]
// }).then(function(users) {
// console.log(JSON.stringify(users));
// });

// console.log(models.sequelize.QueryTypes.SELECT);

//原生sql(https://itbilu.com/nodejs/npm/VJIR1CjMb.html)
// models.sequelize.query("SELECT * FROM `user`", { type: models.sequelize.QueryTypes.SELECT})
//   .then(function(users) {
//   	console.log(JSON.stringify(users))
//   })


//插入版本数据
// models.version.create({
//     download_url: 'https://cdn.smilepasta.com/urchin_v1.0.2_100_20181204_debug.apk',
//     is_focre_update: false,
//     version_name: '1.0.1',
//     version_code: 100,
//     platform_code: 'android'
// }).then(function(result) {
//     console.log('inserted Ok');
// }).catch(function(err) {
//     console.log('inserted fail');
//     console.log(err.message);
// });


//查询版本
// (async () => {
//     var version = await models.version.findOne({
//         where: {
//             platform_code: 'android'
//         }
//     })
//     console.log(JSON.stringify(version));
// })()


//插入图片数据
// (async () => {
//     var image = await models.image_history.findOne({
//         where: {
//             image_flag: '2019-03-99'
//         }
//     })
//     if (image == undefined) {
//         var new_image = await models.image_history.create({
//             images: 'cdn.smilepatsa.ffffffff',
//             image_flag: '2019-03-99',
//             desc: 'this is description'
//         })
//         if(new_image != undefined){
//         	console.log('inserted')
//         }
//     } else {
//         image.updatedAt = Date.now()
//         image.images = image.images + ','+'cdn.smilepatsa.dddddd'
//         await image.save()
//     }
// })()

//降序查询所有图片
// (async () => {
//     var image_history = await models.image_history.findAll({
//     	order: [['updatedAt', 'DESC']]
//     })
//     console.log(JSON.stringify(image_history));
// })()