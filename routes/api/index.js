const router = require("express").Router();
const reservationRoutes = require("./reservations");

// Book routes
router.use("/reservations", reservationRoutes);


module.exports = router;
