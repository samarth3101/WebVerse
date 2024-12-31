const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const servicesRoute = require("./routes/services");

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public")); 

app.use("/api/services", servicesRoute);

// Routes
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});