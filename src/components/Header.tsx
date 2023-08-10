import { GithubLogo, LinkedinLogo, List, X } from 'phosphor-react'
import { useEffect, useState } from 'react'

import logo from '../assets/logoIcon.png'

export function Header() {
  const [openMenu, setOpenMenu] = useState(false)

  function handleOpenMenu() {
    setOpenMenu(!openMenu)
  }

  useEffect(() => {
    function handleScroll() {
      if (openMenu) {
        setOpenMenu(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [openMenu])

  return (
    <header
      className={
        openMenu
          ? 'relative h-screen bg-black  mx-auto flex  justify-between py-5 px-6'
          : 'container mx-auto flex items-center justify-between py-5 px-6'
      }
      id="home"
    >
      {openMenu ? (
        <div></div>
      ) : (
        <div className="text-2xl">
          <img src={logo} alt="" className='w-12 cursor-pointer rounded-full' />
        </div>
      )}
      {openMenu ? (
        <X
          size={22}
          weight="fill"
          className={'cursor-pointer md:hidden'}
          onClick={handleOpenMenu}
        />
      ) : (
        <List
          size={22}
          weight="fill"
          className={'cursor-pointer md:hidden'}
          onClick={handleOpenMenu}
        />
      )}

      <nav
        className={
          openMenu
            ? 'flex flex-col gap-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
            : 'hidden items-center gap-10 md:flex'
        }
      >
        <div
          className={
            openMenu
              ? 'flex flex-col items-center gap-5'
              : 'flex gap-4 lg:gap-12'
          }
        >
          <a
            href="#home"
            className="ease-linear duration-200 hover:text-primaryPurple"
          >
            Home
          </a>
          <a
            href="#skills"
            className="ease-linear duration-200 hover:text-primaryPurple"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="ease-linear duration-200 hover:text-primaryPurple"
          >
            Projects
          </a>
        </div>

        <div className="flex justify-center gap-4">
          <div className="border p-2 rounded-full   ease-linear duration-200  hover:border-primaryPurple cursor-pointer">
            <a href="">
              <GithubLogo size={16} weight="fill" />
            </a>
          </div>
          <div className="border p-2 rounded-full ease-linear duration-200  hover:border-primaryPurple cursor-pointer">
            <a href="">
              <LinkedinLogo size={16} weight="fill" />
            </a>
          </div>
        </div>
        <button className="border py-2 px-6 cursor-pointer ease-linear duration-200  hover:border-primaryPurple ">
          Let's Connect
        </button>
      </nav>
    </header>
  )
}

{
  /* <header className="container mx-auto items-center flex justify-between py-5 ">
      <div className="text-4xl uppercase font-semibold ease-linear duration-200 hover:text-primaryPurple cursor-pointer">
        logo
      </div>
      
    </header> */
}
