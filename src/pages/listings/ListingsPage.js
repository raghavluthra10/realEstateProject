import React, { useContext, useState, useEffect } from 'react';
import { PropertyContext } from '../../context/PropertyState'
import { FullInfoContext } from '../../FullInfoContext/FullInfoState'
import './ListingsPage.css';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

const ListingsPage = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const [ details, setDetails ] = useContext(PropertyContext);

    const [ fullInfo, setFullInfo ] = useContext(FullInfoContext);


    return (
        <>
        <div className='listingsPage'>
            {details.length > 1 && console.log('useContext is working!!! yayyyy')}

            {details.map((info) => (
                <>
                    {info.slice(0,28).map((detail) => (
                                <div className='listingsPageContainer'>
                                    <div className='listingPage__imageDiv'>
                                        <img src={detail.photo} className='listingsPagePhoto' alt={detail.address} />
                                    </div>
                                    
                                    <div className='listingsPage__infoDiv'>
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

                                    <div className='listingPage__buttonDiv'>
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

                                    
                        
                                </div> 
                    ))}
                </>
            ))}
        </div>
        <Footer  />
        </>
    )
}

export default ListingsPage

