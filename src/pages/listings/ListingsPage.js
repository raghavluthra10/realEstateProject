import React, { useContext, useState, useEffect } from 'react';
import { PropertyContext } from '../../context/PropertyState';
import './ListingsPage.css';

const ListingsPage = () => {

    const [ details, setDetails ] = useContext(PropertyContext);
     

    return (
        <div>
            <h1>
            
            </h1>
        </div>
    )
}

export default ListingsPage

// address.city | .line | .state
//photo.href
//sqft
//price
//property_id
//year_built


{/* <ListCard 
src='https://cdn.decorilla.com/online-decorating/wp-content/uploads/2018/10/modern-interior-designer-nyc.jpg' 
address='170 East 88th Street' 
bhk=' 4 Beds | 4 Baths | SQFT 2,610' 
price='$2,324,000' 
/> */}