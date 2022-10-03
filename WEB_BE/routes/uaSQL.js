const express = require("express");
const router = express.Router();
const { userAccount: ua, userInfo: ui } = require("../models");

// 유저 전체 조회
router.get("/", (req, res, next) => {
  ua.findAll()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
  ui.findAll()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

// 유저 등록
router.post("/", (req, res, next) => {
  ua.create({
    identifier: req.body.identifier,
    password: req.body.password,
  })
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
  ui.create({
    identifier: req.body.identifier,
    category: req.body.category,
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    organization: req.body.email || null,
    address: req.body.address || null,
  })
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.error(err);
      next(err);
    });
});

module.exports = router;
