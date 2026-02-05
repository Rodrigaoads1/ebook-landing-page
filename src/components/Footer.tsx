
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Rodrigo Rodrigues. Todos os direitos reservados.
        </p>
        <div className="mt-4 flex justify-center gap-6 text-xs text-gray-700">
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacidade</a>
        </div>
      </div>
    </footer>
  );
};
