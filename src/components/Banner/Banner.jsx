import React from 'react';

import './Banner.scss';

import groupImage from '../../assets/pet-group.png';

import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <section className="banner__section">
        <div className="banner">
            <motion.div className="banner__content"
              initial={{opacity: 0, scale: 0}}
              whileInView={{opacity: 1, scale: 1}}
              transition={{duration: 2}}
            >
                <h2>Stay $ Save</h2>
                <h2>Get Yiur Awesome Discount</h2>
                <p>Take care of your pet</p>
            </motion.div>

            <div className="banner__image">
                <motion.img src={groupImage} alt="" 
                  initial={{opacity: 0, scale: 0}}
                  whileInView={{opacity: 1, scale: 1}}
                  transition={{duration: 2}}
                />
            </div>
        </div>
    </section>
  )
}

export default Banner