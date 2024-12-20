import express from "express";
const app = express();

// console.dir(app);

let port = 3000;

app.listen(port , ()=>{
    console.log(`app is listening on port ${port}`);
});

app.get("/" , (req,res)=>{
    res.send("You contacted ROOT node..!");
});

app.get("/:username/:id" , (req,res)=>{
    let {username,id} = req.params;
    let htmlstr = `<h1>Welcome to the page of ${username}.</h1>`
    res.send(htmlstr);
});

app.get("/search", (req,res)=>{
    let {q} = req.query;
    res.send(`Search result are =  ${q}`);
});
 

// app.use((req , res)=>{
//     console.log("request received.!");
//     res.send("<h1>TATA MOTORS: <li>Nexon<li></h1>");
// });