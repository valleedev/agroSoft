const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Tool = sequelize.define('Tool', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  reference: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false
  },
  buy_date: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  tableName: 'tools',
  timestamps: false
});

module.exports = Tool