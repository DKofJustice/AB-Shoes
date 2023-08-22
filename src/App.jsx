import { Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {

  return (
    <div className='overflow-hidden'>
      <Header/>

      <Routes>
        <Route path='/' element={<Homepage/>} />
      </Routes>

      <Footer/>
    </div>
  )
}

export default App
