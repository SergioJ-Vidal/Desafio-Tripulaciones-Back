'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RequestCategory extends Model {
   
    static associate(models) {
    
    }
  }
  RequestCategory.init({
    CategoryId: DataTypes.INTEGER,
    RequestId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RequestCategory',
  });
  return RequestCategory;
};