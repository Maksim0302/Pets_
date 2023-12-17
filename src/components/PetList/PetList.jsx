import React from 'react';

import './PetList.scss';

import { PetData } from '../../Data/PetData';

import { motion } from 'framer-motion';

const PetList = () => {
  return (
    <motion.section className="pets"
        initial={{opacity: 0, y: 100}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 4}}
    >
        <p className="section__slogan">
            Recomendation
        </p>
        <h2 className="section__heading">
            Best Choice
        </h2>

        <div className="pets__container">
            {PetData.map((pet, index) => (
                <div className="pet__box" key={index}>
                    <img className='pet__image' src={pet.imgUrl} alt="" />
                    <h1 className="pet__title">
                        {pet.title}
                    </h1>
                    <h4 className="pet__price">
                       $ {pet.price}
                    </h4>
                </div>
            ))}
        </div>
    </motion.section>
  )
}

export default PetList