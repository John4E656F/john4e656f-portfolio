import React from 'react';
import { NavigationDots, SocialMedia } from '../components';
import { motion } from 'framer-motion';

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <motion.div whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }} transition={{ duration: 0.5 }} className={`${classNames} app__flex`}>
        <div id={idName} className={`app__container ${classNames}`}>
          <SocialMedia />
          <div className='app__wrapper app__flex'>
            <Component />

            <div className='copyright'>
              <p className='p-text'>@2023 John4E656F</p>
              <p className='p-text'>All rights reserved</p>
            </div>
          </div>
          <NavigationDots active={idName} />
        </div>
      </motion.div>
    );
  };

export default AppWrap;
