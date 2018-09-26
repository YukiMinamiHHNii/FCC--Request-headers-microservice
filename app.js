const express = require("express"),
			app = express(),
			dotenv = require("dotenv").load()
			requestHeadersRouter = require("./src/routers/requestHeaders");

app.use(express.static(__dirname + "/public"));
app.use("/", express.static(__dirname + "/views"));
app.use("/api/whoami", requestHeadersRouter);

app.listen(process.env.SERVER_PORT);

console.log(`App listening on port ${process.env.SERVER_PORT}`);
