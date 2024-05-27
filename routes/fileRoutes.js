//ways related to file operations.

const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fileController = require('../controllers/fileController');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads'));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post('/upload', upload.single('file'), fileController.uploadFile);
router.get('/download/:id', fileController.downloadFile);

module.exports = router;
