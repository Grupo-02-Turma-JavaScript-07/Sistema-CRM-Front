// import { Link } from 'react-router-dom'
import NavbarHome from '../../components/navbarHome/NavbarHome'
import Avaliacao from '../../components/avaliacao/Avaliacao'
import SetoresAtendidos from '../../components/setoresAtendidos/SetoresAtendidos'
import CtaHome from '../../components/ctaHome/CtaHome'

function Home() {
  return (
    <>
      <NavbarHome />
      <CtaHome />
      <Avaliacao />
      <SetoresAtendidos />
    </>
  )
}

export default Home
