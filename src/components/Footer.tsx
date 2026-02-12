
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-6 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex items-center gap-3 mb-4">
          <img src="/logo.png" alt="Migração Digital" className="h-8 w-auto object-contain brightness-0 invert opacity-80" />
          <span className="text-xl font-black bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] bg-clip-text text-transparent tracking-tighter">
            MIGRAÇÃO DIGITAL
          </span>
        </div>
        <p className="text-gray-600 text-sm max-w-md text-center mb-10 font-light">
          Estrutura comercial e previsibilidade para profissionais liberais, clínicas e empresas de serviços.
        </p>

        <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-gray-700 mb-10">
          <a href="https://www.youtube.com/@Rodrigorodrigues-md" className="hover:text-[#D4AF37] transition-colors">YouTube</a>
          <a href="https://wa.me/5521979043854?text=Olá%2C+encontrei+o+número+no+site+e+gostaria+de+mais+informações." className="hover:text-[#D4AF37] transition-colors">WhatsApp</a>
          <a href="https://www.instagram.com/rodrigomigracaodigital/" className="hover:text-[#D4AF37] transition-colors">Instagram</a>
        </div>

        <div className="pt-10 border-t border-white/5 w-full text-center">
          <p className="text-gray-800 text-[10px] uppercase tracking-[0.4em]">
            &copy; {new Date().getFullYear()} Migração Digital — "Marketing sem estratégia é só barulho."
          </p>
        </div>
      </div>
    </footer>
  );
};
