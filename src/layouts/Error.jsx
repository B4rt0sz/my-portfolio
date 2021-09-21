import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import Hamburger from '../component/Hamburger'
import errorS from '../../public/images/photos/errorPageS.gif'

const Error = () => {
  let history = useHistory()
  const handleRedirect = () => history.goBack()
  return (
    <div className='error'>
      <h1 className='error__mainTitle'>
        Error_404<span>!</span>
      </h1>

      <div className='error__hamburger'>
        <Hamburger />
      </div>

      <div className='error__gif'>
        <img className='error__gif-img' src={errorS} alt='error_gif' />
      </div>

      <div className='error__info'>
        <p className='error__info-text1'>
          {`I knew you will be curious if this page exists, I hope you are not
          disappointed! ;)`}
        </p>
        <p className='error__info-text2'>
          Use menu to choose section or you can click{' '}
          <span onClick={handleRedirect}>here</span> to go back to last visited
          one.
        </p>
      </div>
    </div>
  )
}

export default Error
