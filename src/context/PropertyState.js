import React, { useEffect, useReducer, useState } from 'react';
import PropertyContext from './propertyContext';
import PropertyReducer from './propertyReducer';

const PropertyState = (props) => {

    const [ details, setDetails ] = useState([])

    useEffect(()=> {
        fetchDetails()
        console.log(details)
    }, [])


    const fetchDetails = async (e) => {

        fetch("https://realtor.p.rapidapi.com/properties/list-for-sale?city=New%20York%20City&offset=0&limit=200&state_code=NY&sort=relevance", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "ead33b8ab5msh3fd289740626140p11f7e8jsnd4580c87d159",
                "x-rapidapi-host": "realtor.p.rapidapi.com"
            }
        })
        .then(response => response.json())
        .then(response =>  setDetails([...details,
        response.listings]
        ))
        .catch(err => {
            console.error(err);
        });
    }

    
    return (
        <>
            <PropertyContext.Provider value={[  details, setDetails ]}>
                {props.children}
            </PropertyContext.Provider>
        </>
    )
}

export default PropertyState;
export { PropertyContext };


