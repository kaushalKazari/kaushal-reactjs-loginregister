import React, { useEffect, useState } from 'react'
import JustDialNav from './JustDialNav';
import { URL } from '../../assets/helper';

export default function JustDialBusinessRegister() {
    //2.1 Hooks Area
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [businessCategories, setBusinessCategories] = useState([]);

    useEffect(() => {
        //Call the Country Api
        fetch(`${URL}/api/countries`)
            .then((res) => {
                return res.json()
            })
            .then((countryData) => {

                console.log('Country ------->>', countryData.data);
                setCountries(countryData.data);

            })
            .catch((err) => {
                return err;
            });

        //Call the State Api
        /*
        fetch(`${URL}/api/statuses`)
        .then((res)=>{
            return res.json()
        })
        .then((stateData)=>{

            console.log('State ------->>',stateData.data);
            setStates(stateData.data);

        })
        .catch((err)=>{
            return err;
        });

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
        */

        //Call the Business Category Api
        fetch(`${URL}/api/business-categories`, {})
            .then((res) => {
                return res.json()
            })
            .then((businessCatData) => {
                console.log('Business-categories ------->>', businessCatData.data);
                setBusinessCategories(businessCatData.data);
            })
            .catch((err) => {
                return err;
            });
    }, [])

    // function area
    let getStates = (e) => {
        // alert('OKOKOKOK');
        console.log(e.target.value);
        let country_id = e.target.value

        //Get the states from country id
        fetch(`${URL}/api/statuses?filters[country][id][$eq]=${country_id}&populate=*`, {})
            .then(res => res.json())
            .then(stateData => {
                console.log('States ------->', stateData.data);
                setStates(stateData.data);
            })
            .catch(err => err);

    }

    let getCities = (e) => {
        //   alert('OKOKOKOK');
        // console.log(e.target.value);
        let state_id = e.target.value

        //Get the states from country id
        fetch(`${URL}/api/cities?filters[state][id][$eq]=${state_id}&populate=*`, {})
            .then(res => res.json())
            .then(cityData => {
                console.log('Cities ------->', cityData.data);
                setCities(cityData.data);
            })
            .catch(err => err);
    }

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
        // get the token from local storage
        let token = window.localStorage.getItem('jwt_token');
        console.log('token ----->', token);
        fetch(`${URL}/api/businesses`, { // string interpolation
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization":"Bearer " + token // concatination
            },
            body: JSON.stringify(payload),
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                if (data.data !== null) {
                    alert('Business Registered successfully')
                } else {
                    alert(`${data.error.message}`)
                }
            })
            .catch(err => err)
    }

    return (
        <>
            <JustDialNav />
            <h1>Just Dial Business Register</h1>
            <form>
                <div className="form-group mb-2">
                    <label>Country</label>
                    <select name="country_id" className="form-control"
                        onChange={(e) => getStates(e)}>
                        <option>Select Country</option>
                        {
                            countries.map((cv, idx, arr) => {
                                return <option key={idx} value={cv.id}>{cv.attributes.name}</option>
                            })
                        }
                    </select>
                </div>
                {
                    states.length !== 0 &&
                    <div className="form-group mb-2">
                        <label>State</label>
                        <select name="state_id" className="form-control"
                            onChange={(e) => getCities(e)}>
                            <option>Select State</option>
                            {
                                states.map((cv, idx, arr) => {
                                    console.log('Business Categories in droupdown:- ', cv, idx, arr);
                                    return <option key={idx} value={cv.id}>{cv.attributes.name}</option>
                                })
                            }
                        </select>
                    </div>
                }

                {
                    cities.length !== 0 &&
                    <div className="form-group mb-2">
                        <label>City</label>
                        <select name="city_id" className="form-control">
                            <option>Select City</option>
                            {
                                cities.map((cv, idx, arr) => {
                                    return <option key={idx} value={cv.id}>{cv.attributes.name}</option>
                                })
                            }
                        </select>
                    </div>
                }

                <div className="form-group mb-2">
                    <label>Business Category</label>
                    <select name="bus_cat_id" className="form-control">
                        <option>Select Business Category</option>
                        {
                            businessCategories.map((cv, idx, arr) => {
                                console.log('Business Categories in droupdown:- ', cv, idx, arr);
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
