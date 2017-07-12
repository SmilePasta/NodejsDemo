module.exports = function(sequelize, DataTypes) {
    return sequelize.define('book', {
        name: DataTypes.STRING,
        description: DataTypes.STRING
    })
}
