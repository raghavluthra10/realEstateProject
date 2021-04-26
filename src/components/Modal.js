import React from 'react';
import './Modal.css';
import emailjs from 'emailjs-com';
import { GiCancel } from 'react-icons/gi'


const Modal = (props) => {
    if(!props.open) return null

    const sendEmail = (e) => {

        e.preventDefault();

        emailjs.sendForm('service_zr749s7', 'template_qubggan', e.target, 'user_RFS2ES1jZUv0hOVFvo27Z')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }
 
    return (
        <>
            <div className='modalOverlay' />
            <div className='modalContainer'>
                <GiCancel className='modalCloseButton' onClick={props.onClose} />
                
                
                <form className='modale__form' onSubmit={sendEmail}>
                    <input className='modalFName' name='fname' type='text' placeholder='First Name' />
                    <input className='modalLName'  name='lname' type='text' placeholder='Last Name' />
                    <input className='modalEmail'  name='email' type='text' placeholder='email@example.com' />
                    <input className='modalSubject'  name='subject' type='text' placeholder='subject...' />
                    <textarea className='modalMessage'  name='message' type='text' placeholder='Your Message...' />

                    <input className='modalButton' type='submit' value='CONFIRM BOOKING' />



                </form>

            </div>
        </>
    )
}

export default Modal
