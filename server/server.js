//  when testing we run nodemon so that we don't always have to start the server by node filename.js
// just relaized I could have just used vite instead of nodemon 

require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();
const db = require("./db")



app.use(express.json())

//get all resturants
app.get("/api/v1/restaurants",async  (req, res) => {
    try {
        const results = await db.query("Select * from restaurants")
        res.status(200).json({
            status: "sucess",
            results: results.rows.length,
            data:{
                restaurants:results.rows,
            },
        });
    } catch (error) {
        console.log(err)
    }
});

// get single restaurants

app.get("/api/v1/restaurants/:id", async (req, res) => {
    console.log(req.params.id)

    try {
        const results = await db.query("Select * from restaurants where id = $1", [req.params.id])
        
        res.status(200).json({
        status: "sucess",
        data:{
            restaurant: results.rows[0]
        }
        })
    } catch (err) {
        console.log(err)
    }
    
});


//create
app.post("/api/v1/restaurants", (req,res)=>{
    console.log(req)

    try {
        const results = await db.query(
            "INSERT INTO restaurants (name, location, price_range) vaules ($1, $2, $3) returning", [req.body.name,req.body.location,req.body.price_range]
        )
        console.log(results)
        res.status(201).json({
            status: "sucess",
            data:{
                restaurant: results.rows[0]
            }
        })

    } catch (err) {
        console.log(err)
    }
    
})

//update
app.put("/api/v1/restaurants/:id", (req,res) => {
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

app.delete("/api/v1/restaurants/:id", (req,res) => {
    res.status(200).json({
        status: "sucess"
    })
})




const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`sever is up and listening on port ${port}`)
})