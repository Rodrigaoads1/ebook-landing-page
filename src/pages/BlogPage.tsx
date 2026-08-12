import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Users, Zap, TrendingUp, ShieldCheck, Rss, ArrowUpRight, Clock, Calendar, User, Search, MessageCircle, ChevronRight } from 'lucide-react';
import { posts } from '../data/posts';
import { SEOHelmet } from '../components/SEOHelmet';
import { SocialProof } from '../components/SocialProof';
import { ExitIntentPopup } from '../components/ExitIntentPopup';

const categories = [
    'Todos',
    'Estratégia',
    'Funis',
    'Tráfego Pago',
    'Conversão',
    'Tecnologia'
];

export function BlogPage() {
    const [activeCategory, setActiveCategory] = useState('Todos');
    const filteredPosts = activeCategory === 'Todos'
        ? posts
        : posts.filter(post => post.category === activeCategory);

    const mainPost = posts[0];
    const secondaryPosts = posts.slice(1, 4);
    const regularPosts = filteredPosts.filter(p => p.id !== mainPost.id);

    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-[#D4AF37]/30 selection:text-[#D4AF37] font-sans overflow-x-hidden antialiased">
            <SEOHelmet
                title="Blog & Bastidores da Captação Comercial | Migração Digital"
                description="Artigos, análises de mercado e estratégias diretas de vendas no WhatsApp e presença digital para empresas e clínicas."
            />

            <ExitIntentPopup />

            {/* Header Navigation */}
            <nav className="fixed top-0 w-full z-[100] bg-black/80 backdrop-blur-2xl border-b border-white/5 py-4 px-6">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-3 group">
                        <img src="/logo.png" alt="Migração Digital" className="h-8 md:h-9 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity" />
                        <div className="flex flex-col">
                            <span className="text-base md:text-lg font-bold tracking-tight bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#FFFFFF] bg-clip-text text-transparent leading-none">
                                MIGRAÇÃO DIGITAL
                            </span>
                            <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase leading-none mt-1 group-hover:text-white/70 transition-colors">
                                Blog & Bastidores
                            </span>
                        </div>
                    </Link>
                    <div className="hidden md:flex items-center gap-8">
                        <Link to="/" className="text-xs uppercase tracking-wider font-semibold text-gray-400 hover:text-[#D4AF37] transition-colors">Home</Link>
                        <a href="#artigos" className="text-xs uppercase tracking-wider font-semibold text-gray-400 hover:text-[#D4AF37] transition-colors">Artigos</a>
                        <Link to="/ebook" className="text-xs uppercase tracking-wider font-semibold text-gray-400 hover:text-[#D4AF37] transition-colors">Checklist</Link>
                        <a
                            href="https://wa.me/5521979043854?text=Olá%2C+li+o+blog+da+Migração+Digital+e+gostaria+de+conversar."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/5 hover:bg-[#D4AF37] hover:text-black border border-[#D4AF37]/30 text-[#D4AF37] px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
                        >
                            <MessageCircle className="w-3.5 h-3.5" />
                            Falar no WhatsApp
                        </a>
                    </div>
                </div>
            </nav>

            <main className="pt-28 md:pt-36">
                {/* [HERO EDITORIAL - ESTILO STUDIO & MAGAZINE] */}
                <section className="px-6 pb-16 md:pb-24 border-b border-white/5 relative">
                    <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />
                    
                    <div className="max-w-7xl mx-auto text-left">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#D4AF37] text-xs font-mono tracking-wider mb-6">
                            <Rss className="w-3.5 h-3.5 text-[#D4AF37]" />
                            MAGAZINE & BASTIDORES • MIGRAÇÃO DIGITAL
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] max-w-4xl mb-6">
                            Estratégia, Presença Digital e <span className="text-[#D4AF37]">Vendas Reais.</span>
                        </h1>
                        <p className="text-base md:text-xl text-gray-400 font-light max-w-2xl leading-relaxed">
                            Artigos diretos e análises de bastidores sobre como empresas e clínicas constroem autoridade no Instagram e captam clientes qualificados no Google.
                        </p>
                    </div>
                </section>

                {/* [ARTIGO EM DESTAQUE - HERO STORY] */}
                <section className="py-16 md:py-24 px-6 border-b border-white/5 bg-[#080808]">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] mb-8 block">Destaque do Mês</div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                            {/* Card de Capa Grande */}
                            <div className="lg:col-span-7">
                                <Link to={`/blog/${mainPost.slug}`} className="group block relative rounded-3xl overflow-hidden border border-white/10 bg-[#0a0a0a] shadow-2xl">
                                    <div className="aspect-[16/10] overflow-hidden relative">
                                        <img
                                            src={mainPost.coverImage}
                                            alt={mainPost.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                                        <span className="absolute top-6 left-6 px-4 py-1.5 bg-[#D4AF37] text-black text-xs font-bold uppercase tracking-wider rounded-lg shadow-lg">
                                            {mainPost.category}
                                        </span>
                                    </div>
                                    <div className="p-8 space-y-4">
                                        <div className="flex items-center gap-4 text-xs font-mono text-gray-400">
                                            <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-[#D4AF37]" /> {mainPost.date}</span>
                                            <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-[#D4AF37]" /> {mainPost.author}</span>
                                            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#D4AF37]" /> 5 min leitura</span>
                                        </div>
                                        <h2 className="text-2xl md:text-4xl font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-tight">
                                            {mainPost.title}
                                        </h2>
                                        <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed line-clamp-3">
                                            {mainPost.excerpt}
                                        </p>
                                        <div className="pt-2 flex items-center gap-2 text-xs font-bold text-[#D4AF37] uppercase tracking-wider group-hover:translate-x-2 transition-transform">
                                            Ler Artigo Completo <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            {/* Coluna de Leituras Recentes */}
                            <div className="lg:col-span-5 space-y-6">
                                <h3 className="text-xs font-mono uppercase tracking-widest text-gray-400 pb-2 border-b border-white/10">Mais Lidos da Semana</h3>
                                <div className="space-y-4">
                                    {secondaryPosts.map((post) => (
                                        <Link key={post.id} to={`/blog/${post.slug}`} className="group p-5 bg-[#0a0a0a] border border-white/5 hover:border-[#D4AF37]/30 rounded-2xl block transition-all">
                                            <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider block mb-1">{post.category}</span>
                                            <h4 className="text-base font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-snug">
                                                {post.title}
                                            </h4>
                                            <span className="text-[11px] text-gray-500 font-mono mt-2 block">{post.date}</span>
                                        </Link>
                                    ))}
                                </div>

                                {/* Banner Checklist */}
                                <div className="p-6 bg-[#D4AF37]/5 border border-[#D4AF37]/30 rounded-2xl text-left space-y-3">
                                    <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center text-[#D4AF37]">
                                        <Zap className="w-5 h-5" />
                                    </div>
                                    <h4 className="text-base font-bold text-white">Checklist Estratégico de Captação</h4>
                                    <p className="text-xs text-gray-400 font-light leading-relaxed">
                                        Descubra os pontos cegos que estão fazendo seu negócio perder clientes no WhatsApp.
                                    </p>
                                    <Link
                                        to="/ebook"
                                        className="inline-flex items-center gap-2 text-xs font-bold text-black bg-[#D4AF37] hover:bg-[#F5D142] px-4 py-2.5 rounded-xl transition-all"
                                    >
                                        Baixar Checklist por R$ 19,90 <ArrowUpRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* [CATEGORIAS & NAVEGAÇÃO DO ACERVO] */}
                <section id="artigos" className="py-20 px-6 bg-[#050505]">
                    <div className="max-w-7xl mx-auto space-y-12">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-8 border-b border-white/10">
                            <div>
                                <span className="text-[#D4AF37] text-xs font-mono uppercase tracking-widest block mb-2">Acervo Completo</span>
                                <h2 className="text-3xl md:text-5xl font-bold text-white">Explorar Artigos</h2>
                            </div>

                            {/* Filtro de Categorias em Pills */}
                            <div className="flex flex-wrap gap-2">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`px-5 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all border ${
                                            activeCategory === cat
                                                ? 'bg-[#D4AF37] text-black border-[#D4AF37] font-bold'
                                                : 'bg-white/5 text-gray-400 border-white/10 hover:border-white/30 hover:text-white'
                                        }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* GRID DE ARTIGOS */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {regularPosts.map((post) => (
                                <Link
                                    key={post.id}
                                    to={`/blog/${post.slug}`}
                                    className="group bg-[#0a0a0a] border border-white/10 hover:border-[#D4AF37]/40 rounded-3xl overflow-hidden transition-all duration-300 flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="aspect-[16/10] overflow-hidden relative">
                                            <img
                                                src={post.coverImage}
                                                alt={post.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                                            />
                                            <span className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-md text-[#D4AF37] border border-[#D4AF37]/30 text-[10px] font-mono uppercase tracking-wider rounded-lg">
                                                {post.category}
                                            </span>
                                        </div>
                                        <div className="p-6 space-y-3">
                                            <div className="flex items-center gap-3 text-[11px] font-mono text-gray-500">
                                                <span>{post.date}</span>
                                                <span>•</span>
                                                <span>{post.author}</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-tight">
                                                {post.title}
                                            </h3>
                                            <p className="text-xs text-gray-400 font-light leading-relaxed line-clamp-3">
                                                {post.excerpt}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="p-6 pt-0 flex items-center justify-between text-xs font-bold text-[#D4AF37] border-t border-white/5 mt-4">
                                        <span>Ler Artigo</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                <SocialProof />
            </main>

            {/* Footer Prestígio */}
            <footer className="py-12 bg-black border-t border-white/10 text-gray-500 font-sans">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3">
                        <img src="/logo.png" alt="Migração Digital" className="h-7 w-auto object-contain brightness-0 invert opacity-80" />
                        <span className="text-base font-bold text-white tracking-tight">MIGRAÇÃO DIGITAL</span>
                    </div>

                    <div className="flex items-center gap-6 text-xs font-mono uppercase tracking-widest text-gray-400">
                        <Link to="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
                        <Link to="/ebook" className="hover:text-[#D4AF37] transition-colors">Checklist</Link>
                        <a href="https://wa.me/5521979043854?text=Olá%2C+gostaria+de+falar+com+o+estrategista." target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">WhatsApp</a>
                    </div>
                </div>
                <div className="mt-8 text-center text-[10px] font-mono uppercase tracking-widest text-gray-600">
                    &copy; 2026 Agência Migração Digital — Todos os direitos reservados.
                </div>
            </footer>
        </div>
    );
}
