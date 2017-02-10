/**
 * Created by batur on 2017/1/29.
 */
const Sequelize = require('sequelize');
const sequelize = require('../app');

var User = sequelize.define('user', {
  id: {
    type: Sequelize.STRING(50),
    primaryKey: true
  },
  name: Sequelize.STRING(100)
},
  {
    timestamps: true
  });
module.exports = User;




