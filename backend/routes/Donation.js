const express = require('express');
const router = express.Router();
const Razorpay = require("razorpay");
const Donation = require('../models/Donation')
const crypto = require('crypto');

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

router.post("/create-order", async (req, res) => {
    try {
      const { name, email, dob, pan, country, address, pincode, amount, contact } = req.body;
  
      // Create Razorpay order
      const options = {
        amount: amount * 100, // Convert to paisa
        currency: "INR",
        receipt: `donation_${Date.now()}`
      };
      const order = await razorpay.orders.create(options);
  
      // Save initial donation details (without payment ID)
      const newDonation = new Donation({
        name, email, dob, pan, country, address, pincode, amount, contact,
        orderId: order.id,
        status: "PENDING"
      });
      await newDonation.save();
  
      res.json({ success: true, orderId: order.id, key: process.env.RAZORPAY_KEY_ID });
    } catch (error) {
      console.error("Order Creation Error:", error);
      res.status(500).json({ success: false, message: "Server Error" });
    }
  });
  
  // ✅ 2️⃣ Verify Payment API
  router.post("/verify-payment", async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

        // Generate expected signature
        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(`${razorpay_order_id}|${razorpay_payment_id}`)
            .digest("hex");

        if (expectedSignature !== razorpay_signature) {
            return res.status(400).json({ success: false, message: "Invalid Payment Signature" });
        }

        // Update donation with payment ID
        const updatedDonation = await Donation.findOneAndUpdate(
            { orderId: razorpay_order_id }, 
            
            { paymentId: razorpay_payment_id, paymentDate: new Date(), status: "SUCCESS" },
            { new: true }
        );

        if (!updatedDonation) {
            return res.status(404).json({ success: false, message: "Donation record not found" });
        }

        res.json({ success: true, message: "Payment Verified", paymentId: razorpay_payment_id });
    } catch (error) {
        console.error("Payment Verification Error:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
});

router.get('/donation-list', async (req, res) => {
    try {
        const donations = await Donation.find();
        
        if (!donations.length) {
            return res.status(404).json({ message: "No donations found" });
        }

        res.status(200).json(donations);
    } catch (error) {
        console.error("Error fetching donations:", error.message);
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

  module.exports = router;