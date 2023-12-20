// nodemon 1:24
//
// when testing we run nodemon so that we don't always have to start the server by node filename.js
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();

app.use((req, res, next) => {
    res.status(404).json({
        status: "fail",
    })
});

app.get("/api/v1/restaurants", (req, res) => {
    console.log('middleware worked');
    res.status(200).json({
        status: "sucess",
        data:{
            restaurants:["mcdonalds","wendys"],
        },
    });
});

app.get("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params)
});

app.post("/api/v1/restaurants", (req,res)=>{
    console.log(req)
})
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`sever is up and listening on port ${port}`)
})