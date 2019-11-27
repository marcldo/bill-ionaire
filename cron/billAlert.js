const moment = require("moment");
const db = require("../models");
//load and initialize MessageBurd SDK
const MessageBird = require("messagebird")(process.env.MESSAGEBIRD_API_KEY);
const originator = process.env.MESSAGEBIRD_ORIGINATOR;

module.exports = function() {
  console.log("MEOW");
  const tomorrow = moment(new Date())
    .add(1, "days")
    .format("YYYY-MM-DD");

  db.Bill.findAll({
    where: { dueDate: tomorrow, paid: false }
  }).then(function(tmrwBills) {
    for (let bill of tmrwBills) {
      //send scheduled message with MessageBird API
      MessageBird.messaged.create(
        {
          originator: "Billionaire",
          //Normalized phone number from lookup request
          recipients: [originator],
          //   scheduledDatetime: reminderDT.format(),
          body: `${bill.amount}name +
        , here's a reminder that you have
        req.body.bill 
        due in
        billDue.format("HH:mm")
        . Thank You! From Billionaire team.`
        },
        function(err, response) {
          if (err) {
            //req has failed
            console.error(err);
            // res.send("Error occured while sending message!");
          } else {
            //request was successful
            console.log(response);
          }
        }
      );
    }
  });
};
