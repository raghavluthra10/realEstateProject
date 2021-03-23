import React, { useContext, useState, useEffect } from 'react';
import { PropertyContext } from '../../context/PropertyState'
import { FullInfoContext } from '../../FullInfoContext/FullInfoState'
import './ListingsPage.css';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const ListingsPage = (props) => {

    const [ details, setDetails ] = useContext(PropertyContext);

    const [ fullInfo, setFullInfo ] = useContext(FullInfoContext);


    return (
        <div className='listingsPageUltimateContainer'>
            {details.length > 1 && console.log('useContext is working!!! yayyyy')}

            {details.map((info) => (
                <>
                    {info.map((detail) => (
                                <div className='listingsPageContainer'>
                                    
                                    <img src={detail.photo} className='listingsPagePhoto' alt={detail.address} />
                                
                                    <br/>

                                    <div className='listingsPageInfoContainer'>
                                        <span className='listingsPageAddress'>
                                            Address: {detail.address}
                                        </span>
                                        
                                        <br/>
                                        
                                        <span className='listingsPagePrice'>
                                            Price: {detail.price}
                                        </span>
                                        
                                        <br/>
                    
                                        <span className='listingsPageSqft'>
                                            sqft: {detail.sqft}
                                        </span>
                                    </div>

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
                    ))}
                </>
            ))}
        </div>
        
    )
}

export default ListingsPage

