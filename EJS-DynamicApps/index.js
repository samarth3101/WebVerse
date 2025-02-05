const express = require("express");
const app = express();
const path = require("path");

const port = 8080;

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views" , path.join(__dirname,"/views"));


app.get("/", (req, res) => {
    res.render("home.ejs");
})

app.get("/ig/:username", (req, res)=>{
    let {username} = req.params;
    const instaData = require("./data.json");
    console.log(instaData);
    const data = instaData[username];
    console.log(data);
    res.render("instagram.ejs", {data});
})

app.get("/hello", (req, res) => {
    res.send("HELLO");
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

app.get("/rolldice", (req,res)=>{
    let diceVal = Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs", {diceVal});
})