"use strict";

//应用升级的数据表

module.exports = function(sequelize, DataTypes) {
  var version = sequelize.define("version", {
    download_url: DataTypes.STRING, // apk下载地址
    is_focre_update: DataTypes.BOOLEAN, //是否强制更新
    version_name: DataTypes.STRING, //版本名称
    version_code: DataTypes.INTEGER, //版本号
    platform_code: DataTypes.STRING //平台编号
  },{
  	freezeTableName: true
  });
  return version;
};
