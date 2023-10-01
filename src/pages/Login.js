// 1. import area
import React, { useState } from 'react';
import swal from 'sweetalert';


// 2. function defination area
export default function Login() {
    // 2.1 Hook variable area
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    // 2.2 function area
    let sendData = ()=>{
        let data ={
          "identifier": username,
          "password": password
        }
        fetch(`http://localhost:1337/api/auth/local`,{
          method: "POST",  
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        })
        .then((res)=>res.json())
        .then((data)=>{
          console.log(data)
          if(data.jwt){
            swal("Good job!", "login successfully", "success");
            window.location.href = '/admin/dashboard';
          }
        })
        .catch((err)=>err)
    }

  return (
    <>
        <div className="login-area">
  <div className="container">
    <div className="login-box ptb--100">
      <form>
        <div className="login-form-head">
          <h4>Sign In</h4>
          <p>Hello there, Sign in and start managing your Admin Template</p>
        </div>
        <div className="login-form-body">
          <div className="form-gp focused">
            <label htmlFor="exampleInputEmail1">User Name</label>
            <input type="text" name='identifier' value={username} onChange={(e)=>{setUsername(e.target.value)}} id="exampleInputEmail1" />
            <i className="ti-email" />
            <div className="text-danger" />
          </div>
          <div className="form-gp focused">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} id="exampleInputPassword1" />
            <i className="ti-lock" />
            <div className="text-danger" />
          </div>
          <div className="row mb-4 rmber-area">
            <div className="col-6">
              <div className="custom-control custom-checkbox mr-sm-2">
                <input type="checkbox" className="custom-control-input" id="customControlAutosizing" />
                <label className="custom-control-label" htmlFor="customControlAutosizing">Remember Me</label>
              </div>
            </div>
            <div className="col-6 text-right">
              <a href="#">Forgot Password?</a>
            </div>
          </div>
          <div className="submit-btn-area">
            <button id="form_submit" onClick={()=>sendData()} type="button">Submit <i className="ti-arrow-right" /></button>
            <div className="login-other row mt-4">
              <div className="col-6">
                <a className="fb-login" href="#">Log in with <i className="fa fa-facebook" /></a>
              </div>
              <div className="col-6">
                <a className="google-login" href="#">Log in with <i className="fa fa-google" /></a>
              </div>
            </div>
          </div>
          <div className="form-footer text-center mt-5">
            <p className="text-muted">Don't have an account? <a href="register.html">Sign up</a></p>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

    </>
  )
}
