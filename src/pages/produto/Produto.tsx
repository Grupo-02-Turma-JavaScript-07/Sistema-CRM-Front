import { useEffect, useState } from 'react';
import NavbarPerfil from '../../components/navbarperfil/NavbarPerfil';
import ProcurarEntrePrecos from '../../components/produtos/funcionalidade/Funcionalidade';
import ListaProdutos from '../../components/produtos/listarprodutos/ListaProdutos';
import ModalProduto from '../../components/produtos/modalprodutos/ModalProduto';

function Produto() {
  const [precoMin, setPrecoMin] = useState<number | undefined>(undefined);
  const [precoMax, setPrecoMax] = useState<number | undefined>(undefined);

  const [loading, setLoading] = useState(true);

  // Simula o carregamento inicial para esconder os botões
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);


  return (
    <div>
      <NavbarPerfil />
      <div className="max-w-6xl mx-auto px-4">
        {!loading && (
        <div className="flex flex-wrap items-center justify-between gap-3 mt-6 mb-4">
          <ProcurarEntrePrecos
            onFiltrar={(min, max) => {
              setPrecoMin(min ?? undefined);
              setPrecoMax(max ?? undefined);
            }}
          />
          <ModalProduto />
        </div>
        )}

        {/* Lista os produtos*/}
        <ListaProdutos precoMin={precoMin} precoMax={precoMax} />
      </div>
    </div>
  );
}

export default Produto;