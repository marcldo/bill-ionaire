const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const Op = sequelize.Op
const db = require("../../models");

//get all unpaid bills for the month and logged in user
router.get("/unpaid/:id/:month/:year", function (req, res) {

  db.Bill.findAll({
    where:
      [sequelize.where(sequelize.fn("MONTH", sequelize.col('dueDate')), req.params.month),
      sequelize.where(sequelize.fn("YEAR", sequelize.col('dueDate')), req.params.year),
      { paid: false }],
    include: [{
      model: db.RecurBill,
      where: {
        UserId: req.params.id
      }
    }]
  })
    .then(function (unpaidBills) {

      res.json(unpaidBills.map(bill => bill.toJSON()));
    })
});

//get all paid bills for the month and logged in user
router.get("/paid/:id/:month/:year", function (req, res) {

  db.Bill.findAll({
    where:
      [sequelize.where(sequelize.fn("MONTH", sequelize.col('dueDate')), req.params.month),
      sequelize.where(sequelize.fn("YEAR", sequelize.col('dueDate')), req.params.year),
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
router.get("/overdue/:id", function (req, res) {
  const year = (new Date()).getFullYear();
  db.Bill.findAll({
    where:
      [{
        dueDate: {
          [Op.lt]: new Date()
        }
      },
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

router.put("/:id", function (req, res) {
  console.log()
  db.Bill.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(function (dbBill) {
    res.json(dbBill);
  });
});



router.get("/history/:id", function (req, res) {
  db.Bill.findAll({
    where:
      [{
        dueDate: {
          [Op.lt]: new Date()
        }
      },
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
module.exports = router;