import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import Hamburger from '../component/Hamburger'
import Form from '../component/Form'

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
          <div className='contact__social-in'>
            <motion.img
              whileHover={{ scale: 1.1 }}
              src='/images/icons/linkedin.png'
              alt='linkedin'
            />
          </div>
        </Link>
        <Link to={{ pathname: 'https://github.com/B4rt0sz/' }} target='_blank'>
          <div className='contact__social-git'>
            <motion.img
              whileHover={{ scale: 1.1 }}
              src='/images/icons/github.png'
              alt='github'
            />
          </div>
        </Link>
      </div>

      <Form />
    </motion.div>
  )
}

export default Contact
