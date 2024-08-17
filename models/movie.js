const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user.js');
const Genre = require('./gener.js');

class Movie extends Model {}

Movie.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    rating: {
        type: DataTypes.DOUBLE,
        defaultValue: 0,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        }
    },
    genreId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Genre,
            key: 'id',
        }
    }
}, {
    sequelize,
    modelName: 'Movie',
    timestamps: true,
});

Movie.belongsTo(User, { foreignKey: 'userId' });
User.hasMany(Movie, { foreignKey: 'userId' });

Movie.belongsTo(Genre, { foreignKey: 'genreId' });
Genre.hasMany(Movie, { foreignKey: 'genreId' });

module.exports = Movie;
