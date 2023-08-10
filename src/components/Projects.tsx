import { useState } from 'react'
import ProjectImg from '../assets/project-img3.png'

export function Projects() {
  const [sections, setSections] = useState('tab1')

  function handleSection(name: string) {
    if (name === 'tab1') {
      setSections('tab1')
    } else if (name === 'tab2') {
      setSections('tab2')
    } else {
      setSections('tab3')
    }
  }

  return (
    <div className="container mx-auto flex flex-col  my-16" id="projects">
      <div className="py-10 flex flex-col gap-8 justify-center items-center px-6 text-center lg:px-44">
        <h2 className="text-4xl font-bold">Projects</h2>
        <p className="text-xs md:text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
          praesentium autem modi reprehenderit ut neque possimus laboriosam
          molestias iste ad! Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Odit, aspernatur! lorem20
        </p>

        <div className="flex  text-center rounded-full border bg-[#111] cursor-pointer bg-gradient-to-r from-violet-500 to-fuchsia-500">
          <span
            className=" p-2 text-sm w-24"
            onClick={() => handleSection('tab1')}
          >
            Tab 1
          </span>
          <span
            className="border-x p-2 text-sm w-24 "
            onClick={() => handleSection('tab2')}
          >
            Tab 2
          </span>
          <span
            className=" p-2 text-sm w-24 "
            onClick={() => handleSection('tab3')}
          >
            Tab 3
          </span>
        </div>
      </div>

      {sections === 'tab1' && (
        <div className="grid grid-cols-2 gap-8 mt-8  px-6 lg:grid-cols-3">
          <img src={ProjectImg} alt="" className="w-full cursor-pointer" />
          <img src={ProjectImg} alt="" className="w-full cursor-pointer" />
          <img src={ProjectImg} alt="" className="w-full cursor-pointer" />
          <img src={ProjectImg} alt="" className="w-full cursor-pointer" />
        </div>
      )}

      {sections === 'tab2' && (
        <div className="grid grid-cols-2 gap-8 mt-8 px-6  lg:grid-cols-3 ">
          <img src={ProjectImg} alt="" className="w-full" />
          <img src={ProjectImg} alt="" className="w-full" />
        </div>
      )}

      {sections === 'tab3' && (
        <div className="grid grid-cols-2 gap-8 mt-8 px-6  lg:grid-cols-3">
          <img src={ProjectImg} alt="" className="w-full" />
        </div>
      )}
    </div>
  )
}
