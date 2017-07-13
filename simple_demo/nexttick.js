//下一次事件循环就会执行
process.nextTick(function(){
	console.log('nexttick callback 1');
});

//下一次事件循环就会执行
process.nextTick(function(){
	console.log('nexttick callback 2');
});

//程序退出时执行
process.on('exit',function(code){
	console.log('about to exit with code:= '+code);
})

//判断js执行环境
if(typeof(window)==='undefined'){
	console.log('node.js');
}else{
	console.log('browser')
}

console.log('nextTick was set!');