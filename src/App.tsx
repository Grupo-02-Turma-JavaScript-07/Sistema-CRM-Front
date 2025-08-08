import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Plano from './pages/plano/Plano';

function App() {

  return (
    <>
    <BrowserRouter>
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path='/planos' element={<Plano />} />
          </Routes>
        </div>
      {/* <Footer /> */}
    </BrowserRouter>
    </>
  )
}

export default App
