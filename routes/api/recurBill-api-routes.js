const express = require("express");
const router = express.Router();

const db = require("../../models");

// GET route for getting all of the bills
router.get("/api/recurbills", function(req, res) {
  var query = {};
  if (req.query.UserId) {
    query.UserId = req.query.UserId;
  }
  db.RecurBill.findAll({
    where: query
  }).then(function(dbRecurBill) {
    res.json(dbRecurBill);
  });
});

//GET route for retrieving all recurring bill for one user
router.get("/api/recurbills/:id", function(req, res) {
  db.RecurBill.findAll({
    where: {
      userId: req.params.id
    }
  }).then(function(dbRecurBill) {
    console.log(dbRecurBill);
    res.json(dbRecurBill);
  });
});

//GET route for retrieving a single recurring bill
router.get("/api/recurbills/:id", function(req, res) {
  db.RecurBill.findOne({
    where: {
      id: req.params.id
    }
  }).then(function(dbRecurBill) {
    console.log(dbRecurBill);
    res.json(dbRecurBill);
  });
});

//POST route for saving a new recurring bill
router.post("/api/recurbills", function(req, res) {
  console.log("route hit");
  db.RecurBill.create(req.body)
    .then(function(dbRecurBill) {
      res.json(dbRecurBill);
    })
    .catch(err => console.log(err));
});

// DELETE route for deleting recurring bills
router.delete("/api/recurbills/:id", function(req, res) {
  db.RecurBill.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(dbRecurBill) {
    res.json(dbRecurBill);
  });
});

//PUT route for updating recurring
router.put("/api/posts", function(req, res) {
  db.RecurBill.update(req.body, {
    where: {
      id: req.body.id
    }
  }).then(function(dbRecurBill) {
    res.json(dbRecurBill);
  });
});

module.exports = router;
