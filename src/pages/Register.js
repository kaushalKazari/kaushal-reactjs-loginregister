import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

export default function Register() {
    // hooks area
    const[username, setUsername]=useState('');
    const[email, setEmail]=useState('');
    const[password, setPassword]=useState('');

    // function area
    const createUser =()=>{
       let data ={
        "username": username,
        "email": email,
        "password": password
      }
      fetch(`http://localhost:1337/api/auth/local/register`,{
        method: "POST",  
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
      })
      .then((res)=>{
            return res.json();
      })
      .then((data)=>{
        console.log(data);
        if(data.jwt){            
            swal("Good job!", "login successfully", "success");
        }
      })
      .catch(err=>err)
    }

    return (
        <>
            <div className="login-area">
                <div className="container">
                    <div className="login-box ptb--100">
                        <form>
                            <div className="login-form-head">
                                <h4>Sign up</h4>
                                <p>Hello there, Sign up and Join with Us</p>
                            </div>
                            <div className="login-form-body">
                                <div className="form-gp focused">
                                    <label htmlFor="exampleInputName1">User Name</label>
                                    <input name='username' type="text" id="exampleInputName1"
                                    onChange={(e)=>{setUsername(e.target.value)}} />
                                    <i className="ti-user" />
                                    <div className="text-danger" />
                                </div>
                                <div className="form-gp focused">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input name='email' type="email" id="exampleInputEmail1"
                                    onChange={(e)=>{setEmail(e.target.value)}} />
                                    <i className="ti-email" />
                                    <div className="text-danger" />
                                </div>
                                <div className="form-gp focused">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input name='password' type="password" id="exampleInputPassword1"
                                    onChange={(e)=>{setPassword(e.target.value)}} />
                                    <i className="ti-lock" />
                                    <div className="text-danger" />
                                </div>
                                <div className="submit-btn-area">
                                    <button id="form_submit" type="button"
                                    onClick={createUser}>Submit <i className="ti-arrow-right" /></button>
                                    <div className="login-other row mt-4">
                                        <div className="col-6">
                                            <a className="fb-login" href="#">Sign up with <i className="fa fa-facebook" /></a>
                                        </div>
                                        <div className="col-6">
                                            <a className="google-login" href="#">Sign up with <i className="fa fa-google" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-footer text-center mt-5">
                                    <p className="text-muted">Don't have an account? <Link to='/login'>Sign in</Link></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}
