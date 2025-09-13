import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function loadScript() {
    return new Promise(function(resolve,reject){
      
      const script = document.createElement("script");
      script.src="https://checkout.razorpay.com/v1/checkout.js";
      script.onload=()=>{
        resolve();
      }

      script.onerror=()=>{
        reject();
      }
      document.body.appendChild(script);
      })
  }

  async function openRazorPayCheckOut(){
    // 1. Sending a Request to the Backend
    const response = await fetch("http://localhost:3000/checkout",{method:"POST"});
    console.log(response);

    const data = await response.json(); 

    const order = data.order;

    // 2. load Razorpay Script 
    await loadScript();

    // create the order object 
    const finalOrderObject = {
      key:"rzp_test_RHB51cyj58hxCX",
      "amount": order.amount, // Amount is in currency subunits. 
      "currency": order.currency,
      "name": "DineQ", //your business name
      "description": "Booking Of Seat",
      // "image": "https://example.com/your_logo",
      "order_id": order.id, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      // "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
      "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
          "name": "Arnab Dutta", //your customer's name
          "email": "arnabduttaspam@gmail.com",
          "contact": "+918584940244" //Provide the customer's phone number for better conversion rates 
      },
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "#3399cc"
      }
    }
    


    const rzpl = new Razorpay(finalOrderObject);

    rzpl.open();
    
  }

  return (
      <div>
        <h1>Razorpay Payment Demo</h1>
        <button style={{cursor:"pointer"}} onClick={openRazorPayCheckOut}>
          Pay 100/- RS.
        </button>
      </div>
  )
}

export default App
