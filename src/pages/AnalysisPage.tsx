import React from 'react';
import { Target, Search, BarChart3, ArrowRight, ShieldCheck, Zap, Star, Layout, Users, Megaphone, CheckCircle, XCircle, ChevronRight } from 'lucide-react';

export function AnalysisPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#D4AF37]/30 selection:text-[#D4AF37] font-sans">
            {/* Header / Nav */}
            <nav className="p-6 border-b border-white/5 bg-black/50 backdrop-blur-md sticky top-0 z-[100]">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <span className="text-xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] bg-clip-text text-transparent tracking-tighter">MIGRAÇÃO DIGITAL</span>
                    <div className="hidden md:flex items-center gap-6">
                        <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold">Análise Estratégica 2.0</span>
                        <div className="h-4 w-[1px] bg-white/10" />
                        <span className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-bold animate-pulse">Vagas Limitadas</span>
                    </div>
                </div>
            </nav>

            <main>
                {/* Hero Section */}
                <section className="pt-20 pb-24 px-6 relative overflow-hidden">
                    {/* Background Glows */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mb-8">
                            Análise Profissional de Presença Digital
                        </div>

                        <h1 className="text-4xl md:text-7xl font-serif font-bold leading-[1.1] mb-8">
                            Não é sobre aparecer mais. <br />
                            <span className="text-[#D4AF37] italic">É sobre saber onde você está perdendo dinheiro.</span>
                        </h1>

                        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                            Se você já tentou usar Instagram ou Google para atrair clientes e sentiu que algo não encaixa, provavelmente o problema não é esforço. <br />
                            <strong className="text-white font-semibold">É falta de leitura estratégica.</strong>
                        </p>

                        <div className="flex flex-col items-center gap-6">
                            <a
                                href="https://pay.kiwify.com.br/GhaKpCv"
                                className="w-full md:w-auto bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black font-bold py-6 px-12 rounded-full flex items-center justify-center gap-3 hover:scale-[1.05] active:scale-[0.98] transition-all duration-300 shadow-[0_20px_50px_rgba(212,175,55,0.3)] text-xl group"
                            >
                                Quero minha Análise Profissional
                                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <p className="text-gray-500 text-sm font-medium uppercase tracking-widest">Investimento Único: R$ 197,00</p>
                        </div>
                    </div>
                </section>

                {/* The "Nearly No One Tells You" Section */}
                <section className="py-24 bg-[#0d0d0d] px-6 border-y border-white/5">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">O que quase ninguém te conta</h2>
                            <p className="text-gray-500 text-lg italic">A maioria dos profissionais está:</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                "Fazendo marketing sem entender o jogo",
                                "Tomando decisões baseadas em opinião",
                                "Copiando estratégias de contextos errados",
                                "Achando que o problema é alcance (é estrutura)"
                            ].map((text, i) => (
                                <div key={i} className="flex items-start gap-4 p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                                    <div className="mt-1 w-2 h-2 bg-[#D4AF37] rounded-full shrink-0" />
                                    <p className="text-gray-300 text-lg">{text}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 p-8 bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-3xl text-center">
                            <p className="text-xl md:text-2xl text-white font-serif italic">
                                "Resultado? Trabalham muito. Vendem pouco. E não sabem exatamente o porquê."
                            </p>
                        </div>
                    </div>
                </section>

                {/* Sophisticated Positioning Section */}
                <section className="py-32 px-6">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10 leading-relaxed">
                            Essa análise não é básica. <br />
                            E não é para curiosos.
                        </h2>
                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                            <p>Ela existe para quem quer entender o que está acontecendo por trás dos números, da aparência do perfil e da sensação de “estar fazendo algo”.</p>
                            <p className="text-white text-xl font-bold italic">Aqui você não recebe dicas genéricas. Você recebe clareza estratégica.</p>
                        </div>
                    </div>
                </section>

                {/* Discovery Section */}
                <section className="py-24 bg-white/[0.01] px-6">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">O que você vai descobrir</h2>
                            <p className="text-gray-500 uppercase tracking-widest text-sm font-bold">(Sem eu entregar o método antes da hora)</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                "Por que sua presença digital não gera intenção real de compra",
                                "Onde sua comunicação perde força sem você perceber",
                                "Quais sinais o mercado te dá (e você ignora)",
                                "Se o problema é visibilidade, posicionamento ou conversão",
                                "Qual canal está sendo mal utilizado no seu caso",
                                "Onde está o 'furo' real do seu balde de faturamento"
                            ].map((item, i) => (
                                <div key={i} className="p-8 border-l border-[#D4AF37]/30 bg-black/40 hover:bg-white/[0.03] transition-colors">
                                    <p className="text-gray-300 leading-relaxed">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* "The Problem Isn't Where They Thought" Section */}
                <section className="py-32 px-6 bg-gradient-to-b from-black to-[#0a0a0a]">
                    <div className="max-w-4xl mx-auto text-center">
                        <blockquote className="text-2xl md:text-4xl font-serif italic mb-16 text-[#D4AF37]">
                            “Muitos profissionais descobrem que o problema não está onde eles achavam.”
                        </blockquote>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left border-t border-white/10 pt-16">
                            <div>
                                <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs opacity-50">01. O QUE CORRIGIR</h4>
                                <p className="text-gray-400 text-sm">Ações cirúrgicas no que realmente impede a venda.</p>
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs opacity-50">02. O QUE PARAR</h4>
                                <p className="text-gray-400 text-sm">Eliminar o desperdício de energia e dinheiro.</p>
                            </div>
                            <div>
                                <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs opacity-50">03. O QUE CONSTRUIR</h4>
                                <p className="text-gray-400 text-sm">A fundação necessária antes de escalar.</p>
                            </div>
                        </div>

                        <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16">
                            <span className="flex items-center gap-2 text-gray-500 font-bold text-xs uppercase tracking-widest"><Zap className="w-4 h-4 text-[#D4AF37]" /> Sem exposição forçada</span>
                            <span className="flex items-center gap-2 text-gray-500 font-bold text-xs uppercase tracking-widest"><Zap className="w-4 h-4 text-[#D4AF37]" /> Sem teatrinho</span>
                            <span className="flex items-center gap-2 text-gray-500 font-bold text-xs uppercase tracking-widest"><Zap className="w-4 h-4 text-[#D4AF37]" /> Sem fórmulas mágicas</span>
                        </div>
                    </div>
                </section>

                {/* Target Audience (Check/X) */}
                <section className="py-24 px-6 border-b border-white/5">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div className="p-10 rounded-[32px] bg-white/[0.02] border border-white/5">
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                <CheckCircle className="text-green-500 w-6 h-6" /> Para quem é
                            </h3>
                            <ul className="space-y-4">
                                {["Profissionais liberais", "Prestadores de serviço", "Especialistas qualificados", "Quem busca controle e menos desgaste"].map((item, i) => (
                                    <li key={i} className="text-gray-400 flex items-center gap-3">
                                        <div className="w-1 h-1 bg-[#D4AF37] rounded-full" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-10 rounded-[32px] bg-white/[0.01] border border-white/5 opacity-60">
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-gray-400">
                                <XCircle className="text-red-900 w-6 h-6" /> Não é para
                            </h3>
                            <ul className="space-y-4">
                                {["Quem quer 'truque rápido'", "Quem busca likes e fama", "Quem não quer enxergar a verdade", "Fórmulas prontas de gurus"].map((item, i) => (
                                    <li key={i} className="text-gray-600 flex items-center gap-3 line-through">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Delivery & Pricing */}
                <section className="py-32 px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-serif font-bold mb-8 text-center">Como funciona a entrega</h2>
                        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
                            A análise é feita de forma direta, personalizada e estratégica. Sem relatórios confusos ou linguagem técnica desnecessária.
                        </p>

                        <div className="bg-[#141414] border border-[#D4AF37]/30 rounded-[40px] p-12 md:p-20 relative overflow-hidden">
                            {/* Decorative flare */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 blur-[100px] rounded-full" />

                            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-4">Investimento: R$ 197,00</h3>
                            <p className="text-gray-500 uppercase tracking-widest text-xs font-bold mb-10">Um valor pequeno perto do que você perde insistindo no caminho errado.</p>

                            <a
                                href="https://pay.kiwify.com.br/GhaKpCv"
                                className="inline-flex bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black font-bold py-6 px-16 rounded-full items-center gap-3 hover:scale-[1.05] transition-all shadow-2xl shadow-[#D4AF37]/20 text-lg group"
                            >
                                Quero minha Análise Profissional
                                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </a>

                            <div className="mt-12 flex items-center justify-center gap-6 text-gray-500 text-xs font-bold">
                                <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#D4AF37]" /> PRIVACIDADE GARANTIDA</span>
                                <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#D4AF37]" /> ANÁLISE CUSTOMIZADA</span>
                            </div>
                        </div>

                        <p className="mt-16 text-gray-500 font-serif italic text-lg">
                            "Se você prefere clareza a achismo, esta análise foi feita para você."
                        </p>
                    </div>
                </section>
            </main>

            <footer className="py-20 border-t border-white/5 text-center">
                <p className="text-gray-600 text-xs uppercase tracking-[0.3em]">&copy; 2025 Migração Digital • Estratégia e Posicionamento</p>
            </footer>
        </div>
    );
}
