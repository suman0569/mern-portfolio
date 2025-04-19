const express = require('express');
require('dotenv').config(); // 👈 Add this
const mongoose = require('mongoose');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const PORT = 5000;

const MONGODB_URI = 'mongodb+srv://chysuman709:Xp3omR71CGqORipy@test-pro-db.wu9lb.mongodb.net/test-pro-db?retryWrites=true&w=majority&appName=test-pro-db';


app.use(cors());
app.use(express.json());

app.use('/api/contact', contactRoutes);

// Mongoose connect (you can remove the deprecated options now)
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB atlas here we go...');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => console.error('MongoDB connection error:', err));
