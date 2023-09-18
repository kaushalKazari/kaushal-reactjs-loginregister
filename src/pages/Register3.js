import React, { useState } from 'react'
import swal from 'sweetalert';

const Register3 = () => {

    // Hooks variable Area
    // const [name, setName] = useState("")
    // const [mobile, setMobile] = useState("")
    // const [pincode, setPincode] = useState("")
    // const [flat, setFlat] = useState("")
    // const [area, setArea] = useState("")
    // const [country, setCountry] = useState("")
    // const [landmark, setLandmark] = useState("")
    // const [state, setState] = useState("")


    const [payload, setPayload] = useState(
        {
            "data": {
              "name": "Divyansh Kumar",
              "mobile": 9873168672,
              "pincode": 844507,
              "flat": "H2",
              "area": "Kazari Khurd",
              "landmark": "Infront of school",
              "country": "India",
              "state": "Bihar"
            }
          }
    )

    const changeValue =(e)=>{
        setPayload(
            {
                "data": {
                  "name": document.querySelector('#fullname').value,
                  "mobile": document.querySelector('#mobile').value,
                  "pincode": document.querySelector('#pincode').value,
                  "flat": document.querySelector('#flat').value,
                  "area": document.querySelector('#area').value,
                  "landmark": document.querySelector('#landmark').value,
                  "country": 'India',
                  "state": 'Bihar'
                }
              }
        )
    }

    const SaveData = ()=> {

        fetch(`http://localhost:1337/api/amezonedatas`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        }).then((res) => {
            // console.log(res);
            return res.json()
        }).then((data) => {
            console.log(data)
            if (data) {
                // alert("you registerd successfully")
                swal("Good job!", "you registerd successfully.", "success");
            }

        }).catch((err) => {
            // console.log(err)
        })
    }

    return (
        <div className='container'>
            <div className="col-sm-5 offset-4 mt-3">
                {/* <h2 className="text-center">Amazon</h2> */}
                <div className='card p-4'>
                    <div className="row mb-3">
                        <div className="col-md-12 mb-3">
                            <label className="form-label">Full name (First and Last name)</label>
                            <input type="text" name="name" id="fullname" onChange={(e) => { return changeValue(e) }} className="form-control" />
                        </div>
                        <div className="col-md-12 ">
                            <label className="form-label">Mobile number</label>
                            <input type="number" name="mobile" id="mobile" onChange={(e) => { return changeValue(e) }} className="form-control" />
                        </div>
                    </div>
                    <form className="row g-3">
                        <div className="col-md-12">
                            <label className="form-label">Pincode</label>
                            <input type="pincode" id="pincode" placeholder="6-digits(0-9) Pincode" name="pincode" onChange={(e) => { return changeValue(e) }} className="form-control" />
                        </div>
                        <div className="col-md-12">
                            <label className="form-label">Flat, House no., Building, Company, Apartment</label>
                            <input type="text" id='flat' name="flat" onChange={(e) => { return changeValue(e) }} className="form-control" />
                        </div>
                        <div className="col-12">
                            <label className="form-label">Area, Street, Sector, Village</label>
                            <input type="text" name="area" id="area" onChange={(e) => { return changeValue(e) }} className="form-control" />
                        </div>
                        <div className="col-12">
                            <label className="form-label">Landmark</label>
                            <input type="text" id="landmark" placeholder="e.g. near apollo hospital" name="landmark" onChange={(e) => { return changeValue(e) }} className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label" >Country/Region</label>

                            <select id="country" className="form-select" name="country" onChange={(e) => { return changeValue(e) }}>
                                <option defaultValue>India</option>
                                <option>Nepal</option>
                                <option>United States</option>
                                <option>Russia</option>
                                <option>China</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">State</label>
                            <select className="form-select" name="state" onChange={(e) => { return changeValue(e) }}>
                                <option defaultValue>Choose...</option>
                                <option>Bihar</option>
                                <option>Uttar Pradesh</option>
                                <option>Kerla</option>
                                <option>Rajasthan</option>
                                <option>Madhya Pradesh</option>
                            </select>
                        </div>
                        <div className='col-sm-4 mt-4'>
                            <button type="button" onClick={SaveData} className="btn btn-warning">Use this Address</button>
                        </div>



                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register3
