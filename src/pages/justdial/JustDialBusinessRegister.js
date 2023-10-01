import React, { useEffect, useState } from 'react'
import JustDialNav from './JustDialNav';
import { URL } from '../../assets/helper';

export default function JustDialBusinessRegister() {
    //2.1 Hooks Area
    // const [countries,setCountries] = useState([]);
    // const [states,setStates] = useState([]);
    const [cities,setCities] = useState([]);
    const [businessCategories,setBusinessCategories] = useState([]);

    useEffect(()=>{
        //Call the Country Api

        //Call the City Api
        fetch(`${URL}/api/cities`)
        .then((res)=>{
            return res.json()
        })
        .then((cityData)=>{

            console.log('City ------->>',cityData.data);
            setCities(cityData.data);

        })
        .catch((err)=>{
            return err;
        });

        // fetch(`http://localhost:1337/api/countries`)
        // .then((res)=>{
        //     return res.json()
        // })
        // .then((countryData)=>{

        //     console.log('Country ------->>',countryData.data);
        //     setCountries(countryData.data);

        // })
        // .catch((err)=>{
        //     return err;
        // });

         //Call the Business Category Api
         fetch(`${URL}/api/business-categories`,{})
         .then((res)=>{
             return res.json()
         })
         .then((businessCatData)=>{
             console.log('Business-categories ------->>',businessCatData.data);
             setBusinessCategories(businessCatData.data);
         })
         .catch((err)=>{
             return err;
         });
    },[])

    // function area
    // let  getStates= (e) =>{
    //     // alert('OKOKOKOK');
    //     console.log(e.target.value);
    //     let country_id = e.target.value
 
    //      //Get the states from country id
    //      fetch(`${URL}/api/states?filters[country][id][$eq]=${country_id}&populate=*`,{})
    //      .then(res=>res.json())
    //      .then(stateData=>{
    //          console.log('States ------->',stateData.data);
    //          setStates(stateData.data);
    //      })
    //      .catch(err=>err);
 
    //  }
 
    //  let getCities=(e)=>{
    //       // alert('OKOKOKOK');
    //     console.log(e.target.value);
    //     let state_id = e.target.value
 
    //      //Get the states from country id
    //      fetch(`${URL}/api/cities?filters[state][id][$eq]=${state_id}&populate=*`,{})
    //      .then(res=>res.json())
    //      .then(cityData=>{
    //          console.log('Cities ------->',cityData.data);
    //          setCities(cityData.data);
    //      })
    //      .catch(err=>err);    
    //  }

    const businessRegisterUser = () => {
        let payload = {
            "data": {
              "name": document.querySelector('input[name="business_name"]').value,
              "business_category": document.querySelector('select[name="bus_cat_id"]').value,
              "cities": [
                document.querySelector('select[name="city_id"]').value
              ]
            }
          }
        fetch(`http://localhost:1337/api/businesses`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                alert('Business Registered successfully')
            })
            .catch(err => err)
    }

    return (
        <>
            <JustDialNav />
            <h1>Just Dial Business Register</h1>
            <form>
                <div className="form-group mb-2">
                    <label>Business Category</label>
                    <select name="bus_cat_id" className="form-control">
                        <option>Select Business Category</option>
                        {
                            businessCategories.map((cv,idx,arr)=>{
                                console.log('Business Categories in droupdown:- ', cv, idx, arr);
                                return <option key={idx} value={cv.id}>{cv.attributes.name}</option>
                            })
                        }
                    </select>
                </div>
                <div className="form-group mb-2">
                    <label>Business City</label>
                    <select name="city_id" className="form-control">
                        <option>Select City</option>
                        {
                            cities.map((cv,idx,arr)=>{
                                console.log('cities in droupdown ->', cv,idx,arr);
                                return <option key={idx} value={cv.id}>{cv.attributes.name}</option>
                            })
                        }
                    </select>
                </div>
                <div className="form-group mb-2">
                    <label>Business Name</label>
                    <input type="text" name='business_name' className="form-control" placeholder="Enter Business Name" />
                </div>
                <button type="button" className="btn btn-primary"
                    onClick={() => businessRegisterUser()}>Submit</button>
            </form>
        </>
    )
}
