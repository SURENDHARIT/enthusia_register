const express = require("express");

const router = express.Router();

const eventController = require("../controllers/eventController");

const isAuthenticated = require("../utils/auth");

router.get("/", eventController.getLogin);

router.post("/login", eventController.postLogin);

router.post("/event", isAuthenticated, eventController.postParticipant);

router.post("/event-edit", isAuthenticated, eventController.postEventAdd);
router.get("/event-display", isAuthenticated, eventController.postEventDisplay);

router.get("/logout", isAuthenticated, eventController.getLogout);

module.exports = router;
