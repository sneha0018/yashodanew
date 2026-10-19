const express = require('express');
const router = express.Router();
const Internship = require('../models/Internship'); // Import Internship model
const nodemailer = require("nodemailer");
const multer = require("multer");

// ✅ Create Internship (POST)
router.post('/internships', async (req, res) => {
    try {
        const { jobTitle, salary } = req.body;
        if (!jobTitle || !salary) {
            return res.status(400).json({ error: 'Job title and salary are required' });
        }
        const newInternship = new Internship({ jobTitle, salary });
        await newInternship.save();
        res.status(201).json({ message: 'Internship created successfully', internship: newInternship });
    } catch (error) {
        res.status(500).json({ error: 'Error creating internship', details: error.message });
    }
});

// ✅ Get All Internships (GET)
router.get('/internships', async (req, res) => {
    try {
        const internships = await Internship.find();
        res.status(200).json(internships);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching internships', details: error.message });
    }
});

// ✅ Delete Internship (DELETE)
router.delete('/internships/:id', async (req, res) => {
    try {
        const internship = await Internship.findByIdAndDelete(req.params.id);
        if (!internship) {
            return res.status(404).json({ error: 'Internship not found' });
        }
        res.status(200).json({ message: 'Internship deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting internship', details: error.message });
    }
});

// ✅ Update Internship (PUT)
router.put('/internships/:id', async (req, res) => {
    try {
        const { jobTitle, salary } = req.body;
        if (!jobTitle || !salary) {
            return res.status(400).json({ error: 'Job title and salary are required' });
        }
        const updatedInternship = await Internship.findByIdAndUpdate(
            req.params.id,
            { jobTitle, salary },
            { new: true } // Return the updated document
        );
        if (!updatedInternship) {
            return res.status(404).json({ error: 'Internship not found' });
        }
        res.status(200).json({ message: 'Internship updated successfully', internship: updatedInternship });
    } catch (error) {
        res.status(500).json({ error: 'Error updating internship', details: error.message });
    }
});

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/send-email", upload.fields([{ name: "resume" }, { name: "supportingDocuments" }]), async (req, res) => {
    try {
      const { name, email, contact, address, pincode, country, applicationType, date, availableDuration, commitmentDuration, skills, experience, educational, volunteerIntern, platformSelect } = req.body;
      
      // Ensure 'interests' is always an array
      let interestsArray = [];
      if (typeof req.body.interests === "string") {
        interestsArray = JSON.parse(req.body.interests); // Parse if it's a stringified array
      } else if (Array.isArray(req.body.interests)) {
        interestsArray = req.body.interests; // Directly use if it's already an array
      }

      let attachments = [];
      if (req.files["resume"]) {
        attachments.push({
          filename: req.files["resume"][0].originalname,
          content: req.files["resume"][0].buffer,
        });
      }
      if (req.files["supportingDocuments"]) {
        attachments.push({
          filename: req.files["supportingDocuments"][0].originalname,
          content: req.files["supportingDocuments"][0].buffer,
        });
      }
  
      // Configure SMTP instead of Gmail
      const transporter = nodemailer.createTransport({
        host: "mail.yashodaect.org", // Replace with your SMTP host
        port: 465, // Use 465 for SSL or 587 for TLS
        secure: true, // true for 465, false for 587
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
  
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "support@yashodaect.org", // Replace with the target email
        subject: "New Application Submission",
        text: `
        Name: ${name}
        Email: ${email}
        Contact: ${contact}
        Address: ${address}
        Pincode: ${pincode}
        Country: ${country}
        Applying for: ${applicationType}
        Preferred Start Date: ${date}
        Available Hours per Week: ${availableDuration}
        Commitment Duration: ${commitmentDuration}
        Skills: ${skills}
        Experience: ${experience}
        Educational Background: ${educational}
        Interests: ${interestsArray.length > 0 ? interestsArray.join(", ") : "Not specified"}
        Motivation: ${volunteerIntern}
        Found us via: ${platformSelect}
        `,
        attachments,
      };
  
      await transporter.sendMail(mailOptions);
  
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Failed to send email" });
    }
  });


module.exports = router;
