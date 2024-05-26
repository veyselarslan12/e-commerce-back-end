const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
const init = async () => {
  await sequelize.sync({ force: false })
  console.log('DB connected!')

  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
  
}

init();

