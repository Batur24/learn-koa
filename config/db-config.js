
const Sequelize = require('sequelize');

const config = {
	database: "test",
	username: "root",
	password: "123456",
	host:	    "localhost",
	port: 	  "3306"
};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 3000
    }
  });

module.exports = sequelize;
