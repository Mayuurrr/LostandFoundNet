// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const jwt = require('jsonwebtoken');

const itemRoutes = require('./routes/items');
const authRoutes = require('./routes/auth');

const authMiddleware = (req, res, next) => {
  const token = req.header('x-auth-token');

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/items', itemRoutes);
app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI, {
 
}).then(() => {
  console.log('✅ MongoDB Connected');
  app.listen(5000, () => console.log('Server running on port 5000'));
}).catch(err => console.log(err));
