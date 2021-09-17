import { NavLink } from 'react-router-dom'

const list = [
  { name: 'about me', path: '/about_me' },
  { name: 'skills', path: '/skills' },
  { name: 'projects', path: '/projects' },
  { name: 'contact', path: '/contact' },
]

const Navigation = () => {
  const menu = list.map((section) => (
    <li key={section.name} className='navList-item'>
      <NavLink to={section.path}>{section.name}</NavLink>
    </li>
  ))
  return (
    <nav className='mainPage__nav'>
      <ul className='navList'>{menu}</ul>
    </nav>
  )
}

export default Navigation
