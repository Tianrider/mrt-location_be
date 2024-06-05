const express = require("express");
const router = express.Router();
const User = require("../models/user");
const Device = require("../models/device");
const multer = require("multer");

router.post("/add", multer().none(), async (req, res) => {
	try {
		const {nama, NIK, NoHP, ktpUrl, stasiunAwal, stasiunTujuan} = req.body;
		// find same name user in database with isConnect true
		const user = await User.findOne({nama, isConnected: true});
		if (user) {
			return res.status(400).json({message: "User already connected"});
		}

		const isConnected = true;

		// set timestamp
		const date = new Date();
		const timeStamp = date.toISOString();

		const newUser = new User({
			nama,
			NIK,
			NoHP,
			ktpUrl,
			stasiunAwal,
			stasiunTujuan,
			timeStamp,
			isConnected,
		});

		// set user to a device

		const device = await Device.findOne({userID: null});
		if (!device) {
			return res.status(400).json({message: "No available device"});
		}

		device.userID = newUser._id;
		await device.save();

		await newUser.save();

		const response = {
			message: "User added successfully",
			newUser,
			device,
		};
		res.status(200).json(Response);
	} catch (error) {
		console.error(error);
		res.status(500).json({message: "Internal server error"});
	}
});

router.get("/", async (req, res) => {
	try {
		const users = await User.find();
		res.status(200).json(users);
	} catch (error) {
		console.error(error);
		res.status(500).json({message: "Internal server error"});
	}
});

// set user to disconnected
router.post("/disconnect", multer().none(), async (req, res) => {
	try {
		const {nama} = req.body;
		const user = await User.findOne({nama, isConnected: true});
		if (!user) {
			return res.status(400).json({message: "User not found"});
		}

		user.isConnected = false;

		// set device user to null
		const device = await Device.findOne({userID: user._id});
		device.userID = null;
		await device.save();

		await user.save();

		const response = {
			message: "User disconnected successfully",
			user,
			device,
		};

		res.status(200).json(response);
	} catch (error) {
		console.error(error);
		res.status(500).json({message: "Internal server error"});
	}
});

module.exports = router;
