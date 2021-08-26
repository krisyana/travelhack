'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class PlaceUser extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            PlaceUser.belongsTo(models.Place, { foreignKey: 'placeId' })
            PlaceUser.belongsTo(models.User, { foreignKey: 'userId' })
        }
    };
    PlaceUser.init({
        status: DataTypes.STRING,
        userId: DataTypes.INTEGER,
        placeId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'PlaceUser',
    });
    return PlaceUser;
};