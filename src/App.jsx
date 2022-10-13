import Home from "./components/Home"
import Header from './components/Header'

function App() {
  return (
    <div className="text-3xl w-full flex flex-col items-center">
      <Header/>
      <div className="mt-[120px]">
      <Home/>
      </div>
      
    </div>
  )
}

export default App
