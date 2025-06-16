const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Seeding = sequelize.define('Seeding', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  seeding_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cultivation: {
    type: DataTypes.STRING,
    allowNull: false
  },
  used_consumables: {
    type: DataTypes.STRING,
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'seeding',
  timestamps: false
});

module.exports = Seeding