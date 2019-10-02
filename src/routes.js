const express = require("express");
const SessionController = require("./constrollers/SessionController");
const SpotController = require("./constrollers/SpotController");
const DashboardController = require("./constrollers/DashboardController");
const BookingController = require("./constrollers/BookingController");

const multer = require("multer");
const uploadConfig = require("./config/upload");

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post("/sessions", SessionController.store);
routes.get("/spots", SpotController.index);
routes.post("/spots", upload.single("thumbnail"), SpotController.store);
routes.get("/dashboard", DashboardController.show);
routes.post("/spots/:spot_id/bookings", BookingController.store);

module.exports = routes;
