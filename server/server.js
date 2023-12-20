//  when testing we run nodemon so that we don't always have to start the server by node filename.js
// just relaized I could have just used vite instead of nodemon 
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(express.json())

//get all resturants
app.get("/api/v1/restaurants", (req, res) => {
    console.log('middleware worked');
    res.status(200).json({
        status: "sucess",
        data:{
            restaurants:["mcdonalds","wendys"],
        },
    });
});

// get single restaurants

app.get("/api/v1/restaurants/:id", (req, res) => {
    console.log(req.params)

    res.status(200).json({
        status: "sucess",
        data:{
            restaurant: "mcdonalds"
        }
    })
});

//create
app.post("/api/v1/restaurants", (req,res)=>{
    console.log(req)
    res.status(201).json({
        status: "sucess",
        data:{
            restaurant: "mcdonalds"
        }
    })
})

//update
app.put("/api/v1/restaurants/:id", (req,req) => {
    console.log(req.params.id);
    console.log(body)
    res.status(200).json({
        status: "sucess",
        data:{
            restaurant: "mcdonalds"
        }
    })
})

//delete

app.delete("/api/v1/restaurants/:id", (req,req) => {
    res.status(200).json({
        status: "sucess"
    })
})




const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`sever is up and listening on port ${port}`)
})