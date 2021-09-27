import { motion } from 'framer-motion'

import Hamburger from '../component/Hamburger'

import htmlImg from '../../public/images/icons/html48.png'
import cssImg from '../../public/images/icons/css48.png'
import sassImg from '../../public/images/icons/sass48.png'
import jsImg from '../../public/images/icons/js48.png'
import reactImg from '../../public/images/icons/react48.png'
import reduxImg from '../../public/images/icons/redux48.png'
import tsImg from '../../public/images/icons/ts48.png'
import bsImg from '../../public/images/icons/bs48.png'
import nodeImg from '../../public/images/icons/node48.png'
import expressImg from '../../public/images/icons/express48.png'
import mongoImg from '../../public/images/icons/mongo48.png'
import webpackImg from '../../public/images/icons/webpack48.png'
import gitImg from '../../public/images/icons/git48.png'

const skillsList = [
  { text: 'HTML', src: htmlImg },
  { text: 'CSS', src: cssImg },
  { text: 'SASS', src: sassImg },
  { text: 'JavaScript', src: jsImg },
  { text: 'React', src: reactImg },
  { text: 'Redux', src: reduxImg },
  { text: 'TypeScript', src: tsImg },
  { text: 'Bootstrap', src: bsImg },
  { text: 'Node', src: nodeImg },
  { text: 'Express', src: expressImg },
  { text: 'MongoDB', src: mongoImg },
  { text: 'Webpack', src: webpackImg },
  { text: 'Git', src: gitImg },
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
      y: -500,
      x: 500,
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
