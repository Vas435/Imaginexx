import React, { useContext } from 'react'
import {assets} from '../assets/assets';
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const GenerateB = () => {

  const { user, setShowLogin } = useContext(AppContext)
  const navigate = useNavigate()


  const onClickHandler = () => {
    if (user) {
      navigate('/result')
    } else {
      setShowLogin(true)
    }
  }
  return (
    <motion.div
    initial={{ opacity: 0.2, y: 100 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    whileInView={{ opacity: 1, y: 0 }}
    
    className='pb-16 text-center'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl
        mt-4 font-semigold text-netural-800 py-6'>See the magic. Try now</h1>
        <button onClick={onClickHandler} className='inline-flex items-center gap-2 px-12 py-3 rounded-full
        bg-black text-white m-auto hover:scale-205
        transition-all duration-500'>Generate 
            <img src={assets.star_group} alt=""
            className='h-6' />
        </button>

    </motion.div>
  )
}

export default GenerateB