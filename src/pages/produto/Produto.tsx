import NavbarPerfil from '../../components/navbarperfil/NavbarPerfil'
import ListaProdutos from '../../components/produtos/listarprodutos/ListaProdutos'

function Produto() {
  return (
    <div>
      <NavbarPerfil/>
      <ListaProdutos />
      {/* <DeletarProduto /> */}
    </div>
  )
}

export default Produto