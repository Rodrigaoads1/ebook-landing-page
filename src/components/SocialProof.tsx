
import React from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
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

export const SocialProof: React.FC = () => {
  return (
    <section className="py-24 bg-[#0d0d0d] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-bold uppercase tracking-widest rounded mb-4">
            Depoimentos
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">O que estão dizendo</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Profissionais que transformaram seus resultados aplicando a estrutura do nosso checklist estratégico.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-[#141414] border border-white/5 p-8 rounded-2xl relative group hover:border-[#D4AF37]/30 transition-all duration-300">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#D4AF37]/10 group-hover:text-[#D4AF37]/20 transition-all" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                ))}
              </div>
              
              <p className="text-gray-300 italic mb-8 leading-relaxed">
                "{t.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] font-bold">
                  {t.initial}
                </div>
                <div>
                  <p className="font-bold text-white leading-none mb-1">{t.name}</p>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
