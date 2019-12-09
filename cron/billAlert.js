const moment = require("moment");
const db = require("../models");
//load and initialize MessageBurd SDK
const MessageBird = require("messagebird")(process.env.MESSAGEBIRD_API_KEY);
const originator = process.env.MESSAGEBIRD_ORIGINATOR;
console.log(process.env.MESSAGEBIRD_ORIGINATOR);

module.exports = function () {
  const tomorrow = moment(new Date())
    .add(1, "days")
    .format("YYYY-MM-DD");

  db.Bill.findAll({
    where: { dueDate: tomorrow, paid: false },
    include: [{
      model: db.RecurBill,
      where: {
        isActive: true
      }
    }]
  }).then(function (tmrwBills) {
    for (let bill of tmrwBills) {
      console.log(originator)

      MessageBird.messages.create(
        {
          originator,
          //Normalized phone number from lookup request
          recipients: [originator],
          //   scheduledDatetime: reminderDT.format(),
          body: `Hey! This is a friendly reminder that you have your ${bill.RecurBill.name} bill $${bill.amount} due tomorrow. Please remember to pay your bill on time! Thank You! From The Billionaire team.`
        },
        function (err, response) {
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