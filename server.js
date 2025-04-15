const express = require('express');
const dotenv = require('dotenv');
const instituteRoutes = require('./routes/instituteRoutes');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const sequelize = require('./config/db');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Test Series Backend is Running 🚀');
});


app.use('/api/institute', instituteRoutes);

sequelize.authenticate()
  .then(() => {
    console.log('Database connected successfully 🎉');
  })
  .catch(err => {
    console.error('Database connection failed ❌', err);
  });


sequelize.sync({ force: false }).then(() => {
    console.log('Database synced!');
  }).catch(err => {
    console.error('Unable to sync the database:', err);
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});