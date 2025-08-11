import { Link } from "react-router-dom"
import { TypeAnimation } from "react-type-animation"

function CtaHomeLogado() {
  return (
    <>
      <section className="flex flex-col border-inl border-purple-400 items-center justify-center text-center px-4 py-20">
        <span className="text-sm font-medium text-slate-500 mb-4 border border-slate-200 px-3 py-1 rounded-full">
          Seu marketplace moderno
        </span>

        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
          <TypeAnimation
            sequence={[
              "Descubra, gerencie e venda com elegância", // texto
              2000, // tempo que fica parado antes de apagar
              "", // apaga tudo
              "Gerencie seu negócio com velocidade e estilo",
              2000,
              "",
              "Transforme visitantes em clientes fiéis",
              2000
            ]}
            wrapper="span"
            speed={50} // velocidade de digitação
            repeat={Infinity} // loop infinito
          />
        </h1>

        <p className="text-slate-500 max-w-xl text-ms mb-8">
          Navegue por categorias, explore a vitrine por vendedor e cadastre usuários em uma interface rápida e bonita.
        </p>
        <div className="flex gap-4 mb-6">
          {/* <Link to="/planos" className="bg-gradient-to-r from-[#62268d] to-[#9d5ec9] hover:from-[#9d5ec9] hover:to-[#62268d] text-white px-5 py-2 rounded-lg font-medium shadow hover:opacity-90 transition">
            Explorar planos
          </Link> */}
          {/* #todo: vamos usar uma rota para planos?? */}
          <Link to="/produtos" className="bg-gradient-to-r from-[#62268d] to-[#9d5ec9] hover:from-[#9d5ec9] hover:to-[#62268d] text-white px-5 py-2 rounded-lg font-medium shadow hover:opacity-90 transition">
            Vitrine por vendedor
          </Link>
        </div>
        <div className="text-slate-500 text-sm flex items-center gap-2">
          <span>🔍</span>
          <span>Pesquisar rapidamente na lista de produtos</span>
        </div>
      </section>
    </>
  )
}

export default CtaHomeLogado
