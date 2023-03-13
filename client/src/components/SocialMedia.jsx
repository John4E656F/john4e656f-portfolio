import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const SocialMedia = () => (
  <div className='app__social'>
    <a href='https://www.linkedin.com/in/john4e656f/' target='_blank' rel='noopener noreferrer'>
      <div>
        <FaLinkedin />
      </div>
    </a>
    <a href='https://github.com/John4E656F' target='_blank' rel='noopener noreferrer'>
      <div>
        <FaGithub />
      </div>
    </a>
  </div>
);

export default SocialMedia;
