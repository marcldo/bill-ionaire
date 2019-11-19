const express = require("express");
const router = express.Router();

const authRoutes = require("./auth");
const billRoutes = require("./bill-api-routes");

router.use("/bills", billRoutes);
router.use("/", authRoutes);
// TODO feel free to add your other routes here...
// eg. /api/admin -> router.use("/admin", adminRoutes);

module.exports = router;
