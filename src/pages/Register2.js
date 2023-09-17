import React, { useState } from 'react'
import swal from 'sweetalert';


export default function Register2() {
    // 1. Hook variable area
    // Every component can its own data
    // const [variable,setVariable] = useState(initialValue);
    const [username, setUsername] = useState();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submitData = ()=>{
        console.log(username, email, password);
        let payload = {
            "username": username,
            "email": email,
            "password": password
        }
        console.log(payload);
        fetch(`http://localhost:1337/api/auth/local/register`,{
            method: 'POST',            
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)

        }).then((res)=>res.json()).then((data)=>{
            console.log(data);
            if(data.jwt){
                // alert('Registered Successfully.')
                swal("Good job!", "Registered Successfully.", "success");
            }
        }).catch((err)=>err);
    }
  return (
    <>
        <div className='container mt-3'>
        <input type="text" name="username" value={username} onChange={(e)=> {setUsername(e.target.value)}} className="form-control mb-2"/>
        <input type="email" name="email" value={email} onChange={(e)=> {setEmail(e.target.value)}} className="form-control mb-2"/>
        <input type="password" name="password" value={password} onChange={(e)=> {setPassword(e.target.value)}} className="form-control mb-2"/>
        <input type="button" name="submit" value="submit" onClick={submitData} className="form-control"/>
        </div>
    </>
  )
}
