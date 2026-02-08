
import React from 'react';
import { Target, TrendingDown, Users, ShieldX, BarChart3, Clock, AlertCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: ShieldX,
    title: "Vulnerabilidade Comercial",
    description: "Você depende 100% de indicações ou do seu esforço pessoal para atrair novos clientes."
  },
  {
    icon: TrendingDown,
    title: "Ciclo do Mês Vazio",
    description: "A falta de previsibilidade cria meses excelentes seguidos de meses preocupantes sem explicação técnica."
  },
  {
    icon: Target,
    title: "Posicionamento Fraco",
    description: "Sua competência é alta, mas seu conteúdo atrai curiosos em vez de clientes com poder de compra."
  },
  {
    icon: Users,
    title: "Leads Desqualificados",
    description: "Seu funil (se existir) não filtra quem realmente pode pagar pelo seu serviço, drenando seu tempo."
  },
  {
    icon: BarChart3,
    title: "Falta de Métricas Reais",
    description: "Você não sabe quanto custa atrair um cliente e vive no 'marketing de esperança'."
  },
  {
    icon: AlertCircle,
    title: "Ausência de Funil",
    description: "Não existe um caminho estruturado do primeiro contato ao fechamento do contrato."
  },
  {
    icon: Clock,
    title: "Processo Manual",
    description: "Você gasta horas respondendo as mesmas dúvidas básicas em vez de automatizar a educação do lead."
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
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Identifique os 7 Gargalos <br />que Travam sua Escala</h2>
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
