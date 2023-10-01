import React from 'react'
import JustDialNav from './JustDialNav'

export default function JustDialLogin() {
  // hooks area

  // function area
  const loginUser=()=>{
    // alert('a');
    let payLoad = {
      "identifier": document.querySelector('input[type="email"]').value,
      "password": document.querySelector('input[type="password"]').value
    }
    // console.log(payLoad)
    fetch(`http://localhost:1337/api/auth/local`,{
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payLoad)
    })
    .then((res)=>{
      return res.json();
    })
    .then((data)=>{
      if(data["jwt"] !== undefined){
        alert('login sucess');
        // console.log(data["jwt"]);
        window.location.href='/justdial/businessregister';
        // store the token in local storage
        window.localStorage.setItem('jwt_token', data["jwt"]);
        // Navigate("/justdial/businessregister");
      }else{
        alert('login fail')
      }
      // console.log(data)
    })
    .catch(err=>err)
  }

  return (
    <>
      <JustDialNav />
      <h1>Just Dial Login</h1>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" name='identifier' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" name='password' className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <button type="button" className="btn btn-primary"
        onClick={loginUser}>Sign In</button>
      </form>
    </>
  )
}
