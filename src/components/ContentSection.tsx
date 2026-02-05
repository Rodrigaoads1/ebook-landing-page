
import React from 'react';
import { Clock, MessageSquare, TrendingDown, Repeat, AlertCircle, DollarSign, Target, ArrowRight } from 'lucide-react';

const signs = [
  {
    icon: Clock,
    title: "Demora no Atendimento",
    description: "Clientes não esperam mais do que minutos por uma primeira resposta."
  },
  {
    icon: MessageSquare,
    title: "Comunicação Ineficaz",
    description: "Mensagens genéricas que não geram conexão nem conversão imediata."
  },
  {
    icon: TrendingDown,
    title: "Queda nas Vendas",
    description: "Sinais de perda de faturamento que passam despercebidos pelo gestor."
  },
  {
    icon: Repeat,
    title: "Perda de Recorrência",
    description: "Clientes que compram uma vez e nunca mais retornam por falta de nutrição."
  },
  {
    icon: AlertCircle,
    title: "Reclamações Frequentes",
    description: "Feedback negativo ignorado que destrói sua reputação digital."
  },
  {
    icon: DollarSign,
    title: "Falta de Diferencial",
    description: "Competição por preço baixo em vez de valor percebido pelo cliente."
  },
  {
    icon: Target,
    title: "Público Errado",
    description: "Atraindo leads desqualificados que apenas tomam o seu tempo precioso."
  }
];

interface ContentSectionProps {
  onOpenModal: () => void;
}

export const ContentSection: React.FC<ContentSectionProps> = ({ onOpenModal }) => {
  return (
    <section className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-bold uppercase tracking-widest rounded mb-4">
            Conteúdo Exclusivo
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Os 7 Sinais Revelados</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Descubra os erros invisíveis que estão afastando seus clientes e como o nosso checklist ajuda você a corrigi-los um por um.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {signs.map((sign, idx) => (
            <div
              key={idx}
              className={`bg-[#141414] border border-white/5 p-8 rounded-2xl hover:bg-[#1a1a1a] transition-all duration-300 group ${idx === 6 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''
                }`}
            >
              <div className="bg-[#D4AF37]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#D4AF37]/20 transition-all duration-300">
                <sign.icon className="w-7 h-7 text-[#D4AF37]" />
              </div>
              <h3 className="text-white font-bold text-xl mb-3">{sign.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{sign.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="https://pay.kiwify.com.br/SEU_LINK_AQUI"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black font-bold py-4 px-10 rounded-lg flex items-center justify-center gap-2 hover:scale-[1.05] active:scale-[0.98] transition-all duration-200 shadow-2xl shadow-[#D4AF37]/30 text-lg group"
          >
            Quero o Checklist — R$ 19,90
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
