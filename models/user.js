'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Activity)
    }
  }
  User.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    birthdate: DataTypes.DATEONLY,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    codephone:DataTypes.INTEGER,
    telephone:DataTypes.INTEGER,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
    role: DataTypes.STRING
    
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};