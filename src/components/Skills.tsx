import CSS from '../assets/1629678441-css.webp'
import JS from '../assets/1645216699-javascript.webp'
import HTML from '../assets/1629678510-html.webp'
import TS from '../assets/1645217345-typescript.webp'
import SASS from '../assets/1645217534-sass.webp'
import REACT from '../assets/1645216736-reactjs.webp'

export function Skills() {
  return (
    <div className="container m-auto ">
      <div className="flex flex-col py-10 px-36  justify-center items-center gap-8 rounded-[52px] bg-[#111] text-center">
        <h2 className="text-5xl font-bold">Skills</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          similique quae consequatur porro perspiciatis ipsa soluta, beatae
          voluptate officiis a. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Repudiandae, iure?
        </p>
        <div className="flex gap-8 mt-8 w-full items-center justify-center">
          <span>
            <img src={HTML} alt="html icon" className='w-14' />
          </span>
          <span>
            <img src={CSS} alt="css icon" className='w-16' />
          </span>
          <span>
            <img src={JS} alt="js icon"  className='w-14'/>
          </span>
          <span>
            <img src={REACT} alt="react icon" className='w-14' />
          </span>
          <span>
            <img src={TS} alt="ts icon" className='w-14' />
          </span>
          <span>
            <img src={SASS} alt="sass icon"  className='w-14'/>
          </span>
        </div>
      </div>
    </div>
  )
}
