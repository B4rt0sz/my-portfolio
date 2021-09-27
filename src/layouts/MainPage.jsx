import Typewriter from 'typewriter-effect'
import { motion } from 'framer-motion'

import Navigation from '../component/Navigation'

const MainPage = () => {
  const pageVariants = {
    initial: {
      y: 100,
      scale: 0.8,
      opacity: 0,
      transition: { type: 'tween', duration: 0.5 },
    },
    enter: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: { type: 'tween', duration: 0.5 },
    },
    exit: {
      y: 100,
      scale: 0.8,
      opacity: 0,
      transition: { type: 'tween', duration: 0.5 },
    },
  }

  return (
    <motion.div
      className='mainPage'
      variants={pageVariants}
      initial='initial'
      animate='enter'
      exit='exit'
    >
      <h1 className='mainPage__mainTitle'>
        Hello<span>!</span>
      </h1>
      <div className='mainPage__text'>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                `I’m Bartosz Szućko and I’m a Front-End Developer that is not known to anyone.`
              )
              .start()
          }}
          options={{
            loop: false,
            delay: 60,
          }}
        />
      </div>
      <h2 className='mainPage__secondTitle'>This is my Portfolio!</h2>
      <Navigation />
      <footer className='mainPage__footer'>
        Copyright © 2021 Bartosz Szućko
      </footer>
    </motion.div>
  )
}

export default MainPage
