'use strict';

var fs = require('fs');

var rs = fs.createReadStream('main.js');
var ws = fs.createWriteStream('copy_main.txt');

rs.pipe(ws)