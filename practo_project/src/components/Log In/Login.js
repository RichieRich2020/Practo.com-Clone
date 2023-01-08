import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'

const Login = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        mobile: "",
        password: ""
    })

    const [data, setData] = useState([]);
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

        const getuserArr = localStorage.getItem("user");
        console.log(getuserArr);

        const { mobile, password } = inpval;
        if (mobile === "") {
            toast.error('Mobile Number field is requred', {
                position: "top-center",
            });
        } else if (mobile.length>10) {
            toast.error('Please Enter Valid Mobile Number', {
                position: "top-center",
            });
        } else if (password === "") {
            toast.error('password field is requred', {
                position: "top-center",
            });
        } else if (password.length < 5) {
            toast.error('password length greater five', {
                position: "top-center",
            });
        } else {

            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.mobile=== mobile && el.password === password
                });

                if (userlogin.length === 0) {
                    alert("invalid details")
                } else {
                    console.log("Login Succesfulyy");
                    alert("Login Successfull")
                    localStorage.setItem("user_login", JSON.stringify(userlogin))

                    history("/details")
                }
            }
        }

    }

    return (
        <>
        <section>
           <div className="log-App">
              <div className="loginn">
                <div id='log-design'>
                <NavLink className="log" to="./Login">Login</NavLink>
                </div>
               
               <div id="sign-design">
               <NavLink className="sign" to="./Signup">Register</NavLink>
               </div>
                
               </div>
               <hr className="lines"></hr>
              <div className="contain">
                  <div className="picc">
                      <img className="logos" src="https://accounts.practo.com/static/images/illustration.png"></img>
                  </div>






             <div className="info">
                
                        <Form id='formm'>

                            <Form.Group>
                                 <label id='labelss' for="mobile">Mobile Number</label>
                                <input  id='mobile'  type="number" name='mobile' onChange={getdata} placeholder="Mobile Number" />
                            </Form.Group>

                            <Form.Group>
                                <label  id='labelss' for="passcode">Password</label>
                                <input  id='passcode'  type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>

                            <Form.Group>
                                <input id='check' type='checkbox'/>
                                <label id='para'>Remember me for 30 days</label>
                            </Form.Group>

                            <Button  id='submit' onClick={addData} type="submit">
                                Login
                            </Button>
                            <p id='parag'>Don't Have an Account <span><NavLink id='links' to="./Signup">Register</NavLink></span> </p>
                            
                        </Form>
                <ToastContainer />
            </div>
        </div>
    </div>
    </section>
        </>
    )
}

export default Login