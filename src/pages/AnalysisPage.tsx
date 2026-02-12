
import React from 'react';
import { Target, Search, BarChart3, ArrowRight, ShieldCheck, Zap, Star, Layout, Users, Megaphone, CheckCircle, XCircle, ChevronRight, HelpCircle } from 'lucide-react';
import profileHero from '../assets/rodrigo_analise_extra.png';
import profileDetail from '../assets/rodrigo_analise_perfil.png';
import { SocialProof } from '../components/SocialProof';
import { Link } from 'react-router-dom';

export function AnalysisPage() {
    return (
        <div className="min-h-screen bg-[#FAF9F6] text-[#111111] font-sans selection:bg-[#BD9F67]/20 selection:text-[#BD9F67] selection-prestige">
            {/* Header / Nav */}
            <nav className="p-8 bg-[#FAF9F6]/90 backdrop-blur-xl border-b border-[#BD9F67]/10 sticky top-0 z-[140]">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link to="/" className="text-xl font-serif font-black tracking-tighter text-[#111111] uppercase italic">M. Digital</Link>
                    <div className="hidden md:flex items-center gap-10">
                        <span className="text-[9px] uppercase tracking-[0.4em] text-gray-400 font-black">Diagnóstico Premium</span>
                        <div className="h-4 w-[1px] bg-gray-200" />
                        <span className="text-[9px] uppercase tracking-[0.4em] text-[#BD9F67] font-black italic">Vagas Limitadas</span>
                    </div>
                </div>
            </nav>

            <main>
                {/* Hero Section: Editorial Impact */}
                <section className="pt-24 pb-32 px-6 md:px-20 relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-[#BD9F67]/5 blur-[120px] rounded-full pointer-events-none" />

                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 items-center relative z-10">
                        <div className="lg:col-span-7">
                            <span className="inline-block px-6 py-2 bg-[#BD9F67]/5 border border-[#BD9F67]/20 text-[#BD9F67] text-[10px] font-black uppercase tracking-[0.5em] mb-12">
                                GPS DE DOMÍNIO DIGITAL
                            </span>

                            <h1 className="text-5xl md:text-[7rem] font-serif font-bold leading-[0.9] tracking-tighter mb-12">
                                O Ebook é o mapa. <br />
                                <span className="text-[#BD9F67] italic underline decoration-[#BD9F67]/20 underline-offset-8">A Análise é o seu GPS.</span>
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-2xl leading-relaxed italic font-light">
                                Se você já identificou os sinais, agora precisa do diagnóstico. Uma leitura cirúrgica da sua estrutura atual para saber exatamente por onde o faturamento está escorrendo.
                            </p>

                            <div className="flex flex-col items-start gap-8">
                                <a
                                    href="https://pay.kiwify.com.br/O86KbBl"
                                    className="group bg-[#111111] text-white py-10 px-16 text-2xl font-serif font-bold hover:bg-[#BD9F67] hover:text-black transition-all shadow-3xl flex items-center gap-4"
                                >
                                    Garantir Diagnóstico <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                                </a>
                                <p className="text-[10px] text-gray-400 font-black tracking-[0.5em] uppercase border-l-2 border-[#BD9F67] pl-6 py-2">
                                    Resultado em PDF + Call Estratégica Exclusive
                                </p>
                            </div>
                        </div>

                        {/* Image: Boutique Frame */}
                        <div className="lg:col-span-5 relative mt-20 lg:mt-0">
                            <div className="relative group">
                                <div className="absolute -inset-10 bg-[#BD9F67]/10 blur-[100px] rounded-full opacity-50 pointer-events-none" />
                                <div className="relative bg-white p-6 shadow-3xl hover:-translate-y-2 transition-transform duration-700">
                                    <img
                                        src={profileHero}
                                        alt="Rodrigo Rodrigues"
                                        className="w-full h-auto grayscale transition-all duration-1000 group-hover:grayscale-0"
                                    />
                                    <div className="mt-8 pt-8 border-t border-gray-100 flex justify-between items-end">
                                        <div>
                                            <p className="text-2xl font-serif font-bold italic">R. Rodrigues</p>
                                            <p className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-400 mt-1">Principal Strategist</p>
                                        </div>
                                        <ShieldCheck className="w-8 h-8 text-[#BD9F67] opacity-20" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* GPS vs MAP Concept: Editorial Layout */}
                <section className="py-40 bg-white border-y border-gray-100 px-6 md:px-20">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-100">
                        <div className="p-20 border-r border-gray-100 bg-[#FAF9F6]">
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300 block mb-10">The Theory</span>
                            <h3 className="text-4xl font-serif font-bold mb-8 italic">O Ebook <br />(O Mapa)</h3>
                            <p className="text-gray-400 text-lg font-light leading-relaxed italic">Mostra o território. Você descobre as dores, os sinais de alerta e entende o conceito do Sistema de Aquisição Previsível.</p>
                        </div>
                        <div className="p-20 bg-[#111111] text-white">
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#BD9F67] block mb-10">The Execution</span>
                            <h3 className="text-4xl font-serif font-bold mb-8 italic text-[#BD9F67]">A Análise <br />(O GPS)</h3>
                            <p className="text-gray-400 text-lg font-light leading-relaxed italic">Mostra a sua rota. Eu analiso o SEU negócio e digo: "O erro está aqui, a oportunidade está ali e o próximo passo é este".</p>
                        </div>
                    </div>
                </section>

                {/* Technical Details: Magazine Spread */}
                <section className="py-60 px-6 md:px-20 bg-[#FAF9F6]">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
                        <div className="lg:col-span-12 mb-20 text-center">
                            <h2 className="text-6xl md:text-9xl font-serif font-bold leading-none tracking-tighter mb-10">O Que é <br /><span className="italic text-[#BD9F67]">Analisado?</span></h2>
                            <p className="text-gray-400 text-2xl font-light italic">Uma auditoria sigilosa e completa dos seus ativos digitais.</p>
                        </div>

                        <div className="lg:col-span-6 space-y-20">
                            {[
                                { t: "Análise de Autoridade Percebida", d: "Como o seu cliente High-Ticket te enxerga nos primeiros 3 segundos." },
                                { t: "Identificação do Ponto de Fuga", d: "Onde o lucro está escorrendo: Atração fraca, Converção amadora ou Venda sem script." },
                                { t: "Plano de Estancamento", d: "Três mudanças prioritárias que você deve fazer nas próximas 24 horas." },
                                { t: "Call de Alinhamento Exclusive", d: "Agendamento de 30 minutos para definirmos a rota de escala personalizada." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-12 group">
                                    <div className="text-4xl font-serif font-black text-gray-200 group-hover:text-[#BD9F67] transition-all">0{i + 1}</div>
                                    <div>
                                        <h4 className="text-2xl font-bold uppercase tracking-tighter mb-4">{item.t}</h4>
                                        <p className="text-gray-400 text-lg font-light leading-relaxed">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="lg:col-span-6 relative">
                            <div className="bg-white p-6 shadow-3xl rotate-2">
                                <img src={profileDetail} alt="Detalhe Estratégico" className="w-full h-auto grayscale" />
                                <div className="mt-8 text-[10px] font-black uppercase tracking-[0.5em] text-gray-300">Confidencial • Audit Report</div>
                            </div>
                        </div>
                    </div>
                </section>

                <SocialProof />

                {/* Final CTA: Boutique Selection */}
                <section className="py-60 px-6 md:px-20 bg-white">
                    <div className="max-w-5xl mx-auto text-center">
                        <span className="inline-block px-8 py-3 bg-[#BD9F67]/10 text-[#BD9F67] text-[10px] font-black uppercase tracking-[1em] mb-12">
                            INVESTIMENTO ÚNICO
                        </span>
                        <h2 className="text-6xl md:text-[8rem] font-serif font-bold mb-16 leading-[0.85] tracking-tighter italic">
                            Saiba o que falta <br />no seu <span className="text-[#BD9F67]">Funil.</span>
                        </h2>

                        <div className="bg-[#111111] p-20 md:p-32 shadow-3xl text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-[#BD9F67] text-black text-[12px] font-black px-10 py-4 uppercase tracking-widest -rotate-45 translate-x-12 translate-y-4">
                                Vagas Limitadas
                            </div>
                            <p className="text-gray-400 text-2xl mb-20 font-light italic">
                                Investimento de <span className="text-white font-bold text-5xl not-italic ml-4">R$ 197</span> <br />
                                <span className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-600 block mt-12 bg-gray-900/50 py-4 inline-block px-8 rounded-full">Menos de R$ 7,00 por dia para ter clareza total.</span>
                            </p>
                            <a
                                href="https://pay.kiwify.com.br/O86KbBl"
                                className="bg-[#BD9F67] text-black py-12 px-24 text-3xl font-serif font-bold hover:bg-white transition-all shadow-3xl inline-flex items-center gap-6"
                            >
                                <Target className="w-10 h-10" />
                                Solicitar Análise GPS
                            </a>
                        </div>
                    </div>
                </section>

                {/* FAQ: Boutique Layout */}
                <section className="py-40 px-6 md:px-20 bg-[#FAF9F6] border-t border-gray-100">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex justify-between items-end mb-24 pb-12 border-b border-gray-200">
                            <h2 className="text-5xl font-serif font-bold italic">Dúvidas Frequentes</h2>
                            <span className="text-[10px] font-black tracking-widest text-gray-400">Section V — Concierge</span>
                        </div>
                        <div className="space-y-12">
                            {[
                                { q: "Como é entregue a análise?", a: "Você preenche um formulário técnico detalhado. Eu analiso sua estrutura e envio um PDF estratégico com o diagnóstico. Logo após, agendamos sua call de 30 min." },
                                { q: "Preciso já ter um site ou anúncio?", a: "Não. Se você está começando do zero, a análise será sobre o seu posicionamento de mercado e qual a melhor estrutura para sua entrada ser lucrativa." },
                                { q: "Em quanto tempo recebo?", a: "A entrega do relatório ocorre em até 48h úteis após o preenchimento do formulário técnico." },
                                { q: "Qual a diferença para a consultoria?", a: "A Análise é um diagnóstico cirúrgico pontual. É o GPS. A implementação completa do sistema é o próximo passo da nossa jornada." }
                            ].map((item, i) => (
                                <div key={i} className="group pb-12 border-b border-gray-100 last:border-0">
                                    <h4 className="text-2xl font-bold uppercase tracking-tighter mb-6 flex items-center gap-6 group-hover:text-[#BD9F67] transition-all">
                                        <div className="w-2 h-2 bg-[#BD9F67] rounded-full" />
                                        {item.q}
                                    </h4>
                                    <p className="text-gray-400 text-lg font-light leading-relaxed italic pl-8">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <footer className="py-20 px-6 md:px-20 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-20">
                    <Link to="/" className="text-3xl font-serif font-black tracking-tighter text-[#111111] uppercase italic">M. Digital</Link>
                    <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.8em] font-black">&copy; 2026 Intelligence Bureau</p>
                </div>
            </footer>
        </div>
    );
}
