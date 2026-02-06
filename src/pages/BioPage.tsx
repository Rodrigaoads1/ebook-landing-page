import React from 'react';
import { Youtube, Star, Instagram, MessageCircle, ExternalLink, Download, Target, ShieldCheck, ArrowUpRight } from 'lucide-react';
import profileImg from '../assets/rodrigo_analise_hero.png';

export function BioPage() {
    const links = [
        {
            title: "Análise Profissional (R$ 197)",
            subtitle: "Diagnóstico individual estratégico",
            url: "/analise-profissional-de-presenca-digital-02",
            icon: Target,
            highlight: true,
            label: "MAIS PROCURADO"
        },
        {
            title: "Checklist: 7 Sinais (R$ 19,90)",
            subtitle: "Estanque a perda de faturamento agora",
            url: "/ebook",
            icon: Download,
            highlight: false
        },
        {
            title: "Conteúdo VIP no YouTube",
            subtitle: "Aulas semanais de posicionamento",
            url: "https://www.youtube.com/@Rodrigorodrigues-md",
            icon: Youtube,
            highlight: false
        },
        {
            title: "Prova Social & Resultados",
            subtitle: "Veja o que dizem nossos clientes",
            url: "https://www.google.com/search?q=Ag%C3%AAncia+Migra%C3%A7%C3%A3o+Digital#lrd=0x94ce59560dc7d8f3:0x39d1d1f2f2d1d1f2,1",
            icon: Star,
            highlight: false
        }
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center py-16 px-6 relative overflow-hidden font-sans">
            {/* dynamic background effects */}
            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[150%] h-[500px] bg-[#D4AF37]/5 blur-[120px] rounded-full animate-pulse-slow pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[400px] bg-[#D4AF37]/3 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-[420px] w-full relative z-10 flex flex-col items-center">

                {/* Profile Section with sophisticated ring */}
                <div className="relative mb-8 group">
                    <div className="absolute -inset-1 bg-gradient-to-tr from-[#D4AF37] to-[#F4D03F] rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
                    <div className="relative w-32 h-32 rounded-full border border-white/10 p-1.5 bg-[#0a0a0a]">
                        <img
                            src={profileImg}
                            alt="Rodrigo Rodrigues"
                            className="w-full h-full object-cover rounded-full grayscale-[10%] brightness-110"
                        />
                        <div className="absolute bottom-1 right-1 bg-blue-500 rounded-full p-1 border-2 border-[#0a0a0a] shadow-lg">
                            <ShieldCheck className="w-4 h-4 text-white fill-white" />
                        </div>
                    </div>
                </div>

                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <h1 className="text-3xl font-serif font-bold tracking-tight">Rodrigo Rodrigues</h1>
                    </div>
                    <p className="text-[#D4AF37] text-xs uppercase tracking-[0.4em] font-bold mb-6">Estrategista de Posicionamento</p>

                    {/* Social Hub */}
                    <div className="flex gap-4 justify-center">
                        {[
                            { Icon: Youtube, href: "https://www.youtube.com/@Rodrigorodrigues-md" },
                            { Icon: Instagram, href: "#" },
                            { Icon: MessageCircle, href: "#" }
                        ].map(({ Icon, href }, i) => (
                            <a
                                key={i}
                                href={href}
                                className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/5 text-white/70 hover:text-[#D4AF37] transition-all duration-300 group"
                            >
                                <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Glassmorphism Link Stack */}
                <div className="w-full space-y-5">
                    {links.map((link, idx) => (
                        <a
                            key={idx}
                            href={link.url}
                            target={link.url.startsWith('http') ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className={`
                                relative group w-full flex items-center p-5 rounded-[24px] border transition-all duration-500 overflow-hidden
                                ${link.highlight
                                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] border-transparent text-black shadow-[0_15px_40px_rgba(212,175,55,0.25)] hover:shadow-[0_20px_50px_rgba(212,175,55,0.4)] hover:-translate-y-1'
                                    : 'bg-[#121212]/60 backdrop-blur-xl border-white/5 hover:border-[#D4AF37]/30 text-white hover:bg-[#181818]'
                                }
                            `}
                        >
                            {/* Inner Glow/Shine */}
                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                            {link.label && (
                                <span className="absolute top-0 right-6 -translate-y-1/2 bg-black text-[#D4AF37] text-[10px] font-black px-3 py-1 rounded-full border border-[#D4AF37]/30 tracking-widest">
                                    {link.label}
                                </span>
                            )}

                            <div className={`
                                w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-inner
                                ${link.highlight ? 'bg-black/10' : 'bg-white/5'}
                            `}>
                                <link.icon className={`w-7 h-7 ${link.highlight ? 'text-black' : 'text-[#D4AF37]'}`} />
                            </div>

                            <div className="ml-5 flex-grow">
                                <h3 className={`font-bold text-lg leading-tight ${link.highlight ? 'text-black' : 'text-white'}`}>{link.title}</h3>
                                <p className={`text-xs mt-0.5 tracking-wide ${link.highlight ? 'text-black/60' : 'text-gray-400 font-medium'}`}>{link.subtitle}</p>
                            </div>

                            <div className={`mr-1 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${link.highlight ? 'text-black' : 'text-gray-600'}`}>
                                <ArrowUpRight className="w-5 h-5" />
                            </div>
                        </a>
                    ))}
                </div>

                {/* Bottom Trust Badge */}
                <div className="mt-16 flex flex-col items-center gap-6">
                    <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-6 h-6 rounded-full border-2 border-[#0a0a0a] bg-gray-800" />
                            ))}
                        </div>
                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">+500 Diagnósticos Realizados</p>
                    </div>

                    <div className="text-center opacity-40 hover:opacity-100 transition-opacity">
                        <p className="text-gray-500 text-[10px] uppercase tracking-[0.4em] font-bold mb-1">Estrategia e Tecnologia</p>
                        <h2 className="text-xs font-black bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] bg-clip-text text-transparent">MIGRAÇÃO DIGITAL</h2>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.4; transform: translate(-50%, 0) scale(1); }
                    50% { opacity: 0.6; transform: translate(-50%, 20px) scale(1.05); }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 8s ease-in-out infinite;
                }
                body {
                    background-color: #050505;
                }
            `}</style>
        </div>
    );
}
