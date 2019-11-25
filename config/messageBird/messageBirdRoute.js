//load dependencies
const moment = require("moment");
const axios = require ("axios");

//req variables
const reminderDT = moment(req.body.rec+" "+req.body.time);

//load config from .env file
require("dotenv").config();
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
    recipients: [response.PHONE],
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
      response.send("Error occured while sending message!");
    } else {
      //request was successful
      console.log(response);
      //create and persists appointment object
      const reminder = {
        name: req.body.name,
        amount: req.body.amount,
        billDue: billDue.format("Y-MM-DD HH:mm"),
        reminderDT: reminderDT.format("Y-MM-DD HH:mm")
      };
      reminderDatabase.push(reminder);
    }
  }
);
//start the aaplication
app.listen(5050);
