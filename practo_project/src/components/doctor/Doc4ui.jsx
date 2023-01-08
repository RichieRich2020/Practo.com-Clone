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
            <h3> <b>Please provides details about name</b> </h3>
                <label htmlFor="">Name</label> <br />
                <input type="text"  name="" placeholder="Enter Name" /><br />
                <label htmlFor="">Mobile</label> <br />
                <input type="number" className={Styles.in2} name="" placeholder="Enter Mobile" /><br />
                <label htmlFor="">Email</label> <br />
                <input type="email" className={Styles.in2} name="" placeholder="Your Email" /><br />
            <p>Choose a payment option to book appoinments.</p>
                <div className={Styles.in2}>
                <input type="radio" name="kkk" id=""  value="cash"/>
                <span><label htmlFor="cashon">Pay Online</label></span>
                </div>
                <div className={Styles.in2}>
                <input type="radio" id="html" name="fav_language" value="HTML"/>
                <label for="cashdi">Pay later at the clinic</label>
                </div>
                
                <button className={Styles.bt2} disabled="disabled">Confirm Clinic Visit</button>
            </div>
        </div>
        </>
    )
}
export default Doc4ui;