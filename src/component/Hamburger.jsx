import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const Hamburger = () => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => setIsOpen((isOpen) => !isOpen)
  const btnClass = isOpen ? 'hamburger__button active' : 'hamburger__button'

  const list = [
    { name: 'home', path: '/', exact: true },
    { name: 'about me', path: '/about_me' },
    { name: 'skills', path: '/skills' },
    { name: 'projects', path: '/projects' },
    { name: 'contact', path: '/contact' },
  ]

  const menuVarients = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 1.4,
      },
    },
  }
  const navVarient = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
    exit: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  }
  const linkVarient = {
    initial: {
      opacity: 0,
      x: 40,
      y: -40,
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0,
    },
    exit: {
      opacity: 0,
      x: 40,
    },
  }

  const isCurrentURL = (url) => {
    return location.pathname.toLowerCase() === url.toLowerCase()
  }

  const menu = list.map(
    (section) =>
      !isCurrentURL(section.path) && (
        <motion.li
          className='hamburger__menu-item'
          key={section.name}
          variants={linkVarient}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.0 }}
        >
          <NavLink
            to={section.path}
            exact={section.exact ? section.exact : false}
          >
            {section.name}
          </NavLink>
        </motion.li>
      )
  )

  const outsideClick = (ref) => {
    useEffect(() => {
      const handleOutsideClick = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsOpen(false)
        }
      }
      document.addEventListener('mousedown', handleOutsideClick)
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick)
      }
    }, [ref])
  }

  const wrapperRef = useRef(null)
  outsideClick(wrapperRef)

  return (
    <div className='hamburger' ref={wrapperRef}>
      <div className={btnClass} onClick={handleClick}>
        <div className='hamburger__button-menu'></div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className='hamburger__menu'
            variants={menuVarients}
            initial={'initial'}
            animate={'animate'}
            exit={'exit'}
          >
            <motion.ul className='hamburger__menu-list' variants={navVarient}>
              {menu}
            </motion.ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Hamburger
