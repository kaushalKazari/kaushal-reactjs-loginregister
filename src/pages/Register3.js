import React, { useState } from 'react'
import swal from 'sweetalert';

const Register3 = () => {

    // Hooks variable Area
    const [name, setName] = useState("")
    const [mobile, setMobile] = useState("")
    const [pincode, setPincode] = useState("")
    const [flat, setFlat] = useState("")
    const [area, setArea] = useState("")
    const [country, setCountry] = useState("")
    const [landmark, setLandmark] = useState("")
    const [state, setState] = useState("")


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


    function SaveData() {
        // console.log(name, mobile, pincode, flat, area, country, landmark, state)

        // let data = {
        //    'name' : name,
        //     'mobile': mobile,
        //     'pincode': pincode,
        //     'flat': flat,
        //     'area': area,
        //     'landmark': landmark,
        //     'country': country,
        //     'state': state
        // }
        // let data = [
        //     {
        //         "data": {
        //           "name": "Pooja",
        //           "mobile": 987316867112,
        //           "pincode": 121134,
        //           "flat": "Pooja",
        //           "area": "Pooja",
        //           "landmark": "Near11 Pooja Sani Mandir",
        //           "country": "India",
        //           "state": "Bihar"
        //         }
        //       }
        // ]

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
            if (data.jwt) {
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
                            <input type="text" name="name" value={name} onChange={(e) => { setName(e.target.value) }} className="form-control" />
                        </div>
                        <div className="col-md-12 ">
                            <label className="form-label">Mobile number</label>
                            <input type="number" name="mobile" value={mobile} onChange={(e) => { setMobile(e.target.value) }} className="form-control" />
                        </div>
                    </div>
                    <form className="row g-3">
                        <div className="col-md-12">
                            <label className="form-label">Pincode</label>
                            <input type="pincode" placeholder="6-digits(0-9) Pincode" name="pincode" value={pincode} onChange={(e) => { setPincode(e.target.value) }} className="form-control" />
                        </div>
                        <div className="col-md-12">
                            <label className="form-label">Flat, House no., Building, Company, Apartment</label>
                            <input type="text" name="flat" value={flat} onChange={(e) => { setFlat(e.target.value) }} className="form-control" />
                        </div>
                        <div className="col-12">
                            <label className="form-label">Area, Street, Sector, Village</label>
                            <input type="text" name="area" value={area} onChange={(e) => { setArea(e.target.value) }} className="form-control" />
                        </div>
                        <div className="col-12">
                            <label className="form-label">Landmark</label>
                            <input type="text" placeholder="e.g. near apollo hospital" name="landmark" value={landmark} onChange={(e) => { setLandmark(e.target.value) }} className="form-control" />
                        </div>
                        <div className="col-md-6">
                            <label className="form-label" >Country/Region</label>

                            <select id="country" className="form-select" name="country" value={country} onChange={(e) => { setCountry(e.target.value) }}>
                                <option defaultValue>India</option>
                                <option>Nepal</option>
                                <option>United States</option>
                                <option>Russia</option>
                                <option>China</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="inputState" className="form-label">State</label>
                            <select id="inputState" className="form-select" name="state" value={state} onChange={(e) => { setState(e.target.value) }}>
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
