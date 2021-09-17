import Hamburger from '../component/Hamburger'

import htmlImg from '../../public/images/icons/html48.png'
import cssImg from '../../public/images/icons/css48.png'
import sassImg from '../../public/images/icons/sass48.png'
import jsImg from '../../public/images/icons/js48.png'
import reactImg from '../../public/images/icons/react48.png'
import reduxImg from '../../public/images/icons/redux48.png'
import tsImg from '../../public/images/icons/ts48.png'
import bsImg from '../../public/images/icons/bs48.png'
import nodeImg from '../../public/images/icons/node48.png'
import expressImg from '../../public/images/icons/express48.png'
import mongoImg from '../../public/images/icons/mongo48.png'
import webpackImg from '../../public/images/icons/webpack48.png'
import gitImg from '../../public/images/icons/git48.png'

const skillsList = [
  { text: 'Html', src: htmlImg },
  { text: 'Css', src: cssImg },
  { text: 'Sass', src: sassImg },
  { text: 'JavaScript', src: jsImg },
  { text: 'React', src: reactImg },
  { text: 'Redux', src: reduxImg },
  { text: 'TypeScript', src: tsImg },
  { text: 'Bootstrap', src: bsImg },
  { text: 'Node', src: nodeImg },
  { text: 'Express', src: expressImg },
  { text: 'MongoDB', src: mongoImg },
  { text: 'Webpack', src: webpackImg },
  { text: 'Git', src: gitImg },
]

const Skills = () => {
  const skillList = skillsList.map((icon) => (
    <div className='skills__section-list-item' key={icon.text}>
      <img src={icon.src} alt={icon.text} />
      <p>{icon.text}</p>
    </div>
  ))

  return (
    <div className='skills'>
      <h1 className='skills__mainTitle'>
        skills<span>:</span>
      </h1>
      <div className='skills_hamburger'>
        <Hamburger />
      </div>
      <section className='skills__section'>
        <div className='skills__section-list'>{skillList}</div>
      </section>
    </div>
  )
}

export default Skills
