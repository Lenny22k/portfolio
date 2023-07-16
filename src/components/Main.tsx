import austronautaImg from '../assets/austronauta.svg'
import { ArrowCircleRight } from 'phosphor-react'

export function Main() {
  return (
    <div className="container mx-auto mt-32 flex justify-between bg-tr">
      <div className="w-[600px] flex flex-col gap-5">
        <button className="border p-2 text-lg font-medium w-fit ease-linear duration-200  hover:border-primaryPurple">
          Welcome to my Portfolio
        </button>
        <h1 className="text-6xl font-bold">Hi! I'm Lenny Web Developer</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
          laudantium. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Iste, accusantium. Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Odio, quasi?
        </p>
        <a href="" className="flex gap-2 items-center font-bold text-lg mt-8">
          Let's Connect
          <ArrowCircleRight size={32} weight="light" />
        </a>
      </div>
      <img src={austronautaImg} alt="" className="w-4/12 mr-3" />
    </div>
  )
}
