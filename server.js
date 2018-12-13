const express = require('express');

const authRoutes = require('./routes/api/authRoutes');

const app = express();

app.use('/auth/google', authRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Express server listening on ${port}`);
});
