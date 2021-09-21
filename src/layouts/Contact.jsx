import { Link } from 'react-router-dom'

import Hamburger from '../component/Hamburger'

import linkedinImg from '../../public/images/icons/linkedin48.png'
import githubImg from '../../public/images/icons/github48.png'
import Form from '../component/Form'

const Contact = () => {
  return (
    <div className='contact'>
      <h1 className='contact__mainTitle'>
        contact<span>:</span>
      </h1>

      <div className='contact_hamburger'>
        <Hamburger />
      </div>

      <div className='contact__info'>
        <p className='contact__info-text'>
          If you're interested to find out more about me or feel that I'm going
          to fit into your company/project, use these handy options below.
        </p>
      </div>

      <div className='contact__social'>
        <h2 className='contact__social-title'>Catch me on Social</h2>
        <Link
          to={{ pathname: 'https://www.linkedin.com/in/bartoszszucko/' }}
          target='_blank'
        >
          <img className='contact__social-in' src={linkedinImg} alt='git' />
        </Link>
        <Link to={{ pathname: 'https://github.com/B4rt0sz/' }} target='_blank'>
          <img className='contact__social-git' src={githubImg} alt='linkedin' />
        </Link>
      </div>

      <Form />
    </div>
  )
}

export default Contact
