import React, { useEffect, useState } from 'react';
import PropertyContext from './propertyContext';

const PropertyState = (props) => {

    const [ details, setDetails ] = useState([])


    useEffect(() => {
        fetch("https://realtor.p.rapidapi.com/properties/v2/detail?property_id=O3599084026", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "0cc8308c3cmshd6d30c4f229922dp1d5949jsn0ba6aa44fa54",
                "x-rapidapi-host": "realtor.p.rapidapi.com"
            }
        })
        .then(response => response.json())
        .then(response => {
            setDetails(response.properties[0])
            // console.log(response)
            // console.log(details.address.city)
        })
    }, [])


    return (
        <>
            <PropertyContext.Provider value={[ details, setDetails ]}>
                {props.children}
            </PropertyContext.Provider>
        </>
    )
}

export default PropertyState;
export { PropertyContext };


// address
//lot_size(.size, .units)
//photos(its an array with 44 items)
//price
//property_id
//year_built