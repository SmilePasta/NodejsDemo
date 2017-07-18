"use strict";

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username: DataTypes.STRING
    },{
  	freezeTableName: true
  });
    return User;
};
