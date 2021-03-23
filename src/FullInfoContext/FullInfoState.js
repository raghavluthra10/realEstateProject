import React, { useState } from 'react';
import FullInfoContext from './fullInfoContext';


const FullInfoState = (props) => {

    const [ fullInfo, setFullInfo ] = useState({})

    return(
        <>
            <FullInfoContext.Provider value={[ fullInfo, setFullInfo ]}>
                {props.children}
            </FullInfoContext.Provider>
        </>
    )
}

export default FullInfoState;
export { FullInfoContext } 