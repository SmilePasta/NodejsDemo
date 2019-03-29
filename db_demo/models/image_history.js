"use strict";

//历史上传图片的数据表

module.exports = function(sequelize, DataTypes) {
  var image_history = sequelize.define("image_history", {
    images: DataTypes.TEXT, //上传的图片路径
    image_flag: DataTypes.STRING, //图片标记
    desc: DataTypes.TEXT //当天的图片描述
  },{
  	freezeTableName: true
  });
  return image_history;
};
