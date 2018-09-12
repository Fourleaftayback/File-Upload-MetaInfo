const express = require('express');
const multer = require('multer');

const upload = multer({ dest: './uploads' });
const fs = require('fs');

const router = express.Router();

router.post('/api/fileanalyse', upload.any(), function(req, res) {
  
  res.json({
    name: req.files[0].originalname,
    type: req.files[0].mimetype,
    size: req.files[0].size
  })
  
  fs.unlink(req.files[0].path, (err) => {
    if (err) throw err;
    console.log('deleted');
  })
});

module.exports = router;