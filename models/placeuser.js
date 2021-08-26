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
            PlaceUser.belongsTo(models.Place, { foreignKey: 'PlaceId' })
            PlaceUser.belongsTo(models.User, { foreignKey: 'UserId' })
        }
    };
    PlaceUser.init({
        status: DataTypes.STRING,
        UserId: DataTypes.INTEGER,
        PlaceId: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'PlaceUser',
    });
    return PlaceUser;
};