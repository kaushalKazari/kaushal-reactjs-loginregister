import React from 'react'
import { Link } from 'react-router-dom'

export default function JustDialNav() {
  // 2.2 function area
  const logOut = () =>{
    window.localStorage.removeItem('jwt_token');
    alert('logout sucessfully');
    window.location.href = '/justdial/login';
  }
  return (
    <>
      <ul className="nav">

        {
          window.localStorage.getItem('jwt_token') === null &&
          <>
            <li className="nav-item">
              <Link className="nav-link active" to="/justdial/login">Justdial Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/justdial/register">Justdial Register</Link>
            </li>
          </>
        }
        {
          window.localStorage.getItem('jwt_token') !== null &&
          <li className="nav-item">
              <Link className="nav-link" onClick={()=> logOut()}>log out</Link>
            </li>
        }
      </ul>
    </>
  )
}
