import Styles from "./Doc.module.css"
function Doc4ui(){
    return (
        <>
        <div className={Styles.p4div1}>
            <div className={Styles.p4div11}>
                <div className={Styles.p4div110}>
                    <h3>In-Clinic Appoinment</h3>
                </div>
                <div className={Styles.p4div111}>
                    <div><input type="date" name="" id="" /></div>
                    <div><input type="time" name="
                    " id="" /></div>
                </div>
                <div className={Styles.p4div112}>
                    <div>
                        <img className={Styles.p4img1} src="https://png.pngtree.com/element_our/sm/20180501/sm_5ae8198fec951.jpg" alt="" />
                    </div>
                    <div>
                    <p>kkkk <span>prachi</span></p>
                    
                    </div>
                </div>
                <div className={Styles.p4div113}>
                    <div>
                    <img className={Styles.p4img1} src="https://png.pngtree.com/element_our/sm/20180501/sm_5ae8198fec951.jpg" alt="" />
                    </div>
                    <div>
                    <p>kkkk <span>prachi</span></p>
                    
                    </div>
                </div>
            </div>
            <div className={Styles.p4div12}>
                <h3> <b>Enter your mobile number</b> </h3>
                <label htmlFor="">Mobile</label> <br />
                <input type="number" name="" id=""placeholder="Enter Mobile" />
                <p>You will receive an OTP shortly. <br /> <span>We will send appointment-related communications on this number.</span> </p>
                <p></p>
                <button disabled="disabled">Continue</button>
            </div>
        </div>
        </>
    )
}
export default Doc4ui;