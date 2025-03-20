import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header'
import Body from './components/Body/Body'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="overflow-x-hidden w-full">
          <Header />
          <Body />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
