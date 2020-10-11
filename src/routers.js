const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');
const multerConfig = require('./config/multer.js');

router.use(express.static(path.join(__dirname, '..', 'public')));
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post('/uploads', multer(multerConfig).single('file'), async (req, res) => {
  console.log(req.file);
  res.json({message: 'Ok'});
});

module.exports = router;
