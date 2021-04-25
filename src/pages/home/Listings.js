import React, { useContext } from 'react';
import './Listings.css';
import ListCard from './ListCards';
import {PropertyContext} from '../../context/PropertyState';
import {FullInfoContext} from '../../FullInfoContext/FullInfoState'

const Listings = () => {

    const [ details, setDetails ] = useContext(PropertyContext);

    // const [ fullInfo, setFullInfo ] = useContext(FullInfoContext);

    return (
        <div className='listingsContainer'>
            <div className='listingsHeading'>
                Premier Listings
            </div>

            <div className='listingsHeadingSub'>
                Search OMEGA ESTATES Exclusive Listings database
            </div>


            <div className='listings__component'>  
            {details.map((info) => (
                <>
                    {info.slice(0, 3).map((detail) => (
                                <div>
                                    <ListCard  
                                    address= {detail.address}
                                    baths= {detail.baths}
                                    beds= {detail.beds}
                                    photo= {detail.photo}
                                    price= {detail.price}
                                    prop_type= {detail.prop_type}
                                    sqft= {detail.sqft}
                                    property_id= {detail.property_id}
                                    />
                                </div>
                    ))}
                </>
            ))}
            </div>
        </div>
    )
}

export default Listings


{/* <div className='listCard'>

<div className='listCard__image'>
    <img src={detail.photo} className='listingsPagePhoto' alt={detail.address} />
</div>

<div className='listCard__info'>
    <span className='listCrad__address'>
        Address: {detail.address}
    </span>
    
    <br/>
    
    <span className='listCrad__price'>
        Price: {detail.price}
    </span>
    
    <br/>

    <span className='listCrad__sqft'>
        sqft: {detail.sqft}
    </span>
</div>

<div className='listCard__button'>
    <Button  destination='/fullInformation' onClick={() => {
        setFullInfo({
            address: detail.address,
            baths: detail.baths,
            beds: detail.beds,
            photo: detail.photo,
            price: detail.price,
            prop_type: detail.prop_type,
            sqft: detail.sqft,
            property_id: detail.property_id
        })
    }} children='Know More' />
</div>



</div>  */}