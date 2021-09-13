import backgroundShape1 from '../../public/images/shapes/shape1s.png'
import backgroundShape2 from '../../public/images/shapes/shape2s.png'
import backgroundShape3 from '../../public/images/shapes/shape3s.png'

const Background = () => {
  return (
    <>
      <div className='backgroundPage'>
        <img
          className='backgroundPage__shape1'
          src={backgroundShape1}
          alt='shape1'
        />
        <img
          className='backgroundPage__shape2'
          src={backgroundShape2}
          alt='shape2'
        />
        <img
          className='backgroundPage__shape3'
          src={backgroundShape3}
          alt='shape3'
        />
      </div>
    </>
  )
}

export default Background
