
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import Time from './Time';
const Ghh = () => {



  const [appoint, setappoint] = useState(
    {
      date: null,
      time: null,
      isbook: false,
      day:null,
    }
  )

  
  const [showTime,setShowTime]=useState(false);


  const [dateState, setDateState] = useState(new Date());

  useEffect(()=>{
    setappoint(
      {
        date: moment(dateState).format('MMMM Do YYYY'),
        day:moment(dateState).format('DD'),
        month:moment(dateState).format('MM'),
        year:moment(dateState).format('YYYY'),
        time: null,
        isbook: true,
        dateState,
      }  
    )

  },[dateState])

  const changeDate = (e) => {
    setDateState(e);
    setShowTime(true);
  }

  const changeAppoint=(data)=>{
    setappoint({...appoint,time:""})
  }
  // console.log(moment(dateState).format('Mon'));
  console.log(dateState.toString().substring(0,3));
  
  return (
  
  <div>    
  
      {showTime?<Time appoint={appoint}/>:
      <Calendar value={dateState} onChange={changeDate} style={{margin:"auto"}}/>}

      </div>
  );
};

export default Ghh;
