const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { PORT, URL } = require('./config');
const authRoutes = require('./routes/auth-routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(authRoutes);

mongoose
  .connect(URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(`DB connecting error: ${err}`));

app.listen(PORT, (err) => {
  err ? console.log(`Server started on ${PORT}`) : console.log(`Server started on ${PORT}`);
});
