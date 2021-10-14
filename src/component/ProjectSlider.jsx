import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'

import webpackImgS from '../../public/images/projects/webpackS.png'
import webpackImgSm from '../../public/images/projects/webpackSm.png'
import webpackImgM from '../../public/images/projects/webpackM.png'
import webpackImgL from '../../public/images/projects/webpackL.png'
import portfolioImgS from '../../public/images/projects/portfolioS.png'
import portfolioImgSm from '../../public/images/projects/portfolioSm.png'
import portfolioImgM from '../../public/images/projects/portfolioM.png'
import portfolioImgL from '../../public/images/projects/portfolioL.png'

const projects = [
  {
    title: 'Webpack',
    imgS: webpackImgS,
    imgSm: webpackImgSm,
    imgM: webpackImgM,
    imgL: webpackImgL,
    txt: 'The project was created in order to create a simple, universal template that will be used as a base for future projects. The project was implemented based on Webpack 5 with React 17 using Babel, HMR, Sass, and PostCSS with a hot dev server and an optimized production build.',
    code: 'https://github.com/B4rt0sz/react-webpack-5-boilerplate',
    site: null,
  },
  {
    title: 'Portfolio',
    imgS: portfolioImgS,
    imgSm: portfolioImgSm,
    imgM: portfolioImgM,
    imgL: portfolioImgL,
    txt: 'The project of my portfolio website. It shows the development of my acquired programming skills, it also presents my other projects. To create it, I used my Webpack template and React, SASS and other APIs which are responsible for animations, form validations, and more (for more see the code).',
    code: 'https://github.com/B4rt0sz/my-portfolio',
    site: null,
  },
  {
    title: 'WeatherApp',
    imgS: null,
    imgM: null,
    imgL: null,
    txt: 'Project during coding...',
    code: null,
    site: null,
  },
]

const variants = {
  initial: (direction) => {
    if (direction === 0) {
      return {
        y: -100,
        scale: 0.8,
        opacity: 0,
        transition: { type: 'tween', duration: 0.5 },
      }
    } else {
      return {
        x: direction > 0 ? 250 : -250,
        opacity: 0,
        scale: 0.25,
        transition: { type: 'tween', duration: 0.5 },
      }
    }
  },
  enter: (direction) => {
    if (direction === 0) {
      return {
        y: 0,
        scale: 1,
        opacity: 1,
        transition: { type: 'tween', duration: 0.5 },
      }
    } else {
      return {
        scale: 1,
        x: 0,
        y: 0,
        opacity: 1,
        transition: { type: 'tween', duration: 0.5 },
      }
    }
  },
  exit: (direction) => {
    if (direction === 0) {
      return {
        y: 100,
        scale: 0.8,
        opacity: 0,
        transition: { type: 'tween', duration: 0.5 },
      }
    } else {
      return {
        x: direction < 0 ? 250 : -250,
        scale: 0.25,
        opacity: 0,
        transition: { type: 'tween', duration: 0.5 },
      }
    }
  },
}

const ProjectSlider = () => {
  const [[slide, direction], setSlide] = useState([0, 0])
  const slideIndex = wrap(0, projects.length, slide)
  const paginate = (newDirection) => {
    setSlide([slide + newDirection, newDirection])
  }
  const swipeConfidenceThreshold = 10000
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity
  }
  const moveDot = (index) => {
    setSlide([index, 0])
  }

  const projectContainer = projects
    .filter((_, index) => index === slideIndex)
    .map((project) => (
      <motion.div
        className='projects__slider-container'
        key={project.title}
        custom={direction}
        variants={variants}
        initial='initial'
        animate='enter'
        exit='exit'
        drag='x'
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x)
          if (swipe < -swipeConfidenceThreshold) {
            paginate(1)
          } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1)
          }
        }}
      >
        <h2 className='projects__slider-title'>{project.title}</h2>
        {project.code && (
          <picture className='projects__slider-img'>
            <source
              media='(orientation: landscape) and (min-width:1200px)'
              srcSet={project.imgL}
            />
            <source
              media='(orientation: portrait) and (min-width:760px)'
              srcSet={project.imgM}
            />
            <source
              media='(orientation: landscape) and (min-width:1020px)'
              srcSet={project.imgM}
            />
            <source
              media='(orientation: landscape) and (min-width:640px)'
              srcSet={project.imgSm}
            />
            <img src={project.imgS} alt={project.title} />
          </picture>
        )}
        <p className='projects__slider-txt'>{project.txt}</p>
        {project.code && (
          <Link to={{ pathname: project.code }} target='_blank'>
            <motion.button
              className='projects__slider-btnCode '
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.0 }}
            >
              See Code
            </motion.button>
          </Link>
        )}
        {project.code && (
          <Link to={{ pathname: project.site }} target='_blank'>
            <motion.button
              className='projects__slider-btnSite'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1.0 }}
            >
              See Project
            </motion.button>
          </Link>
        )}
      </motion.div>
    ))

  const dots = projects.map((slideItem, index) => (
    <div
      key={index}
      onClick={() => moveDot(index)}
      className={
        index === slideIndex
          ? 'projects__slider-dot active'
          : 'projects__slider-dot'
      }
    ></div>
  ))

  return (
    <div className='projects__slider'>
      <AnimatePresence initial={false} exitBeforeEnter custom={direction}>
        {projectContainer}
      </AnimatePresence>

      <div className='projects__slider-dots'>{dots}</div>
    </div>
  )
}

export default ProjectSlider
