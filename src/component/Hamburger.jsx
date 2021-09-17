import { useState } from 'react'

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={isOpen ? 'menuBtn active' : 'menuBtn'}
      onClick={() => setIsOpen((isOpen) => !isOpen)}
    >
      <div className='menuBtn__burger'></div>
    </div>
  )
}

export default Hamburger
