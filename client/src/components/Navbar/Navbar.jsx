import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt='logo' />
      </div>
      <ul className='app__navbar-links'>
        {['home', 'about', 'work', 'skills', 'contact'].map((item, index) => (
          <li className='app__flex p-text' key={`link-${item + index}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
        <li className='app__flex p-text'>
          <div />
          <a href={`${import.meta.env.VITE_PUBLIC_URL}/assets/John+Andres+CV.pdf`} download>
            Download CV
          </a>
        </li>
      </ul>

      <div className='app__navbar-menu'>
        <HiMenu onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div whileInView={{ x: [300, 0] }} transition={{ duration: 0.85, ease: 'easeOut' }}>
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item, index) => (
                <li className='app__flex p-text' key={item + index}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
              <li className='app__flex p-text'>
                <a href='/assets/John+Andres+CV.pdf' download onClick={() => setToggle(false)}>
                  Download CV
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
