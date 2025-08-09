import DeletarProduto from '../../components/produtos/deletarproduto/DeletarProduto'
import ListaProdutos from '../../components/produtos/listarprodutos/ListaProdutos'
import ModalProduto from '../../components/produtos/modalprodutos/ModalProduto'
// import ModalProduto from '../../components/produtos/modalprodutos/ModalProduto'

function Produto() {
  return (
    <div>
      <ListaProdutos />
      {/* <ModalProduto /> */}
      <DeletarProduto />
      <ModalProduto />
    </div>
  )
}

export default Produto