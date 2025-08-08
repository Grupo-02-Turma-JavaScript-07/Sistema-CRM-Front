
function Avaliacao() {
  return (
    <section className="py-16 px-4 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-12">
        Confira o que nossos clientes <br /> estão falando sobre nós!
      </h2>
      {/* Card 1 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className= "p-6 text-left rounded-lg shadow-sm border border-[#8d34cc]">
            <div className="flex items-center mb-4">
              <img
                src= "https://randomuser.me/api/portraits/women/44.jpg"
                alt= "Foto do cliente"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold text-sm text-gray-800">
                  Tania Andrew
                </h4>
                <p className="text-xs text-gray-500">
                  Frontend Lead @ Google
                </p>
              </div>
              <div className="ml-auto flex">
                  <span className="text-yellow-400 text-sm">★</span>
                  <span className="text-yellow-400 text-sm">★</span>
                  <span className="text-yellow-400 text-sm">★</span>
                  <span className="text-yellow-400 text-sm">★</span>
                  <span className="text-yellow-400 text-sm">★</span>
              </div>
            </div>
            <p className="text-sm text-gray-600">A interface é super intuitiva e a automação de tarefas economiza muito tempo. Só acho que poderiam incluir mais relatórios personalizados.</p>
          </div>

          {/* Card 2 */}
          <div className= "p-6 text-left rounded-lg shadow-sm border border-[#8d34cc]">
            <div className="flex items-center mb-4">
              <img
                src= "https://randomuser.me/api/portraits/men/32.jpg"
                alt= "Foto do cliente"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold text-sm text-gray-800">
                  Carlos Ribeiro
                </h4>
                <p className="text-xs text-gray-500">
                  Product Designer @ Nubank
                </p>
              </div>
              <div className="ml-auto flex">
                  <span className="text-yellow-400 text-sm">★</span>
                  <span className="text-yellow-400 text-sm">★</span>
                  <span className="text-yellow-400 text-sm">★</span>
                  <span className="text-yellow-400 text-sm">★</span>
                  <span className="text-yellow-400 text-sm">★</span>
              </div>
            </div>
            <p className="text-sm text-gray-600">A equipe entregou exatamente o que eu precisava com rapidez e profissionalismo. Superou minhas expectativas!</p>
          </div>
          {/* Card 3 */}
          <div className= "p-6 text-left rounded-lg shadow-sm border border-[#8d34cc]">
            <div className="flex items-center mb-4">
              <img
                src= "https://randomuser.me/api/portraits/women/68.jpg"
                alt= "Foto do cliente"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold text-sm text-gray-800">
                  Emily Chen
                </h4>
                <p className="text-xs text-gray-500">
                  UI/UX Specialist @ Shopify
                </p>
              </div>
              <div className="ml-auto flex">
                  <span className="text-yellow-400 text-sm">★</span>
                  <span className="text-yellow-400 text-sm">★</span>
                  <span className="text-yellow-400 text-sm">★</span>
                  <span className="text-yellow-400 text-sm">★</span>
                  <span className="text-yellow-400 text-sm">★</span>
              </div>
            </div>
            <p className="text-sm text-gray-600">Nosso ciclo de vendas reduziu em 30% depois que começamos a usar esse CRM. É uma ferramenta indispensável hoje na empresa.</p>
          </div>
      </div>
    </section>
  )
}

export default Avaliacao