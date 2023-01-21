'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Request extends Model {
    static associate(models) {
      Request.belongsTo(models.User),
      Request.belongsToMany(models.Category,{
        through:models.RequestCategory,
      }
)
    }
  }
  Request.init({
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    image: DataTypes.STRING,
    address: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Request',
  });
  return Request;
};