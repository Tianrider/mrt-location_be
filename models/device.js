const mongoose = require("mongoose");

const deviceSchema = new mongoose.Schema({
	deviceID: {type: String, required: true},
	userID: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: false,
	},
	latitude: {type: String, required: true},
	longitude: {type: String, required: true},
	alert: {type: Boolean, required: true, default: false},
	timeStamp: {type: String, required: true},
});

const Device = mongoose.model("Device", deviceSchema);
module.exports = Device;
