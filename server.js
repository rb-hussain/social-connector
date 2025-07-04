const express = require('express');
const connectDB = require('./config/db');
const app = express();

//connect to MongoDB
connectDB();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
//connect routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth')); 
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/post', require('./routes/api/post'));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Server is running on port 5000');
});