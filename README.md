# File Upload-Download System
This project demonstrates a Node.js-based file management system that supports file uploading, listing, deleting, and downloading functionalities.

## Features
- **File Upload**
- **File Download**
- **File Listing**
- **File Deleting**

### Installation
git clone https://github.com/muhammedaliuyanik/node-file-manager.git
cd node-file-manager
npm install
npm start

## Project Structure
node-file-manager/
├── controllers/
│   └── fileController.js   # Business logic for file operations
├── middlewares/
│   └── upload.js           # Multer configuration for file uploads
├── models/
│   └── file.js             # MongoDB schema for file metadata
├── routes/
│   └── files.js            # API routes for file management
├── server.js               # Main entry point for the application
└── .env                    # Environment variables

Express: A web framework for building API endpoints for file downloading, listing, and deleting.
Multer: Middleware for handling file uploads.
Mongoose: A library for working with MongoDB and defining schemas.
dotenv: Loads environment variables from a .env file.
