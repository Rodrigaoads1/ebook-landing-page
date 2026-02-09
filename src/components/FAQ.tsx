
import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    {
        q: "Não tenho tempo para ser 'blogueiro' e postar todo dia. Funciona?",
        a: "Com certeza. Na verdade, postar todo dia sem estratégia é o erro #7. O Sistema de Aquisição foca em criar ativos digitais que trabalham por você, para que você não precise virar um influencer para vender."
    },
    {
        q: "Meu nicho é muito específico/diferente. O checklist serve para mim?",
        a: "Sim. O comportamento de compra humano (atenção, interesse, desejo e ação) é universal. Essa estrutura já foi validada em mais de 50 nichos, de clínicas médicas a consultorias empresariais."
    },
    {
        q: "Já investi em anúncios antes e não tive retorno. O que muda agora?",
        a: "A maioria das pessoas joga tráfego em uma estrutura fraca (o balde furado). O checklist identifica exatamente onde o seu funil está quebrando para que seu próximo investimento em tráfego traga lucro real."
    },
    {
        q: "Sou tímido e não gosto de aparecer. Consigo aplicar?",
        a: "Estratégia vence exposição. Você não precisa expor sua vida pessoal para ser visto como autoridade. Mostramos como focar no seu conhecimento técnico para atrair clientes High-Ticket."
    },
    {
        q: "Como recebo o material?",
        a: "O envio é imediato. Assim que o pagamento for confirmado, você receberá o link para download do PDF diretamente no seu e-mail."
    }
];

export const FAQ: React.FC = () => {
    const [openIdx, setOpenIdx] = useState<number | null>(null);

    return (
        <section className="py-24 px-6 bg-[#080808]">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                    <HelpCircle className="w-12 h-12 text-[#D4AF37] mx-auto mb-6 opacity-50" />
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Perguntas Frequentes</h2>
                    <p className="text-gray-500 font-light">Tire suas dúvidas e comece sua migração digital hoje.</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className="border border-white/5 bg-white/[0.02] rounded-2xl overflow-hidden transition-all duration-300"
                        >
                            <button
                                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                                className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                            >
                                <span className="text-lg font-bold text-gray-200">{faq.q}</span>
                                {openIdx === idx ? <ChevronUp className="w-5 h-5 text-[#D4AF37]" /> : <ChevronDown className="w-5 h-5 text-gray-600" />}
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out ${openIdx === idx ? 'max-h-48 opacity-100 p-6 pt-0' : 'max-h-0 opacity-0 overflow-hidden'
                                    }`}
                            >
                                <p className="text-gray-400 font-light leading-relaxed border-t border-white/5 pt-4">
                                    {faq.a}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
