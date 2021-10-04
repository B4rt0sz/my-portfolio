import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'

import webpackImg from '../../public/images/projects/webpack.png'
import portfolioImg from '../../public/images/projects/portfolio.png'
import leftArrow from '../../public/images/icons/left_arrow.png'
import rightArrow from '../../public/images/icons/right_arrow.png'

const projects = [
  {
    title: 'Webpack',
    img: webpackImg,
    txt: 'The project was created in order to create a simple, universal template that will be used as a base for future projects. The project was implemented based on Webpack 5 with React 17 using Babel, HMR, Sass, and PostCSS with a hot dev server and an optimized production build.',
    code: 'https://github.com/B4rt0sz/react-webpack-5-boilerplate',
    site: null,
  },
  {
    title: 'Portfolio',
    img: portfolioImg,
    txt: 'The project of my portfolio website. It shows the development of my acquired programming skills, it also presents my other projects. To create it, I used my Webpack template and React, SASS and other APIs which are responsible for animations, form validations, and more (for more see the code).',
    code: 'https://github.com/B4rt0sz/my-portfolio',
    site: null,
  },
  {
    title: 'WeatherApp',
    img: null,
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
          <img
            className='projects__slider-img'
            src={project.img}
            alt={project.title}
          />
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
      <motion.button
        className='projects__slider-btnLeft prev'
        onClick={() => paginate(-1)}
        whileTap={{ scale: 0.9, duration: 0.5 }}
      >
        <img src={leftArrow} alt='leftArrow' />
      </motion.button>
      <motion.button
        className='projects__slider-btnRight next'
        onClick={() => paginate(1)}
        whileTap={{ scale: 0.9, duration: 0.5 }}
      >
        <img src={rightArrow} alt='rightArrow' />
      </motion.button>

      <AnimatePresence initial={false} exitBeforeEnter custom={direction}>
        {projectContainer}
      </AnimatePresence>

      <div className='projects__slider-dots'>{dots}</div>
    </div>
  )
}

export default ProjectSlider
