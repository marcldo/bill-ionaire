const express = require("express");
const router = express.Router();
const recurBillsRoutes = require("./recurBill-api-routes");
const authRoutes = require("./auth");

router.use("/recurbills", recurBillsRoutes);
router.use("/", authRoutes);
// TODO feel free to add your other routes here...
// eg. /api/admin -> router.use("/admin", adminRoutes);

module.exports = router;
