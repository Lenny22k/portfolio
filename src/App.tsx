import { Header } from './components/Header'
import { Main } from './components/Main'
import { Skills } from './components/Skills'

function App() {
  return (
    <div className="w-full h-auto  bg-main-image bg-cover bg-no-repeat">
      <Header />
      <Main />
      <Skills />
    </div>
  )
}

export default App
