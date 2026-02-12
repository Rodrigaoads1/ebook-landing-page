
import React from 'react';
import { Youtube, Star, Instagram, MessageCircle, ExternalLink, Download, Target, ShieldCheck, ArrowRight } from 'lucide-react';
import profileImg from '../assets/profile.png';
import { SocialProof } from '../components/SocialProof';
import { Link } from 'react-router-dom';

export function BioPage() {
    const links = [
        {
            title: "Checklist Estratégico",
            subtitle: "Onde seu faturamento está escorrendo",
            url: "/ebook",
            icon: Download,
            highlight: true,
            label: "Recommended"
        },
        {
            title: "Diagnóstico GPS",
            subtitle: "Análise individual da sua estrutura",
            url: "/analise-profissional-de-presenca-digital-02",
            icon: Target,
            highlight: false,
            label: "Elite"
        },
        {
            title: "Journal: Artigos e Relatórios",
            subtitle: "Estratégias de alto nível",
            url: "/blog",
            icon: Star,
            highlight: false,
            label: "Insights"
        },
        {
            title: "Canal no YouTube",
            subtitle: "Conteúdo denso sobre previsibilidade",
            url: "https://www.youtube.com/@Rodrigorodrigues-md",
            icon: Youtube,
            highlight: false,
            label: "Learn"
        }
    ];

    return (
        <div className="min-h-screen bg-[#FAF9F6] text-[#111111] flex flex-col items-center py-20 px-6 relative overflow-hidden selection:bg-[#BD9F67]/20 selection:text-[#BD9F67] selection-prestige font-sans">
            {/* Background Texture / Subtle Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-xl h-[600px] bg-[#BD9F67]/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="max-w-md w-full relative z-10 flex flex-col items-center">
                {/* Profile Header: Boutique Style */}
                <div className="relative mb-12 group">
                    <div className="absolute inset-[-30px] bg-[#BD9F67]/5 blur-[60px] rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
                    <div className="relative w-40 h-40 bg-white p-3 shadow-3xl rotate-2 group-hover:rotate-0 transition-transform duration-700">
                        <img
                            src={profileImg}
                            alt="Rodrigo Rodrigues"
                            className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0"
                        />
                    </div>
                </div>

                <div className="text-center mb-16">
                    <h1 className="text-4xl font-serif font-bold mb-4 tracking-tighter italic">Rodrigo Rodrigues</h1>
                    <div className="w-12 h-[1px] bg-[#BD9F67] mx-auto mb-6" />
                    <p className="text-[9px] font-black tracking-[0.6em] uppercase text-gray-400 mb-8 font-black">Intelligence Bureau | Digital Strategy</p>
                    <p className="text-gray-400 text-lg font-light leading-relaxed italic border-l border-gray-100 pl-6 border-r pr-6 mx-auto">
                        "Marketing sem estratégia é só barulho."
                    </p>
                </div>

                {/* Links Stack: Editorial Cards */}
                <div className="w-full space-y-6">
                    {links.map((link, idx) => (
                        <a
                            key={idx}
                            href={link.url}
                            target={link.url.startsWith('http') ? "_blank" : "_self"}
                            rel={link.url.startsWith('http') ? "noopener noreferrer" : ""}
                            className={`
                                group w-full flex items-center p-8 transition-all duration-700 relative overflow-hidden
                                ${link.highlight
                                    ? 'bg-[#111111] text-white shadow-3xl hover:-translate-y-2'
                                    : 'bg-white border border-gray-100 hover:border-[#BD9F67]/30 text-[#111111] shadow-sm hover:shadow-2xl hover:-translate-y-1'
                                }
                            `}
                        >
                            {link.label && (
                                <span className={`absolute top-0 right-0 px-3 py-1 text-[8px] font-black uppercase tracking-widest ${link.highlight ? 'bg-[#BD9F67] text-black' : 'bg-gray-50 text-gray-300'}`}>
                                    {link.label}
                                </span>
                            )}

                            <div className={`
                                w-14 h-14 rounded-full flex items-center justify-center shrink-0 transition-all duration-500
                                ${link.highlight ? 'bg-[#BD9F67] group-hover:bg-white' : 'bg-gray-50 group-hover:bg-[#BD9F67]/10'}
                            `}>
                                <link.icon className={`w-6 h-6 ${link.highlight ? 'text-black' : 'text-[#BD9F67]'}`} />
                            </div>

                            <div className="ml-8 flex-grow text-left">
                                <h3 className="font-serif font-bold text-xl italic leading-tight">{link.title}</h3>
                                <p className={`text-[10px] mt-2 font-black uppercase tracking-widest ${link.highlight ? 'text-gray-400' : 'text-gray-300'}`}>{link.subtitle}</p>
                            </div>

                            <ArrowRight className={`w-5 h-5 opacity-0 group-hover:opacity-100 transition-all ${link.highlight ? 'text-[#BD9F67]' : 'text-[#BD9F67]'}`} />
                        </a>
                    ))}
                </div>

                {/* Social Proof Mini */}
                <div className="w-full mt-24 bg-white p-1 border border-gray-50 shadow-3xl">
                    <SocialProof />
                </div>

                {/* Footer Brand */}
                <div className="mt-32 text-center pb-20">
                    <div className="flex items-center justify-center gap-4 text-gray-300 text-[10px] font-black uppercase tracking-[0.5em]">
                        <ShieldCheck className="w-4 h-4 opacity-30" />
                        Intelligence Bureau • M. Digital 2026
                    </div>
                </div>
            </div>
        </div>
    );
}
