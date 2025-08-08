import {
    PiFactoryLight,
    PiHandshakeLight,
    PiTruckLight,
    PiBriefcaseLight,
    PiRulerLight,
    PiSuitcaseLight,
} from 'react-icons/pi'

function SetoresAtendidos() {
    const setores = [
        {
            icone: <PiFactoryLight className="text-3xl text-indigo-600" />,
            titulo: 'Indústrias e Fábricas',
            texto: 'Acompanhe processos de venda complexos, propostas e novas oportunidades, sem perder nenhum detalhe.',
        },
        {
            icone: <PiHandshakeLight className="text-3xl text-indigo-600" />,
            titulo: 'Distribuidoras e Revendedoras',
            texto: 'Gerencie de perto o relacionamento com seus clientes, descontos praticados, rota de visitas e ligações recorrentes.',
        },
        {
            icone: <PiTruckLight className="text-3xl text-indigo-600" />,
            titulo: 'Transporte, logística e armazenagem',
            texto: 'Mantenha todos os seus contatos seguros no CRM, otimize a criação de tarefas e descubra gargalos e oportunidades para vendas.',
        },
        {
            icone: <PiBriefcaseLight className="text-3xl text-indigo-600" />,
            titulo: 'Serviços jurídicos e contábeis',
            texto: 'Ofereça serviços ainda mais personalizados a partir de um histórico completo de interações e dados públicos do CNJ de cada cliente.',
        },
        {
            icone: <PiRulerLight className="text-3xl text-indigo-600" />,
            titulo: 'Engenharia, arquitetura e urbanismo',
            texto: 'Organize seus contatos e interações com lógica, agilidade e atendimento comercial e moderno no relacionamento pós-venda.',
        },
        {
            icone: <PiSuitcaseLight className="text-3xl text-indigo-600" />,
            titulo: 'Locadoras e franqueadoras',
            texto: 'Gerencie no CRM todas as suas negociações e propostas realizadas para potencializar suas vendas.',
        },
    ]

    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">
                    Setores que atendemos
                </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {setores.map((setor, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl border border-slate-200 p-6 text-left shadow-sm hover:shadow-md transition"
                    >
                        <div className="mb-4">{setor.icone}</div>
                        <h3 className="font-semibold text-gray-800 text-lg mb-2">{setor.titulo}</h3>
                        <p className="text-sm text-gray-600 mb-4">{setor.texto}</p>
                        <a href="#" className="text-sm text-pink-600 font-medium inline-flex items-center">
                            Saiba mais <span className="ml-1">→</span>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SetoresAtendidos
