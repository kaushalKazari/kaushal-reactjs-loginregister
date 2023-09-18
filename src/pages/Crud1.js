// 1. import area
import React, { useEffect, useState } from 'react'

// 2. function definition area
export default function Crud1() {
    // 2.1 Hooks area
    // const[variable, setVariable] = useState(initialValue);
    const[teachers, setTeachers] = useState([
                                                {
                                                    id:1,
                                                    name:'Anil',
                                                    createdAt:'123'
                                                },
                                                {
                                                    id:2,
                                                    name:'Rakesh',
                                                    createdAt:'3658'
                                                }
                                            ])

    // useEffect is use for page load
    // i want to call the api after the page load
    // useEffect(cbfn, arr)
    // cbfn = call back function
    // arr = Array[]
    useEffect(()=>{
        // What you write here will be excuted after the pageload/component rendered
        fetch(`http://localhost:1337/api/teachers`)
        .then((res)=>{
           // this make JSON redable
           return res.json()
        })
        .then(data=>{
            // console.log(data.data);
            let newArrayOfObject = data.data.map((cv,idx,arr)=>{
                return {
                    id:cv.id,
                    name:cv.attributes.name,
                    createdAt:cv.attributes.createdAt
                };
            })
            setTeachers(newArrayOfObject);
        })
        .catch()
    }, [])
    // Every hook is a function

    // 2.2 function definition area


    // 2.3 return statement

    return (
        <>
            <div className='container'>
                <div>
                    <h1>Crud1</h1>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Please Enter Your Name" />
                    </div>
                    <button type="button" className="btn btn-primary">Submit</button>
                </div>
                <br/>
                <hr/>
                <h2>Your created data</h2>
                <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">CreatedAt</th>
    </tr>
  </thead>
  <tbody>
  {
    teachers.map((cv, idx, arr)=>{
        return(
            <>
            <tr>
                <th scope="row">{cv.id}</th>
                <td>{cv.name}</td>
                <td>{cv.createdAt}</td>
            </tr>
            </>
        )
    })
  }    
  </tbody>
</table>
            </div>
        </>
    )
}
