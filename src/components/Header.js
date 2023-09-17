import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
    <div className='container'>
    <header>
        <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
            </li>
            {/* <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
            </li> */}
            <li className="nav-item">
                <Link className="nav-link" to="/register2">Register2</Link>
            </li>
        </ul>
</header>
</div>
    </>
  )
}
