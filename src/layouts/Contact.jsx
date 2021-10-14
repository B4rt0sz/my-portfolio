import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import Hamburger from '../component/Hamburger'
import Form from '../component/Form'

import linkedinImgS from '../../public/images/icons/48/linkedin48.png'
import githubImgS from '../../public/images/icons/48/github48.png'
import linkedinImgM from '../../public/images/icons/64/linkedin64.png'
import githubImgM from '../../public/images/icons/64/github64.png'
import linkedinImgL from '../../public/images/icons/72/linkedin72.png'
import githubImgL from '../../public/images/icons/72/github72.png'
import linkedinImgX from '../../public/images/icons/96/linkedin96.png'
import githubImgX from '../../public/images/icons/96/github96.png'

const Contact = () => {
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
      className='contact'
      variants={pageVariants}
      initial='initial'
      animate='enter'
      exit='exit'
    >
      <h1 className='contact__mainTitle'>
        contact<span>:</span>
      </h1>

      <motion.div className='contact__hamburger' variants={hamburgerVariants}>
        <Hamburger />
      </motion.div>

      <div className='contact__info'>
        <p className='contact__info-text'>
          If you're interested to find out more about me or feel that I'm going
          to fit into your company/project, use these handy options below.
        </p>
      </div>

      <div className='contact__social'>
        <h2 className='contact__social-title'>Catch me on Social</h2>
        <Link
          to={{ pathname: 'https://www.linkedin.com/in/bartoszszucko/' }}
          target='_blank'
        >
          <picture className='contact__social-in'>
            <source
              media='(orientation: portrait) and (min-width:1020px)'
              srcSet={linkedinImgX}
            />
            <source
              media='(orientation: portrait) and (min-width:600px)'
              srcSet={linkedinImgL}
            />
            <source
              media='(orientation: landscape) and (min-width:1000px)'
              srcSet={linkedinImgL}
            />
            <source
              media='(orientation: portrait) and (min-width:360px)'
              srcSet={linkedinImgM}
            />
            <source
              media='(orientation: landscape) and (min-width:600px)'
              srcSet={linkedinImgM}
            />
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={linkedinImgS}
              alt='linkedin'
            />
          </picture>
        </Link>
        <Link to={{ pathname: 'https://github.com/B4rt0sz/' }} target='_blank'>
          <picture className='contact__social-git'>
            <source
              media='(orientation: portrait) and (min-width:1020px)'
              srcSet={githubImgX}
            />
            <source
              media='(orientation: portrait) and (min-width:600px)'
              srcSet={githubImgL}
            />
            <source
              media='(orientation: landscape) and (min-width:1000px)'
              srcSet={githubImgL}
            />
            <source
              media='(orientation: portrait) and (min-width:360px)'
              srcSet={githubImgM}
            />
            <source
              media='(orientation: landscape) and (min-width:600px)'
              srcSet={githubImgM}
            />
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={githubImgS}
              alt='github'
            />
          </picture>
        </Link>
      </div>

      <Form />
    </motion.div>
  )
}

export default Contact
