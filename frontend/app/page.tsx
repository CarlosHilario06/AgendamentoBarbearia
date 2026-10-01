'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  return (
    <main className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1585747860715-cd4628902d4a?w=1200&h=1200&fit=crop)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-wide">
            AGENDAMENTO
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Bem-vindo a agenda feita para você
          </p>
          <p className="text-base md:text-lg mb-12 text-gray-400 max-w-xl mx-auto">
            Planeje e organize seu dia a dia, alcance seus objetivos e transforme seu futuro
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/login"
              className="bg-amber-700 hover:bg-amber-800 text-white font-bold py-3 px-12 rounded-lg transition-colors"
            >
              ENTRAR
            </Link>
            <Link
              href="/register"
              className="border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-12 rounded-lg transition-colors"
            >
              CADASTRAR
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-8 text-center text-gray-400 border-t border-gray-800">
        <div className="space-x-6 mb-4">
          <Link href="#" className="hover:text-white transition-colors">
            Termos de Uso
          </Link>
          <Link href="#" className="hover:text-white transition-colors">
            Política de Privacidade
          </Link>
        </div>
        <p className="text-sm">© 2026 Agendamento Barbearia. Todos os direitos reservados.</p>
      </footer>
    </main>
  )
}
