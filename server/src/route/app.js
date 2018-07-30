import express from 'express';

const route  = '/app/';
const router = express.Router();

router.get(`${route}ping`, (req, res) => {
  res.status(200).send(JSON.stringify('Ping: success'));
});

// exports -------------------------------------------------------------------

module.exports = router;
