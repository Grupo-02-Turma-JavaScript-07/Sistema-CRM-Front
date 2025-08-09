import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Plano from './pages/plano/Plano';
import Produto from './pages/produto/Produto';
import Categoria from './pages/categoria/Categoria';
import Perfil from './pages/perfil/Perfil';
import Cadastro from './pages/cadastro/Cadastro';
import Login from './pages/login/Login';

function App() {

  return (
    <>
    <BrowserRouter>
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path='/planos' element={<Plano />} />
            <Route path='/produtos' element={<Produto />} />
            <Route path='/categorias' element={<Categoria />} />
            <Route path='/perfil' element={<Perfil />} />
            <Route path='/cadastro' element={<Cadastro />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      {/* <Footer /> */}
    </BrowserRouter>
    </>
  )
}

export default App
