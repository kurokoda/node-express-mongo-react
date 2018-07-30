import path from 'path';
import express from 'express'

const route      = '*';
const router = express.Router();

// auth:login -------------------------------------------------------------------

router.get(route, (req, res) => {
  res.sendFile(path.join(__dirname, '../../../client/build', 'index.html'));
});

// exports -------------------------------------------------------------------

module.exports = router;
