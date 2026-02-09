
import React from 'react';
import { ShieldCheck, Zap, Download, Star } from 'lucide-react';

interface FinalCTAProps {
  onOpenModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenModal }) => {
  return (
    <section className="py-24 px-6 relative bg-[#050505]">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#111] border border-[#D4AF37]/40 rounded-[40px] p-8 md:p-20 text-center relative overflow-hidden shadow-[0_20px_60px_rgba(212,175,55,0.1)]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-black uppercase tracking-widest mb-10">
              <Star className="w-4 h-4 fill-[#D4AF37]" />
              Acesso Imediato
            </div>

            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
              Garanta seu Acesso <br />por apenas <span className="text-[#D4AF37]">R$ 19,90</span>
            </h2>

            <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto leading-relaxed font-light">
              Se você identificou 2 ou mais sinais, o seu negócio está em modo sobrevivência. Não é culpa sua — a faculdade não te ensinou a captar clientes. Este checklist é o seu primeiro passo para construir previsibilidade.
            </p>

            <div className="mb-12">
              <a
                href="https://pay.kiwify.com.br/GhaKpCv"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black font-black py-6 px-12 rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.05] active:scale-[0.98] transition-all duration-200 shadow-2xl shadow-[#D4AF37]/40 text-2xl mx-auto inline-flex group"
              >
                <Download className="w-8 h-8 group-hover:bounce" />
                Quero o Checklist Agora
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-[10px] uppercase font-black tracking-[0.2em] text-gray-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
                7 Dias de Garantia
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#D4AF37]" />
                Pagamento Único
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-[#D4AF37]" />
                Material 100% Digital
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
