/** @format */

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import st from './nabar.module.css';
import { useSelector } from 'react-redux';

const NAvbar = () => {
  const data = useSelector((store) => {
    return store;
  });
  return (
    <>
      <div
        style={{
          marginBottom: '20px',
          //   position: 'fixed',
          //   top: 0,

          //   width: '100%',
          //   zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          paddingRight: '20px',
          gap: '150px',
          //   background: '#fff',
          borderBottom: '2px solid #f0f0f5',
          //   justifyContent: 'space-between',

          //   top:0,
        }}
        id={st.main}>
        <div
          style={{
            // border: 'solid black',
            display: 'flex',
            height: '70px',
            gap: '80px',
            paddingLeft: '40px',
            alignItems: 'center',

            // justifyContent: 'space-between',
          }}>
          <div
            style={{
              height: '75px',
              width: '110px',
            }}>
            <img
              style={{
                height: '100%',
                width: '100%',
              }}
              src='https://www.practostatic.com/nav/9.5.14/consumer/images/practo.svg'
              alt=''
            />
          </div>
          <div id={st.fin} style={{ fontSize: '28px' }}>
            <Link
              to='/dashboard'
              style={{
                textDecoration: 'none',
                color: '#414146',
                cursor: 'pointer',
              }}>
              <p style={{ fontSize: '16px' }}>Find Doctors</p>
            </Link>

            <p style={{ fontSize: '16px' }}>Video Consult</p>
            <p style={{ fontSize: '16px' }}>Medicines</p>
            <p style={{ fontSize: '16px' }}>Lab Tests</p>
            <p style={{ fontSize: '16px' }}>Surgeries</p>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            color: '#414146',
            fontSize: '16px',
            fontWeight: '400',
            gap: '10px',
            justifyContent: 'space-between',
            // border: 'solid black',
            marginTop: '10px',
          }}>
          <div id={st.mai}>
            <div style={{ display: 'flex' }}>
              <p style={{ fontSize: '15px' }}>For Corporates</p>
              <div style={{ marginTop: '3px' }}>
                <span class='material-symbols-outlined'>expand_more</span>
              </div>
            </div>
            <div style={{ display: 'flex' }}>
              <p style={{ fontSize: '15px' }}>For Providers</p>
              <div style={{ marginTop: '3px' }}>
                <span class='material-symbols-outlined'>expand_more</span>
              </div>
            </div>
            <div style={{ display: 'flex' }}>
              <p style={{ fontSize: '15px' }}>Security & help</p>
              <div style={{ marginTop: '3px' }}>
                <span class='material-symbols-outlined'>expand_more</span>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            {data.isAuth ? (
              <Link
                to='/user'
                style={{
                  textDecoration: 'none',
                  color: '#414146',
                  cursor: 'pointer',
                }}>
                <p style={{ fontSize: '15px' }}>{data.logindetail.name}</p>
              </Link>
            ) : (
              <Link
                to='/login'
                style={{
                  textDecoration: 'none',
                  color: '#414146',
                  cursor: 'pointer',
                }}>
                <p style={{ fontSize: '15px' }}>Login/SignUp</p>
              </Link>
            )}
            <div style={{ marginTop: '3px' }}>
              <span class='material-symbols-outlined'>expand_more</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NAvbar;
