"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {
    static associate(models) {
      Activity.belongsTo(models.User);
    }
  }
  Activity.init(
    {
      title: DataTypes.STRING,
      body: DataTypes.STRING,
      image: DataTypes.STRING,
      address: DataTypes.STRING,
      date: DataTypes.DATEONLY,
      attendances: DataTypes.INTEGER,
      absences: DataTypes.INTEGER,
      helps: DataTypes.INTEGER,
      UserId: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "Activity",
    }
  );
  return Activity;
};
