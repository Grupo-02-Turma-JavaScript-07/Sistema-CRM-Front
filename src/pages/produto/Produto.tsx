import { useState } from 'react';
import NavbarPerfil from '../../components/navbarperfil/NavbarPerfil'
import ProcurarEntrePrecos from '../../components/produtos/funcionalidade/Funcionalidade'
import ListaProdutos from '../../components/produtos/listarprodutos/ListaProdutos'

function Produto() {
  const [precoMin, setPrecoMin] = useState<number | undefined>(undefined);
  const [precoMax, setPrecoMax] = useState<number | undefined>(undefined);
  
  return (
    <div>
      <NavbarPerfil/>
       <ProcurarEntrePrecos
          onFiltrar={(min, max) => {
            setPrecoMin(min || undefined);
            setPrecoMax(max || undefined);
          }}
        />
      <ListaProdutos precoMin={precoMin} precoMax={precoMax} />
      {/* <DeletarProduto /> */}
    </div>
  )
}

export default Produto