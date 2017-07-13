//Assert模块主要用于断言。如果表达式不符合预期，就抛出一个错误

var assert = require('assert');

function add(a,b){
	return a+b;
}

var expected = add(1,2);
assert(expected === 3,'预期1+2=3');