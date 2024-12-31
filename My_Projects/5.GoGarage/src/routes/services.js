const express = require("express");
const router = express.Router();

const services = [
  { id: 1, name: "Oil Change", price: 500 },
  { id: 2, name: "Tire Rotation", price: 300 },
  { id: 3, name: "Engine Diagnostics", price: 1000 }
];


router.get("/", (req, res) => {
  res.json(services);
});

module.exports = router;