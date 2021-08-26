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
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please enter name'
                },
                notEmpty: {
                    msg: 'Please enter name'
                }
            }
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please enter Price'
                },
                notEmpty: {
                    msg: 'Please enter Price'
                },
                min: {
                    args: [0],
                    msg: 'Price must be above 0'
                }
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please enter description'
                },
                notEmpty: {
                    msg: 'Please enter description'
                }
            }
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please enter location'
                },
                notEmpty: {
                    msg: 'Please enter location'
                }
            }
        },
        image: DataTypes.STRING,
        quota: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please enter quota'
                },
                notEmpty: {
                    msg: 'Please enter quota'
                },
                min: {
                    args: [0],
                    msg: 'Quota must be above 0'
                }
            }
        }
    }, {
        sequelize,
        modelName: 'Place',
    });
    return Place;
};