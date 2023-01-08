import { useState } from "react";
import Styles from "./Doc.module.css"
import Doc3ui from "./Doc3ui";
function Doc2ui(){
   const [btn,setBtn]=useState({
    clicked:false,
  })
  
  function changeComp(){
    setBtn({
      clicked:true
    })
     
     
    }
  
    return (
    <>
      <div className={Styles.p2div1}>
          <div className={Styles.p2div11}>
            <img className={Styles.pimg1} src="https://png.pngtree.com/element_our/sm/20180501/sm_5ae8198fec951.jpg" alt="" />
            <p>View Profile</p>
          </div>
          <div className={Styles.p2div12}>
           <h2>Doctor name</h2>
           <li>Dentist</li>
           <li>Experience</li>
           <li><b>Address</b></li>
           <li>Hospital name</li>
           <li>Fees</li>
           <button className={Styles.pbtn1}>99%</button><span> <li>Patients Stories</li> </span> 
          </div>
          <div className={Styles.p2div13}>
            <button className={Styles.pbtn2} onClick={changeComp}>Book Clinic Visit <br /> no fees</button>
          </div>
       
      </div>
      <div className={Styles.p2div14}>
         {btn.clicked? <Doc3ui/>:null}
      </div>
    </>
  )
}
export default Doc2ui;