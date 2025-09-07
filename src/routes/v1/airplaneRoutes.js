const express = require("express");
const { AirplaneController } = require("../../controllers");
const { AirplaneMiddlewares } = require("../../middlewares");

const router = express.Router();

router.post(
  "/",
  AirplaneMiddlewares.validcreateRequest,
  AirplaneController.createAirplane
);

module.exports = router;
