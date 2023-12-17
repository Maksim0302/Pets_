import React from 'react';

import './Category.scss';

import { PetData } from '../../Data/PetData';

import { motion } from 'framer-motion';

const Category = () => {
  return (
    <section className='category' id='category'>
        <p className="section__slogan">
            Customer Favorites
        </p>
        <h2 className="section__heading">
            Popular Categories
        </h2>
        <div className="category__container">
            {PetData.map((data, index) => (
                <motion.div className="category__box" key={index}
                    initial={{opacity: 0, scale: 0}}
                    whileInView={{opacity: 1, scale: 1}}
                    transition={{duration: 2}}
                >
                    <img className='box__image' src={data.imgUrl} alt={data.title} />
                    <h3 className='box__title'>{data.title}</h3>
                </motion.div>
            ))}
        </div>
    </section>
  )
}

export default Category