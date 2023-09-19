// 1. import area
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

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

    const[payload, setPayload] = useState(
                                            {
                                                "data": {
                                                "name": "Teacher3"
                                                }
                                            }
                                        )
    const[teachername, setTeachername] = useState('');

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
    const changeValue = (e)=>{
        // console.log(e.target.value);
        setTeachername(e.target.value);
        // console.log('Hook Variable teachername', teachername);
        setPayload({
            ...payload,
            data:{
                name:teachername
                // name:document.querySelector('#teachernameId').value
            }
        })
    }

    let sendData = () =>{
        fetch(`http://localhost:1337/api/teachers`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
        .then(res=>{
            // console.log(res);
            return res.json()
        })
        .then(data=>{
            // return console.log(data)
            // console.log(data);
            if(data){
                swal("Good job!", "Teacher Name created Successfully.", "success");
            }
        })
        .catch(err=>{
            // console.log(err)
        })
    }

    const deleteTeacher = (e)=>{
    //     document.getElementById('loader').innerHTML(`<div className="d-flex justify-content-center">
    //     <div className="spinner-border" role="status">
    //       <span className="visually-hidden">Loading...</span>
    //     </div>
    //   </div>`)
        let tr = e.target.closest('tr');
        let delId = tr.querySelector('td:first-child').innerHTML;
        // let ans = window.confirm('Are you sure, do you really want to delete ?');
        // if(ans === true){
        //     // call the delete REST API
        //     console.log(`http://localhost:1337/api/amezonedatas/${delId}`); 
        //     fetch(`http://localhost:1337/api/amezonedatas/${delId}`,{
        //         method:"DELETE"
        //     })
        //     .then((res)=>{
        //         // this json() data make the incomming data json redable
        //         return res.json();
        //     })
        //     .then((data)=>{
        //         tr.remove();
        //         console.log(data);
        //     })
        //     .catch(()=>{
                
        //     })
        // }
        // alert(ans);
        // console.log(e.target.closest('tr').querySelector('td:first-child').innerHTML);
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                // call the delete REST API
                fetch(`http://localhost:1337/api/teachers/${delId}`,{
                    method:'DELETE'
                })
                .then((res)=>{
                    // this json() data make the incomming data json redable
                    return res.json();
                })
                .then((data)=>{
                    tr.remove();
                    console.log(data);
                })
                .catch(()=>{
                    
                })
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
            //   document.getElementById('loader').innerHTML = '';
            } else {
              swal("Your imaginary file is safe!");
            }
          });
    }

    // 2.3 return statement

    return (
        <>
        {/* <div id="loader"></div> */}
            <div className='container'>
                <div>
                    <h1>Crud1</h1>
                    <div className="mb-3">
                        <label htmlFor="teachernameId" className="form-label">Name</label>
                        <input type="text" name='name' onKeyUp={(e)=>{ return changeValue(e) }} className="form-control" id="teachernameId" placeholder="Please Enter Your Name" />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={sendData}>Submit</button>
                </div>
                <br/>
                <hr/>
                <h2>Your created data</h2>
                <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">CreatedAt</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {
    teachers.map((cv, idx, arr)=>{
        return(
            <>
            <tr key={idx}>
                <td>{cv.id}</td>
                <td>{cv.name}</td>
                <td>{cv.createdAt}</td>
                <td>
                    <button className='btn btn-primary btn-sm'>View</button>
                    <Link to={`/editteacher?id=${cv.id}&name=${cv.name}`} className='btn btn-info btn-sm ms-2'>Edit</Link>
                    <button className='btn btn-danger btn-sm ms-2' onClick={(e)=>deleteTeacher(e)}>Delete</button>
                </td>
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
