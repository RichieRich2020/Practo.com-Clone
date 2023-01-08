
import styles from "./DocProfile.module.css";
import { Image, Box } from '@chakra-ui/react';
import TabData from './TabData';

//import Tabs from "./tabs";
export default function DocProfile() {
   
      
        
    return(
        <div className={styles.tab_data}>
        <div className={styles.flexBox}>
            <div id="profileimg">
                {/* <img src="https://imagesx.practo.com/providers/dr-sankeerth-vijayakumar-dermatologist-bangalore-19b241f3-1b4a-4885-acc7-97b469890d02.jpg?i_type=t_100x100" alt="docimg" /> */}
                <Box boxSize='120px'>
  <Image src='https://imagesx.practo.com/providers/dr-sankeerth-vijayakumar-dermatologist-bangalore-19b241f3-1b4a-4885-acc7-97b469890d02.jpg?i_type=t_100x100' alt='docimg' />
</Box>
            </div>
            <div className={styles.contprofileinfo}>
            <div className={styles.divprofileinfo}>
                <h1 id="name">Dr. Sankeerth VijayaKumar</h1>
                <p>MBBS,MD-Dermatology, Venereology & Leprosy</p>
                <p>Dermatologist,Aesthetic Dermatologist, Cosmetologist</p>
                <p>12 Years Experience Overall (7 years as specialist)</p>
                <p><img src="practo_3\public\accept.png" alt="" /> &nbsp; Medical Registration Verified </p>
                <p><img src="practo_3\public\like.png" alt="" /> &nbsp; 97% </p>
                </div>
                <div>    
                <p>Dr. Sankeerth Vijayakumar is a Consultant Dermatologist and a Cosmetologist. He has obtained his MBBS degree from Kempegowda Institute of Medical Sciences, Bangalore and post graduate MD  degree in Dermatology, Venereology & Leprosy from S.S Institute of Medical Sciences, Davangere. He has earned a fellowship in Cosmetology and Lasers from the prestigious Bangalore Medical College & Research Centre. He was a former consultant at APOLLO hospital Bangalore and has over 9 years of experience in this field of medical science. He has presented many papers on various topics in National and State conferences. He has many publications in National and International journals and his passion for this field has driven him to author several chapters for popular post graduate textbooks in Dermatology. He is the member of International Society of Dermatology (ISD), Indian Association for Dermatology, Venereology & Leprosy (IADVL), Bangalore Dermatological Society (BDS), Cosmetic Dermatology Society of India (CDSI), and Association of Cutaneous Surgeons of India (ACSI). His keen areas of interest are general dermatology, acne treatment, anti-hair fall PRP therapy, hair transplant, lasers for scars/ pigmentation and hair reduction, botox, fillers, thread lifts, chemical peels, and skin rejuvenation.</p>
            </div>
            </div>
        </div>
        <TabData/>
      
        </div>
    );
}