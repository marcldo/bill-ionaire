const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");
const db = require("../../models");
const moment = require("moment");
var bodyParser = require("body-parser");

//load config from .env file
require("dotenv").config();
router.use(bodyParser.urlencoded({ extended: true }));

// Load and initialize MessageBird SDK
//MESSAGE BIRD
router.post("/create", function(req, res) {
  //req variables
  const billDue = moment(req.body.bill.date + " " + "23:59");

  //req backend bill-api-routes
  //use axios to get all the bills for userId 2

  //load and initialize MessageBurd SDK
  const MessageBird = require("messagebird")(process.env.MESSAGEBIRD_API_KEY);

  //schedule reminder 24 hours prior to the bill due date
  const reminderDT = billDue.clone().subtract({ hours: 24 });

  //send scheduled message with MessageBird API
  MessageBird.messaged.create(
    {
      originator: "Billionaire",
      //Normalized phone number from lookup request
      recipients: [res.PHONE],
      scheduledDatetime: reminderDT.format(),
      body:
        req.body.name +
        ", here's a reminder that you have " +
        req.body.bill +
        "due in " +
        billDue.format("HH:mm") +
        ". Thank You! From Billionaire team."
    },
    function(err, response) {
      if (err) {
        //req has failed
        console.log(err);
        res.send("Error occured while sending message!");
      } else {
        //request was successful
        console.log(response);
        //create and persists reminder object
        const reminder = {
          name: req.body.name,
          amount: req.body.amount,
          billDue: billDue.format("Y-MM-DD HH:mm"),
          reminderDT: reminderDT.format("Y-MM-DD HH:mm")
        };
        billionaire.push(reminder);
      }
    }
  );
});

// //start the aaplication

module.exports = router;
