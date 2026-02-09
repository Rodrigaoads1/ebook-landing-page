
import React from 'react';
import { Download, Star, CheckCircle2 } from 'lucide-react';
import profileImage from '../assets/rodrigo_analise_extra.png';

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32 px-6 bg-[#050505]">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-[#D4AF37]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="z-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-sm font-semibold tracking-wide uppercase mb-8">
            <Star className="w-4 h-4 fill-[#D4AF37]" />
            Material Exclusivo: R$ 19,90
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold leading-tight mb-6">
            7 Passos para Identificar <br />
            Por que Você Está <span className="text-[#D4AF37] italic">Perdendo Clientes</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-light">
            Você trabalha muito mas cresce pouco? O erro não está na sua competência técnica, mas no seu sistema de aquisição. Descubra os 7 sinais que mostram que você está deixando dinheiro na mesa.
          </p>

          <ul className="space-y-4 mb-10 inline-block lg:block text-left">
            {[
              'Identifique onde o seu faturamento está escorrendo todos os meses',
              'Como parar de depender mortalmente do boca a boca',
              'Por que o seu Instagram pode estar espantando clientes premium'
            ].map((benefit, idx) => (
              <li key={idx} className="flex items-center gap-3 text-gray-300 font-light">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-center lg:items-start gap-4">
            <a
              href="https://pay.kiwify.com.br/GhaKpCv"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black font-black py-5 px-10 rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.05] active:scale-[0.98] transition-all duration-200 shadow-2xl shadow-[#D4AF37]/20 text-xl"
            >
              <Download className="w-6 h-6" />
              Garantir Checklist Agora — R$ 19,90
            </a>
            <p className="text-sm text-gray-500 font-medium uppercase tracking-widest text-[10px]">
              Acesso imediato • Material em PDF • 7 Dias de Garantia
            </p>
          </div>
        </div>

        {/* Right Content - Visual */}
        <div className="relative z-10 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            <div className="absolute -inset-4 bg-[#D4AF37]/20 blur-[100px] rounded-full opacity-50" />
            <div className="absolute -inset-10 bg-[#D4AF37]/10 blur-[150px] rounded-full opacity-30 animate-pulse-slow" />

            <div className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(212,175,55,0.15)] group">
              <img
                src={profileImage}
                alt="Rodrigo Rodrigues"
                className="w-full h-auto grayscale-[10%] contrast-110 object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10">
                <p className="text-[#D4AF37] font-bold text-lg leading-tight uppercase tracking-tighter">Marketing sem estratégia é só barulho.</p>
                <p className="text-gray-400 text-xs mt-1">Estrategista | 50+ nichos atendidos</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
