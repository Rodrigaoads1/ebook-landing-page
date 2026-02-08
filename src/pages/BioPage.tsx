
import React from 'react';
import { Youtube, Star, Instagram, MessageCircle, ExternalLink, Download, Target, ShieldCheck } from 'lucide-react';
import profileImg from '../assets/rodrigo_analise_hero.png';
import { SocialProof } from '../components/SocialProof';
import { Link } from 'react-router-dom';

export function BioPage() {
    const links = [
        {
            title: "Checklist Estratégico (R$ 19,90)",
            subtitle: "Identifique exatamente onde você perde dinheiro",
            url: "/ebook",
            icon: Download,
            highlight: true
        },
        {
            title: "Diagnóstico GPS (R$ 197)",
            subtitle: "Análise individual da sua estrutura atual",
            url: "/analise-profissional-de-presenca-digital-02",
            icon: Target,
            highlight: false
        },
        {
            title: "Blog Migração Digital",
            subtitle: "Estratégias de alto nível para sua empresa",
            url: "/blog",
            icon: Star,
            highlight: false
        },
        {
            title: "Canal no YouTube",
            subtitle: "Conteúdo denso sobre funis e previsibilidade",
            url: "https://www.youtube.com/@Rodrigorodrigues-md",
            icon: Youtube,
            highlight: false
        }
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center py-12 px-6 relative overflow-hidden selection:bg-[#D4AF37]/30 selection:text-[#D4AF37]">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-xl h-[500px] bg-[#D4AF37]/5 blur-[120px] rounded-full" />

            <div className="max-w-md w-full relative z-10 flex flex-col items-center">
                {/* Profile Header */}
                <div className="relative mb-8 group">
                    <div className="absolute inset-[-20px] bg-[#D4AF37]/10 blur-[50px] rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
                    <div className="relative w-36 h-36 rounded-[40px] border-2 border-white/10 p-1.5 overflow-hidden rotate-3 group-hover:rotate-0 transition-transform duration-500 bg-black shadow-2xl">
                        <img
                            src={profileImg}
                            alt="Rodrigo Rodrigues"
                            className="w-full h-full object-cover rounded-[32px] grayscale-[10%] contrast-110"
                        />
                    </div>
                </div>

                <div className="text-center mb-12">
                    <h1 className="text-3xl font-serif font-bold mb-3 tracking-tight">Rodrigo Rodrigues</h1>
                    <p className="text-[#D4AF37] text-[10px] font-black tracking-[0.4em] uppercase mb-6">Estrategista Digital | Vendas Previsíveis</p>
                    <p className="text-gray-500 text-sm font-light leading-relaxed max-w-[280px] mx-auto italic">
                        "Marketing sem estratégia é só barulho."
                    </p>

                    <div className="flex gap-6 mt-8 justify-center">
                        <a href="https://www.youtube.com/@Rodrigorodrigues-md" className="text-gray-600 hover:text-[#D4AF37] transition-all"><Youtube className="w-5 h-5" /></a>
                        <a href="https://instagram.com/migracaodigital" className="text-gray-600 hover:text-[#D4AF37] transition-all"><Instagram className="w-5 h-5" /></a>
                        <a href="https://wa.me/5511999999999" className="text-gray-600 hover:text-[#D4AF37] transition-all"><MessageCircle className="w-5 h-5" /></a>
                    </div>
                </div>

                {/* Links Stack */}
                <div className="w-full space-y-5">
                    {links.map((link, idx) => (
                        <Link
                            key={idx}
                            to={link.url.startsWith('http') ? { pathname: link.url } : link.url}
                            target={link.url.startsWith('http') ? "_blank" : "_self"}
                            rel={link.url.startsWith('http') ? "noopener noreferrer" : ""}
                            className={`
                                group w-full flex items-center p-5 rounded-[28px] border transition-all duration-500
                                ${link.highlight
                                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#B8960C] border-transparent text-black shadow-[0_15px_40px_rgba(212,175,55,0.2)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.3)] hover:scale-[1.03]'
                                    : 'bg-white/[0.03] border-white/5 hover:border-[#D4AF37]/40 text-white hover:bg-white/[0.05] hover:scale-[1.01]'
                                }
                            `}
                        >
                            <div className={`
                                w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-lg
                                ${link.highlight ? 'bg-black/10' : 'bg-black/40 border border-white/5 group-hover:border-[#D4AF37]/20'}
                            `}>
                                <link.icon className={`w-7 h-7 ${link.highlight ? 'text-black' : 'text-[#D4AF37]'}`} />
                            </div>

                            <div className="ml-5 flex-grow text-left">
                                <h3 className={`font-bold text-lg leading-tight ${link.highlight ? 'text-black' : 'text-white'}`}>{link.title}</h3>
                                <p className={`text-xs mt-1 ${link.highlight ? 'text-black/60 font-medium' : 'text-gray-600 font-light'}`}>{link.subtitle}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="w-full mt-20 bg-white/[0.02] border border-white/5 rounded-[48px] overflow-hidden shadow-3xl">
                    <SocialProof />
                </div>

                {/* Footer Brand */}
                <div className="mt-24 text-center pb-12">
                    <div className="flex items-center justify-center gap-2 text-gray-700 text-[10px] font-black uppercase tracking-[0.4em] mb-4">
                        <ShieldCheck className="w-4 h-4 text-[#D3AF37]/30" />
                        Migração Digital 2026
                    </div>
                </div>
            </div>
        </div>
    );
}
