//同步模式调用Node_Redis
// var rediz = require('redis');

// //Create Redis-Client connect on Redis-Server, Redis-Server deployed in 127.0.0.1，Port 8099 
// var redis = rediz.createClient({"host":"127.0.0.1","port":"6379"});

// //Register Redis error event listen(Client connect failed callback)
// redis.on('error',function(error){
// 	if(error) throw error
// });
// redis_get_string()
// function redis_get_string(){
// 	redis.set('mKey',['mVal'],function(error,res){
// 		redis.get('mKey',function(error,res){
// 			console.log(res)
// 		});
// 	});
// }


//异步模式调用Node_Redis
var Q = require('bluebird');
var rediz = require('redis');
Q.promisifyAll(rediz.RedisClient.prototype);
Q.promisifyAll(rediz.Multi.prototype);

//Create Redis-Client connect on Redis-Server, Redis-Server deployed in 127.0.0.1，Port 6666 
var redis = rediz.createClient({ "host": "127.0.0.1", "port": "6379" });

//Register Redis error event listen(Client connect failed callback)
redis.on('error', function(error) {
    console.log('error event -' + redis.host + ':' + redis.port + '-' + error);
});

redis_setget_string_async();

function redis_setget_string_async() {
    //异步 Promise 链式调用
    var promise = redis.setAsync('mKey', 'mVal')
        .then(function(res) {
            return redis.getAsync('mKey');
        })
        .then(function(res) {
            console.log(res);
            Q.resolve(res);
        });
    return promise;
}
