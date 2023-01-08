import styles from './Appointment.module.css';
import SliderWrapper from '../SliderWrapper/SliderWrapper';


const AppointmentCard = ({ date, month, name, speciality, day, clinicname, time}) => <div className={styles.appointment_card}>
	<div className={styles.appointment_info}>
	<div className={styles.appointment_date}>		
		<p>{date}</p>
		<p>{month}</p>		
	</div>
	<div className={styles.appointment_name}>
		<h3>{name},{speciality}</h3>
		<p>{day},{time}</p>
		<p>{clinicname}</p>
	</div>
	</div>
	<div className={styles.appointment_button}>
		<button>Book Again</button>
		<button>View Details</button>
	</div>
	
</div>;

const Appointment = () => {
	const appointments = [		
		{
			date: 6,
			month:'Jan',
			name:'Dr. Rishabh Vyas',
			speciality:'Homeopath',
			day:'Friday',
			time:'10:30 am',
			clinicname:'Healvibe Healthcare'
			
		},
		{
			date: 5,
			month:'Dec',
			name:'Dr. Kishan Vyas',
			speciality:'Surgeon',
			day:'Wednesday',
			time:'11:30 am',
			clinicname:'Apollo Hospital'
			
		},{
			date: 3,
			month:'Nov',
			name:'Dr. Jhunjhunwala',
			speciality:'Dentist',
			day:'Saturday',
			time:'12:30 am',
			clinicname:'Dental Healthcare'
			
		},{
			date: 12,
			month:'June',
			name:'Dr. salman Khan',
			speciality:'Ortho Special',
			day:'Monday',
			time:'09:30 am',
			clinicname:'Salman Orhto Care'
			
		}
	];

	const arr = appointments.map((el) => <AppointmentCard {...el} />);

	return (
			<SliderWrapper arr={arr}/>
	
	);
};

export default Appointment;
