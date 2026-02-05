import React from 'react';
import { Target, Search, BarChart3, ArrowRight, ShieldCheck, Zap, Star, Layout, Users, Megaphone } from 'lucide-react';

export function AnalysisPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#D4AF37]/30 selection:text-[#D4AF37]">
            {/* Nav placeholder */}
            <nav className="p-6 border-b border-white/5">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <span className="text-xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] bg-clip-text text-transparent">MIGRAÇÃO DIGITAL</span>
                    <div className="hidden md:flex gap-6 text-sm text-gray-400">
                        <span>Análise Profissional</span>
                        <span className="text-[#D4AF37]">Vagas Limitadas</span>
                    </div>
                </div>
            </nav>

            <main>
                {/* Hero Section */}
                <section className="pt-20 pb-32 px-6 relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[#D4AF37]/5 blur-[120px] rounded-full" />

                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-sm font-semibold tracking-wide uppercase mb-8">
                            <Target className="w-4 h-4" />
                            Solução Especializada
                        </div>

                        <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-8">
                            Análise Profissional de <br />
                            <span className="text-[#D4AF37] italic">Presença Digital</span>
                        </h1>

                        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Descubra exatamente por que sua presença online não está convertendo em faturamento e receba o mapa prático para atrair clientes de alto valor.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <a
                                href="https://pay.kiwify.com.br/GhaKpCv" // Placeholder para o link de R$ 197 quando você tiver
                                className="w-full md:w-auto bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black font-bold py-5 px-10 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.05] active:scale-[0.98] transition-all duration-200 shadow-2xl shadow-[#D4AF37]/30 text-lg"
                            >
                                Garantir Minha Análise — R$ 197
                                <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>

                        <div className="mt-8 flex justify-center gap-8 text-gray-500 text-sm">
                            <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#D4AF37]" /> Pagamento 100% Seguro</span>
                            <span className="flex items-center gap-2"><Zap className="w-4 h-4 text-[#D4AF37]" /> Entrega em até 48h</span>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-24 bg-[#0d0d0d] px-6">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: Search,
                                    title: "Diagnóstico de Perfil",
                                    desc: "Análise profunda do seu posicionamento atual no Instagram/LinkedIn e site."
                                },
                                {
                                    icon: BarChart3,
                                    title: "Mapa de Oportunidades",
                                    desc: "Identificação clara de onde você está perdendo leads qualificados hoje."
                                },
                                {
                                    icon: Layout,
                                    title: "Estrutura de Funil",
                                    desc: "O desenho exato do funil que você deve implementar para o seu nicho."
                                }
                            ].map((item, i) => (
                                <div key={i} className="bg-[#141414] border border-white/5 p-10 rounded-3xl hover:border-[#D4AF37]/30 transition-all group">
                                    <div className="w-14 h-14 bg-[#D4AF37]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#D4AF37]/20 transition-all">
                                        <item.icon className="w-7 h-7 text-[#D4AF37]" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Content Details */}
                <section className="py-24 px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-16">O Que Você <span className="text-[#D4AF37]">Vai Receber:</span></h2>

                        <div className="space-y-12">
                            {[
                                {
                                    title: "Análise de Autoridade Percebida",
                                    content: "Vou analisar se o seu perfil hoje transmite a autoridade necessária para cobrar caro ou se você parece 'apenas mais um' no mercado.",
                                    icon: Star
                                },
                                {
                                    title: "Filtro de Audiência Qualificada",
                                    content: "Como ajustar sua comunicação para parar de atrair curiosos e começar a falar com quem tem dinheiro e urgência.",
                                    icon: Users
                                },
                                {
                                    title: "Upgrade de Oferta Irresistível",
                                    content: "Sugestões práticas de como empacotar seu serviço atual para ele se tornar mais atrativo digitalmente.",
                                    icon: Megaphone
                                }
                            ].map((detail, i) => (
                                <div key={i} className="flex gap-6 items-start">
                                    <div className="bg-[#D4AF37]/10 p-4 rounded-xl shrink-0">
                                        <detail.icon className="w-6 h-6 text-[#D4AF37]" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2 text-white">{detail.title}</h4>
                                        <p className="text-gray-400 leading-relaxed">{detail.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24 px-6">
                    <div className="max-w-4xl mx-auto bg-gradient-to-b from-[#141414] to-black border border-[#D4AF37]/30 rounded-[40px] p-12 text-center relative overflow-hidden text-center">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 blur-[100px] rounded-full" />

                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 relative z-10">Pare de perder tempo com <br />estrategias que não dão lucro.</h2>
                        <p className="text-gray-400 mb-10 relative z-10 max-w-xl mx-auto">
                            Receba uma análise profissional e estratégica feita para transformar seu posicionamento técnico em uma máquina de vendas premium.
                        </p>

                        <a
                            href="https://pay.kiwify.com.br/GhaKpCv" // Placeholder
                            className="inline-flex bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black font-bold py-5 px-12 rounded-xl items-center gap-2 hover:scale-[1.05] transition-all relative z-10"
                        >
                            Quero Minha Análise Profissional
                        </a>

                        <p className="mt-8 text-xs text-gray-500 uppercase tracking-widest font-bold">Investimento Único: R$ 197,00</p>
                    </div>
                </section>
            </main>

            <footer className="py-12 border-t border-white/5 text-center text-gray-500 text-sm">
                <p>&copy; 2025 Migração Digital. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}
