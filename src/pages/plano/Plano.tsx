import { FaArrowRight } from 'react-icons/fa';
import NavHome from '../../components/navbarHome/NavbarHome';

function Plano() {
  return (
    <><NavHome />
      <div className="flex flex-col mt-10 items-center justify-center text-center min-h-screen px-4">
        <h6 className="text-sm font-semibold text-gray-500 mb-2">PREÇOS E PLANOS</h6>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          O CRM com o melhor custo-benefício do mercado.
        </h1>

        <section className="mb-28 mt-5 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid gap-2 lg:grid-cols-4 md:grid-cols-2">
            <div className="block rounded-lg bg-white text-center shadow-lg dark:bg-neutral-700">
              <div
                className="border-b-2 border-neutral-100 px-7 py-3 dark:border-neutral-600 dark:text-neutral-50">
                <h5 className="mb-4 mt-4 text-lg font-semibold uppercase">Gratuito</h5>
                <p className='text-sm text-justify text-gray-500'>Ideal para começar a explorar o sistema, sem custo. Acesso limitado, mas funcional</p>

                <h4 className="mb-4 mt-4">
                  <span className="text-3xl font-bold">R$ 0</span>
                  <span className="text-gray-500 dark:text-gray-300">/mês</span>
                </h4>
                <div className="flex justify-center">
                  <button className="flex items-center mb-4 justify-center gap-2 rounded-md border border-pink-300 px-4 py-2 text-pink-300 font-semibold hover:bg-pink-300 hover:text-white transition">
                    Criar conta grátis <FaArrowRight />
                  </button>
                </div>
              </div>

              <div className="p-7 text-left text-sm">
                <ul className="text-gray-700 dark:text-white">
                  <li className="mb-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="me-2 h-6 w-6 text-green-800">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span>Gestão básica de contatos e tarefas</span>
                  </li>

                  <li className="mb-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="me-2 h-6 w-6 text-green-800">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span>Gestão de clientes</span>
                  </li>

                  <li className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="me-2 h-6 w-6 text-green-800">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span>Portfólio de produtos</span>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="block rounded-lg bg-white text-center shadow-lg dark:bg-neutral-700">
              <div
                className="border-b-2 border-neutral-100 px-7 py-3 dark:border-neutral-600 dark:text-neutral-50">
                <h5 className="mb-4 mt-4 text-lg font-semibold uppercase">Básico</h5>
                <p className='text-sm text-justify text-gray-500'>Recursos essenciais para pequenos times organizarem contatos e tarefas com facilidade</p>

                <h4 className="mb-4 mt-4">
                  <span className="text-3xl font-bold">R$ 59</span>
                  <span className="text-gray-500 dark:text-gray-300">/mês</span>
                </h4>
                <div className="flex justify-center">
                  <button className="flex items-center text-sm mb-4 justify-center gap-2 rounded-md border border-pink-300 px-4 py-2 text-pink-300 font-semibold hover:bg-pink-300 hover:text-white transition">
                    Fale com um consultor <FaArrowRight />
                  </button>
                </div>
              </div>

              <div className="p-7 text-left text-sm">
                <ul className="text-gray-700 dark:text-white">

                  <li className="mb-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="me-2 h-6 w-6 text-green-800">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span> Relatórios mensais básicos</span>
                  </li>

                  <li className="mb-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="me-2 h-6 w-6 text-green-800">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span>Suporte via e-mail</span>
                  </li>

                  <li className="mb-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="me-2 h-6 w-6 text-green-800">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span>Importação e exportação simples (CSV)</span>
                  </li>

                  <li className="mb-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="me-2 h-6 w-6 text-green-800">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span>Campos e filtros personalizáveis</span>
                  </li>

                </ul>
              </div>
            </div>

            <div
              className="block rounded-lg bg-white text-center shadow-lg dark:bg-neutral-700">
              <div
                className="border-b-2 border-neutral-100 px-7 py-3 dark:border-neutral-600 dark:text-neutral-50">
                <h5 className="mb-4 mt-4 text-lg font-semibold uppercase">Pró</h5>
                <p className='text-sm text-justify text-gray-500'>Funcionalidades avançadas para equipes que precisam de automação e performance</p>


                <h4 className="mb-4 mt-4">
                  <span className="text-3xl font-bold">$ 79</span>
                  <span className="text-gray-500 dark:text-gray-300">/mês</span>
                </h4>
                <div className="flex justify-center">
                  <button className="flex items-center text-sm justify-center mb-4 gap-2 rounded-md border border-pink-300 px-4 py-2 text-pink-300 font-semibold hover:bg-pink-300 hover:text-white transition">
                    Fale com um consultor <FaArrowRight />
                  </button>
                </div>
              </div>

              <div className="p-7 text-left text-sm">
                <ul className="text-gray-700 dark:text-white">
                  <li className="mb-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="me-2 h-6 w-6 text-green-800">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span>Criação de propostas comerciais</span>
                  </li>

                  <li className="mb-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="me-2 h-6 w-6 text-green-800">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span>Automação de tarefas e disparo de e-mails</span>
                  </li>

                  <li className="mb-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="me-2 h-6 w-6 text-green-800">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span>npm installations</span>
                  </li>

                  <li className="mb-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="me-2 h-6 w-6 text-green-800">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span>Code examples</span>
                  </li>

                  <li className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="me-2 h-6 w-6 text-green-800">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span>Modelos de e-mail e envio agendado</span>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="block rounded-lg bg-white text-center shadow-lg dark:bg-neutral-700">
              <div
                className="border-b-2 border-neutral-100 px-7 py-3 dark:border-neutral-600 dark:text-neutral-50">
                <h5 className="mb-4 mt-4 text-lg font-semibold uppercase">
                  Corporativo
                </h5>
                <p className='text-sm text-justify text-gray-500'>Solução completa com suporte prioritário, integrações e tudo para escalar suas vendas</p>

                <h4 className="mb-4 mt-4">
                  <span className="text-3xl font-bold">R$ 149</span>
                  <span className="text-gray-500 dark:text-gray-300">/mês</span>
                </h4>
                <div className="flex justify-center">
                  <button className="flex items-center text-sm justify-center gap-2 mb-4 rounded-md border border-pink-300 px-4 py-2 text-pink-300 font-semibold hover:bg-pink-300 hover:text-white transition">
                    Fale com um consultor <FaArrowRight />
                  </button>
                </div>
              </div>

              <div className="p-7 text-left text-sm ">
                <ul className="text-gray-700 dark:text-white">
                  <li className="mb-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="me-2 h-6 w-6 text-green-800">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span>Pacote completo com personalização</span>
                  </li>

                  <li className="mb-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="me-2 h-6 w-6 text-green-800">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span>Gerente de conta e atendimento prioritário</span>
                  </li>

                  <li className="mb-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="me-2 h-6 w-6 text-green-800">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span>Relatórios avançados e exportação para BI</span>
                  </li>

                  <li className="mb-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="me-2 h-6 w-6 text-green-800">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5" />
                    </svg>

                    <span>Contrato e condições customizáveis</span>
                  </li>

                  <li className="mb-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="me-2 h-6 w-6 text-green-800">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span>Suporte prioritário e gestão dedicada</span>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Plano
