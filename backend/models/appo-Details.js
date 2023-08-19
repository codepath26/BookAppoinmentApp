const {DataTypes} = require('sequelize')
const sequelize = require('../utils/database');
const  User = sequelize.define(
  'user' , {
    username :{
      type : DataTypes.STRING,
      allowNull : false,
    },
    number :{
      type : DataTypes.INTEGER,
      allowNull : false,
    },
    email :{
      type : DataTypes.STRING,
      allowNull : false,
    },
  });

  module.exports = User;