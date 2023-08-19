const Sequelize = require('sequelize');
const sequelize = new Sequelize('bookappointmentcsr' , 'root','Parth@Sagar26',{
  host : 'localhost',
  dialect : 'mysql' ,
})

module.exports = sequelize;