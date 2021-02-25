const router = require("express").Router();
const reservationController = require("../../controllers/reservationController");

// Matches with "/api/books"
router
  .route("/")
    .post(reservationController.create)
    .get(reservationController.findAll)
    .delete(reservationController.remove);


// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(reservationController.findById)
  .put(reservationController.update)
  .delete(reservationController.remove);

module.exports = router;
