const express = require("express");
const router = express.Router();

const db = require("../../models")

// GET route for getting all of the bills
router.get("/api/posts", function (req, res) {
  var query = {};
  if (req.query.UserId) {
    query.UserId = req.query.UserId;
  }
  db.RecurBills.findAll({
    where: query
  }).then(function (dbRecurBill) {
    res.json(dbRecurBill);
  });
});

//GET route for retrieving a single recurring bill
router.get("/api/recurbills/:id", function (req, res) {
  db.RecurBills.findOne({
    where: {
      id: req.params.id
    }
  }).then(function (dbRecurBill) {
    console.log(dbRecurBill);
    res.json(dbRecurBill);
  });
});


//POST route for saving a new recurring bill
router.post("/api/recurbills/:id", function (req, res) {
  db.RecurBills.create(req.body)
    .then(function (dbRecurBill) {
      res.json(dbRecurBill);
    });
});

// DELETE route for deleting recurring bills
router.delete("/api/recurbills/:id", function (req, res) {
  db.RecurBills.destroy({
    where: {
      id: req.params.id
    }
  }).then(function (dbRecurBill) {
    res.json(dbRecurBill);
  });
});

//PUT route for updating recurring 
router.put("/api/posts", function (req, res) {
  db.RecurBills.update(
    req.body,
    {
      where: {
        id: req.body.id
      }
    }).then(function (dbRecurBill) {
      res.json(dbRecurBill);
    });
});

module.exports = router;