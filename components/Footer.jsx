import React from 'react';
import { AiFillGithub, AiOutlineLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2023 &copy; Photoclip</p>
      <p className='icons'>
        <a href='https://github.com/Sellerek/' target='_blank' noreferer>
          <AiFillGithub />
        </a>
        <a
          href='https://www.linkedin.com/in/krzysztof-pietruszka/'
          target='_blank'
          noreferer
        >
          <AiOutlineLinkedin />
        </a>
      </p>
    </div>
  );
};

export default Footer;
