import React, { useState } from 'react'

export default function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const sendData = ()=>{
    let data={
      "identifier": username,
      "password": password
    }
    fetch(`http://localhost:1337/api/auth/local/`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
    .then((res)=>res.json())
    .then((data)=>console.log(data))
    .catch();
  }
  

  return (
    <div className='container'>
    <h1>Login Form</h1>
    <form className="row g-3">
  <div className="col-md-6">
    <label className="form-label">Username</label>
    <input name='username' value={username} onChange={(e)=>setUsername(e.target.value)} type="text" className="form-control" />
  </div>
  <div className="col-md-6">
    <label className="form-label">Password</label>
    <input name='password' value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="form-control" />
  </div>
  <div className="col-12">
    <button type="button" className="btn btn-primary" onClick={sendData}>Sign in</button>
  </div>
</form>
</div>
  )
}
