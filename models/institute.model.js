const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); 
const User = require('./user.model');  

const Institute = sequelize.define('Institute', {
  InstituteId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  InstituteName: {
    type: DataTypes.STRING(250),
    allowNull: true
  },
  InstituteCode: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  Address: {
    type: DataTypes.STRING(500),
    allowNull: true
  },
  Landmarks: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  Pincode: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  Email: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  Mobile: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  AlternateNo: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  UserId: {  // Foreign key should match with User model
    type: DataTypes.INTEGER,
    allowNull: true
  },
  Dated: {
    type: DataTypes.STRING(30),
    allowNull: true
  },
  CountryId: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  StateId: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  CityId: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  Specialization: {
    type: DataTypes.STRING(10),
    allowNull: true
  },
  InstituteDescription: {
    type: DataTypes.TEXT, 
    allowNull: true
  }
});

module.exports = Institute;