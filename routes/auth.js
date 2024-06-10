const express = require("express");
const router = express.Router();
const Bcrypt = require("bcryptjs");
const Admin = require("../models/admin");
const multer = require("multer");

router.post("/login", multer().none(), async (req, res) => {
	const {email, password} = req.body;
	const user = await Admin.findOne({email});
	if (!user) {
		return res.status(400).json({message: "User not found"});
	}

	const validPassword = Bcrypt.compareSync(password, user.password);
	if (!validPassword) {
		return res.status(400).json({message: "Invalid password"});
	}

	res.status(200).json({message: "Login successful"});
});

router.get("/", async (req, res) => {
	const users = await Admin.find();
	res.status(200).json(users);
});

router.post("/change-pass", multer().none(), async (req, res) => {
	const {email, oldPassword, newPassword} = req.body;
	const user = await Admin.findOne({email});
	if (!user) {
		return res.status(400).json({message: "User not found"});
	}

	const validPassword = Bcrypt.compareSync(oldPassword, user.password);
	if (!validPassword) {
		return res.status(400).json({message: "Invalid password"});
	}

	const salt = Bcrypt.genSaltSync(10);
	const hashedPassword = Bcrypt.hashSync(newPassword, salt);
	user.password = hashedPassword;
	await user.save();
	res.status(200).json({message: "Password changed"});
});

module.exports = router;
