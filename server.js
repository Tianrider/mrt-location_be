const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const os = require("os");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

const uri =
	"mongodb+srv://hadiwijayachristian7:uXj9nmxGabUkMnG8@mrt-location.evlwfff.mongodb.net/?retryWrites=true&w=majority&appName=mrt-location";

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

// get the local IP address
function getLocalIp() {
	const networkInterfaces = os.networkInterfaces();
	const wifiInterface =
		networkInterfaces["Wi-Fi"] || networkInterfaces["wlan0"]; // Adjust as needed
	if (wifiInterface) {
		const wifiIpv4 = wifiInterface.find((iface) => iface.family === "IPv4");
		return wifiIpv4 ? wifiIpv4.address : null;
	}
	return null;
}

const localIp = getLocalIp();

app.listen(port, () => {
	console.log(`Server is running on port: http://localhost:${port}`);
	console.log(`Server is running on port: http://${localIp}:${port}`);
	console.log("CTRL + C to stop the server");
});
