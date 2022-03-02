import { motion } from 'framer-motion'

import Hamburger from '../component/Hamburger'

const AboutMe = () => {
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

  const hamburgerVariants = {
    exit: {
      y: -1000,
      x: 1000,
      scale: 0.8,
      opacity: 0,
      transition: { type: 'tween', duration: 0.5 },
    },
  }

  return (
    <motion.div
      className='aboutMe'
      variants={pageVariants}
      initial='initial'
      animate='enter'
      exit='exit'
    >
      <h1 className='aboutMe__mainTitle'>
        about me<span>:</span>
      </h1>

      <motion.div className='aboutMe__hamburger' variants={hamburgerVariants}>
        <Hamburger />
      </motion.div>

      <div className='aboutMe__info'>
        <div className='aboutMe__info-photo'>
          <img src='/images/photos/myPhoto.jpg' alt='heroPhoto' />
        </div>
        <p className='aboutMe__info-text1'>
          I am a self taught developer. I learned to program from online
          courses, I put my theoretical knowledge into practice by creating my
          portfolio website with a few additional projects.
        </p>
        <p className='aboutMe__info-text2'>
          I am currently looking for work experience that will help me to
          develop further as a Front-End Developer. I am an independent person
          with a passion forlearning, in my spare time I improve my own projects
          and expand my programming knowledge.
        </p>
      </div>

      <div className='aboutMe__cv'>
        <h2 className='aboutMe__cv-title'>To see my CV click here</h2>
        <motion.a
          className='aboutMe__cv-pl'
          download='Bartosz_Szucko_CV_PL'
          href='/files/Bartosz_Szucko_CV_PL.pdf'
          target='_blank'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.0 }}
        >
          <span>Polish Resume</span>
        </motion.a>
        <motion.a
          className='aboutMe__cv-en'
          download='Bartosz_Szucko_CV_EN'
          href='/files/Bartosz_Szucko_CV_EN.pdf'
          target='_blank'
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.0 }}
        >
          <span>English Resume</span>
        </motion.a>
      </div>
    </motion.div>
  )
}

export default AboutMe
