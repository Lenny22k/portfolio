import CSS from '../assets/1629678441-css.webp'
import JS from '../assets/1645216699-javascript.webp'
import HTML from '../assets/1629678510-html.webp'
import TS from '../assets/1645217345-typescript.webp'
import SASS from '../assets/1645217534-sass.webp'
import REACT from '../assets/1645216736-reactjs.webp'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import { ImageSlide } from './ImageSlide'

export function Skills() {
  return (
    <div className="container m-auto mt-24 mb-12" id="skills">
      <div className="flex flex-col py-10  px-6 text-center gap-6 rounded-[52px] bg-[#111]  lg:px-44">
        <h2 className="text-4xl font-bold">Skills</h2>
        <p className="text-xs md:text-base ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          similique quae consequatur porro perspiciatis ipsa soluta, beatae
          voluptate officiis a. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Repudiandae, iure?
        </p>
        <div className="flex  mt-8 w-full items-center justify-center  ">
          <Swiper
            spaceBetween={20}
            slidesPerView={6}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            modules={[Autoplay]}
          >
            <SwiperSlide>
              <ImageSlide language={HTML} />
            </SwiperSlide>
            <SwiperSlide>
              <ImageSlide language={CSS} />
            </SwiperSlide>
            <SwiperSlide>
              <ImageSlide language={JS} />
            </SwiperSlide>
            <SwiperSlide>
              <ImageSlide language={REACT} />
            </SwiperSlide>
            <SwiperSlide>
              <ImageSlide language={TS} />
            </SwiperSlide>
            <SwiperSlide>
              <ImageSlide language={TS} />
            </SwiperSlide>
            <SwiperSlide>
              <ImageSlide language={SASS} />
            </SwiperSlide>
            <SwiperSlide>
              <ImageSlide language={SASS} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}
