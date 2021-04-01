import React from 'react';
import './ContactUs.css';
import emailjs from 'emailjs-com';
import Button from '../../components/Button';
import Footer from '../../components/Footer';

const ContactUs = () => {

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
        <div className='contactUsContainer'>
            <header className='contactUsHeader'> CONTACT US </header>

            <form onSubmit={sendEmail} className='contactUsForm'>
                    <input className='contactModalFName' name='fname' type='text' placeholder='First Name' />
                    <input className='contactModalLName'  name='lname' type='text' placeholder='Last Name' />
                    <input className='contactModalEmail'  name='email' type='text' placeholder='email@example.com' />
                    <input className='contactModalSubject'  name='subject' type='text' placeholder='subject...' />
                    <textarea className='contactModalMessage'  name='message' type='text' placeholder='Your Message...' />
                   
                    <Button className='contactModalButton' btnSize='btn--wide' children='CONFIRM BOOKING' />
            </form>
            
        </div>

        <Footer  />
        </>
    )
}

export default ContactUs
