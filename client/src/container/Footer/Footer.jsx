import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

const serviceId = import.meta.env.VITE_EMAILJS_SERVICEID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATEID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLICKEY;

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    emailjs.init(publicKey);
  }, []);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);
    console.log(formData);

    emailjs
      .send(serviceId, templateId, formData, publicKey)
      .then((res) => {
        console.log('SUCCESS!', res.status, res.text);
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));

    // const contact = {
    //   _type: 'contact',
    //   name: formData.username,
    //   email: formData.email,
    //   message: formData.message,
    // };

    // client.create(contact).catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className='head-text'>Let's grab coffee & chat</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card '>
          <img src={images.email} alt='email' />
          <a href='mailto:jm49andres@gmail.com' className='p-text'>
            jm49andres@gmail.com
          </a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='phone' />
          <a href='tel:+32491881117' className='p-text'>
            +32 491 88 11 17
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input className='p-text' type='text' placeholder='Your Name' name='name' value={name} onChange={handleChangeInput} />
          </div>
          <div className='app__flex'>
            <input className='p-text' type='email' placeholder='Your Email' name='email' value={email} onChange={handleChangeInput} />
          </div>
          <div>
            <textarea className='p-text' placeholder='Your Message' value={message} name='message' onChange={handleChangeInput} />
          </div>
          <button type='button' className='p-text' onClick={handleSubmit}>
            {!loading ? 'Send Message' : 'Sending...'}
          </button>
        </div>
      ) : (
        <div>
          <h3 className='head-text'>Thank you for getting in touch!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(Footer, 'contact');
