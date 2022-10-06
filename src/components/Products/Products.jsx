import React from 'react'
import "./Products.scss";
import { BsSearch } from "react-icons/bs";
import { useStateContext } from '../../context/stateContext';
import { motion } from 'framer-motion';

const Products = () => {

  const { filterProducts, setSearchTerm, searchTerm, animateCard, onAdd } = useStateContext();

  return (
    <div className='produts-container ' >
      <div className='search'>
        <input type='text' placeholder='البحث عن ....' onChange={(e) => setSearchTerm(e.target.value)} />
        <div className='svg'><BsSearch /></div>
      </div>
      <div className='products'>
        <div className='box'>
          {filterProducts.filter(value => {
            if (searchTerm === '') {
              return value;
            } else if (value?.name?.toLowerCase().includes(searchTerm?.toLowerCase())) {
              return value;
            }
          }).map((product, index) => (
            <motion.div animate={animateCard} onClick={() => onAdd(product)} className='inner-box' key={index}>
              <p>{product.name}</p>
              <p className='price'>{product.price} د.ع</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products