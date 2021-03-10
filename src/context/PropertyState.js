import React, { useEffect, useState } from 'react';
import PropertyContext from './propertyContext';

const PropertyState = (props) => {

    const [ details, setDetails ] = useState([])

    
    useEffect(() => {
        fetchData();
        console.log(details)

    }, [])


    const fetchData = async () => {
        await fetch("https://realtor.p.rapidapi.com/properties/detail?listing_id=608763437&prop_status=for_sale&property_id=4599450556", {
            "method": "GET",
            "headers": {
            "x-rapidapi-key": "0cc8308c3cmshd6d30c4f229922dp1d5949jsn0ba6aa44fa54",
            "x-rapidapi-host": "realtor.p.rapidapi.com"
        }
        })
        .then(response => response.json())
        .then(response => {
            setDetails([
                ...details,
                {
                    address: response.address.city,
                    price: response.price
                }
            ])

        })
        .catch(err => { 
            console.error(err);
        });
    }
    
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



// const loadDate = async () => {
//     await fetch("https://realtor.p.rapidapi.com/properties/detail?listing_id=608763437&prop_status=for_sale&property_id=4599450556", {
//     "method": "GET",
//     "headers": {
//     "x-rapidapi-key": "0cc8308c3cmshd6d30c4f229922dp1d5949jsn0ba6aa44fa54",
//     "x-rapidapi-host": "realtor.p.rapidapi.com"
// }
// })