import React from 'react'
import { motion } from 'framer-motion';


const Header = () => {
  return (
    <>
   
    <header className='  w-full h-32 bg-background flex items-center justify-center'>
      <div className='absolute left-3 text-white'>
        joselodevop
      </div>
        <motion.div
        className='w-auto h-auto bg-contrast rounded-3xl p-4 absolute '
        initial={{ x: "-110%", y: "50%" }} // Posición inicial en el centro
        animate={{
          x: ["50%", "-120%", "50%", "-50%", "50%"],  // Movimiento horizontal
          y: ["50%", "20%", "-80%", "20%", "50%"],  // Movimiento vertical
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        >Bienvenido a mi portfolio </motion.div>
        <nav className='absolute right-0 m-4'>
          <ul className='flex m-2 font-principal text-white items-end'>
            <li className='m-2 p-2 rounded-xl text-white hover:bg-contrast hover:text-black'><a href=''>acerca de mi</a></li>
            <li className='m-2 p-2 rounded-xl text-white hover:bg-contrast hover:text-black'><a href=''>proyectos</a></li>
            <li className='m-2 p-2 rounded-xl text-white hover:bg-contrast hover:text-black'><a href=''>contacto</a></li>
          </ul>
        </nav>    
    </header>
    
    </>
  )
}

export default Header