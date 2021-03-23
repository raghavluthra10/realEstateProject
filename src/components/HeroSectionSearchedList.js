import React, { useContext } from 'react';
import './HeroSectionSearchedList.css';
import { Link } from 'react-router-dom';
import { FullInfoContext } from '../FullInfoContext/FullInfoState'

const HeroSectionSearchedList = (props) => {

    const [ fullInfo, setFullInfo ] = useContext(FullInfoContext);

    const addFullInformation = () => {
        setFullInfo({
            address: props.det.address,
            baths: props.det.baths,
            beds: props.det.beds,
            photo: props.det.photo,
            price: props.det.price,
            prop_type: props.det.prop_type,
            sqft: props.det.sqft,
            property_id: props.det.property_id
        })
    }


    return (
        <>
            <div className='listSearch'>
                <Link to='/fullInformation' onClick={addFullInformation} >
                    <div className='searchedListDetail' key={props.det.property_id} >
                        {props.det.address_new.line}  {props.det.address_new.city} {props.det.address_new.state} 
                   </div>
                </Link>
                   
      
            </div>

        </>
    )
}

export default HeroSectionSearchedList

//address
// baths
//beds
//photo
// price
// prop_type
//sqft
//property_id