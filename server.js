const express = require('express');

const authRoutes = require('./routes/api/authRoutes');

const app = express();

// app.use('/', (req, res) => {
//   res.send('Hello World');
// });

app.use('/auth/google', authRoutes);

const port = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log(`Express server listening on ${port}`);
});
