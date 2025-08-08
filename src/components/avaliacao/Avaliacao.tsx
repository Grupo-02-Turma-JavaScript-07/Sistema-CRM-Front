
function Avaliacao() {
  return (
    <section className="py-16 px-4 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-12">
        Confira o que nossos clientes <br /> estão falando sobre nós!
      </h2>
      {/* Card 1 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className= "p-6 text-left rounded-lg shadow-sm">
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
            <p className="text-sm text-gray-600">I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And it's really affordable, very humble guys !!</p>
          </div>

          {/* Card 2 */}
          <div className= "p-6 text-left rounded-lg shadow-sm">
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
            <p className="text-sm text-gray-600">I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And it's really affordable, very humble guys !!</p>
          </div>
          {/* Card 3 */}
          <div className= "p-6 text-left rounded-lg shadow-sm">
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
            <p className="text-sm text-gray-600">I found solution to all my design needs from Creative Tim. I use them as a freelancer in my hobby projects for fun! And it's really affordable, very humble guys !!</p>
          </div>
      </div>
    </section>
  )
}

export default Avaliacao