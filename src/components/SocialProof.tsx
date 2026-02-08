
import React from 'react';
import { Quote, Star, Instagram, Globe, CheckCircle2 } from 'lucide-react';

const textTestimonials = [
  {
    name: "Dr. André Santos",
    role: "Proprietário de Clínica",
    content: "O sistema de aquisição previsível mudou o jogo aqui na clínica. Paramos de depender só de indicações e agora temos um fluxo constante de novos pacientes todo mês.",
    initial: "A"
  },
  {
    name: "Letícia Oliveira",
    role: "Gestora de Serviços",
    content: "Eu não buscava marketing, buscava estrutura. O Checklist de 7 sinais me abriu os olhos para o quanto de dinheiro estávamos deixando na mesa por falta de processo digital.",
    initial: "L"
  },
  {
    name: "Marcos Vinícius",
    role: "Consultor Sênior",
    content: "Trabalho direto e sem enrolação. O Rodrigo foca no que realmente traz faturamento. O sistema funciona porque é baseado em estratégia, não em likes.",
    initial: "M"
  }
];

const instagramStories = [
  { id: 1, url: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=400&h=700", label: "Sistema MAE™ em Ação" },
  { id: 2, url: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=400&h=700", label: "Feedback da Estrutura" },
  { id: 3, url: "https://images.unsplash.com/photo-1611162618071-b39a2dd0f78d?auto=format&fit=crop&q=80&w=400&h=700", label: "Leads Qualificados" },
  { id: 4, url: "https://images.unsplash.com/photo-1611162615891-23cff301fc24?auto=format&fit=crop&q=80&w=400&h=700", label: "Previsibilidade de Venda" },
];

export const SocialProof: React.FC = () => {
  return (
    <section className="py-24 bg-[#050505] px-6 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-6">
            Autoridade & Prova Social
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Resultados que geram <span className="text-[#D4AF37] italic">Previsibilidade.</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            O mercado fala por nós. Veja os bastidores de empresas que implementaram o Sistema de Aquisição Previsível.
          </p>
        </div>

        {/* Google Reviews Widget Style */}
        <div className="mb-24 bg-[#111] border border-white/5 rounded-[40px] p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-12 group hover:border-[#D4AF37]/30 transition-all duration-700 shadow-2xl">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-8 h-8 text-[#4285F4]" />
              <span className="text-xl font-bold uppercase tracking-tighter">Google Avaliações</span>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-6xl font-serif font-black">5.0</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-[#FBBC05] fill-[#FBBC05]" />
                ))}
              </div>
            </div>
            <p className="text-gray-600 uppercase tracking-[0.2em] text-[10px] font-black">Certificado pela Agência Migração Digital</p>
          </div>

          <div className="flex-1 max-w-xl">
            <div className="relative">
              <Quote className="absolute -top-10 -left-10 w-20 h-20 text-[#D4AF37]/5" />
              <p className="text-xl text-gray-300 italic font-light leading-relaxed relative z-10">
                "Não é apenas marketing. É gestão comercial digital. O Rodrigo nos ajudou a entender onde estávamos errando na estrutura e o resultado foi imediato no faturamento."
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center font-black text-white shadow-xl">J</div>
                <div>
                  <p className="font-bold text-white uppercase text-sm tracking-tight">João Ricardo</p>
                  <p className="text-gray-600 text-[10px] uppercase font-black">Diretor Comercial (via Google Reviews)</p>
                </div>
              </div>
            </div>
          </div>

          <a
            href="https://www.google.com/search?q=Agência+Migracao+Digital"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-10 py-5 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-[#D4AF37] hover:text-black hover:border-transparent transition-all duration-300"
          >
            Ver todos no Google
          </a>
        </div>

        {/* Instagram Stories Style */}
        <div className="mb-24 scale-[0.98] hover:scale-100 transition-transform duration-700">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
              <div className="w-1 h-12 bg-[#D4AF37]" />
              <div>
                <h3 className="text-3xl font-serif font-bold mb-1">Destaques Semanais</h3>
                <p className="text-gray-500 text-sm font-light">Bastidores da nossa operação de aquisição paga.</p>
              </div>
            </div>
            <div className="p-4 bg-white/5 rounded-full">
              <Instagram className="w-6 h-6 text-[#D4AF37]" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {instagramStories.map((story) => (
              <div key={story.id} className="group relative aspect-[9/16] rounded-[32px] overflow-hidden border border-white/5 hover:border-[#D4AF37]/40 transition-all duration-700 shadow-xl">
                <img src={story.url} alt={story.label} className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[1px]">
                      <div className="w-full h-full rounded-full bg-black flex items-center justify-center p-[1px]">
                        <Instagram className="w-full h-full text-white" />
                      </div>
                    </div>
                    <span className="text-[10px] font-black uppercase text-white tracking-[0.1em]">@migracaodigital</span>
                  </div>
                  <p className="text-sm font-bold text-[#D4AF37] leading-tight translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    {story.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {textTestimonials.map((t, idx) => (
            <div key={idx} className="bg-[#0a0a0a] border border-white/5 p-12 rounded-[40px] relative group hover:bg-[#111] hover:border-[#D4AF37]/20 transition-all duration-700">
              <Quote className="absolute top-10 right-10 w-12 h-12 text-[#D4AF37]/5 group-hover:text-[#D4AF37]/10 transition-all" />

              <div className="flex gap-1 mb-10">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                ))}
              </div>

              <p className="text-gray-400 font-light mb-12 leading-relaxed text-lg">
                "{t.content}"
              </p>

              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] font-serif text-2xl font-black">
                  {t.initial}
                </div>
                <div>
                  <p className="font-bold text-white text-xl leading-none mb-2">{t.name}</p>
                  <div className="flex items-center gap-2">
                    <p className="text-gray-600 text-[10px] uppercase font-black tracking-widest">{t.role}</p>
                    <CheckCircle2 className="w-3 h-3 text-[#D4AF37]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
