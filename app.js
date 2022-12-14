const express = require("express");
const port = process.env.PORT || 3000; // localhost:3000
const app = express();
require("./DB/mongoose"); // makes sure mongoose connects and runs
const routes = require("./Routes/index");
//takes raw requests and turns them into useable properties on req.body
app.use(express.json());
app.use(express.urlencoded());

app.use("/", routes);
app.listen(port, () =>{
    console.log(`Server is up on ${port}`);
})

