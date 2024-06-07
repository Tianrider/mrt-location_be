const Device = require("../models/device");
const User = require("../models/user");
const express = require("express");
const router = express.Router();
const multer = require("multer");

// Get device details
router.get("/:deviceID", async (req, res) => {
	const device = await Device.findOne({deviceID: req.params.deviceID});
	if (!device) return res.status(404).send("Device not found.");
	res.send(device);
});

router.get("/", async (req, res) => {
	const devices = await Device.find();
	res.send(devices);
});

// update device coordinates
router.post("/update", multer().none(), async (req, res) => {
	const {deviceID, latitude, longitude, alert} = req.body;
	const device = await Device.findOne({deviceID});
	if (!device) return res.status(404).send("Device not found.");
	device.latitude = latitude;
	device.longitude = longitude;
	device.alert = alert;
	// edit device timestamp
	const date = new Date();
	device.timeStamp = date.toISOString();
	await device.save();
	res.status(200).send(device);
});

// add new device, set UserID to null
router.post("/", multer().none(), async (req, res) => {
	const {deviceID, latitude, longitude} = req.body;

	const dupDevice = await Device.findOne({deviceID});
	if (dupDevice) return res.status(400).send("Device already exists.");

	const date = new Date();
	const timeStamp = date.toISOString();
	const device = new Device({deviceID, latitude, longitude, timeStamp});
	await device.save();
	res.status(200).send(device);
});

module.exports = router;
