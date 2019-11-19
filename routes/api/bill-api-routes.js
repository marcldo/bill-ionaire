const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const db = require("../../models");

//get all unpaid bills for the month and logged in user
router.get("/unpaid/:id", function (req, res) {
  const month = 11;
  const year = (new Date()).getFullYear();
  db.Bill.findAll({
    where:
      [sequelize.where(sequelize.fn("MONTH", sequelize.col('dueDate')), month),
      sequelize.where(sequelize.fn("YEAR", sequelize.col('dueDate')), year),
      { paid: false }],
    include: [{
      model: db.RecurBill,
      where: {
        UserId: req.params.id
      }
    }]
  })
    .then(function (dbBill) {
      res.json(dbBill);
    })
});

//get all paid bills for the month and logged in user
router.get("/paid/:id", function (req, res) {
  const month = 11;
  const year = (new Date()).getFullYear();
  db.Bill.findAll({
    where:
      [sequelize.where(sequelize.fn("MONTH", sequelize.col('dueDate')), month),
      sequelize.where(sequelize.fn("YEAR", sequelize.col('dueDate')), year),
      { paid: true }],
    include: [{
      model: db.RecurBill,
      where: {
        UserId: req.params.id
      }
    }]
  })
    .then(function (dbBill) {
      res.json(dbBill);
    })
});

//get all overdue bills for the month and logged in user

module.exports = router;