const express = require("express");
const router = express.Router();

const db = require("../../models");
var isAuthenticated = require("../../config/middleware/isAuthenticated");

// GET route for getting all of the bills
router.get("/", isAuthenticated, function (req, res) {
  var query = {};
  if (req.query.UserId) {
    query.UserId = req.query.UserId;
  }
  db.RecurBill.findAll({
    where: query
  }).then(function (dbRecurBill) {
    res.json(dbRecurBill);
  });
});

//GET route for retrieving all recurring bill for one user
router.get("/:id", isAuthenticated, function (req, res) {
  db.RecurBill.findAll({
    where: {
      UserId: req.user.id,
      isActive: true
    }
  }).then(function (dbRecurBill) {
    res.json(dbRecurBill);
  });
});

// //GET route for retrieving a single recurring bill
// router.get("/api/recurbills/:id", function(req, res) {
//   db.RecurBill.findOne({
//     where: {
//       id: req.params.id
//     }
//   }).then(function(dbRecurBill) {
//     console.log(dbRecurBill);
//     res.json(dbRecurBill);
//   });
// });

//POST route for saving a new recurring bill
router.post("/create", isAuthenticated, function (req, res) {
  db.RecurBill.create(req.body)
    .then(function (dbRecurBill) {
      res.json(dbRecurBill);
    })
    .catch(err => {
      console.error(err)
      res.status(400).json(err)
    });
});

// DELETE route for deleting recurring bills
router.delete("/:id", function (req, res) {
  db.RecurBill.destroy({
    where: {
      id: req.params.id
    }
  }).then(function (dbRecurBill) {
    res.json(dbRecurBill);
  });
});

// update route for updating recurring bills
router.put("/:id", function (req, res) {
  console.log("put hit")
  db.RecurBill.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then(function (dbRecurBill) {
    res.json(dbRecurBill)
  });
});



module.exports = router;
