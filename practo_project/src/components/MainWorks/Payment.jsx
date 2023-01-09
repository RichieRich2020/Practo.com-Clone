import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

function Payment() {
    const [image,setImage]=useState(`https://i.gifer.com/origin/a1/a1d81f564eeb1468aefbcfd54d1571b8_w200.gif`);
    const [boolean,setBoolean]=useState(false);

    setTimeout(()=>{
        setImage(`https://cdn.dribbble.com/users/1751799/screenshots/5512482/check02.gif`);
        setTimeout(()=>{
            setBoolean(true);
        },5000)
    },5000)
    
    if(boolean)
    return <Navigate to="/" />

    return (
        <div>
            <img src={image} alt="payment"/>
        </div>
    );
}

export default Payment;