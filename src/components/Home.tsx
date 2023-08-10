import austronautaImg from '../assets/austronauta.svg'
import { ArrowCircleRight } from 'phosphor-react'

export function Main() {
  return (
    <div className="container mx-auto mt-16 flex flex-col items-center  px-6 md:flex-row md:justify-between " >
      <div className="flex items-center justify-center flex-col gap-4 text-center md:items-start md:text-start md:w-[28rem]">
        <button className="p-1  ease-linear duration-200    hover:border-primaryPurple bg-gradient-to-r from-violet-500 to-fuchsia-500">
          Welcome to my Portfolio
        </button>
        <h1 className="text-4xl font-bold lg:text-5xl  ">Hi! I'm Lenny Web Developer</h1>
        <p className="text-sm md:text-base ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          laudantium. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Iste, accusantium. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit?
        </p>
        <a href="" className="flex gap-2 items-center font-bold text-sm">
          Let's Connect
          <ArrowCircleRight size={32} weight="light" />
        </a>
      </div>
      <img
        src={austronautaImg}
        alt=""
        className="w-60 ml-5 animate-updown mt-4 lg:w-80"
      />
    </div>
  )
}
