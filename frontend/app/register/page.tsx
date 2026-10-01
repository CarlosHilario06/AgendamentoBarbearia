'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    barberShopName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.password !== formData.confirmPassword) {
      alert('As senhas não coincidem')
      return
    }

    setLoading(true)
    try {
      // TODO: Integrar com backend
      console.log('Register attempt:', formData)
    } catch (error) {
      console.error('Register error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1585747860715-cd4628902d4a?w=1200&h=1200&fit=crop)',
        }}
      />

      <Link href="/" className="absolute top-8 left-8 text-gray-400 hover:text-white">
        ← Voltar
      </Link>

      <div className="w-full max-w-md px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6">AGENDAMENTO</h1>
          <p className="text-gray-300">Cadastre sua barbearia</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="barberShopName"
              placeholder="Nome da barbearia"
              value={formData.barberShopName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-amber-600 text-white placeholder-gray-400"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-amber-600 text-white placeholder-gray-400"
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Senha"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-amber-600 text-white placeholder-gray-400"
            />
          </div>

          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirme a senha"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-amber-600 text-white placeholder-gray-400"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-700 hover:bg-amber-800 text-white font-bold py-3 rounded-lg transition-colors disabled:opacity-50"
          >
            {loading ? 'Cadastrando...' : 'CADASTRAR'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-400">
            Já tem uma conta?{' '}
            <Link href="/login" className="text-amber-600 hover:text-amber-500">
              Faça login
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
