import React, { useEffect, useState } from 'react'
import JustDialNav from './JustDialNav';
import { Link } from 'react-router-dom';
import { URL } from '../../helpers/helpers';

export default function BusinessCategory() {
    // hook area
    const [businessCategory, setBusinessCategory] = useState([]);

    useEffect(() => {
        fetch(`${URL}/api/business-categories?populate=*`, {
            method: "GET"
        })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                // console.log(data);
                setBusinessCategory(data.data);
                console.log(businessCategory);
            })
            .catch(err => err)
    }, [])


    
    return (
        <>
            <JustDialNav />           
            <h1>Business Category</h1>
            <div className='row'>
            {
                businessCategory.map((cv, idx, arr) => {
                    return(<>
                    <div className='col-md-2'>
                        <div key={idx} className="card">
                        <Link to={`/searchfilter?cat_name=${cv.attributes.name}`}>
                        <img className="card-img-top" src={`${URL}` + cv.attributes.image.data.attributes.url} alt="Card image cap" />
                        </Link>
  <div className="card-body text-center">
    <Link to={`/searchfilter?cat_name=${cv.attributes.name}`} className="btn btn-primary btn-sm">{cv.attributes.name}</Link>
  </div>
</div>
</div>
                    </>)
                })
            }
</div>
           

            {/* <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Category Name</th>
                        <th scope="col">Image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        businessCategory.map((cv, idx, arr) => {
                            return <tr key={idx}>
                                <td>{cv.id}</td>
                                <td>
                                <Link>{cv.attributes.name}</Link>
                                </td>
                                <td>
                                    <img width='50'
                                        src={`${URL}` + cv.attributes.image.data.attributes.url} />
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table> */}

        </>
    )
}
