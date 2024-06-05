const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

const uri = process.env.MONGO_URI;

mongoose.connect(uri);
const connection = mongoose.connection;
connection.on("error", console.error.bind(console, "connection error:"));
connection.once("open", () => {
	console.log("MongoDB database connection established successfully");
});

const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const deviceRouter = require("./routes/device");

app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/device", deviceRouter);

app.listen(port, () => {
	console.log(`Server is running on port: http://localhost:${port}`);
});
