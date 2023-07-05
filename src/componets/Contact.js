
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

        emailjs.sendForm(
            'service_w491asm', 
            'template_1c20how', 
             form.current, 
            'lnP5sh7O-mM9QuJdO')

            .then((result) => {
              console.log(result.text);
              console.log('message sent');
          }, (error) => {
              console.log(error.text);
          });
      };
    
          
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full'>
        {/* method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" */}
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - birhanuwoeldmariam@gmail.com and Call +251-099-118-1289</p>
            </div>
            <input className='bg-[#c3d1e0] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Send</button>
        </form>
    </div>
  )
}

export default Contact