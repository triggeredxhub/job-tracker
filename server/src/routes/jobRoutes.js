const express = require("express");
const Job = require("../model/Job");

const jobRouter = express.Router();

// CREATE Job
jobRouter.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const job = new Job(req.body);
    await job.save();
    res.json(job);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ Jobs
jobRouter.get("/", async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

// UPDATE Job
jobRouter.put("/:id", async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(job);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE Job
jobRouter.delete("/:id", async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);
    res.json({ message: "Job deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = jobRouter;
