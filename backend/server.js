require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const Application = require('./models/Application');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: 'http://localhost:5173' })); // React port
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'uploads'));
  },
  filename: (req, file, cb) => {
    const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, unique + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.log('❌ MongoDB Error:', err));

// POST API for form data
app.post('/api/applications', upload.single('resume'), async (req, res) => {
  try {
    const { company, post, location, fullName, address, email, mobile, skills, softSkills, salaryExpectation, experienceType, yearsExperience, previousPercentage, currentPercentage } = req.body;

    const newApp = new Application({
      company,
      post,
      location,
      fullName,
      address,
      email,
      mobile,
      skills: skills ? skills.split(',') : [],
      softSkills,
      salaryExpectation,
      experienceType,
      yearsExperience,
      previousPercentage,
      currentPercentage,
      resumePath: req.file ? `/uploads/${req.file.filename}` : null
    });

    await newApp.save();
    res.json({ success: true, message: "✅ Application saved successfully!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
