/**
 * Created by batur on 2017/1/29.
 */
const Sequelize = require('sequelize');
//const sequelize = require('../config/db-config');
const sequelize = require('./base');

var User = sequelize.define('fun', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: Sequelize.STRING(100),
  passowrd: Sequelize.STRING(20)
},
  {timestamps: false}
  );
module.exports = User;




