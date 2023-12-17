import React from 'react';

import './Home.scss';

import { HiOutlinePlay } from 'react-icons/hi';

import homeImage from '../../assets/home-image.png';

import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section className='home' id='home'>
        <motion.div className="home__content"
            initial={{opacity: 0, x: -80}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 2}}
        >
            <h2 className="home__title">
                Bringing <span>Pets</span>
                <br />& People Closer
            </h2>

            <p className="home__description">
                Following the basic pet care guidelines mentioned above is a step towards becoming a responsible pet owner. However, the guidelines are not intended to replace the advice of a professional veterinarian, so consult your veterinarian if you are unsure.
            </p>

            <div className="home__buttons">
                <button className="btn__1">
                    Adpot Now
                </button>
                <button className="btn__2">
                    <HiOutlinePlay
                        className='btn__icon'
                    />
                    Watch Video
                </button>
            </div>
        </motion.div>
        <motion.div className="home__image"
            initial={{opacity: 0, scale: 0.5}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 2}}
        >
            <img src={homeImage} alt="cat-lover" />
        </motion.div>
    </section>
  )
}

export default Home