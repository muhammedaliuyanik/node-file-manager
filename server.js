const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const config = require('./config/config');

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(config.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Welcome to the File Download System API!');
});

const fileRoutes = require('./routes/fileRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/api/files', fileRoutes);
app.use('/api/users', userRoutes);

app.use('/uploads', express.static('uploads'));

const PORT = config.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
