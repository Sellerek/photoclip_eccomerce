import React from 'react';
import { AiFillGithub, AiOutlineLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2023 &copy; Photoclip</p>
      <p className='icons'>
        <AiFillGithub />
        <AiOutlineLinkedin />
      </p>
    </div>
  );
};

export default Footer;
