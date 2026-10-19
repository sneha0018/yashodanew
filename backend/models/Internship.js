const mongoose = require('mongoose');

const InternshipSchema = new mongoose.Schema({
    jobTitle: { type: String, required: true },
    salary: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Internship', InternshipSchema);
