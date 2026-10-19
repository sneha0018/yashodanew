const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  dob: { type: Date, required: true },
  pan: { type: String, required: true },
  country: { type: String, required: true },
  address: { type: String, required: true },
  pincode: { type: String, required: true },
  amount: { type: Number, required: true },
  contact: { type: String, required: true },
  orderId: { type: String, required: true },
  paymentId: { type: String, default: null },  // ✅ Make paymentId optional
  paymentDate: { type: Date, default: null },
  status: { type: String, enum: ["PENDING", "SUCCESS"], default: "PENDING" }
});

module.exports = mongoose.model("Donation", donationSchema);
