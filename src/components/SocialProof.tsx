
import React from 'react';
import { Quote, Star, Instagram, Globe, CheckCircle2 } from 'lucide-react';

const textTestimonials = [
  {
    name: "Carlos Silva",
    role: "Empresário",
    content: "Identifiquei 5 dos 7 sinais no meu negócio. Após aplicar o checklist, recuperei clientes que achava perdidos.",
    initial: "C"
  },
  {
    name: "Ana Beatriz",
    role: "Consultora",
    content: "Material direto ao ponto. Me ajudou a entender onde estava falhando no atendimento e na comunicação.",
    initial: "A"
  },
  {
    name: "Ricardo Mendes",
    role: "Prestador de Serviços",
    content: "Simples, prático e aplicável. Recomendo para qualquer profissional autônomo que quer escalar faturamento.",
    initial: "R"
  }
];

const instagramStories = [
  { id: 1, url: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=400&h=700", label: "Resultado Google Ads" },
  { id: 2, url: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=400&h=700", label: "Feedback via Direct" },
  { id: 3, url: "https://images.unsplash.com/photo-1611162618071-b39a2dd0f78d?auto=format&fit=crop&q=80&w=400&h=700", label: "Contrato Fechado" },
  { id: 4, url: "https://images.unsplash.com/photo-1611162615891-23cff301fc24?auto=format&fit=crop&q=80&w=400&h=700", label: "Análise de Métricas" },
];

export const SocialProof: React.FC = () => {
  return (
    <section className="py-24 bg-[#050505] px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-4">
            Prova Social & Autoridade
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Transformando Resultados em <span className="text-[#D4AF37] italic">Realidade.</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            Não é o que dizemos sobre nós, mas o que os nossos clientes e o mercado atestam todos os dias.
          </p>
        </div>

        {/* Google Reviews Widget Style */}
        <div className="mb-24 bg-[#111] border border-white/5 rounded-[32px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-12 group hover:border-[#D4AF37]/20 transition-all duration-500">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-8 h-8 text-[#4285F4]" />
              <span className="text-xl font-bold">Google Avaliações</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-5xl font-serif font-bold">5.0</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-[#FBBC05] fill-[#FBBC05]" />
                ))}
              </div>
            </div>
            <p className="text-gray-500 uppercase tracking-widest text-[10px] font-black">Baseado em 50+ feedbacks reais</p>
          </div>

          <div className="flex-1 max-w-xl">
            <div className="relative">
              <Quote className="absolute -top-6 -left-6 w-12 h-12 text-[#D4AF37]/10" />
              <p className="text-xl text-gray-300 italic font-light leading-relaxed">
                "A Agência Migração Digital trouxe a clareza que faltava no meu tráfego pago. Em 30 dias triplicamos o volume de leads qualificados mantendo o mesmo orçamento."
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center font-bold">M</div>
                <div>
                  <p className="font-bold text-sm">Marcos Paulo</p>
                  <p className="text-gray-500 text-xs">Proprietário de Clínica Médica (via Google)</p>
                </div>
              </div>
            </div>
          </div>

          <a
            href="https://share.google/search?q=Ag%C3%AAncia+Migra%C3%A7%C3%A3o+Digital"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-8 py-4 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all"
          >
            Ver todas no Google
          </a>
        </div>

        {/* Instagram Stories Style Proof */}
        <div className="mb-24">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-2">Destaques do Instagram</h3>
              <p className="text-gray-500 text-sm font-light">Resultados diários direto dos nossos canais oficiais.</p>
            </div>
            <Instagram className="w-8 h-8 text-[#D4AF37] opacity-40" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {instagramStories.map((story) => (
              <div key={story.id} className="group relative aspect-[9/16] rounded-3xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500">
                <img src={story.url} alt={story.label} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[1px]">
                      <div className="w-full h-full rounded-full bg-black flex items-center justify-center p-[2px]">
                        <Instagram className="w-full h-full text-white" />
                      </div>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-tighter text-white">@migracaodigital</span>
                  </div>
                  <p className="text-xs font-bold text-[#D4AF37] leading-tight translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {story.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Traditional Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {textTestimonials.map((t, idx) => (
            <div key={idx} className="bg-[#0a0a0a] border border-white/5 p-10 rounded-[32px] relative group hover:border-[#D4AF37]/20 transition-all duration-500">
              <Quote className="absolute top-8 right-8 w-10 h-10 text-[#D4AF37]/5 group-hover:text-[#D4AF37]/10 transition-all" />

              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                ))}
              </div>

              <p className="text-gray-400 font-light mb-10 leading-relaxed text-lg">
                "{t.content}"
              </p>

              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] font-serif text-xl font-bold">
                  {t.initial}
                </div>
                <div>
                  <p className="font-bold text-white text-lg leading-none mb-1">{t.name}</p>
                  <div className="flex items-center gap-2">
                    <p className="text-gray-600 text-sm">{t.role}</p>
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
