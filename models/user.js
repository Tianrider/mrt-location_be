const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	nama: {type: String, required: true},
	NIK: {type: String, required: true},
	NoHP: {type: String, required: true},
	ktpUrl: {type: String, required: true},
	stasiunAwal: {type: String, required: true},
	stasiunTujuan: {type: String, required: true},
	timeStamp: {type: String, required: true},
	isConnected: {type: Boolean, required: true},
});

const User = mongoose.model("User", userSchema);
module.exports = User;
