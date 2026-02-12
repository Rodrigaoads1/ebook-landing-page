
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Users, Zap, TrendingUp, ShieldCheck, Rss, ArrowUpRight, Menu } from 'lucide-react';
import { posts } from '../data/posts';
import { SEOHelmet } from '../components/SEOHelmet';
import { SocialProof } from '../components/SocialProof';
import { ExitIntentPopup } from '../components/ExitIntentPopup';
import { AnalysisBanner } from '../components/AnalysisBanner';
import { OptimizedImage } from '../components/OptimizedImage';

const categories = [
    'Todos',
    'Estratégia',
    'Funis',
    'Tráfego Pago',
    'Conversão'
];

export function BlogPage() {
    const [activeCategory, setActiveCategory] = useState('Todos');
    const filteredPosts = activeCategory === 'Todos'
        ? posts
        : posts.filter(post => post.category === activeCategory);

    const mainPost = posts[0];
    const secondaryPosts = posts.slice(1, 4);
    const regularPosts = filteredPosts.filter(p => p.id !== mainPost.id && !secondaryPosts.find(s => s.id === p.id));

    return (
        <div className="min-h-screen bg-[#FAF9F6] text-[#111111] font-sans selection:bg-[#BD9F67]/20 selection:text-[#BD9F67] overflow-x-hidden">
            <SEOHelmet
                title="Blog | Migração Digital"
                description="Estratégia, Posicionamento e Tecnologia para marcas que buscam o lugar de direito no mercado."
            />

            {/* Exit Intent Popup */}
            <ExitIntentPopup />

            {/* Navigation Prestige */}
            <nav className="fixed top-0 w-full z-[110] mix-blend-difference py-6 md:py-8 px-6 md:px-20 flex justify-between items-center pointer-events-none">
                <Link to="/" className="pointer-events-auto flex items-center gap-3 md:gap-4 group">
                    <img src="/logo.png" alt="Migração Digital" className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity" />
                    <div className="hidden md:flex flex-col">
                        <span className="text-lg font-serif font-bold tracking-tight text-white uppercase italic leading-none group-hover:text-[#BD9F67] transition-colors">Migração Digital</span>
                        <span className="text-[8px] font-sans font-medium tracking-[0.3em] text-white/60 uppercase leading-none mt-1 group-hover:text-white transition-colors">Intelligence & Strategy</span>
                    </div>
                </Link>
                <div className="flex gap-6 md:gap-12 pointer-events-auto items-center">
                    {/* Mobile: Hamburger Icon */}
                    <Link to="/ebook" className="md:hidden p-2 text-white hover:text-[#BD9F67] transition-all">
                        <Menu className="w-6 h-6" />
                    </Link>
                    {/* Desktop: Text Link */}
                    <Link to="/ebook" className="hidden md:block text-[9px] font-black uppercase tracking-[0.4em] text-white hover:text-[#BD9F67] transition-all">Checklist Estratégico</Link>
                </div>
            </nav>

            <main className="relative">

                {/* HERO: EDITORIAL IMPACT - Mobile Optimized */}
                <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 relative overflow-hidden border-b border-[#BD9F67]/10">
                    <div className="max-w-7xl mx-auto w-full pt-32 md:pt-0">
                        <div className="flex flex-col gap-3 md:gap-4 mb-12 md:mb-20">
                            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#BD9F67]">Volume I — Inteligência Digital</span>
                            <h1 className="text-5xl md:text-[10rem] font-serif font-bold leading-[0.9] md:leading-[0.85] tracking-tighter text-[#111111]">
                                Estratégia <br />
                                <span className="italic relative">
                                    Previsível.
                                    <div className="absolute -bottom-2 md:-bottom-4 right-0 w-1/2 h-[1px] bg-[#BD9F67]" />
                                </span>
                            </h1>
                        </div>

                        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start md:items-end justify-between">
                            <p className="max-w-xl text-gray-600 text-lg md:text-xl font-light leading-relaxed">
                                Transformamos conhecimento técnico em autoridade comercial. O blog da Migração Digital é o diário oficial de bastidores de quem já escalou +50 nichos diferentes.
                            </p>

                            {/* CTA - Visible on Mobile Above Fold */}
                            <div className="w-full md:w-auto">
                                <Link
                                    to="/ebook"
                                    className="block md:inline-block text-center bg-[#111111] text-white text-xs md:text-sm font-black uppercase tracking-[0.3em] py-4 md:py-5 px-8 md:px-12 hover:bg-[#BD9F67] hover:text-black transition-all shadow-xl"
                                >
                                    Checklist R$ 19,90 →
                                </Link>
                                <p className="text-xs text-gray-400 text-center md:text-left mt-3 uppercase tracking-widest">Diagnóstico em 15 min</p>
                            </div>

                            <div className="hidden md:flex items-center gap-10">
                                <div className="text-right">
                                    <div className="text-4xl font-serif font-bold mb-1">5.0+</div>
                                    <div className="text-[8px] font-black uppercase tracking-widest text-gray-400">Anos de Domínio</div>
                                </div>
                                <div className="w-[1px] h-20 bg-gray-100" />
                                <div className="text-right">
                                    <div className="text-4xl font-serif font-bold mb-1">XP</div>
                                    <div className="text-[8px] font-black uppercase tracking-widest text-gray-400">Consultoria de Alto Padrão</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FEATURED: THE COVER STORY */}
                <section className="py-40 px-6 md:px-20 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

                            <div className="lg:col-span-8 group relative">
                                <Link to={`/blog/${mainPost.slug}`} className="block">
                                    <div className="relative aspect-[16/10] overflow-hidden mb-12 shadow-2xl">
                                        <div className="absolute inset-0 bg-[#111111]/10 group-hover:bg-transparent transition-all z-10" />
                                        <OptimizedImage
                                            src={mainPost.coverImage}
                                            alt={mainPost.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute top-10 left-10 z-20">
                                            <span className="px-6 py-2 bg-white text-[#111111] text-[10px] font-black uppercase tracking-widest shadow-xl">Story #01</span>
                                        </div>
                                    </div>
                                    <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 group-hover:translate-x-4 transition-transform leading-tight">
                                        {mainPost.title}
                                    </h2>
                                    <p className="text-gray-600 text-xl font-light leading-relaxed mb-10 max-w-2xl">
                                        {mainPost.excerpt}
                                    </p>
                                    <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-[#BD9F67]">
                                        Acessar o Full Report <ArrowRight className="w-4 h-4" />
                                    </div>
                                </Link>
                            </div>

                            <div className="lg:col-span-4 flex flex-col justify-center space-y-24">
                                <div className="border-l-4 border-[#BD9F67] pl-10 py-10">
                                    <h3 className="text-[12px] font-black uppercase tracking-[0.4em] text-gray-400 mb-10">Latest Insights</h3>
                                    <div className="space-y-16">
                                        {secondaryPosts.map(post => (
                                            <Link key={post.id} to={`/blog/${post.slug}`} className="group block">
                                                <span className="text-[9px] font-black text-[#BD9F67] uppercase tracking-[0.2em] block mb-4 italic">{post.category}</span>
                                                <h4 className="text-2xl font-serif font-bold text-[#111111] group-hover:text-[#BD9F67] transition-all leading-tight">
                                                    {post.title}
                                                </h4>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                                <Link to="/ebook" className="group block p-12 bg-[#FAF9F6] border border-gray-100 hover:border-[#BD9F67]/30 transition-all text-center">
                                    <Mail className="w-8 h-8 mx-auto mb-6 text-[#BD9F67]" />
                                    <p className="text-sm font-light text-gray-600 mb-6">Garanta o Checklist Estratégico e descubra os erros ocultos no seu funil.</p>
                                    <span className="text-[10px] font-black uppercase tracking-widest block border-t border-gray-100 pt-6 group-hover:text-[#BD9F67]">Acessar por R$ 19,90</span>
                                </Link>
                            </div>

                        </div>
                    </div>
                </section>

                <SocialProof />

                {/* Analysis Banner - R$ 197 Product */}
                <AnalysisBanner />

                {/* COLLECTION: THE ARCHIVE */}
                <section className="py-40 px-6 md:px-20 bg-[#FAF9F6]">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24 border-b border-gray-200 pb-16">
                            <div>
                                <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">Explorar Acervo.</h2>
                                <p className="text-gray-400 font-light italic">Selecione uma especialidade abaixo</p>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`px-8 py-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all ${activeCategory === cat ? 'bg-[#111111] text-white' : 'text-gray-400 hover:text-black'}`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-32 gap-x-16">
                            {regularPosts.map((post, idx) => (
                                <article key={post.id} className={`group cursor-pointer ${idx % 2 !== 0 ? 'md:mt-24' : ''}`}>
                                    <Link to={`/blog/${post.slug}`} className="block">
                                        <div className="aspect-[4/5] overflow-hidden mb-10 relative bg-gray-100">
                                            <OptimizedImage
                                                src={post.coverImage}
                                                alt={post.title}
                                                className="w-full h-full object-cover group-hover:scale-110 grayscale-[0.8] group-hover:grayscale-0 transition-all duration-1000"
                                            />
                                            <div className="absolute inset-0 border border-white/20 m-6" />
                                            <div className="absolute bottom-10 right-10 text-white z-20 flex flex-col items-end opacity-0 group-hover:opacity-100 transition-opacity">
                                                <ArrowUpRight className="w-10 h-10 border border-white p-2" />
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-6 mb-8">
                                            <div className="h-[1px] w-12 bg-[#BD9F67]" />
                                            <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">{post.date}</span>
                                        </div>
                                        <h3 className="text-3xl font-serif font-bold text-[#111111] group-hover:text-[#BD9F67] transition-all mb-6 leading-tight">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-500 font-light line-clamp-2 leading-relaxed italic">
                                            {post.excerpt}
                                        </p>
                                    </Link>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* THE MANIFESTO */}
                <section className="py-60 px-6 md:px-20 bg-[#111111] text-white text-center overflow-hidden relative">
                    <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
                        <span className="text-[25rem] font-serif font-bold whitespace-nowrap">MD STRATEGY</span>
                    </div>
                    <div className="max-w-4xl mx-auto relative z-10">
                        <Rss className="w-12 h-12 text-[#BD9F67] mx-auto mb-10" />
                        <h2 className="text-5xl md:text-7xl font-serif font-bold mb-10 tracking-tight">O lugar de direito no mercado é seu.</h2>
                        <p className="text-gray-400 text-xl font-light mb-16 leading-relaxed">
                            Mantenha-se atualizado com as estratégias que realmente movem o ponteiro de faturamento.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-8">
                            <a href="/rss.xml" className="text-[11px] font-black uppercase tracking-[0.4em] py-6 px-12 border border-white/20 hover:border-[#BD9F67] transition-all">Acceso ao Feed RSS</a>
                            <a href="https://wa.me/5521979043854" className="text-[11px] font-black uppercase tracking-[0.4em] py-6 px-12 bg-[#BD9F67] text-black font-bold hover:bg-white transition-all">Falar com Estrategista</a>
                        </div>
                    </div>
                </section>

            </main>

            <footer className="py-20 px-6 md:px-20 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
                        <Link to="/" className="text-[#111111]">Migração Digital</Link>
                        <span>—</span>
                        <p>&copy; 2026 Inteligência Digital (v2.1)</p>
                    </div>
                    <div className="flex gap-10">
                        <Link to="/blog" className="text-[9px] font-black uppercase tracking-widest text-[#BD9F67]">Blog</Link>
                        <Link to="/ebook" className="text-[9px] font-black uppercase tracking-widest text-gray-400 hover:text-black">Checklist</Link>
                        <a href="https://wa.me/5521979043854" className="text-[9px] font-black uppercase tracking-widest text-gray-400 hover:text-black">WhatsApp</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
