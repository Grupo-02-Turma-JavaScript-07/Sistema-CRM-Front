import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Produto from './pages/produto/Produto';
import DeletarProduto from './components/produtos/deletarproduto/DeletarProduto';
import FormProduto from './components/produtos/formproduto/FormProduto';

function App() {

  return (
    <>
    <BrowserRouter>
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            {/* INCLUIR AS ROTAS 
            DE CATEGORIAS */}

            {/* rotas de produtos */}
            <Route path="/produtos" element={<Produto />} />
            <Route path="/cadastrarproduto/:id" element={<FormProduto />} />
            <Route path="/deletarproduto/:id" element={<FormProduto />} />
            <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
            {/* rotas de produtos */}
            
          </Routes>
        </div>
      {/* <Footer /> */}
    </BrowserRouter>
    </>
  )
}

export default App
