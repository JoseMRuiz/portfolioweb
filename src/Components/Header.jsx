import React from 'react'
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className='relative w-full h-32 bg-background flex items-center justify-center'>
      <div className='absolute left-2 text-white'>
        joselodevop
      </div>
        <motion.div
        className='w-auto h-auto bg-contrast rounded-3xl p-4 absolute '
        animate={{
          x: ["-110%", "47%", "-100%"], 
          y: ["-10%", "75%", "-35%"],
          
        }}
        transition={{
          duration: 4, 
          ease: "easeInOut", 
          repeat: Infinity, 
        }}
        >Bienvenido a mi portfolio web</motion.div>
        <nav className='absolute right-0 m-4'>
          <ul className='flex m-2 text-white items-end'>
            <li className='m-2'>acerca de mi</li>
            <li className='m-2'>proyectos</li>
            <li className='m-2'>contacto</li>
          </ul>
        </nav>
        
        
      
            
        
    </header>
  )
}

export default Header