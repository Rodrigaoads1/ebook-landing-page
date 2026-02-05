import React from 'react';
import { Youtube, Star, ArrowRight, Instagram, MessageCircle, ExternalLink, Download, Target, Play } from 'lucide-react';
import profileImg from '../assets/rodrigo_analise_hero.png';

export function BioPage() {
    const links = [
        {
            title: "Checklist: 7 Sinais (R$ 19,90)",
            subtitle: "Identifique onde você está perdendo dinheiro",
            url: "/ebook",
            icon: Download,
            highlight: false
        },
        {
            title: "Análise Profissional (R$ 197)",
            subtitle: "Diagnóstico individual da sua presença digital",
            url: "/analise-profissional-de-presenca-digital-02",
            icon: Target,
            highlight: true
        },
        {
            title: "Meu Canal no YouTube",
            subtitle: "Conteúdo estratégico semanal gratuito",
            url: "https://www.youtube.com/@Rodrigorodrigues-md",
            icon: Youtube,
            highlight: false
        },
        {
            title: "O que dizem os clientes",
            subtitle: "Avaliações no Google (Agência Migração Digital)",
            url: "https://www.google.com/search?q=Ag%C3%AAncia+Migra%C3%A7%C3%A3o+Digital#lrd=0x94ce59560dc7d8f3:0x39d1d1f2f2d1d1f2,1",
            icon: Star,
            highlight: false
        }
    ];

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center py-12 px-6 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-xl h-96 bg-[#D4AF37]/5 blur-[100px] rounded-full" />

            <div className="max-w-md w-full relative z-10 flex flex-col items-center">
                {/* Profile Header */}
                <div className="relative mb-6">
                    <div className="absolute inset-0 bg-[#D4AF37]/20 blur-2xl rounded-full" />
                    <div className="relative w-32 h-32 rounded-full border-2 border-[#D4AF37]/30 p-1 overflow-hidden">
                        <img
                            src={profileImg}
                            alt="Rodrigo Rodrigues"
                            className="w-full h-full object-cover rounded-full grayscale-[20%]"
                        />
                    </div>
                </div>

                <div className="text-center mb-10">
                    <h1 className="text-2xl font-serif font-bold mb-2">Rodrigo Rodrigues</h1>
                    <p className="text-gray-400 text-sm tracking-widest uppercase font-medium">Estrategista Digital</p>
                    <div className="flex gap-4 mt-4 justify-center">
                        <a href="https://www.youtube.com/@Rodrigorodrigues-md" className="text-gray-500 hover:text-[#D4AF37] transition-colors"><Youtube className="w-5 h-5" /></a>
                        <a href="#" className="text-gray-500 hover:text-[#D4AF37] transition-colors"><Instagram className="w-5 h-5" /></a>
                        <a href="#" className="text-gray-500 hover:text-[#D4AF37] transition-colors"><MessageCircle className="w-5 h-5" /></a>
                    </div>
                </div>

                {/* Links Stack */}
                <div className="w-full space-y-4">
                    {links.map((link, idx) => (
                        <a
                            key={idx}
                            href={link.url}
                            target={link.url.startsWith('http') ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className={`
                                group w-full flex items-center p-4 rounded-2xl border transition-all duration-300
                                ${link.highlight
                                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#B8960C] border-transparent text-black shadow-xl shadow-[#D4AF37]/20 scale-[1.02]'
                                    : 'bg-[#141414] border-white/5 hover:border-[#D4AF37]/40 text-white hover:bg-[#1a1a1a]'
                                }
                            `}
                        >
                            <div className={`
                                w-12 h-12 rounded-xl flex items-center justify-center shrink-0
                                ${link.highlight ? 'bg-black/10' : 'bg-[#D4AF37]/10'}
                            `}>
                                <link.icon className={`w-6 h-6 ${link.highlight ? 'text-black' : 'text-[#D4AF37]'}`} />
                            </div>

                            <div className="ml-4 flex-grow">
                                <h3 className={`font-bold ${link.highlight ? 'text-black' : 'text-white'}`}>{link.title}</h3>
                                <p className={`text-xs ${link.highlight ? 'text-black/70' : 'text-gray-500'}`}>{link.subtitle}</p>
                            </div>

                            <ExternalLink className={`w-4 h-4 opacity-30 group-hover:opacity-100 transition-opacity ${link.highlight ? 'text-black' : 'text-white'}`} />
                        </a>
                    ))}
                </div>

                {/* Footer Brand */}
                <div className="mt-16 text-center">
                    <p className="text-gray-600 text-[10px] uppercase tracking-[0.3em] font-bold">Desenvolvido pela</p>
                    <h2 className="text-sm font-bold bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] bg-clip-text text-transparent">MIGRAÇÃO DIGITAL</h2>
                </div>
            </div>
        </div>
    );
}
