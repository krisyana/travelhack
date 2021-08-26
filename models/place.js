'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Place extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Place.belongsToMany(models.User, { through: 'PlaceUser' })
        }
    };
    Place.init({
        name: DataTypes.STRING,
        price: DataTypes.INTEGER,
        description: DataTypes.STRING,
        location: DataTypes.STRING,
        image: DataTypes.STRING,
        quota: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Place',
    });
    return Place;
};