import React, { useState, useEffect, useContext } from 'react';
import { PropertyContext } from '../../context/PropertyState';
import './ListingsPage.css';

const ListingsPage = () => {

    const [ details, setDetails ] = useContext(PropertyContext);

    // const [ listingCard, setListingCard ] = useState(
        
    //     {
    //         property_id: '',
    //         address: '',
    //         lot_size: '',
    //         price: '',
    //         year_built: ''
    //     }
    // ) 
    
    console.log(details.address)

    return (
        <div>
            <button>
                list
            </button>

            <h1>
                   {/* {details.address} */}
            </h1>
        </div>
    )
}

export default ListingsPage

// address
//lot_size(.size, .units)
//photos(its an array with 44 items)
//price
//property_id
//year_built
