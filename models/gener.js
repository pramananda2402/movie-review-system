const { Model, DataTypes } = require("sequelize");
const sequelize = require('../config/database.js')
class Genre extends Model {}

Genre.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }
}, {
    sequelize,
    modelName: 'Genre',
});

module.exports = Genre