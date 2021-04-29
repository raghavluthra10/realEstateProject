import React, { useContext } from 'react';
import './ListCard.css';
// import { PropertyContext } from '../../context/PropertyState';
import { FullInfoContext } from '../../FullInfoContext/FullInfoState'
import Button from '../../components/Button'

const ListCards = ({ address, photo, price, sqft, baths, beds, prop_type, property_id  }) => {

    // const [ details, setDetails ] = useContext(PropertyContext);

    const [ fullInfo, setFullInfo ] = useContext(FullInfoContext);

    return (
        <>
        <div className='listCards'>
            <div className='listCards__imageDiv'>
                <img src={photo} alt='' className='listCards__image'  />
            </div>

            <div className='listCards__info'>
                <h3> {address} </h3>

                <h4> {price}  |  {sqft} </h4>
                
            </div>

            <div className='listCards__button'>
                <Button 
                destination='/fullInformation'
                onClick={() => {
                    setFullInfo({
                        address: address,
                        baths: baths,
                        beds: beds,
                        photo: photo,
                        price: price,
                        prop_type: prop_type,
                        sqft: sqft,
                        property_id: property_id
                    })
                }}
                > Know More </Button>
            </div>
            
            
        </div>
        </>
    )
}

export default ListCards
