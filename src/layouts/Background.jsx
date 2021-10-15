import shape1S from '../../public/images/shapes/shape1s.png'
import shape1M from '../../public/images/shapes/shape1m.png'
import shape1L from '../../public/images/shapes/shape1l.png'
import shape1X from '../../public/images/shapes/shape1x.png'
import shape2S from '../../public/images/shapes/shape2s.png'
import shape2M from '../../public/images/shapes/shape2m.png'
import shape2L from '../../public/images/shapes/shape2l.png'
import shape2Ls from '../../public/images/shapes/shape2ls.png'
import shape2X from '../../public/images/shapes/shape2x.png'
import shape3S from '../../public/images/shapes/shape3s.png'
import shape3M from '../../public/images/shapes/shape3m.png'
import shape3L from '../../public/images/shapes/shape3l.png'
import shape3Ls from '../../public/images/shapes/shape3ls.png'
import shape3X from '../../public/images/shapes/shape3x.png'

const Background = () => {
  return (
    <>
      <div className='backgroundPage'>
        <picture>
          <source
            media='(orientation: landscape) and (min-width: 1024px)'
            srcSet={shape1X}
          />
          <source
            media='(orientation: portrait) and (min-width: 760px)'
            srcSet={shape1L}
          />
          <source
            media='(orientation: landscape) and (min-width:550px)'
            srcSet={shape1M}
          />
          <img className='backgroundPage__shape1' src={shape1S} alt='shape1' />
        </picture>

        <picture>
          <source
            media='(orientation: portrait) and (min-width: 1020px)'
            srcSet={shape2X}
          />
          <source
            media='(orientation: portrait) and (min-width: 760px)'
            srcSet={shape2L}
          />
          <source
            media='(orientation: landscape) and (min-width:1300px)'
            srcSet={shape2L}
          />
          <source
            media='(orientation: landscape) and (min-width:1020px)'
            srcSet={shape2Ls}
          />
          <source
            media='(orientation: portrait) and (min-height: 750px)'
            srcSet={shape2M}
          />
          <source
            media='(orientation: landscape) and (min-width:550px)'
            srcSet={shape2M}
          />
          <img className='backgroundPage__shape2' src={shape2S} alt='shape2' />
        </picture>

        <picture>
          <source
            media='(orientation: portrait) and (min-width: 1020px)'
            srcSet={shape3X}
          />
          <source
            media='(orientation: portrait) and (min-width: 760px)'
            srcSet={shape3L}
          />
          <source
            media='(orientation: landscape) and (min-width:1300px)'
            srcSet={shape3L}
          />
          <source
            media='(orientation: landscape) and (min-width:1020px)'
            srcSet={shape3Ls}
          />
          <source
            media='(orientation: portrait) and (min-height: 850px)'
            srcSet={shape3M}
          />
          <source
            media='(orientation: landscape) and (min-width:550px)'
            srcSet={shape3M}
          />
          <img className='backgroundPage__shape3' src={shape3S} alt='shape3' />
        </picture>
      </div>
    </>
  )
}

export default Background
