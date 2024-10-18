const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model')
const productRoute = require('./routes/product.routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes
app.use("/api/products", productRoute)

app.get('/', (req, res)=>{
    res.send("hello form node api server update")
});



mongoose.connect("mongodb+srv://herwing43:Nueve123@backenddb.s7yan.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() =>{
    console.log("Connected to database!");
    app.listen(10000, () =>{
        console.log(`Server is running on localhost:${1000}`);
    });
})
.catch(() =>{
    console.log("connection failed");
});

