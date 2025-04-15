const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
  UserId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  Password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Role: {
    type: DataTypes.STRING,
    allowNull: false
  },
  IsActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  tableName: 'Users',
  timestamps: true, 
  paranoid: true  
});

module.exports = User;
