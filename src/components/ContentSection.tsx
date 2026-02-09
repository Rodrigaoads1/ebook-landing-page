
import React from 'react';
import { Target, TrendingDown, Users, ShieldX, BarChart3, Clock, AlertCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Users,
    title: "Dependência do Boca a Boca",
    description: "Seu faturamento oscila como uma montanha-russa porque você não controla a entrada de novos clientes."
  },
  {
    icon: Target,
    title: "Google vs Instagram",
    description: "Você tenta vender no Instagram como se fosse Google (ou vice-versa) e acaba perdendo leads qualificados."
  },
  {
    icon: ShieldX,
    title: "Fantasma Digital",
    description: "Seu perfil no Google Meu Negócio está abandonado ou inexistente, deixando você invisível na hora da compra."
  },
  {
    icon: TrendingDown,
    title: "Panfleto Digital",
    description: "Você trata seu Instagram como um catálogo de produtos chato, o que zera seu engajamento e autoridade."
  },
  {
    icon: AlertCircle,
    title: "Perfil Amador",
    description: "Uma bio confusa e falta de profissionalismo visual espantam o cliente High-Ticket antes mesmo do contato."
  },
  {
    icon: BarChart3,
    title: "Vendas no Acaso",
    description: "Sem um funil definido, você espera que o cliente feche sozinho e acaba perdendo 99% das oportunidades."
  },
  {
    icon: Clock,
    title: "Falta de Estratégia",
    description: "Postar 'quando dá tempo' sem métricas mata seu crescimento. Marketing sem estratégia é só barulho."
  }
];

interface ContentSectionProps {
  onOpenModal: () => void;
}

export const ContentSection: React.FC<ContentSectionProps> = ({ onOpenModal }) => {
  return (
    <section className="py-24 px-6 bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-6">
            O QUE ESTÁ EM JOGO
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Identifique os 7 Erros Ocultos <br />que Travam sua Escala</h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            O Checklist Estratégico não é teoria. É um diagnóstico prático para empresas e profissionais que buscam previsibilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`bg-[#111] border border-white/5 p-10 rounded-3xl hover:border-[#D4AF37]/30 transition-all duration-500 group ${idx === 6 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''
                }`}
            >
              <div className="bg-[#D4AF37]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#D4AF37]/20 transition-all duration-300">
                <step.icon className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-white font-bold text-xl mb-4">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="https://pay.kiwify.com.br/GhaKpCv"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black font-black py-6 px-12 rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.05] active:scale-[0.98] transition-all duration-200 shadow-2xl shadow-[#D4AF37]/30 text-xl group"
          >
            Quero Corrigir Minha Estrutura
            <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
