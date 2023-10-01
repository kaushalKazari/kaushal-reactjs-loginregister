import React, { useState } from 'react'
import JustDialNav from './JustDialNav';
import swal from 'sweetalert';

export default function JustDialRegister() {
  // hooks area
  const [payload, setPayload] = useState();

  // function difinition area
  const registerUser = () => {
    let u = document.querySelector('input[name="username"]').value;
    let e = document.querySelector('input[name="email"]').value;
    let p = document.querySelector('input[name="password"]').value;

    // console.log(u, e, p);
    setPayload({
      "username": u,
      "email": e,
      "password": p
    })

    // console.log(u, e, p);

    // console.log(payload)
    // promise chain
    fetch(`http://localhost:1337/api/auth/local/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        // console.log(res);
        return res.json();
        
      })
      .then((data) => {
        console.log(data);
        if(data.data === null){
          swal("Bad job!", `${data.error.message}`, "error");
        }else{
          swal("Good job!", "User Created Sucessfully", "success");
        }
        })
      .catch((err) => err)
  }
  return (
    <>
      <JustDialNav />
      <h1>Just Dial Register</h1>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">User Name</label>
          <input type="text" name='username' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" name='password' className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <button type="button" className="btn btn-primary"
          onClick={() => registerUser()}>Submit</button>
      </form>
    </>
  )
}
