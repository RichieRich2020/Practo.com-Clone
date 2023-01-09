/** @format */

import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Otp({ otp, generateOtp }) {
  const [val, setValue] = useState();
  useEffect(() => {
    set();
  }, [val]);

  const set = () =>
    setTimeout(() => {
      setValue(otp);
    }, 5000);

  const resend = (e) => {
    e.preventDefault();
    setValue('');
    generateOtp();
  };

  return (
    <div style={{ marginTop: '10px' }}>
      <input placeholder='Enter Otp' value={val} type='number' />
      <span style={{ marginLeft: '50px' }}>Enter Otp</span>
      <Link to='/payment'>
        <button
          style={{
            margin: '0px',
            padding: '0px',
            backgroundColor: 'cornflowerblue',
            marginBottom: '20px',
            alignItems: 'center',
            fontWeight: 'bold',
            width: '90%',
            borderRadius: '8px',
            backgroundColor: '#e7e7e7',
            cursor: 'pointer',
            backgroundColor: 'cornflowerblue',
            marginBottom: '20px',
            height: '30px',
            marginTop: '10px',
            fontSize: 'medium',
          }}>
          CLick
        </button>
      </Link>
      <button
        onClick={resend}
        style={{
          margin: '0px',
          padding: '0px',
          backgroundColor: 'cornflowerblue',
          marginBottom: '20px',
          alignItems: 'center',
          fontWeight: 'bold',
          width: '90%',
          borderRadius: '8px',
          backgroundColor: '#e7e7e7',
          cursor: 'pointer',
          backgroundColor: 'cornflowerblue',
          marginBottom: '20px',
          height: '30px',
          marginTop: '10px',
          fontSize: 'medium',
        }}>
        Resend Otp
      </button>
    </div>
  );
}

export default Otp;
