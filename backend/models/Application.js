const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  company: String,
  post: String,
  location: String,
  fullName: String,
  address: String,
  email: String,
  mobile: String,
  skills: [String],
  softSkills: String,
  salaryExpectation: String,
  experienceType: String,
  yearsExperience: Number,
  previousPercentage: Number,
  currentPercentage: Number,
  resumePath: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Application', ApplicationSchema);
