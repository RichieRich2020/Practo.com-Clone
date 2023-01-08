import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Signup.css'
  

const Signup = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        name: "",
        country_code: "",
        mobile: "",
        password: ""
    })

   

    const [data,setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);


        const { value, name } = e.target;
        // console.log(value,name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const { name,mobile, password } = inpval;

        if (name === "") {
            toast.error(' Name field is requred!',{
                position: "top-center",
            });
        } else if (mobile === "") {
             toast.error('Mobile Number field is requred',{
                position: "top-center",
            });
        } else if (password === "") {
             toast.error('Password field is requred',{
                position: "top-center",
            });
        } else if (password.length < 5) {
             toast.error('Password length greater five',{
                position: "top-center",
            });
        } else {
            console.log("Signup Succesfully");
            alert("Signup Successfull")
            history("/login")
            localStorage.setItem("user",JSON.stringify([...data,inpval]));

        }

    }

    return (
        <>
          <section>
            <div className="Appss">
              <div className="signupp">
              <div id='log-designs'>
                <NavLink className="logs" to="./Login">Login</NavLink>
                </div>
               
               <div id="sign-designs">
               <NavLink className="signs" to="./Signup">Register</NavLink>
               </div>
               </div>
               <hr className="lines"></hr>
                 <div className="contain">
                    <div className="piccs">
                       <img className="logos" src="https://accounts.practo.com/static/images/illustration.png"></img>
                    </div>




            <div className="infos">
                
                         
                        <Form  id='formms'>
                            <Form.Group>
                            <h2 id='joinn'>Join Practo</h2>
                    
                              <hr/>
                            </Form.Group>

                            <Form.Group>
                                <label id='labelss' for="name">Full Name</label><br></br>
                                <input  id='name' type="text" name='name' onChange={getdata} placeholder="Full Name" />
                            </Form.Group>
                            <Form.Group>
                                <label id='labelss' for="mobile">Mobile Number</label><br></br>
                                <select id='sel' onClick={getdata}
                                        value={data.country_code}>
                                            <option>+91(IND)</option>
                                            <option>+65(SGP)</option>
                                            <option>+63(PHL)</option>
                                            <option>+60(MYS)</option>
                                            <option>+62(IDN)</option>
                                            <option>+55(BRA)</option>
                                            <option>+52(MEX)</option>
                                            <option>+54(ARG)</option>
                                            <option>+56(CHL)</option>
                                            <option>+84(VNM)</option>
                                            <option>+971(UAE)</option>
                                </select>
                                <input id='mobiles'  type="number" name='mobile' onChange={getdata} placeholder="Mobile Number" />
                            </Form.Group>


                            <Form.Group>
                                 <label  id='labelss' for="passcode">Create Password</label><br></br>
                                <input  id='passcode'  type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>

                            <Form.Group>
                            <div id='checking'>
                               <input id='checkboxx' type='checkbox'/>
                              <label id='paras'>Receive relevant offers and promotional communication from Practo</label>
                            </div>
                            </Form.Group>

                            <Button variant="primary"id='submit' onClick={addData} type="submit">
                                Register
                            </Button>
                            <p id='parags'>Already Have an Account <span><NavLink id='linkss' to="./Login">Login</NavLink></span> </p>
                        </Form>
                       
                
                <ToastContainer />
            </div>
         </div>
    </div>
    </section>
        </>
    )
}

export default Signup