import React from 'react';
import './HeroSectionSearchedList.css';
import Button from '../components/Button';

const HeroSectionSearchedList = (props) => {
    return (
        <>
            <div className='listSearch'>
                
               
                   <div className='searchedListDetail' key={props.det.property_id} >
                   {props.det.address_new.line}  {props.det.address_new.city} {props.det.address_new.state} 
                   </div>
                 <Button btnColor='white' btnSize='btn--small' children='MORE' className='searchedListButton' destination='/fullInformation' />
            </div>

        </>
    )
}

export default HeroSectionSearchedList


// {/* <div className='listSearch'>
                
// {props.info.map((det) => (
//     <span className='searchedListDetail' key={det.property_id} >
//         {det.address_new.line} {det.address_new.city} {det.address_new.state} |
//     </span>
// ))}  <Button btnColor='white' btnSize='btn--small' children='MORE' className='searchedListButton'  />
// </div> */}