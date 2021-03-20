import React, { useContext, useState, useEffect } from 'react';
import { PropertyContext } from '../../context/PropertyState'
import './ListingsPage.css';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const ListingsPage = () => {

    const [ details, setDetails ] = useContext(PropertyContext);

    return (
        <>
        {details.length > 1 && console.log('useContext is working!!! yayyyy')}

        {details.map((info) => (
            <>
                {info.map((detail) => (
                    <div className='listingsPageUltimateContainer'>
                        
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

                                    <Button  destination='/fullInformation'/>
                                </div>
                            </div>
                        
                    </div>
                    
                ))}
            </>
        ))}

            
        </>
        
    )
}

export default ListingsPage

