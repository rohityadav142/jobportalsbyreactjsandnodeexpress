import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../index.css"; // CSS styling reuse ho jaayegi

const HiringForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const job = location.state || {};

  const [form, setForm] = useState({
    name: "",
    address: "",
    email: "",
    mobile: "",
    skills: "",
    softskills: "",
    salary: "",
    experience: "Fresher",
    years: "",
    prevPct: "",
    currPct: "",
    resume: null,
  });

  // ======================
  // 🧠 FORM SUBMIT FUNCTION
  // ======================
  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();

    // Job info (from card)
    fd.append("company", job.company || "");
    fd.append("post", job.post || "");
    fd.append("location", job.location || "");

    // User form data
    fd.append("fullName", form.name);
    fd.append("address", form.address);
    fd.append("email", form.email);
    fd.append("mobile", form.mobile);
    fd.append("skills", form.skills);
    fd.append("softSkills", form.softskills);
    fd.append("salaryExpectation", form.salary);
    fd.append("experienceType", form.experience);
    fd.append("yearsExperience", form.years);
    fd.append("previousPercentage", form.prevPct);
    fd.append("currentPercentage", form.currPct);

    // Resume upload
    if (form.resume) fd.append("resume", form.resume);

    try {
      const res = await fetch("http://localhost:5000/api/applications", {
        method: "POST",
        body: fd,
      });

      const data = await res.json();

      if (data.success) {
        alert("✅ Application submitted successfully and saved to MongoDB!");
        console.log("Data saved:", data);
        navigate("/"); // Back to home
      } else {
        alert("❌ Failed to submit application");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("⚠️ Server error, please try again.");
    }
  };

  // ======================
  // 🖋️ FORM UI
  // ======================
  return (
    <div className="form-page">
      <div className="form-container">
        <h2>
          Apply for {job.post || "Job"} at {job.company || "Company"}
        </h2>
        <p className="job-location">
          Location: {job.location || "Not Provided"}
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Address"
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            onChange={(e) => setForm({ ...form, mobile: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Technical Skills (comma separated)"
            onChange={(e) => setForm({ ...form, skills: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Soft Skills"
            onChange={(e) => setForm({ ...form, softskills: e.target.value })}
          />
          <input
            type="text"
            placeholder="Expected Salary"
            onChange={(e) => setForm({ ...form, salary: e.target.value })}
          />

          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="experience"
                value="Fresher"
                checked={form.experience === "Fresher"}
                onChange={(e) =>
                  setForm({ ...form, experience: e.target.value })
                }
              />{" "}
              Fresher
            </label>
            <label>
              <input
                type="radio"
                name="experience"
                value="Experienced"
                checked={form.experience === "Experienced"}
                onChange={(e) =>
                  setForm({ ...form, experience: e.target.value })
                }
              />{" "}
              Experienced
            </label>
          </div>

          {form.experience === "Experienced" && (
            <input
              type="number"
              placeholder="Years of Experience"
              onChange={(e) => setForm({ ...form, years: e.target.value })}
            />
          )}

          <input
            type="text"
            placeholder="Previous Course %"
            onChange={(e) => setForm({ ...form, prevPct: e.target.value })}
          />
          <input
            type="text"
            placeholder="Current Course %"
            onChange={(e) => setForm({ ...form, currPct: e.target.value })}
          />

          <label>Upload Resume:</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setForm({ ...form, resume: e.target.files[0] })}
          />

          <button type="submit" className="submit-btn">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default HiringForm;
