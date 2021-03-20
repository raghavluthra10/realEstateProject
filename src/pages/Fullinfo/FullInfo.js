import React, { useContext } from 'react';
import './FullInfo.css';
import { PropertyContext } from '../../context/PropertyState';



const FullInfo = () => {

    const [ details, setDetails ] = useContext(PropertyContext)

    return (
        <div>
            {details}
        </div>
    )
}

export default FullInfo
