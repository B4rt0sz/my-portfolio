import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const list = [
  { name: 'about me', path: '/about_me' },
  { name: 'skills', path: '/skills' },
  { name: 'projects', path: '/projects' },
  { name: 'contact', path: '/contact' },
]

const Navigation = () => {
  const menu = list.map((section) => (
    <motion.li
      key={section.name}
      className='navList-item'
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.0 }}
    >
      <NavLink to={section.path}>{section.name}</NavLink>
    </motion.li>
  ))
  return (
    <nav className='mainPage__nav'>
      <ul className='navList'>{menu}</ul>
    </nav>
  )
}

export default Navigation
