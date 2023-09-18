// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection.js');
// import the integrer part of the sequelize library so that the datatypes model does not have to referenced below for integers.
const { INTEGER } = require('sequelize');

// Initialize Category model (table) by extending off Sequelize's Model class
class Category extends Model {}

// set up fields and rules for Category model
Category.init(
  {
    id: {
      type: INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
