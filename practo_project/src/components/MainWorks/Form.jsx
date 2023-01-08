// import Styles from "../Routes/checkout.module.css"

import React, { useState } from 'react';

function Form() {

    const [userCard,setUserCard]
=useState({
    name:"",
    card:"",
    exp:"",
    cvc:"",
    pin:"",
})

const user=(e)=>{
    const {name,value}=e.target;
    setUserCard({...userCard,[name]:value})
}
if(userCard.cvc.length==3)
console.log(userCard)

    return (
        <>
             <h2 style={{paddingTop:"12px",marginTop:"0px"}}>Card details</h2>
        <h3 id="amount"></h3>
        <input type="text" name="name" id="name" placeholder="Enter Your Name" onChange={user}/><br />
        <input type="number" name="card" id="card" placeholder="Enter Card Number" onChange={user}/><br />
        <input type="text" name="exp" id="exp" placeholder="Expiration date (MM/YYYY)" onChange={user}/>
        <input type="password" name="cvc" id="cvc" placeholder="CVC/CVV" onChange={user}/>
        <input type="password" placeholder="Enter your pin" id="pass" name="pin"onChange={user}/><br />
        <button disabled={
(userCard.name&&(userCard.card.length==16)&&(userCard.exp.length==5)&&(userCard.cvc.length==3)&&(userCard.pin.length>=4)&&userCard.pin.length<=6)?false:true
        } style={{ margin:"0px",
                padding:"0px", backgroundColor: "cornflowerblue",
                marginBottom: "20px",  alignItems: "center",
                fontWeight: "bold",
                width: "90%",
                borderRadius: "8px",
                backgroundColor:"#e7e7e7",
                cursor: "pointer", backgroundColor: "cornflowerblue",
                marginBottom: "20px",height:"30px",marginTop:"10px",fontSize:"medium"}}
                >Submit</button>
            
        </>
    );
}

export default Form;