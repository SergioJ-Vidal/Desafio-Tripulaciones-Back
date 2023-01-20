'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class request extends Model {
    static associate(models) {
    }
  }
  request.init({
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    // UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'request',
  });
  return request;
};