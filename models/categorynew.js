'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CategoryNew extends Model {
    static associate(models) {
    }
  }
  CategoryNew.init({
    CategoryId: DataTypes.INTEGER,
    NewId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'CategoryNew',
  });
  return CategoryNew;
};