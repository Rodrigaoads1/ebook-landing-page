import React from 'react';
import { ShieldCheck, Zap, Diamond, Download } from 'lucide-react';

interface FinalCTAProps {
  onOpenModal: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenModal }) => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="bg-[#141414] border border-[#D4AF37]/40 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
          {/* Decorative Subtle Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-block px-4 py-2 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mb-8">
              Oferta Limitada
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Não Perca Mais <span className="text-[#D4AF37]">Nenhum Cliente</span>
            </h2>

            <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
              Baixe agora o checklist gratuito e descubra como identificar e corrigir os 7 sinais que estão drenando o seu faturamento mensal.
            </p>

            <div className="mb-12">
              <button
                onClick={onOpenModal}
                className="bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black font-bold py-4 px-10 rounded-lg flex items-center justify-center gap-2 hover:scale-[1.05] active:scale-[0.98] transition-all duration-200 shadow-2xl shadow-[#D4AF37]/30 text-lg mx-auto"
              >
                <Download className="w-6 h-6" />
                Baixar Checklist Gratuito
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
                100% Gratuito
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Zap className="w-5 h-5 text-[#D4AF37]" />
                Download Imediato
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Diamond className="w-5 h-5 text-[#D4AF37]" />
                Conteúdo Exclusivo
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
