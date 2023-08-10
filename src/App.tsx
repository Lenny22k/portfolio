import { Header } from './components/Header'
import { Main } from './components/Home'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'

function App() {
  return (
    <div className={'w-full h-full  bg-main-image bg-cover bg-no-repeat'}>
      <Header />
      <Main />
      <Skills />
      <div className="bg-black h-full ">
        <Projects />
      </div>
    </div>
  )
}

export default App
