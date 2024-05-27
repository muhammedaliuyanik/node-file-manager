// server.js (dedicate configration and route) =>  routes => controller => database => middleware => public

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// .env dosyasını yükle
dotenv.config();

const app = express();
app.use(bodyParser.json());

// MongoDB bağlantısı
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {});
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

connectDB();

// API rotalarını içe aktarın
const fileRoutes = require('./routes/fileRoutes');

// API rotalarını kullanın
app.use('/api/files', fileRoutes);

// Yükleme klasörünü statik dosya olarak sunun
app.use('/uploads', express.static('uploads'));

// Sunucuyu başlatın
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
