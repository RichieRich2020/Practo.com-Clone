
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Otp({otp,generateOtp}) {
    const [val,setValue]=useState();
    useEffect(()=>{
        set();
    },[val]);

   const set=()=>setTimeout(()=>{
        setValue(otp);
    },5000)

const resend=(e)=>{
    e.preventDefault();
    setValue("");
    generateOtp();
}

    return (
        <div style={{marginTop:"10px"}}>
            <input  placeholder='Enter Otp' value={val} type="number"/><span style={{marginLeft:"50px"}}>Enter Otp</span>
            <Link to="/payment"><button>CLick</button></Link> 
            <button onClick={resend}>Resend Otp</button>
        </div>
    );
}

export default Otp;