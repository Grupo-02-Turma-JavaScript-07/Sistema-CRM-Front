import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function FormPostagem() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ nome, email, telefone, mensagem });
    alert('Formulário enviado! Obrigado.');
    setNome('');
    setEmail('');
    setTelefone('');
    setMensagem('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 w-80">
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className="border rounded p-2"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border rounded p-2"
        required
      />
      <input
        type="tel"
        placeholder="Telefone"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
        className="border rounded p-2"
        required
      />
      <textarea
        placeholder="Mensagem"
        value={mensagem}
        onChange={(e) => setMensagem(e.target.value)}
        className="border rounded p-2"
        required
      />
      <button type="submit" className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600">
        Enviar
      </button>
    </form>
  );
}

function ModalPostagem() {
  return (
    <Popup
      trigger={
        <button className="border rounded px-4 py-2 hover:bg-white hover:text-sky-800 transition">
          Fale com um consultor
        </button>
      }
      modal
      nested
      closeOnDocumentClick
    >
      {(close: () => void) => (
        <div className="bg-white rounded shadow-lg p-8 relative max-w-md w-full">
          <button
            onClick={close}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
            aria-label="Fechar"
            type="button"
          >
            &times;
          </button>
          <h3 className="text-xl font-bold mb-4 text-gray-800">Fale com um consultor</h3>
          <FormPostagem />
        </div>
      )}
    </Popup>
  );
}

export default ModalPostagem;
