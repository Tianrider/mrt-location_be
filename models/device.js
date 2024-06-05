const mongoose = require("mongoose");

const deviceSchema = new mongoose.Schema({
	deviceID: {type: String, required: true},
	userID: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: false,
	},
	magnitude: {type: String, required: true},
	longitude: {type: String, required: true},
	timeStamp: {type: String, required: true},
});

const Device = mongoose.model("Device", deviceSchema);
module.exports = Device;
