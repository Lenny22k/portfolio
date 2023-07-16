import { GithubLogo, LinkedinLogo } from 'phosphor-react'

export function Header() {
  return (
    <header className="container mx-auto flex justify-between py-5  ">
      <div className="text-4xl uppercase font-semibold ease-linear duration-200 hover:text-primaryPurple cursor-pointer">
        logo
      </div>
      <nav className="flex items-center gap-14 text-lg">
        <a
          href=""
          className="ease-linear duration-200 hover:text-primaryPurple"
        >
          Home
        </a>
        <a
          href=""
          className="ease-linear duration-200 hover:text-primaryPurple"
        >
          Skills
        </a>
        <a
          href=""
          className="ease-linear duration-200 hover:text-primaryPurple"
        >
          Projects
        </a>
        <div className="flex items-center gap-2">
          <div className="border p-2 rounded-full   ease-linear duration-200  hover:border-primaryPurple cursor-pointer">
            <a href="">
              <GithubLogo size={20} weight="fill" />
            </a>
          </div>
          <div className="border p-2 rounded-full ease-linear duration-200  hover:border-primaryPurple cursor-pointer">
            <a href="">
              <LinkedinLogo size={20} weight="fill" />
            </a>
          </div>
        </div>
        <button className="border py-3 px-8 cursor-pointer ease-linear duration-200  hover:border-primaryPurple ">
          Let's Connect
        </button>
      </nav>
    </header>
  )
}
