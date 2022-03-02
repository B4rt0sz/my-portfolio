import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { wrap } from '@popmotion/popcorn'

const projects = [
  {
    title: 'Webpack',
    img: '/images/projects/webpack.png',
    txt: 'The project was created in order to create a simple, universal template that will be used as a base for future projects. The project was implemented based on Webpack 5 with React 17 using Babel, HMR, Sass, and PostCSS with a hot dev server and an optimized production build.',
    code: 'https://github.com/B4rt0sz/react-webpack-5-boilerplate',
    site: 'https://webpack5boilerplate.netlify.app/',
  },
  {
    title: 'Portfolio',
    img: '/images/projects/portfolio.png',
    txt: 'The project of my portfolio website. To create it, I used my Webpack template and React, SASS and other APIs which are responsible for animations, form validations, and more (for more see the code).',
    code: 'https://github.com/B4rt0sz/my-portfolio',
    site: 'https://bartoszszucko.netlify.app/',
  },
  {
    title: 'Memory Game',
    img: '/images/projects/memoryGame.png',
    txt: 'Test your memory with this memory game. This is an application written with React.',
    code: 'https://github.com/B4rt0sz/react-memory-game',
    site: 'https://pokemon-mcg.netlify.app/',
  },
  {
    title: 'E-commerce Shop',
    img: '/images/projects/ecommerce.png',
    txt: 'To create it, I used my Webpack template, React, Firebase and other APIs which are responsible for fetching, form validations, and more (for more see the code). I encourage you to visit the Demo version which will present the result of my work.',
    code: 'https://github.com/B4rt0sz/ecommerce-coffe-shop',
    site: 'https://egocoffee.netlify.app/',
  },
  {
    title: 'Weather App',
    img: '/images/projects/weatherApp.png',
    txt: 'Project during coding...',
    code: 'https://github.com/B4rt0sz/weather-app',
    site: 'https://bartsweather.netlify.app/',
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
          <div className='projects__slider-img'>
            <img src={project.img} alt={project.title} />
          </div>
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
              See Demo
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
