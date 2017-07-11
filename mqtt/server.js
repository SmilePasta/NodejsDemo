var mosca = require('mosca')

var ascoltatore = {
  type: 'redis',
  redis: require('redis'),
  db: 12,
  port: 6379,
  return_buffers: true, // 处理二进制的payload
  host: "localhost"
};

var moscaSettings = {
  port: 1883,
  backend: ascoltatore,
  persistence: {
    factory: mosca.persistence.Redis
  }
};

var server = new mosca.Server(moscaSettings);
server.on('ready', setup);

server.on('clientConnected', function(client) {
    console.log('client connected', client.id);     
});

// 收到消息时触发
server.on('published', function(packet, client) {
  console.log('Published', packet.payload);
});

// MQTT服务端准备完成后触发
function setup() {
  console.log('Mosca server is up and running')
}