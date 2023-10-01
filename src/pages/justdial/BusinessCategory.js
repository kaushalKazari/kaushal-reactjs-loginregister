import React, { useEffect, useState } from 'react'
import URL from '../../helpers/url';
import JustDialNav from './JustDialNav';

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
            <table className="table">
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
                                <td>{cv.attributes.name}</td>
                                <td>
                                    <img width='50'
                                        src={`${URL}` + cv.attributes.image.data.attributes.url} />
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>

        </>
    )
}
