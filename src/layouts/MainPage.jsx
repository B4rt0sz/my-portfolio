import Navigation from '../component/Navigation'
import Typewriter from 'typewriter-effect'

const MainPage = () => {
  return (
    <div className='mainPage'>
      <h1 className='mainPage__mainTitle'>
        Hello<span>!</span>
      </h1>
      <div className='mainPage__text'>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                `I’m Bartosz Szućko and I’m a Front-End Developer that is not known to anyone.`
              )
              .start()
          }}
          options={{
            loop: false,
            delay: 60,
          }}
        />
      </div>
      <h2 className='mainPage__secondTitle'>This is my Portfolio!</h2>
      <Navigation />
      <footer className='mainPage__footer'>
        Copyright © 2021 Bartosz Szućko
      </footer>
    </div>
  )
}

export default MainPage
