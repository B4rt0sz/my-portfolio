import { motion } from 'framer-motion'

import Hamburger from '../component/Hamburger'

const skillsList = [
  { text: 'HTML', src: '/images/icons/html.png' },
  { text: 'CSS', src: '/images/icons/css.png' },
  { text: 'SASS', src: '/images/icons/sass.png' },
  { text: 'JavaScript', src: '/images/icons/js.png' },
  { text: 'React', src: '/images/icons/react.png' },
  { text: 'Redux', src: '/images/icons/redux.png' },
  { text: 'TypeScript', src: '/images/icons/ts.png' },
  { text: 'Bootstrap', src: '/images/icons/bs.png' },
  { text: 'Node', src: '/images/icons/node.png' },
  { text: 'Express', src: '/images/icons/express.png' },
  { text: 'MongoDB', src: '/images/icons/mongo.png' },
  { text: 'Webpack', src: '/images/icons/webpack.png' },
  { text: 'Git', src: '/images/icons/git.png' },
]

const Skills = () => {
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

  const skillList = skillsList.map((icon) => (
    <div className='skills__section-list-item' key={icon.text}>
      <img src={icon.src} alt={icon.text} />
      <p>{icon.text}</p>
    </div>
  ))

  return (
    <motion.div
      className='skills'
      variants={pageVariants}
      initial='initial'
      animate='enter'
      exit='exit'
    >
      <h1 className='skills__mainTitle'>
        skills<span>:</span>
      </h1>
      <motion.div className='skills__hamburger' variants={hamburgerVariants}>
        <Hamburger />
      </motion.div>
      <section className='skills__section'>
        <div className='skills__section-list'>{skillList}</div>
      </section>
    </motion.div>
  )
}

export default Skills
