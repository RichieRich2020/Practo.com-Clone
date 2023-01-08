
import React from 'react';
import { useState } from 'react';
import Otp from '../Components/Otp';

function MobileNumber() {
    const [mno,SetMno]=useState(0);
    const [otp,setOtp]=useState();

    const generateOtp=(e)=>{
        e.preventDefault();
        setOtp(Math.floor(Math.random()*(9998-5897+1)+5897))
    }
    // console.log(otp);

    return (
        <>
            <input  placeholder='Enter Mobile Number'  onChange={(e)=>SetMno(e.target.value)} />
           
            {
                otp?<Otp otp={otp} generateOtp={generateOtp} />:<> <button disabled={mno.length==10&&(+mno>0)?false:true}  onClick={generateOtp} style={{ margin:"0px",
                padding:"0px", backgroundColor: "cornflowerblue",
                marginBottom: "20px",  alignItems: "center",
                fontWeight: "bold",
                width: "90%",
                borderRadius: "8px",
                backgroundColor:"#e7e7e7",
                cursor: "pointer", backgroundColor: "cornflowerblue",
                marginBottom: "20px",height:"30px",marginTop:"10px",fontSize:"medium"}}>Click</button></>
            }   
        </>
    );
}

export default MobileNumber;