var mysql = require('mysql');
var conn = mysql.createConnection({
	host:'localhost',
	user:'smile',
	password:'123456',
	database:'reaca_wechat'
});

conn.connect();


// query
var queryStr = 'select * from tbl_checkbox';
conn.query(queryStr,function (error,result){
	if(error)throw error;
	console.log('the solution is:',result);
});

//insert
var addStr = 'insert into tbl_checkbox(name,type) values(?,?)';
var addSqlParams = ['luckyType',4];

conn.query(addStr,addSqlParams,function(error,result){
	if(error)throw error;
	console.log('insert id := ',result);
})

//update
var updateStr = 'update tbl_checkbox set name = ? where id = ?';
var updateSqlParams = ['notLuckyType',13];

conn.query(updateStr,updateSqlParams,function(error,result){
	if(error) throw error;
	console.log('update affectdRows:=',result.affectedRows);
})

//delete
var deleteStr = 'delete from tbl_checkbox where type = ?';
var deleteSqlParams = ['4'];

conn.query(deleteStr,deleteSqlParams,function(error,result){
	console.log('delete affectedRows',result.affectedRows);
})