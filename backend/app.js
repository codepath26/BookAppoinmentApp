  require('dotenv').config();
  const  express = require('express')
  const sequelize = require('./utils/database')
  const cors = require('cors')
  const bodyParser = require('body-parser');
  const userRoutes = require('./routes/user')
  const app = express()
 const  port= process.env.PORT
  app.use(cors());
  app.use(bodyParser.json());
  app.use(userRoutes);
  sequelize.sync()
    .then(() => {
      app.listen(port);
    })
    .catch(error => {
      console.error('Error synchronizing models:', error);
    });
