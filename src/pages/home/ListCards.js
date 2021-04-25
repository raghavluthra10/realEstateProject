import React, { useContext } from 'react';
import './ListCard.css';
// import { PropertyContext } from '../../context/PropertyState';
import { FullInfoContext } from '../../FullInfoContext/FullInfoState'
import Button from '../../components/Button'

const ListCards = ({ address, photo, price, sqft }) => {

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
                <Button > Know More </Button>
            </div>
            
            
        </div>
        </>
    )
}

export default ListCards
