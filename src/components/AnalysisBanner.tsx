import React from 'react';
import { Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AnalysisBanner: React.FC = () => {
    return (
        <section className="py-20 px-6 md:px-20 bg-gradient-to-br from-[#111111] to-[#1a1a1a] text-white relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#BD9F67] rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#BD9F67] rounded-full blur-3xl" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left: Content */}
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#BD9F67]/20 border border-[#BD9F67]/30 text-[#BD9F67] text-xs font-black uppercase tracking-widest rounded-full mb-8">
                            <Target className="w-4 h-4" />
                            Diagnóstico Profissional
                        </div>

                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                            Seu Instagram e Google Meu Negócio estão <span className="italic text-[#BD9F67]">te fazendo perder dinheiro?</span>
                        </h2>

                        <p className="text-gray-300 text-lg font-light leading-relaxed mb-8">
                            Descubra exatamente onde sua presença digital está falhando com nossa <strong className="text-white">Análise Profissional de Presença Digital</strong>. Um diagnóstico cirúrgico que revela os pontos de fuga no seu funil.
                        </p>

                        {/* Features */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                            {[
                                'Auditoria completa de GMB e Instagram',
                                'Identificação de pontos de perda',
                                'Plano de ação prioritário',
                                'Call estratégica de 30 min'
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 bg-[#BD9F67] rounded-full" />
                                    <span className="text-sm text-gray-400">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* Mobile CTA */}
                        <div className="lg:hidden">
                            <div className="flex items-baseline gap-3 mb-6">
                                <span className="text-5xl font-serif font-bold">R$ 197</span>
                                <span className="text-sm text-gray-400 line-through">R$ 497</span>
                            </div>
                            <Link
                                to="/analise"
                                className="inline-flex items-center gap-3 bg-[#BD9F67] text-black text-sm font-black uppercase tracking-[0.3em] py-5 px-10 hover:bg-white transition-all shadow-xl w-full justify-center"
                            >
                                Solicitar Análise GPS
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Right: Pricing Card (Desktop) */}
                    <div className="lg:col-span-5 hidden lg:block">
                        <div className="bg-white text-[#111111] p-10 border border-gray-200 shadow-2xl">
                            <div className="text-center mb-8">
                                <div className="text-sm text-gray-400 uppercase tracking-widest mb-4">Investimento</div>
                                <div className="flex items-baseline justify-center gap-3 mb-2">
                                    <span className="text-6xl font-serif font-bold">R$ 197</span>
                                </div>
                                <div className="text-sm text-gray-400 line-through">De R$ 497,00</div>
                            </div>

                            <div className="border-t border-gray-100 pt-8 mb-8">
                                <div className="text-xs text-gray-500 uppercase tracking-widest mb-4 text-center">O que você recebe:</div>
                                <ul className="space-y-3 text-sm">
                                    {[
                                        'PDF com diagnóstico completo',
                                        'Análise de concorrência',
                                        '3 ações prioritárias imediatas',
                                        'Call estratégica de alinhamento',
                                        'Entrega em até 48h úteis'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <span className="text-[#BD9F67] mt-0.5">✓</span>
                                            <span className="text-gray-600">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link
                                to="/analise"
                                className="block text-center bg-[#111111] text-white text-xs font-black uppercase tracking-[0.3em] py-5 px-8 hover:bg-[#BD9F67] hover:text-black transition-all shadow-lg"
                            >
                                Garantir Minha Análise →
                            </Link>

                            <p className="text-xs text-gray-400 text-center mt-6 uppercase tracking-widest">
                                Menos de R$ 7/dia para ter clareza total
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
