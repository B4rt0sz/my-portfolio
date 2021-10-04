import { motion } from 'framer-motion'

import Hamburger from '../component/Hamburger'
import ProjectSlider from '../component/ProjectSlider'

const Projects = () => {
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
      className='projects'
      variants={pageVariants}
      initial='initial'
      animate='enter'
      exit='exit'
    >
      <h1 className='projects__mainTitle'>
        projects<span>:</span>
      </h1>

      <motion.div className='projects__hamburger' variants={hamburgerVariants}>
        <Hamburger />
      </motion.div>
      <ProjectSlider />
    </motion.div>
  )
}

export default Projects
