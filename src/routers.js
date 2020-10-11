const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const multerConfig = require('./config/multer.js');

router.use(express.static(path.join(__dirname, '..', 'public')));
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post('/uploads', multer(multerConfig).array('file', 100), async (req, res) => {
  console.log(req.files);
  res.json({files: [req.files]});
});

module.exports = router;
