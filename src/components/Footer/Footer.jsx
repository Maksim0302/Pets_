import React from 'react';

import './Footer.scss';

import {BsFacebook, BsInstagram, BsTwitter, BsYoutube} from 'react-icons/bs';

import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.section className="footer" id='footer'
        initial={{opacity: 0, y: 100}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 2}}
    >
        <div className="footer__news__feed">
            <div className="news__feed__text">
                <h3>Subscribe Our News Lette!</h3>
            </div>
            <div className="news__feed__input">
                <input type="text"
                    placeholder='Enter your Email'
                />
                <button>Subscribe</button>
            </div>
        </div>

            <div className="footer__menu">
                <ul className="footer__menu__list">
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Category</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>

                <div className="footer__menu__icons">
                    <BsFacebook/>
                    <BsInstagram/>
                    <BsTwitter/>
                    <BsYoutube/>
                </div>
            </div>
            <div className="footer__breaker"></div>
            <div className="footer__credits">
                <p>@ 2023 - PetCare All right reserved.</p>
            </div>
    </motion.section>
  )
}

export default Footer;