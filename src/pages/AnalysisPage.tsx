
import React from 'react';
import { Target, Search, BarChart3, ArrowRight, ShieldCheck, Zap, Star, Layout, Users, Megaphone, CheckCircle, XCircle, ChevronRight, HelpCircle } from 'lucide-react';
import profileHero from '../assets/rodrigo_analise_hero.png';
import profileDetail from '../assets/rodrigo_analise_perfil.png';
import profileSide from '../assets/rodrigo_analise_detalhe.png';
import profileExtra from '../assets/rodrigo_analise_extra.png';
import { SocialProof } from '../components/SocialProof';
import { Link } from 'react-router-dom';

export function AnalysisPage() {
    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-[#D4AF37]/30 selection:text-[#D4AF37] font-sans">
            {/* Header / Nav */}
            <nav className="p-6 border-b border-white/5 bg-black/50 backdrop-blur-md sticky top-0 z-[100]">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-3">
                        <img src="/logo.png" alt="Migração Digital" className="h-8 w-auto object-contain brightness-0 invert opacity-90" />
                        <span className="text-xl font-black bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] bg-clip-text text-transparent tracking-tighter">MIGRAÇÃO DIGITAL</span>
                    </Link>
                    <div className="hidden md:flex items-center gap-6">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-black">Diagnóstico Premium</span>
                        <div className="h-4 w-[1px] bg-white/10" />
                        <span className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF37] font-black animate-pulse">Vagas semanais limitadas</span>
                    </div>
                </div>
            </nav>

            <main>
                {/* Hero Section */}
                <section className="pt-20 pb-24 px-6 relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 text-center lg:text-left">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-xs font-black uppercase tracking-[0.2em] mb-8">
                                O GPS da sua Presença Digital
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold leading-tight mb-8">
                                O Ebook é o mapa. <br />
                                <span className="text-[#D4AF37] italic">A Análise é o seu GPS.</span>
                            </h1>

                            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                                Se você já identificou os sinais, agora precisa do diagnóstico. Uma leitura cirúrgica da sua estrutura atual para saber exatamente o que falta para a previsibilidade.
                            </p>

                            <div className="flex flex-col items-center lg:items-start gap-4">
                                <a
                                    href="https://pay.kiwify.com.br/O86KbBl"
                                    className="w-full md:w-auto bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black font-black py-5 px-10 rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.05] active:scale-[0.98] transition-all duration-200 shadow-2xl shadow-[#D4AF37]/20 text-xl group"
                                >
                                    Garantir minha Análise — R$ 197
                                    <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                </a>
                                <p className="text-sm text-gray-500 font-medium tracking-wide uppercase text-[10px]">
                                    Resultado em PDF + Call Estratégica • Entrega 48h
                                </p>
                            </div>
                        </div>

                        {/* Image: Hero Photo */}
                        <div className="relative z-10 flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-md">
                                <div className="absolute -inset-4 bg-[#D4AF37]/20 blur-[100px] rounded-full opacity-50" />
                                <div className="relative rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
                                    <img
                                        src={profileHero}
                                        alt="Rodrigo Rodrigues"
                                        className="w-full h-auto grayscale-[10%] contrast-110"
                                    />
                                    <div className="absolute bottom-6 left-6 right-6 p-5 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10">
                                        <p className="text-[#D4AF37] font-bold text-lg uppercase">Rodrigo Rodrigues</p>
                                        <p className="text-gray-400 text-xs">"Marketing sem estratégia é só barulho."</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* GPS vs MAP Concept */}
                <section className="py-24 bg-[#080808] border-y border-white/5 px-6 font-light">
                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="p-10 bg-white/5 rounded-3xl border border-white/10">
                            <h3 className="text-[#D4AF37] font-bold text-2xl mb-4">O Ebook (Mapa)</h3>
                            <p className="text-gray-400 leading-relaxed">Mostra o território. Você descobre as dores, os sinais de alerta e entende o conceito do Sistema de Aquisição Previsível.</p>
                        </div>
                        <div className="p-10 bg-[#D4AF37]/5 rounded-3xl border border-[#D4AF37]/30">
                            <h3 className="text-[#D4AF37] font-bold text-2xl mb-4">A Análise (GPS)</h3>
                            <p className="text-white leading-relaxed">Mostra a sua rota. Eu analiso o SEU negócio e digo: "O erro está aqui, a oportunidade está ali e o próximo passo é este".</p>
                        </div>
                    </div>
                </section>

                {/* Technical / Strategic Details */}
                <section className="py-32 px-6">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative">
                            <div className="relative rounded-[60px] overflow-hidden border border-white/10 shadow-3xl">
                                <img src={profileDetail} alt="Detalhe Estratégico" className="w-full h-auto grayscale-[20%]" />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">O que você recebe no seu <br /><span className="text-[#D4AF37]">Diagnóstico Personalizado:</span></h2>
                            <ul className="space-y-6">
                                {[
                                    { t: "Diagnóstico da Presença Digital", d: "Análise fria de como o seu cliente te enxerga hoje." },
                                    { t: "Identificação do Ponto Real de Perda", d: "Onde o dinheiro está escorrendo: Atração, Conversão ou Venda?" },
                                    { t: "Plano de Ação Imediata", d: "Três mudanças prioritárias para estancar a perda de faturamento." },
                                    { t: "Call Estratégica", d: "30 minutos de call para alinharmos a implementação desses ajustes." }
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-4">
                                        <CheckCircle className="w-6 h-6 text-[#D4AF37] shrink-0 mt-1" />
                                        <div>
                                            <p className="text-white font-bold">{item.t}</p>
                                            <p className="text-gray-500 text-sm font-light">{item.d}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                <SocialProof />

                {/* Final CTA */}
                <section className="py-40 px-6 bg-white/[0.01]">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-block px-4 py-2 bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-black uppercase tracking-widest rounded-full mb-8">
                            Qualificação Premium
                        </div>
                        <h2 className="text-5xl md:text-7xl font-serif font-bold mb-10 leading-tight">
                            Saiba exatamente o que <br /><span className="text-[#D4AF37]">falta no seu funil.</span>
                        </h2>

                        <div className="bg-[#111] p-12 md:p-20 border border-[#D4AF37]/30 rounded-[40px] shadow-3xl">
                            <p className="text-gray-400 text-xl mb-12 font-light">
                                Investimento único de <span className="text-white font-bold">R$ 197,00</span>. <br />
                                <span className="text-sm uppercase tracking-widest font-black text-gray-600 block mt-4">Menos de R$ 7,00 por dia para ter clareza total.</span>
                            </p>
                            <a
                                href="https://pay.kiwify.com.br/O86KbBl"
                                className="bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black font-black py-6 px-16 rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.05] transition-all text-2xl mx-auto inline-flex shadow-2xl shadow-[#D4AF37]/20 group"
                            >
                                <Target className="w-8 h-8 group-hover:scale-110 transition-transform" />
                                Solicitar minha Análise GPS
                            </a>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-32 px-6 border-t border-white/5 bg-[#030303]">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-16 underline decoration-[#D4AF37]/30 underline-offset-8">
                            <h2 className="text-3xl font-serif font-bold">Perguntas Frequentes</h2>
                        </div>
                        <div className="space-y-4">
                            {[
                                { q: "Como é entregue a análise?", a: "Você preenche um formulário técnico inicial. Eu analiso sua estrutura e envio um PDF detalhado com o diagnóstico. Logo após, agendamos sua call estratégica de 30 min." },
                                { q: "Preciso já ter um site ou anúncio rodando?", a: "Não necessariamente. Se você não tem, a análise será sobre o seu posicionamento e qual a melhor estrutura para o SEU caso começar do jeito certo." },
                                { q: "Em quanto tempo recebo?", a: "A entrega do PDF ocorre em até 48h úteis após o preenchimento do formulário técnico." },
                                { q: "Qual a diferença dessa análise para uma consultoria?", a: "A Análise é um diagnóstico pontual. É o GPS para você saber onde está e para onde ir. A implementação completa é feita no meu serviço de Estruturação de Funis (UPSELL)." }
                            ].map((item, i) => (
                                <div key={i} className="p-8 bg-white/5 rounded-2xl border border-white/5">
                                    <h4 className="flex gap-3 font-bold mb-4 text-[#D4AF37]"><HelpCircle className="w-5 h-5 shrink-0" /> {item.q}</h4>
                                    <p className="text-gray-400 font-light leading-relaxed pl-8">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <footer className="py-20 border-t border-white/5 text-center bg-black">
                <div className="flex items-center gap-2 justify-center mb-4 opacity-50">
                    <img src="/logo.png" alt="Migração Digital" className="h-6 w-auto object-contain brightness-0 invert" />
                </div>
                <p className="text-gray-700 text-[10px] font-black uppercase tracking-[0.4em]">&copy; 2026 Migração Digital • Estratégia e Posicionamento</p>
            </footer>
        </div>
    );
}
