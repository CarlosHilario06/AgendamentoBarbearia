'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // TODO: Integrar com backend
    try {
      // const response = await fetch('/api/auth/login', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, password }),
      // })
      console.log('Login attempt:', { email, password })
    } catch (error) {
      console.error('Login error:', error)
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
          <p className="text-gray-300 mb-2">Bem-vindo parceiro, entre com</p>
          <p className="text-gray-300">seus dados para ter acesso a sua agenda</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="E-mail de acesso"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-amber-600 text-white placeholder-gray-400"
            />
          </div>

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-amber-600 text-white placeholder-gray-400"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-3 text-gray-400 hover:text-white"
            >
              {showPassword ? '👁️‍🗨️' : '👁️'}
            </button>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-amber-700 hover:bg-amber-800 text-white font-bold py-3 rounded-lg transition-colors disabled:opacity-50"
          >
            {loading ? 'Carregando...' : 'ENVIAR'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <Link href="#" className="text-amber-600 hover:text-amber-500">
            Esqueceu sua senha?
          </Link>
        </div>

        <div className="mt-8 p-4 bg-gray-800 rounded-lg text-sm text-gray-400">
          <p>
            Sua agenda possui dados sensíveis de seus clientes, não forneça seu acesso a ninguém.
          </p>
        </div>
      </div>
    </main>
  )
}
