import express from 'express';
import {
  login,
  logout,
  signup
} from '../controller/auth';

const route  = '/auth/';
const router = express.Router();

// auth:login -------------------------------------------------------------------

router.post(`${route}login`, (req, res) => {
  login(req, res);
});

// auth:logout -------------------------------------------------------------------

router.get(`${route}logout`, (req, res) => {
  logout(req, res);
});

// signup -------------------------------------------------------------------

router.post(`${route}signup`, (req, res) => {
  signup(req, res)
});

// exports -------------------------------------------------------------------

module.exports = router;
