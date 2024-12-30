const express = require("express");
const router = express.Router();

// Mock Data (you can replace this with a database or db.json later)
const services = [
  { id: 1, name: "Oil Change", price: 500 },
  { id: 2, name: "Tire Rotation", price: 300 },
  { id: 3, name: "Engine Diagnostics", price: 1000 }
];

// Endpoint to get all services
router.get("/", (req, res) => {
  res.json(services);
});

module.exports = router;