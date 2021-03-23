import React, { useContext, useState } from 'react';
import { FullInfoContext } from '../../FullInfoContext/FullInfoState';
import './FullInfo.css';



const FullInfo = () => {

    const [ fullInfo, setFullInfo ] = useContext(FullInfoContext)

   
    return (
        <div>
            <h1>
               {fullInfo.address}
            </h1>
        </div>
    )
}

export default FullInfo


//address
// baths
//beds
//photo
// price
// prop_type
//sqft
//property_id


// add a pop-up button for view-scheduling. when clicked asks for email, name, day and time.