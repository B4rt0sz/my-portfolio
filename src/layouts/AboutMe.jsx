import PolishCv from '../../public/files/Bartosz_Szucko_CV_PL.pdf'
import EnglishCv from '../../public/files/Bartosz_Szucko_CV_EN.pdf'
import photo from '../../public/images/photos/myPhotoS.jpg'
import Hamburger from '../component/Hamburger'

const AboutMe = () => {
  return (
    <div className='aboutMe'>
      <h1 className='aboutMe__mainTitle'>
        about me<span>:</span>
      </h1>

      <div className='aboutMe__hamburger'>
        <Hamburger />
      </div>

      <div className='aboutMe__info'>
        <picture className='aboutMe__info-photo'>
          <img src={photo} alt='photo' />
        </picture>
        <p className='aboutMe__info-text1'>
          I am a self taught developer. I learned to program from online
          courses, I put my theoretical knowledge into practice by creating my
          portfolio website with a few additional projects.
        </p>
        <p className='aboutMe__info-text2'>
          I am currently looking for work experience that will help me to
          develop further as a Front-End Developer. I am an independent person
          with a passion forlearning, in my spare time I improve my own projects
          and expand my programming knowledge.
        </p>
      </div>

      <div className='aboutMe__cv'>
        <h2 className='aboutMe__cv-title'>To see my CV click here</h2>
        <a
          className='aboutMe__cv-pl'
          download='Bartosz_Szucko_CV_PL'
          href={PolishCv}
        >
          <span>Polish Resume</span>
        </a>
        <a
          className='aboutMe__cv-en'
          download='Bartosz_Szucko_CV_EN'
          href={EnglishCv}
        >
          <span>English Resume</span>
        </a>
      </div>
    </div>
  )
}

export default AboutMe
