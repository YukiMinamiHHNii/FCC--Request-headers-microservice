const express = require("express"),
			router = express.Router(),
			requestHeadersController = require("../controllers/requestHeadersController");

router.get("/", requestHeadersController.index);

module.exports = router;
