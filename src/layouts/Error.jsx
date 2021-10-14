import { useHistory } from 'react-router'
import { motion } from 'framer-motion'

import Hamburger from '../component/Hamburger'

import errorGif from '../../public/images/photos/errorPage.gif'

const Error = () => {
  let history = useHistory()
  const handleRedirect = () => history.goBack()

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
      className='error'
      variants={pageVariants}
      initial='initial'
      animate='enter'
      exit='exit'
    >
      <h1 className='error__mainTitle'>
        Error_404<span>!</span>
      </h1>

      <motion.div className='error__hamburger' variants={hamburgerVariants}>
        <Hamburger />
      </motion.div>

      <div className='error__gif'>
        <img className='error__gif-img' src={errorGif} alt='error_gif' />
      </div>

      <div className='error__info'>
        <p className='error__info-text1'>
          {`I knew you will be curious if this page exists, I hope you are not
          disappointed! ;)`}
        </p>
        <p className='error__info-text2'>
          Use menu to choose section or you can click{' '}
          <span onClick={handleRedirect}>here</span> to go back to last visited
          one.
        </p>
      </div>
    </motion.div>
  )
}

export default Error
