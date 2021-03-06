import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';


const SIZES = [ 'btn--medium', 'btn--small',  'btn--wide' ];

const COLOR = [ 'black', 'white' ]

const Button = (props) => {

    const checkBtnColor = COLOR.includes(props.btnColor) ? props.btnColor : COLOR[0]

    const checkBtnSize = SIZES.includes(props.btnSize) ? props.btnSize : SIZES[0]

    return (
        <>
        <Link to={props.destination}>
            <button className={`${checkBtnSize} ${checkBtnColor}`} onClick={props.onClick} >
                {props.children}
            </button> 
        </Link>
       
        </>
    )
}

export default Button
