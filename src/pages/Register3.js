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


    function SaveData() {
        // console.log(name, mobile, pincode, flat, area, country, landmark, state)

        let data = {
           'name' : name,
            'mobile': mobile,
            'pincode': pincode,
            'flat': flat,
            'area': area,
            'landmark': landmark,
            'country': country,
            'state': state
        }

        fetch(`http://localhost:1337/api/amazondatas`,{
            method:"POST",
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization':'Bearer d7100b5ba763ce8e33cb653060e3597d44896584a4471d86426903c2fdf17e9a09e873941e675b351a9a7bd20e298628b36ef54278b4f8b92d08488844fe6c5b6279e31b4142a002533d4ed9a799cecd45012c0b349368039e145cae38078fac4ab62ce83cdb015a4529f3be961b1af1f80de9facd5a61fd2bac6c654ff55b3c'
            },
            body:JSON.stringify(data)
            })
            .then((res)=>{
                return res.json()
            })
            .then((data)=>{
              console.log(data)
            if(data.jwt){
              // alert("you registerd successfully")
              swal("Good job!", "you registerd successfully.", "success");
            }
            
            }).catch((err)=>{console.log(err)})
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
                            <input type="text" name="area" value={area} onChange={(e) => { setArea(e.target.value) }} className="form-control"/>
                        </div>
                        <div className="col-12">
                            <label className="form-label">Landmark</label>
                            <input type="text" placeholder="e.g. near apollo hospital" name="landmark" value={landmark} onChange={(e) => { setLandmark(e.target.value) }} className="form-control"/>
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
