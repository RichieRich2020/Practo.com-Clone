/** @format */

import styles from './Appointment.module.css';
import SliderWrapper from '../SliderWrapper/SliderWrapper';
import { useSelector } from 'react-redux';
import Sidebar from '../SideBar/SideBar';
const AppointmentCard = ({
  date,
  month,
  name,
  speciality,
  day,
  clinicname,
  time,
}) => (
  <>
    {/*  */}
    <div style={{ height: '100px', border: 'solid black' }}>
      <div className={styles.appointment_card}>
        <div className={styles.appointment_info}>
          <div className={styles.appointment_date}>
            <p>{date}</p>
            <p>{month}</p>
          </div>
          <div className={styles.appointment_name}>
            <h4>
              Dr. {name},{speciality}
            </h4>
            <p style={{ margin: 0 }}>
              {day},{time}
            </p>
            <p>{clinicname} Hospital</p>
          </div>
        </div>
        <div className={styles.appointment_button}>
          <button>Book Again</button>
          <button>View Details</button>
        </div>
      </div>
    </div>
  </>
);

const Appointment = () => {
  const data = useSelector((store) => {
    return store;
  });

  const appointments = [
    {
      date: data.appoint.date,
      name: data.appointuser.namee,
      speciality: data.appointuser.deparment,
      day: data.appoint.date,
      time: data.time,
      clinicname: data.appointuser.host,
    },
  ];

  const arr = appointments.map((el) => <AppointmentCard {...el} />);

  return <SliderWrapper arr={arr} />;
};

export default Appointment;
