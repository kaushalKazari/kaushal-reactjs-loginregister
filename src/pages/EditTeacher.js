import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import swal from 'sweetalert';

export default function EditTeacher() {
    // hook area
    let [searchParams, setSearchParams] = useSearchParams();
    const [payload, setPayload] = useState(
        {
            "data": {
                "name": "Teacher3"
            }
        }
    )
    const[teachername, setTeachername] = useState('');

    // after page/component load
    // i want to receive the data after the page load
    useEffect(() => {
        //how to acess query params in react
        console.log(searchParams.get('id'));
        console.log(searchParams.get('name'));
        setPayload({
            ...payload,
            data: {
                name: searchParams.get('name')
            }
        })
    },[]);

    // function difination
    const updateValue = (e) => {
        // console.log(e.target.value);
        setTeachername(e.target.value);
        // console.log('Hook Variable teachername', teachername);
        setPayload({
            ...payload,
            data: {
                // name: teachername
                // name:document.querySelector('#teachername').value
                name:e.target.value
            }
        })
    }
    const updateTeacher = () => {
        fetch(`http://localhost:1337/api/teachers/${searchParams.get('id')}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
            .then(res => {
                // console.log(res);
                return res.json()
            })
            .then(data => {
                // return console.log(data)
                // console.log(data);
                if (data) {
                    swal("Good job!", "Teacher Updated Successfully.", "success")
                    .then((value) => {
                        window.location.href='/crud1';
                    });              
                }
            })
            .catch(err => {
                // console.log(err)
            })
    }

    // return area
    return (
        <>
            <div className='container'>
                <h2>Edit Teacher data</h2>
                <div>
                    <input type='hidden' name='id' value={searchParams.get('id')} />
                    <div className="mb-3">
                        <label htmlFor="teachername" className="form-label">Name</label>
                        <input type="text" name='name' value={payload.data.name} onChange={(e) => { return updateValue(e) }} className="form-control" id="teachername" placeholder="Please Enter Your Name" />
                        {/* value={payload.data.name} */}
                    </div>
                    <button type="button" className="btn btn-primary" onClick={updateTeacher}>Update</button>
                </div>
            </div>
        </>
    )
}
