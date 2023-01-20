'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Post)
      User.hasMany(models.Request)
    }
  }
  User.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    birthdate: DataTypes.DATETIME,
    email: DataTypes.STRING,
    codephone:DataTypes.STRING,
    telephone:DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};