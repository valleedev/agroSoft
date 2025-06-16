const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const Collaborator = sequelize.define('Collaborator', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  identification: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  charge: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contact: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'collaborators',
  timestamps: false
});

module.exports = Collaborator