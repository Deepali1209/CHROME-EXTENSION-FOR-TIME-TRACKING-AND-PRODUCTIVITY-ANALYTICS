const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const dbPath = "./db.json";

// Get data
app.get("/data", (req, res) => {
  const data = JSON.parse(fs.readFileSync(dbPath, "utf-8"));
  res.json(data);
});

// Track time
app.post("/track", (req, res) => {
  const { domain, timeSpent } = req.body;

  let data = JSON.parse(fs.readFileSync(dbPath, "utf-8"));

  if (!data[domain]) data[domain] = { time: 0 };
  data[domain].time += timeSpent;

  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
  res.sendStatus(200);
});

// Run server
app.listen(3000, () => console.log("Server running on http://localhost:3000"));
