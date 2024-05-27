const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const calculatorRoutes = require('./routes/calculator');
require('dotenv').config();

const app = express();
const PORT = 3000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB bağlantısı başarılı'))
    .catch(err => console.error('MongoDB bağlantısı hatası:', err));

app.use(bodyParser.json());
app.use('/api', calculatorRoutes);

app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor`);
});
