import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Geocode from "react-geocode";

export default function Header() {
  const [address,setAddress] = useState('');

// function definition area
let detectLocation = ()=>{ //Fat Arrow function
  //alert('JIJIJIJIJ');
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
      
  } else {
     
  }
}

let showPosition=(position)=>{
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  window.localStorage.setItem('lat',position.coords.latitude);
  window.localStorage.setItem('long',position.coords.longitude);

   // Get address from latitude & longitude.
  Geocode.fromLatLng(position.coords.latitude, position.coords.longitude ).then(res=>res.json()).then(
      (response) => {
          console.log('response--------->',response);
          if(response.results.length >0){
              var adrr = response.results[0].formatted_address;
              setAddress(adrr)
              window.localStorage.setItem('address',adrr);
              console.log(adrr);
          }else{

              var addr = response.plus_code.compound_code;
              setAddress(addr)
              window.localStorage.setItem('address',addr);
              console.log(addr);
          }
      },
      (error) => {
          
          console.error('errror -------->',JSON.stringify(error));
      }
  ).catch(err=>{
      console.error('errror -------->',JSON.stringify(err));
  });
  
  //x.innerHTML = "Latitude: " + position.coords.latitude +
 //"<br>Longitude: " + position.coords.longitude;
}

  return (
    <>
    {/* <div className='container'>
    <header>
        <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/teacher/create">Create Teacher</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/student/create">Create Student</Link>
            </li>
        </ul>
</header>
</div> */}

<div className="header-area">
  <div className="row align-items-center">
    <div className="col-md-8 col-sm-8 clearfix">
    <Form className="d-flex">
                            <Button className="btn btn-sm" onClick={()=>{ detectLocation() }}>Detect Location</Button>
                            <Form.Control
                                type="text"
                                readOnly
                                disabled
                                value={address}
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                id="demo"
                            />
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                id="demo2"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
    </div>
    <div className="col-md-4 col-sm-4 clearfix">
      <ul className="notification-area pull-right">
        <li id="full-view"><i className="ti-fullscreen" /></li>
        <li id="full-view-exit"><i className="ti-zoom-out" /></li>
        <li className="dropdown">
          <i className="ti-bell dropdown-toggle" data-toggle="dropdown">
            <span>2</span>
          </i>
          <div className="dropdown-menu bell-notify-box notify-box">
            <span className="notify-title">You have 3 new notifications <a href="#">view all</a></span>
            <div className="nofity-list">
              <a href="#" className="notify-item">
                <div className="notify-thumb"><i className="ti-key btn-danger" /></div>
                <div className="notify-text">
                  <p>You have Changed Your Password</p>
                  <span>Just Now</span>
                </div>
              </a>
              <a href="#" className="notify-item">
                <div className="notify-thumb"><i className="ti-comments-smiley btn-info" /></div>
                <div className="notify-text">
                  <p>New Commetns On Post</p>
                  <span>30 Seconds ago</span>
                </div>
              </a>
              <a href="#" className="notify-item">
                <div className="notify-thumb"><i className="ti-key btn-primary" /></div>
                <div className="notify-text">
                  <p>Some special like you</p>
                  <span>Just Now</span>
                </div>
              </a>
              <a href="#" className="notify-item">
                <div className="notify-thumb"><i className="ti-comments-smiley btn-info" /></div>
                <div className="notify-text">
                  <p>New Commetns On Post</p>
                  <span>30 Seconds ago</span>
                </div>
              </a>
              <a href="#" className="notify-item">
                <div className="notify-thumb"><i className="ti-key btn-primary" /></div>
                <div className="notify-text">
                  <p>Some special like you</p>
                  <span>Just Now</span>
                </div>
              </a>
              <a href="#" className="notify-item">
                <div className="notify-thumb"><i className="ti-key btn-danger" /></div>
                <div className="notify-text">
                  <p>You have Changed Your Password</p>
                  <span>Just Now</span>
                </div>
              </a>
              <a href="#" className="notify-item">
                <div className="notify-thumb"><i className="ti-key btn-danger" /></div>
                <div className="notify-text">
                  <p>You have Changed Your Password</p>
                  <span>Just Now</span>
                </div>
              </a>
            </div>
          </div>
        </li>
        <li className="dropdown">
          <i className="fa fa-envelope-o dropdown-toggle" data-toggle="dropdown"><span>3</span></i>
          <div className="dropdown-menu notify-box nt-enveloper-box">
            <span className="notify-title">You have 3 new notifications <a href="#">view all</a></span>
            <div className="nofity-list">
              <a href="#" className="notify-item">
                <div className="notify-thumb">
                  <img src="assets/images/author/author-img1.jpg" alt="image" />
                </div>
                <div className="notify-text">
                  <p>Aglae Mayer</p>
                  <span className="msg">Hey I am waiting for you...</span>
                  <span>3:15 PM</span>
                </div>
              </a>
              <a href="#" className="notify-item">
                <div className="notify-thumb">
                  <img src="assets/images/author/author-img2.jpg" alt="image" />
                </div>
                <div className="notify-text">
                  <p>Aglae Mayer</p>
                  <span className="msg">When you can connect with me...</span>
                  <span>3:15 PM</span>
                </div>
              </a>
              <a href="#" className="notify-item">
                <div className="notify-thumb">
                  <img src="assets/images/author/author-img3.jpg" alt="image" />
                </div>
                <div className="notify-text">
                  <p>Aglae Mayer</p>
                  <span className="msg">I missed you so much...</span>
                  <span>3:15 PM</span>
                </div>
              </a>
              <a href="#" className="notify-item">
                <div className="notify-thumb">
                  <img src="assets/images/author/author-img4.jpg" alt="image" />
                </div>
                <div className="notify-text">
                  <p>Aglae Mayer</p>
                  <span className="msg">Your product is completely Ready...</span>
                  <span>3:15 PM</span>
                </div>
              </a>
              <a href="#" className="notify-item">
                <div className="notify-thumb">
                  <img src="assets/images/author/author-img2.jpg" alt="image" />
                </div>
                <div className="notify-text">
                  <p>Aglae Mayer</p>
                  <span className="msg">Hey I am waiting for you...</span>
                  <span>3:15 PM</span>
                </div>
              </a>
              <a href="#" className="notify-item">
                <div className="notify-thumb">
                  <img src="assets/images/author/author-img1.jpg" alt="image" />
                </div>
                <div className="notify-text">
                  <p>Aglae Mayer</p>
                  <span className="msg">Hey I am waiting for you...</span>
                  <span>3:15 PM</span>
                </div>
              </a>
              <a href="#" className="notify-item">
                <div className="notify-thumb">
                  <img src="assets/images/author/author-img3.jpg" alt="image" />
                </div>
                <div className="notify-text">
                  <p>Aglae Mayer</p>
                  <span className="msg">Hey I am waiting for you...</span>
                  <span>3:15 PM</span>
                </div>
              </a>
            </div>
          </div>
        </li>
        <li className="settings-btn">
          <i className="ti-settings" />
        </li>
      </ul>
    </div>
  </div>
</div>

    </>
  )
}
