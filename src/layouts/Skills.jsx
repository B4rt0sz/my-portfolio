import { motion } from 'framer-motion'

import Hamburger from '../component/Hamburger'

import htmlImg from '../../public/images/icons/48/html48.png'
import htmlImgM from '../../public/images/icons/64/html64.png'
import htmlImgL from '../../public/images/icons/96/html96.png'
import cssImg from '../../public/images/icons/48/css48.png'
import cssImgM from '../../public/images/icons/64/css64.png'
import cssImgL from '../../public/images/icons/96/css96.png'
import sassImg from '../../public/images/icons/48/sass48.png'
import sassImgM from '../../public/images/icons/64/sass64.png'
import sassImgL from '../../public/images/icons/96/sass96.png'
import jsImg from '../../public/images/icons/48/js48.png'
import jsImgM from '../../public/images/icons/64/js64.png'
import jsImgL from '../../public/images/icons/96/js96.png'
import reactImg from '../../public/images/icons/48/react48.png'
import reactImgM from '../../public/images/icons/64/react64.png'
import reactImgL from '../../public/images/icons/96/react96.png'
import reduxImg from '../../public/images/icons/48/redux48.png'
import reduxImgM from '../../public/images/icons/64/redux64.png'
import reduxImgL from '../../public/images/icons/96/redux96.png'
import tsImg from '../../public/images/icons/48/ts48.png'
import tsImgM from '../../public/images/icons/64/ts64.png'
import tsImgL from '../../public/images/icons/96/ts96.png'
import bsImg from '../../public/images/icons/48/bs48.png'
import bsImgM from '../../public/images/icons/64/bs64.png'
import bsImgL from '../../public/images/icons/96/bs96.png'
import nodeImg from '../../public/images/icons/48/node48.png'
import nodeImgM from '../../public/images/icons/64/node64.png'
import nodeImgL from '../../public/images/icons/96/node96.png'
import expressImg from '../../public/images/icons/48/express48.png'
import expressImgM from '../../public/images/icons/64/express64.png'
import expressImgL from '../../public/images/icons/96/express96.png'
import mongoImg from '../../public/images/icons/48/mongo48.png'
import mongoImgM from '../../public/images/icons/64/mongo64.png'
import mongoImgL from '../../public/images/icons/96/mongo96.png'
import webpackImg from '../../public/images/icons/48/webpack48.png'
import webpackImgM from '../../public/images/icons/64/webpack64.png'
import webpackImgL from '../../public/images/icons/96/webpack96.png'
import gitImg from '../../public/images/icons/48/git48.png'
import gitImgM from '../../public/images/icons/64/git64.png'
import gitImgL from '../../public/images/icons/96/git96.png'

const skillsList = [
  { text: 'HTML', srcS: htmlImg, srcM: htmlImgM, srcL: htmlImgL },
  { text: 'CSS', srcS: cssImg, srcM: cssImgM, srcL: cssImgL },
  { text: 'SASS', srcS: sassImg, srcM: sassImgM, srcL: sassImgL },
  { text: 'JavaScript', srcS: jsImg, srcM: jsImgM, srcL: jsImgL },
  { text: 'React', srcS: reactImg, srcM: reactImgM, srcL: reactImgL },
  { text: 'Redux', srcS: reduxImg, srcM: reduxImgM, srcL: reduxImgL },
  { text: 'TypeScript', srcS: tsImg, srcM: tsImgM, srcL: tsImgL },
  { text: 'Bootstrap', srcS: bsImg, srcM: bsImgM, srcL: bsImgL },
  { text: 'Node', srcS: nodeImg, srcM: nodeImgM, srcL: nodeImgL },
  { text: 'Express', srcS: expressImg, srcM: expressImgM, srcL: expressImgL },
  { text: 'MongoDB', srcS: mongoImg, srcM: mongoImgM, srcL: mongoImgL },
  { text: 'Webpack', srcS: webpackImg, srcM: webpackImgM, srcL: webpackImgL },
  { text: 'Git', srcS: gitImg, srcM: gitImgM, srcL: gitImgL },
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
      <picture>
        <source
          media='(orientation: landscape) and (min-width:1400px) and (min-height:1300px)'
          srcSet={icon.srcL}
        />
        <source
          media='(orientation: portrait) and (min-width:768px)'
          srcSet={icon.srcM}
        />
        <source
          media='(orientation: landscape) and (min-width:1200px)'
          srcSet={icon.srcM}
        />
        <img src={icon.srcS} alt={icon.text} />
      </picture>
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
