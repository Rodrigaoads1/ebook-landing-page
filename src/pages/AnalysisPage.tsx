import React from 'react';
import { Target, Search, BarChart3, ArrowRight, ShieldCheck, Zap, Star, Layout, Users, Megaphone, CheckCircle, XCircle, ChevronRight, MessageSquare } from 'lucide-react';
import profileHero from '../assets/rodrigo_analise_hero.png';
import profileDetail from '../assets/rodrigo_analise_perfil.png';
import profileSide from '../assets/rodrigo_analise_detalhe.png';
import profileExtra from '../assets/rodrigo_analise_extra.png';

export function AnalysisPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#D4AF37]/30 selection:text-[#D4AF37] font-sans">
            {/* Header / Nav */}
            <nav className="p-6 border-b border-white/5 bg-black/50 backdrop-blur-md sticky top-0 z-[100]">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <span className="text-xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] bg-clip-text text-transparent tracking-tighter">MIGRAÇÃO DIGITAL</span>
                    <div className="hidden md:flex items-center gap-6">
                        <span className="text-xs uppercase tracking-[0.2em] text-gray-400 font-bold">Análise Estratégica 2.0</span>
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

                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 text-center lg:text-left">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mb-8">
                                Análise Profissional de Presença Digital
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-8">
                                Não é sobre aparecer mais. <br />
                                <span className="text-[#D4AF37] italic">É sobre saber exatamente onde você está perdendo dinheiro.</span>
                            </h1>

                            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                                Se você já tentou usar Instagram ou Google para atrair clientes e sentiu que algo não encaixa, provavelmente o problema não é esforço. <br />
                                <strong className="text-white font-semibold italic">É falta de leitura estratégica.</strong>
                            </p>

                            <div className="flex flex-col items-center lg:items-start gap-4">
                                <a
                                    href="https://pay.kiwify.com.br/O86KbBl"
                                    className="bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-2 hover:scale-[1.05] active:scale-[0.98] transition-all duration-200 shadow-xl shadow-[#D4AF37]/20 text-lg group"
                                >
                                    Quero minha Análise Profissional — R$ 197
                                    <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                </a>
                                <p className="text-sm text-gray-500 font-medium tracking-wide">
                                    Análise 100% Personalizada • Entrega em 48h • Vagas Limitadas
                                </p>
                            </div>
                        </div>

                        {/* Image: Hero Photo */}
                        <div className="relative z-10 flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-md">
                                <div className="absolute -inset-4 bg-[#D4AF37]/20 blur-[100px] rounded-full opacity-50" />
                                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(212,175,55,0.15)] group">
                                    <img
                                        src={profileHero}
                                        alt="Rodrigo Rodrigues"
                                        className="w-full h-auto object-cover transition-all duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/60 backdrop-blur-md rounded-xl border border-white/5">
                                        <p className="text-[#D4AF37] font-bold text-base leading-tight">Rodrigo Rodrigues</p>
                                        <p className="text-gray-400 text-xs">Estrategista Digital</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section: O que quase ninguém te conta */}
                <section className="py-24 bg-[#0d0d0d] px-6 border-y border-white/5">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-block px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-bold uppercase tracking-widest rounded mb-4">
                                O que quase ninguém te conta
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">A maioria dos profissionais está:</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                "Fazendo marketing sem entender o jogo",
                                "Tomando decisões baseadas em opinião",
                                "Copiando estratégias de contextos errados",
                                "Achando que o problema é alcance (é estrutura)"
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-4 p-6 bg-[#141414] border border-white/5 rounded-2xl group hover:border-[#D4AF37]/30 transition-all">
                                    <CheckCircle className="w-5 h-5 text-[#D4AF37] shrink-0" />
                                    <p className="text-gray-300 font-medium">{text}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 p-10 bg-gradient-to-br from-[#141414] to-black border border-[#D4AF37]/20 rounded-3xl text-center shadow-2xl">
                            <p className="text-xl md:text-2xl text-white font-serif italic leading-relaxed">
                                "Resultado? Trabalham muito. Vendem pouco. E não sabem exatamente o porquê."
                            </p>
                        </div>
                    </div>
                </section>

                {/* Sophisticated Positioning Section (With Profile Photo) */}
                <section className="py-32 px-6 bg-[#0a0a0a]">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative order-2 lg:order-1">
                            <div className="absolute -inset-10 bg-[#D4AF37]/5 blur-[120px] rounded-full" />
                            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                                <img
                                    src={profileDetail}
                                    alt="Análise Detalhada"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-10 leading-relaxed">
                                Essa análise não é básica. <br />
                                <span className="text-[#D4AF37]">E não é para curiosos.</span>
                            </h2>
                            <div className="space-y-8 text-gray-400 text-lg leading-relaxed font-light">
                                <p>Ela existe para quem quer entender o que está acontecendo por trás dos números, da aparência do perfil e da sensação de “estar fazendo algo”.</p>
                                <div className="p-8 bg-[#D4AF37]/5 border-l-4 border-[#D4AF37] rounded-r-2xl">
                                    <p className="text-white text-xl font-bold italic leading-relaxed font-serif">
                                        "Aqui você não recebe dicas genéricas. Você recebe clareza estratégica."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Extra Image Section (The New One) */}
                <section className="py-24 bg-[#0d0d0d] px-6">
                    <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
                        <div className="max-w-3xl mb-16">
                            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Clareza gera Lucro.</h2>
                            <p className="text-gray-400 text-lg leading-relaxed font-light italic">
                                Quando você entende o jogo, a venda deixa de ser uma batalha e passa a ser um processo natural.
                            </p>
                        </div>
                        <div className="relative w-full max-w-4xl rounded-[40px] overflow-hidden border border-white/10 shadow-3xl">
                            <img
                                src={profileExtra}
                                alt="Estratégia e Clareza"
                                className="w-full h-auto grayscale-[30%] brightness-90"
                            />
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
                                { t: "Por que sua presença digital não gera intenção real de compra", i: Target },
                                { t: "Onde sua comunicação perde força sem você perceber", i: MessageSquare },
                                { t: "Quais sinais o mercado te dá (e você ignora)", i: Search },
                                { t: "Se o problema é visibilidade, posicionamento ou conversão", i: BarChart3 },
                                { t: "Qual canal está sendo mal utilizado no seu caso", i: Megaphone },
                                { t: "Onde está o 'furo' real do seu balde de faturamento", i: Layout }
                            ].map((item, i) => (
                                <div key={i} className="p-8 border border-white/5 bg-black/40 hover:bg-white/[0.03] transition-all hover:border-[#D4AF37]/50 rounded-2xl group">
                                    <item.i className="w-8 h-8 text-[#D4AF37] mb-6 opacity-30 group-hover:opacity-100 transition-opacity" />
                                    <p className="text-gray-300 leading-relaxed font-medium">{item.t}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* "The Problem Isn't Where They Thought" Section */}
                <section className="py-32 px-6 bg-gradient-to-b from-black to-[#0a0a0a]">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
                            <div>
                                <blockquote className="text-3xl md:text-5xl font-serif italic mb-12 text-[#D4AF37] leading-tight">
                                    “Muitos profissionais descobrem que o problema não está onde eles achavam.”
                                </blockquote>
                                <p className="text-gray-400 text-xl leading-relaxed mb-12 font-light">
                                    Isso muda tudo. Quando você entende onde estancar o vazamento, a venda deixa de ser pesada e a previsibilidade começa a aparecer.
                                </p>

                                <div className="grid grid-cols-1 gap-8 text-left border-t border-white/10 pt-16">
                                    <div className="flex items-center gap-6">
                                        <span className="text-4xl font-serif font-bold text-white/10 tracking-tighter">01</span>
                                        <div>
                                            <h4 className="text-white font-bold uppercase tracking-widest text-xs">O QUE CORRIGIR</h4>
                                            <p className="text-gray-500 text-sm">Ações cirúrgicas no que realmente impede a venda.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <span className="text-4xl font-serif font-bold text-white/10 tracking-tighter">02</span>
                                        <div>
                                            <h4 className="text-white font-bold uppercase tracking-widest text-xs">O QUE PARAR</h4>
                                            <p className="text-gray-500 text-sm">Eliminar o desperdício de energia e dinheiro.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                                <img
                                    src={profileSide}
                                    alt="Leitura Estratégica"
                                    className="w-full h-auto rounded-[80px_20px_80px_20px] grayscale filter brightness-75"
                                />
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                            <span className="flex items-center gap-2 text-gray-500 font-bold text-xs uppercase tracking-widest"><Zap className="w-4 h-4 text-[#D4AF37]" /> Sem exposição forçada</span>
                            <span className="flex items-center gap-2 text-gray-500 font-bold text-xs uppercase tracking-widest"><Zap className="w-4 h-4 text-[#D3AF37]" /> Sem teatrinho</span>
                            <span className="flex items-center gap-2 text-gray-500 font-bold text-xs uppercase tracking-widest"><Zap className="w-4 h-4 text-[#D4AF37]" /> Sem fórmulas mágicas</span>
                        </div>
                    </div>
                </section>

                {/* Target Audience */}
                <section className="py-24 px-6 border-b border-white/5">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div className="p-10 rounded-[32px] bg-white/[0.02] border border-white/5">
                            <h3 className="text-2xl font-serif font-bold mb-8 flex items-center gap-3">
                                <CheckCircle className="text-green-500 w-6 h-6" /> Para quem é
                            </h3>
                            <ul className="space-y-4">
                                {["Profissionais liberais", "Prestadores de serviço", "Especialistas qualificados", "Quem busca controle e menos desgaste"].map((item, i) => (
                                    <li key={i} className="text-gray-400 font-light flex items-center gap-3">
                                        <div className="w-1 h-1 bg-[#D4AF37] rounded-full" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="p-10 rounded-[32px] bg-white/[0.01] border border-white/5 opacity-60">
                            <h3 className="text-2xl font-serif font-bold mb-8 flex items-center gap-3 text-gray-400">
                                <XCircle className="text-red-900 w-6 h-6" /> Não é para
                            </h3>
                            <ul className="space-y-4">
                                {["Quem quer 'truque rápido'", "Quem busca likes e fama", "Quem não quer enxergar a verdade", "Fórmulas prontas de gurus"].map((item, i) => (
                                    <li key={i} className="text-gray-600 font-light flex items-center gap-3 line-through">
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
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Como funciona a entrega</h2>
                        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto font-light">
                            A análise é feita de forma direta, personalizada e estratégica. Sem relatórios confusos ou linguagem técnica desnecessária.
                        </p>

                        <div className="bg-[#141414] border border-[#D4AF37]/30 rounded-[40px] p-12 md:p-20 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 blur-[100px] rounded-full" />

                            <h3 className="text-4xl md:text-5xl font-serif font-bold mb-4">Investimento: R$ 197,00</h3>
                            <p className="text-gray-500 uppercase tracking-widest text-xs font-bold mb-10">Um valor pequeno perto do que você perde insistindo no caminho errado.</p>

                            <a
                                href="https://pay.kiwify.com.br/O86KbBl"
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

                        <p className="mt-16 text-gray-500 font-serif italic text-lg opacity-80">
                            "Se você prefere clareza a achismo, esta análise foi feita para você."
                        </p>
                    </div>
                </section>
            </main>

            <footer className="py-20 border-t border-white/5 text-center">
                <p className="text-gray-600 text-xs uppercase tracking-[0.3em] font-medium">&copy; 2025 Migração Digital • Estratégia e Posicionamento</p>
            </footer>
        </div>
    );
}
