'use strict';
const bcrypt = require('bcryptjs');

const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        get date() {
            return this.createdAt.toLocaleString()
        }


        static associate(models) {
            // define association here
            User.belongsToMany(models.Place, { through: 'PlaceUser' })

        }
    };
    User.init({
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please enter Username'
                },
                notEmpty: {
                    msg: 'Please enter Username'
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please enter email'
                },
                notEmpty: {
                    msg: 'Please enter email'
                },
                isEmail: {
                    msg: 'Please valid email'
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Please enter password'
                },
                notEmpty: {
                    msg: 'Please enter password'
                }
            }
        }
    }, {
        hooks: {
            beforeCreate: (user, options) => {
                user.password = bcrypt.hashSync(user.password, 10);
            }
        },
        sequelize,
        modelName: 'User',
    });
    return User;
};