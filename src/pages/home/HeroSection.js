import React, { useContext, useState } from 'react';
import { PropertyContext } from '../../context/PropertyState';
import './HeroSection.css';
import HeroSectionSearchedList from '../../components/HeroSectionSearchedList';

const HeroSection = () => {

    const [ details, setDetails ] = useContext(PropertyContext);
    const [ text, setText ] = useState('')


    const clearSearch = e => {
        e.preventDefault();
        setText('');
    }

    const editSearchterm = e => {
        e.preventDefault()
        setText(e.target.value)
    }

    

    return (
        <h3>
        <div className='heroContainer'>
                <div className='heroHeading'>
                    We Are OMEGA ESTATES
                </div>

                <div className='heroSectionSearchListings'>
                    <form>
                        <input type='text' value={text} onChange={editSearchterm} placeholder='Address...'  />
                        <input type='submit' value='Clear' className='heroSectionSubmitButton' onClick={clearSearch} />
                    </form>   

                    {details.length > 0 && console.log(details)}
                </div>
                
            

            <div className='listSearchedContainer'>
                

                { text !== '' && details.map((info) => (
                        info.filter((fill) => fill.address_new.city.toLowerCase().includes(text.toLowerCase())).map((det) => (
                            <HeroSectionSearchedList det={det} />
                        ))    
                    ))}
                
                
                                   
            </div>
            
        </div>
        </h3>
    )
}

export default HeroSection

// {details.map((info) => (
//     <>
//     {info.map((det) => (
//         <h5 style={{ color: 'white' }}> {det.address_new.city} </h5>
//     ))}
//     </>
// ))}