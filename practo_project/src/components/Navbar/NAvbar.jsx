/** @format */

import React from 'react';
import Popo from '../Popo';
import st from './nabar.module.css';

const NAvbar = () => {
  function open() {}
  return (
    <>
      <div
        style={{
          //   position: 'fixed',
          //   top: 0,

          //   width: '100%',
          //   zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          paddingRight: '40px',
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
          <div id={st.fin}>
            <p>Find Doctors</p>
            <p>Video Consult</p>
            <p>Medicines</p>
            <p>Lab Tests</p>
            <p>Surgeries</p>
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
              <p>For Corporates</p>
              <div style={{ marginTop: '3px' }}>
                <span class='material-symbols-outlined'>expand_more</span>
              </div>
            </div>
            <div style={{ display: 'flex' }}>
              <p>For Providers</p>
              <div style={{ marginTop: '3px' }}>
                <span class='material-symbols-outlined'>expand_more</span>
              </div>
            </div>
            <div style={{ display: 'flex' }}>
              <p>Security & help</p>
              <div style={{ marginTop: '3px' }}>
                <span class='material-symbols-outlined'>expand_more</span>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex' }} onClick={open}>
            <p>username</p>
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
