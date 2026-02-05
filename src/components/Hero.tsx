import React from 'react';
import { Download, Star, CheckCircle2, User } from 'lucide-react';
import profileImage from '../assets/profile.png';

interface HeroProps {
  onOpenModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32 px-6">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-[#D4AF37]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="z-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-sm font-semibold tracking-wide uppercase mb-8">
            <Star className="w-4 h-4 fill-[#D4AF37]" />
            Checklist Gratuito
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
            7 Sinais que Você Está <span className="text-[#D4AF37] italic">Perdendo Clientes</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
            Um guia estratégico desenhado exclusivamente para empresários, profissionais liberais e prestadores de serviço que buscam clareza operacional e retenção de faturamento.
          </p>

          <ul className="space-y-4 mb-10 inline-block lg:block text-left">
            {[
              'Identificar os 7 sinais críticos de perda de clientes',
              'Estratégias comprovadas para reverter cada situação',
              'Checklist prático para implementar hoje mesmo'
            ].map((benefit, idx) => (
              <li key={idx} className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-center lg:items-start gap-4">
            <button
              onClick={onOpenModal}
              className="bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-2 hover:scale-[1.05] active:scale-[0.98] transition-all duration-200 shadow-xl shadow-[#D4AF37]/20 text-lg"
            >
              <Download className="w-6 h-6" />
              Baixar Checklist Gratuito
            </button>
            <p className="text-sm text-gray-500 font-medium">
              100% gratuito • Download imediato • Sem spam
            </p>
          </div>
        </div>

        {/* Right Content - Visual */}
        <div className="relative z-10 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            {/* Background Glows for the Image */}
            <div className="absolute -inset-4 bg-[#D4AF37]/20 blur-[100px] rounded-full opacity-50" />
            <div className="absolute -inset-10 bg-[#D4AF37]/10 blur-[150px] rounded-full opacity-30 animate-pulse-slow" />

            {/* Specialist Portrait Card */}
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(212,175,55,0.15)] group">
              <img
                src={profileImage}
                alt="Rodrigo Rodrigues"
                className="w-full h-auto object-cover brightness-95 contrast-105 transition-all duration-700 group-hover:scale-105"
              />
              {/* Name Overlay - Sleek modern style */}
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/60 backdrop-blur-md rounded-xl border border-white/5">
                <p className="text-[#D4AF37] font-bold text-base leading-tight">Rodrigo Rodrigues</p>
                <p className="text-gray-400 text-xs">Especialista em Vendas Digitais</p>
              </div>
            </div>

            {/* Floating Stat Card 1 - Left */}
            <div className="absolute top-1/4 -left-10 bg-[#1a1a1a]/90 backdrop-blur-md border border-[#D4AF37]/30 p-3 rounded-2xl shadow-2xl animate-float-slow hidden md:block">
              <div className="flex items-center gap-3">
                <div className="bg-[#D4AF37]/20 p-2 rounded-xl">
                  <Star className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">98%</p>
                  <p className="text-gray-500 text-[10px] uppercase tracking-wider font-semibold">Aprovação</p>
                </div>
              </div>
            </div>

            {/* Floating Stat Card 2 - Right */}
            <div className="absolute top-1/2 -right-10 bg-[#1a1a1a]/90 backdrop-blur-md border border-[#D4AF37]/30 p-3 rounded-2xl shadow-2xl animate-float-fast hidden md:block">
              <div className="flex items-center gap-3">
                <div className="bg-[#D4AF37]/20 p-2 rounded-xl">
                  <User className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">2.500+</p>
                  <p className="text-gray-500 text-[10px] uppercase tracking-wider font-semibold">Downloads</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-5px, -15px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(5px, 15px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 5s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};
