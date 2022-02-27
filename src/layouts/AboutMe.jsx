import { motion } from 'framer-motion'

import Hamburger from '../component/Hamburger'

import heroPhotoXs from '../../public/images/photos/myPhotoXs.jpg'
import heroPhotoSw from '../../public/images/photos/myPhotoSw.jpg'
import heroPhotoS from '../../public/images/photos/myPhotoS.jpg'
import heroPhotoM from '../../public/images/photos/myPhotoM.jpg'
import heroPhotoL from '../../public/images/photos/myPhotoL.jpg'
import heroPhotoXl from '../../public/images/photos/myPhotoXl.jpg'
import heroPhotoXw from '../../public/images/photos/myPhotoXw.jpg'
import heroPhotoXlw from '../../public/images/photos/myPhotoXlw.jpg'
import heroPhotoXll from '../../public/images/photos/myPhotoXll.jpg'

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
        <picture className='aboutMe__info-photo'>
          <source
            media='(orientation: portrait) and (min-width: 1024px)'
            srcSet={heroPhotoXll}
          />
          <source
            media='(orientation: landscape) and (min-width:1440px)'
            srcSet={heroPhotoXlw}
          />
          <source
            media='(orientation: portrait) and (min-width:768px)'
            srcSet={heroPhotoXl}
          />
          <source
            media='(orientation: landscape) and (min-width:1024px)'
            srcSet={heroPhotoXw}
          />
          <source
            media='(orientation: portrait) and (min-width:400px)'
            srcSet={heroPhotoL}
          />
          <source
            media='(orientation: portrait) and (min-width:375px)'
            srcSet={heroPhotoM}
          />
          <source
            media='(orientation: portrait) and (min-width:360px)'
            srcSet={heroPhotoS}
          />
          <source
            media='(orientation: landscape) and (min-width:600px)'
            srcSet={heroPhotoSw}
          />
          <img src={heroPhotoXs} alt='heroPhoto' />
        </picture>
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
