import React from 'react';

import './Services.scss';
import { HiGlobe } from 'react-icons/hi';

import { motion } from 'framer-motion';

const services = [
    {
        id: 1,
        title: 'best grooming',
        icon: <HiGlobe/>,
    },
    {
        id: 2,
        title: 'dog training',
        icon: <HiGlobe/>,
    },
    {
        id: 3,
        title: 'special deit',
        icon: <HiGlobe/>,
    },
    {
        id: 4,
        title: 'vet services',
        icon: <HiGlobe/>,
    },
];

const Services = () => {
  return (
    <section className="services" id='services'>
        <motion.div className="services__content"
            initial={{opacity: 0, scale: 0}}
            whileInView={{opacity: 1, scale: 1}}
            transition={{duration: 2}}
        >
            <p className="section__slogan">
                Services
            </p>
            <h2 className="section__heading">
                Pet Care With Love
            </h2>
            <div className="services__des">     
                Owning a pet requires your full dedication and attention. It is your responsibility to ensure that your pets are properly cared for.
            </div>
            <button className="btn__1">
                Explore
            </button>
        </motion.div>

        <div className="services__container">
            {services.map((service, index) => (
                <motion.div className="service__box" key={index}
                    initial={{opacity: 0, scale: 0}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{duration: 2}}
                >
                    <span className="service__icon">
                        {service.icon}
                    </span>
                    <h3 className="service__title">
                        {service.title}
                    </h3>
                </motion.div>
            ))}
        </div>
    </section>
  )
}

export default Services