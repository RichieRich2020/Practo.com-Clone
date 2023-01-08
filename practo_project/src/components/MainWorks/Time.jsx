import React from 'react';
import moment from 'moment';
import NoAppointment from './NoAppointment';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Time({appoint}) {
// const dispatch=useDispatch();
//  console.log(appoint);
let date=new Date();
if(+(moment(date).format('DD'))>=+(appoint.day)&&+(moment(date).format('MM'))>=+(appoint.month)&&+(moment(date).format('YYYY'))>=+(appoint.year))
return <NoAppointment />

if(appoint.dateState.toString().substring(0,3)==="Sun")
return <NoAppointment />

let arr=["10:00 A.M","11:00 A.M","12:00 P.M","3:00 P.M","4:00 P.M"]

// const timed=(data)=>{
// timeAction(data,appoint,)
// }

    return (
        <div>
        <h4> {appoint.date}</h4> 

        {arr.map((el,i)=>{
            return <Link to="/diff" ><button key={i} style={{height:"32px",margin:"12px",borderRadius:"16px",color:"blue"}} className="button">{el}</button></Link> 
        })}
        </div>
    );
}

export default Time;