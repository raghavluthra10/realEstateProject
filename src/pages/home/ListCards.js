import React from 'react'
import './ListCard.css'

const ListCards = (props) => {
    return (
        <>
            <div className='listCardContainer'>
                <img src={props.src} alt='image' />

                <span>
                    {props.address}
                </span>

                <span>
                   {props.bhk}
                </span>

                <span>
                    {props.price}
                </span>

            </div>
        </>
    )
}

export default ListCards
