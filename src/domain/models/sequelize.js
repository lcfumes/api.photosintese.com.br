const { Sequelize, DataTypes } = require('sequelize');

const {
  databaseHost,
  databaseUser,
  databasePassword,
  databaseDb
} = process.env

const sequelize = new Sequelize(databaseDb, databaseUser, databasePassword, {
  host: databaseHost,
  dialect: 'mariadb'
})

module.exports = {
  sequelize,
  DataTypes,
  'Model': Sequelize.Model
}
