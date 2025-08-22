const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  position: { type: String, required: true },
  company: { type: String, required: true },
  status: { 
    type: String, 
    enum: ["applied", "interview", "offer", "rejected"], 
    default: "applied" 
  },
  dateApplied: { type: Date, default: Date.now },
  notes: String,
  userId: String // will link to user auth later
});

module.exports = mongoose.model("Job", jobSchema);
