import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import Hamburger from '../component/Hamburger'
import Form from '../component/Form'

import linkedinImg from '../../public/images/icons/linkedin48.png'
import githubImg from '../../public/images/icons/github48.png'

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
      y: -500,
      x: 500,
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
          <motion.img
            className='contact__social-in'
            src={linkedinImg}
            alt='linkedin'
            whileHover={{ scale: 1.1 }}
          />
        </Link>
        <Link to={{ pathname: 'https://github.com/B4rt0sz/' }} target='_blank'>
          <motion.img
            className='contact__social-git'
            src={githubImg}
            alt='git'
            whileHover={{ scale: 1.1 }}
          />
        </Link>
      </div>

      <Form />
    </motion.div>
  )
}

export default Contact
