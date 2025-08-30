import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

function Description() {
  return (
    <motion.div
    initial={{ opacity: 0.2, y: 100 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    whileInView={{ opacity: 1, y: 0 }}
    
    
    className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>
        <h1 className='text-3xl sm:text-4xl font-semigold mb-2'>Create AI Images</h1>
        <p className='text-gray-500 mb-8'>Transform your words into stunning images with our AI-powered tool.</p>

        <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
          <img src={assets.sample_img_1} alt="" className='w-80 xl:w-96 rounded-lg' />
          <div >
            <h2 className='text-3xl font-medium max-w-lg mb-4'>Introducing the AI powered Text to image generator</h2>
            <p className='text-gray-600 mb-4'>Easily bring your ideas to life with our free AI image generator. Whether you need stunning visulas or unique imagery, our tool transforms your text into eye-catching images with just a few clicks.</p>
            <p className='text-gray-600'>Simply enter your text, choose a style, and let our AI do the rest. Perfect for artists, marketers, and anyone looking to create unique visuals quickly and easily.</p>
          </div>
        </div>

    </motion.div>
  )
}

export default Description