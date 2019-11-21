// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");
// Requiring passport as we've configured it
const path = require("path");
const passport = require("./config/passport");
// node scheduler
const schedule = require("node-schedule");

//moment recur
const moment = require("moment");
require("moment-recur");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 5050;
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("client/build"));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Requiring our API routes
app.use(require("./routes"));

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

function createNextBills() {
  db.RecurBill.findAll({}).then(dbRecurBills => {
    for (let recurBill of dbRecurBills) {
      const startDate = recurBill.startDate;

      // weekly, biweekly, monthly, quarterly, semi-annual, annual
      let recurrence = moment(startDate).recur();

      switch (recurBill.frequency) {
        case "weekly":
          recurrence = recurrence.every(1).weeks();
          break;
        case "bi-weekly":
          recurrence = recurrence.every(2).weeks();
          break;
        case "quarterly":
          recurrence = recurrence.every(3).months();
          break;
        case "semi-annually":
          recurrence = recurrence.every(6).months();
          break;
        case "annually":
          recurrence = recurrence.every(1).year();
          break;
        case "monthly":
        default:
          recurrence = recurrence.every(1).month();
          break;
      }

      recurrence.fromDate(moment().format("YYYY-MM-DD"));

      // Outputs: ["02/06/2014", "02/08/2014", "02/10/2014"]
      let nextDates;

      nextDates = recurrence.next(4, "YYYY-MM-DD");

      for (let i = 0; i < nextDates.length; i++) {
        let nextDate = nextDates[i];

        db.Bill.findOrCreate({
          where: { dueDate: nextDate, RecurBillId: recurBill.id },
          defaults: { amount: recurBill.amount, paid: false }
        });
      }
    }
  });
}

// const j = schedule.scheduleJob("* * * * *", createNextBills);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
