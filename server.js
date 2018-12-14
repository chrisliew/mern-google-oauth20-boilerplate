const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');

const keys = require('./config/keys');

require('./models/User');
require('./service/passport');

const authRoutes = require('./routes/api/authRoutes');

mongoose.connect(keys.mongoURL);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/', authRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Express server listening on ${port}`);
});
