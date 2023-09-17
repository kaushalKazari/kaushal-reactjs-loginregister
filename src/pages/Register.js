import React from 'react'

export default function Register() {
    //1. Hook Varibale area

  let sendData = ()=>{
    let data={
        username: "Vipin",
        email: "vipin@gmail.com",
        password: "Vipin@123"
    }
    console.log(data);
    fetch(`http://localhost:1337/api/auth/local/register`,{
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method:'POST',       
        body: JSON.stringify(data)
    })
    // .then((res)=>{
    //     console.log(res);
    //     if(!res.ok){
    //         console.log('could not fetch data from that resource')
    //     }
    //     return res.JSON()
    // })
    // .then((data)=>{
    //    console.log(data)
    // }).catch((error)=>{
    //     console.log(error.message)
    // });
  }
  return (
    <div className='container'>
    <h1>Register Form</h1>
    <form className="row g-3" method="POST" enctype="multipart/form-data">
    <div className="col-md-6">
    <label className="form-label">User Name</label>
    <input type="text" name="username" className="form-control"/>
  </div>
  <div className="col-md-6">
    <label className="form-label">Email</label>
    <input type="email" name='email' className="form-control"/>
  </div>
  <div className="col-md-6">
    <label className="form-label">Password</label>
    <input type="password" name='password' className="form-control"/>
  </div>
  <div className="col-12">
    <button type="button" onClick={sendData} className="btn btn-primary">Register</button>
  </div>
</form>
</div>
  )
}
