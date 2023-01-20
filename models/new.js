'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class New extends Model {
    static associate(models) {
      New.belongsToMany(models.Category, {
        through: models.CategoryNew,
      })
    }
  }
  New.init({
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    image: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'New',
  });
  return New;
};