import React, { useContext, useState, useEffect } from 'react';
import { FullInfoContext } from '../../FullInfoContext/FullInfoState';
import './FullInfo.css';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Modal from '../../components/Modal';



const FullInfo = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


    const [ fullInfo, setFullInfo ] = useContext(FullInfoContext)

    const [ isOpen, setIsOpen ] = useState(false)

    const scheduleViewing = (e) => {
        e.preventDefault(); 
        setIsOpen(true)
    }
   
    return (
        <>
            <div className='fullInfoContainer'>
                
                <div className='fullInfoImageDiv'>
                    <img src={fullInfo.photo} alt={fullInfo.address}  />
                </div>

                <div className='fullInfoDetailDiv'>
                    <div className='fullInfo_price'>
                        {fullInfo.price}
                    </div>

                    <div className='fullInfo_bedBathSqft'>
                        Beds: {fullInfo.beds} | Baths: {fullInfo.baths} | {fullInfo.sqft}
                    </div>

                    <div  className='fullInfo_address'> Address: {fullInfo.address} </div>

                    <div className='fullinfo_propertyId'> Property ID: {fullInfo.property_id} </div>

                    <Button children='SCHEDULE A VIEWING' btnSize='btn--wide' btnColor='black' onClick={scheduleViewing} className='btn_scheduleViewing' />

                    <Modal open={isOpen} onClose={() => {setIsOpen(false)}}  />
                </div>
                
            </div>

            <Footer  />
        </>
    )
}

export default FullInfo
