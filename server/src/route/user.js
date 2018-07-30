import express from 'express';
import controller from '../controller/user';

const route      = '/api/user/';
const router     = express.Router();

// create -------------------------------------------------------------------
router.post(`${route}`, (req, res) => {
  controller.create(req, res);
});

// read -------------------------------------------------------------------
router.get(`${route}:id`, (req, res) => {
  controller.read(req, res);
});

// update -------------------------------------------------------------------
router.patch(`${route}:id`, (req, res) => {
  controller.update(req, res);
});

// destroy -------------------------------------------------------------------
router.delete(`${route}:id`, (req, res) => {
  controller.destroy(req, res);
});

// list -------------------------------------------------------------------
router.get(`${route}`, (req, res) => {
  controller.list(req, res);
});

// update profile -------------------------------------------------------------------
router.patch(`${route}profile`, (req, res) => {
  controller.updateProfile(req, res);
});

// update password -------------------------------------------------------------------
router.patch(`${route}password`, (req, res) => {
  controller.updatePassword(req, res);
});

// exports -------------------------------------------------------------------

module.exports = router;
