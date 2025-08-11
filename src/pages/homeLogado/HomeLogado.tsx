// import { Link } from 'react-router-dom'
import Avaliacao from '../../components/avaliacao/Avaliacao'
import SetoresAtendidos from '../../components/setoresAtendidos/SetoresAtendidos'
import CtaHomeLogado from '../../components/ctaHomeLogado/CtaHomeLogado'
import NavbarPerfil from '../../components/navbarperfil/NavbarPerfil'

function HomeLogado() {
  return (
    <>
      <NavbarPerfil />
      <CtaHomeLogado />
      <Avaliacao />
      <SetoresAtendidos />
    </>
  )
}

export default HomeLogado
