
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-6 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <span className="text-xl font-black bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] bg-clip-text text-transparent tracking-tighter mb-4">
          MIGRAÇÃO DIGITAL
        </span>
        <p className="text-gray-600 text-sm max-w-md text-center mb-10 font-light">
          Estrutura comercial e previsibilidade para profissionais liberais, clínicas e empresas de serviços.
        </p>

        <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-gray-700 mb-10">
          <a href="#" className="hover:text-[#D4AF37] transition-colors">YouTube</a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">WhatsApp</a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Instagram</a>
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
