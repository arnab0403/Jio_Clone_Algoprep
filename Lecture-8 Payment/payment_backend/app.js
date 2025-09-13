const express = require("express");
const dotenv = require("dotenv");

// Razorpay Dependencies 
const Razorpay = require("razorpay");
const ShortId=require("short-unique-id");
const cors = require("cors");


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());


const {RAZORPAY_PUBLIC_KEY,RAZORPAY_PRIVATE_KEY}=process.env;

const instance = new Razorpay({
    key_id:RAZORPAY_PUBLIC_KEY,
    key_secret:RAZORPAY_PRIVATE_KEY
})


app.post("/checkout",async (req,res)=>{
    try {
        const amount = 100;
        const currency = "INR";
        const uid = new ShortId( { length: 10} );
        const orderConfig={
            amount:amount*100,
            currency:currency,
            receipt:uid.rnd(),
        }

        const order =await instance.orders.create(orderConfig);

        res.status(202).json({
            message:"Checkout created",
            order: order
        })


    } catch (error) {
        res.status(500).json({
            message:"Internal Server Error",
            status:"failed"
        })
    }
})


app.post("/verify",async (req,res)=>{
    // that payment is done -> razorpay 
    // update the status of the user -> what ever needed
})


app.get("/",(req,res)=>{
    res.status(200).json({
        message:"Test"
    })
})








app.listen(3000,function(){
    console.log("Server Started At PORT NUMBER: "+3000);
})