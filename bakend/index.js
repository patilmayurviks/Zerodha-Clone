require("dotenv").config();



const express = require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cors=require("cors");


const { Signup,Login } = require("./Controllers/AuthController");
const { userVerification } = require("./Middlewares/AuthMiddleware");
//const router = require("express").Router();
require("dotenv").config();
const cookieParser = require("cookie-parser");

const HoldingsModel = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");



const PORT=process.env.PORT || 3002;
const uri=process.env.MONGO_URL;
const app=express();
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
    ],
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.json());


app.get("/allHoldings",async(req,res)=>{
  let allHoldings=await HoldingsModel.find({});
  res.json(allHoldings);
});
app.get("/allPositions",async(req,res)=>{
  let allPositions=await PositionsModel.find({});
  res.json(allPositions);
});
app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });
  

  newOrder.save();

  res.send("Order saved!");
});

app.post("/signup", Signup);
app.post('/login', Login);
app.post('/',userVerification)



app.listen(PORT,()=>{
    console.log("App Started !");
    mongoose.connect(uri);
      console.log("DB Started !");
}); 
