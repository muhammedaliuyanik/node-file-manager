//file upload and download process.
const File = require('../models/fileModel');
const path = require('path');

exports.uploadFile = async (req, res) => {
  try {
    const file = new File({
      filename: req.file.filename,
      originalname: req.file.originalname,
      mimetype: req.file.mimetype,
      size: req.file.size,
    });

    await file.save();
    res.status(201).send({ message: 'File uploaded successfully', file });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.downloadFile = async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    if (!file) {
      return res.status(404).send({ message: 'File not found' });
    }
    const filePath = path.join(__dirname, '../uploads', file.filename);
    res.download(filePath, file.originalname);
  } catch (err) {
    res.status(500).send(err);
  }
};
