
import './App.css'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {

  return (
    <>
      <div className='w-10/12 mx-auto '>
        <NavBar></NavBar>

        <div className='my-10 '>
          <PriceOptions></PriceOptions>
        </div>
      </div>
    </>
  )
}

export default App
