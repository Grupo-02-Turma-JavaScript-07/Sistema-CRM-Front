// src/Form.tsx
import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';


interface FormData {
  nome: any;
  email: string;
  telefone: string;
  empresa?: string;
  status?: 'lead' | 'client' | 'inactive';
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    status: 'lead'
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.nome.trim()) newErrors.nome = 'Nome é obrigatório';
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }
    if (!formData.telefone.trim()) newErrors.telefone = 'Telefone é obrigatório';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Limpa o erro quando o usuário começa a digitar
    if (errors[name as keyof FormData]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Simulando chamada à API com JSONPlaceholder
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', formData);
      
      console.log('Dados enviados com sucesso:', response.data);
      setSubmitStatus({
        success: true,
        message: 'Cliente cadastrado com sucesso!'
      });
      
      // Limpa o formulário após o sucesso
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        empresa: '',
        status: 'lead'
      });
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      setSubmitStatus({
        success: false,
        message: 'Ocorreu um erro ao cadastrar. Tente novamente.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Cadastro de Cliente</h2>
      
      {submitStatus && (
        <div className={`mb-4 p-3 rounded-md ${
          submitStatus.success 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {submitStatus.message}
        </div>
      )}
      
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Nome Completo *
        </label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.nome}
          onChange={handleChange}
          className={`mt-1 block w-full p-2 border rounded-md ${
            errors.nome ? 'border-red-500' : 'border-gray-300'
          } focus:ring-blue-500 focus:border-blue-500`}
        />
        {errors.nome && <p className="mt-1 text-sm text-red-600">{errors.nome}</p>}
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          E-mail *
        </label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`mt-1 block w-full p-2 border rounded-md ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          } focus:ring-blue-500 focus:border-blue-500`}
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
      </div>
      
      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Telefone *
        </label>
        <input
          id="phone"
          type="tel"
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
          className={`mt-1 block w-full p-2 border rounded-md ${
            errors.telefone ? 'border-red-500' : 'border-gray-300'
          } focus:ring-blue-500 focus:border-blue-500`}
        />
        {errors.telefone && <p className="mt-1 text-sm text-red-600">{errors.telefone}</p>}
      </div>
      
      <div className="mb-4">
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
          Empresa (opcional)
        </label>
        <input
          id="empresa"
          type="text"
          name="empresa"
          value={formData.empresa}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
          Status do Cliente
        </label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="lead">Lead</option>
          <option value="client">Cliente</option>
          <option value="inactive">Inativo</option>
        </select>
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-2 px-4 rounded-md text-white font-medium ${
          isSubmitting
            ? 'bg-blue-400 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'
        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
      >
        {isSubmitting ? 'Enviando...' : 'Cadastrar Cliente'}
      </button>
    </form>
  );
};

export default Form;
