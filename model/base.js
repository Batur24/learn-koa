/**
 * Created by batur on 2017/2/14.
 */
const Sequelize = require('sequelize');
const dbConfig = require('../config/db-config')

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 3000
    }
  });

module.exports = sequelize;
