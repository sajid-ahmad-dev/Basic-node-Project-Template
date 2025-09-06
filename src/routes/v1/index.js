const express = require("express");
const { InfoController } = require("../../controllers");

const AirplaneRoutes = require("./airplaneRoutes");
const router = express.Router();
router.use("/airplanes", AirplaneRoutes);

router.get("/info", InfoController.infoController);

module.exports = router;
