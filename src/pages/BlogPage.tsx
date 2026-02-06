import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Tag, Mail, MessageCircle, BarChart3, Users, Zap, TrendingUp, ShieldCheck, ChevronRight, Share2 } from 'lucide-react';
import { posts } from '../data/posts';
import { SEOHelmet } from '../components/SEOHelmet';

const categories = [
    'Todos',
    'Tráfego Pago',
    'SEO Local',
    'Meta Ads',
    'GA4',
    'Landing Pages',
    'Conteúdo'
];

export function BlogPage() {
    const [activeCategory, setActiveCategory] = useState('Todos');
    const filteredPosts = activeCategory === 'Todos'
        ? posts
        : posts.filter(post => post.category === activeCategory);

    const featuredPosts = posts.slice(0, 2);
    const restPosts = filteredPosts.slice(2);

    return (
        <div className="min-h-screen bg-[#050505] text-[#D1D1D1] font-sans selection:bg-[#D4AF37]/30 selection:text-[#D4AF37] overflow-x-hidden">
            <SEOHelmet
                title="Blog Migração Digital | Consultoria de Alto Padrão"
                description="Estratégias avançadas para negócios que buscam posicionamento de elite e ROI previsível."
            />

            {/* Sticky Header */}
            <header className="fixed top-0 w-full z-[100] bg-black/80 backdrop-blur-xl border-b border-[#D4AF37]/10 py-6 px-6 md:px-12">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#D4AF37] rounded-sm flex items-center justify-center font-black text-black text-xl">MD</div>
                        <span className="text-2xl font-heading font-bold tracking-tighter text-white">MIGRAÇÃO<span className="text-[#D4AF37]">DIGITAL</span></span>
                    </Link>

                    <nav className="hidden lg:flex items-center gap-10">
                        {['Blog', 'Tráfego Pago', 'SEO', 'Conversão'].map(item => (
                            <button key={item} className="text-[11px] font-black uppercase tracking-[0.2em] text-[#D4AF37] hover:text-white transition-all">
                                {item}
                            </button>
                        ))}
                    </nav>

                    <a href="https://wa.me/5511999999999" className="text-[10px] font-black uppercase tracking-[0.2em] px-8 py-3.5 rounded-sm bg-[#D4AF37] text-black hover:bg-white transition-all">
                        Fale Conosco
                    </a>
                </div>
            </header>

            <main className="pt-24 relative z-10">

                {/* HERO SECTION - REPLICATING IMAGE_10 STRUC (New Identity) */}
                <section className="relative pt-32 pb-40 px-6 overflow-hidden bg-[#050505]">
                    {/* Geometric Pattern Overlay */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `radial-gradient(#D4AF37 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/5 to-transparent pointer-events-none" />

                    <div className="max-w-7xl mx-auto relative flex flex-col items-start">
                        <div className="inline-block px-4 py-1.5 bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.3em] mb-8 rounded-sm">
                            &bull; Blog Migração Digital
                        </div>

                        <div className="flex flex-col lg:flex-row gap-16 items-start w-full">
                            <div className="flex-1">
                                <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-8 leading-[1.05] tracking-tight">
                                    Estratégias que fazem <br />
                                    você <span className="text-[#D4AF37] italic">vender todo santo dia.</span>
                                </h1>
                                <p className="text-gray-400 text-xl max-w-2xl font-light leading-relaxed mb-12">
                                    Conteúdo avançado sobre tráfego pago, SEO, conversão e analytics. Tudo o que você precisa para escalar seu negócio digital.
                                </p>
                                <button className="px-10 py-5 bg-[#D4AF37] text-black text-[11px] font-black uppercase tracking-[0.3em] rounded-sm hover:bg-white transition-all mb-16">
                                    Ler artigo em destaque
                                </button>
                            </div>

                            {/* Stats Blocks (Coal Backgrounds) */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full lg:w-auto">
                                {[
                                    { v: '8x', l: 'ROI MÉDIO', i: TrendingUp },
                                    { v: '120+', l: 'CLIENTES ATIVOS', i: Users },
                                    { v: '95%', l: 'TAXA DE RETENÇÃO', i: ShieldCheck }
                                ].map((s, i) => (
                                    <div key={i} className="p-8 bg-[#121212] border border-white/5 rounded-sm min-w-[200px] group hover:border-[#D4AF37]/30 transition-all">
                                        <s.i className="w-8 h-8 text-[#D4AF37] mb-6" />
                                        <div className="text-4xl font-serif font-bold text-white mb-2">{s.v}</div>
                                        <div className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{s.l}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <div className="max-w-7xl mx-auto px-6 pb-32">

                    {/* SECTION: EM DESTAQUE */}
                    <div className="mb-24">
                        <h2 className="text-[12px] font-black uppercase tracking-[0.4em] text-[#D4AF37] mb-12 flex items-center gap-4">
                            Em Destaque <div className="h-[1px] flex-grow bg-white/5" />
                        </h2>

                        <div className="space-y-6">
                            {featuredPosts.map((post, idx) => (
                                <article key={post.id} className="group bg-[#121212] border border-white/5 rounded-sm overflow-hidden flex flex-col md:flex-row items-center hover:border-[#D4AF37]/20 transition-all">
                                    {/* Letter Block Thumb */}
                                    <div className="w-full md:w-[400px] h-[250px] bg-black border-r border-white/5 flex items-center justify-center relative shrink-0">
                                        <div className="text-[120px] font-serif font-bold text-black border-[1px] border-[#D4AF37] px-8 py-0 leading-none select-none opacity-40">
                                            {idx === 0 ? 'T' : 'S'}
                                        </div>
                                        <div className="absolute top-6 left-6">
                                            <span className="px-3 py-1 bg-[#D4AF37] text-black text-[9px] font-black uppercase tracking-widest">{post.category}</span>
                                        </div>
                                    </div>
                                    <div className="p-12">
                                        <div className="flex items-center gap-4 text-[10px] font-black text-gray-600 uppercase tracking-widest mb-6">
                                            <span>{post.date}</span> &bull; <span>8 min</span>
                                        </div>
                                        <h3 className="text-3xl font-serif font-bold text-white mb-6 group-hover:text-[#D4AF37] transition-all leading-tight">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-500 font-light mb-8 line-clamp-2 max-w-xl">
                                            {post.excerpt}
                                        </p>
                                        <Link to={`/blog/${post.slug}`} className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2 hover:gap-4 transition-all">
                                            Ler artigo completo <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>

                    {/* SECTION: TODOS OS ARTIGOS */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

                        <div className="lg:col-span-8">
                            <div className="flex items-center justify-between mb-16">
                                <h2 className="text-[12px] font-black uppercase tracking-[0.4em] text-white">Todos os Artigos</h2>
                                <div className="hidden md:flex gap-2">
                                    {categories.map(cat => (
                                        <button
                                            key={cat}
                                            onClick={() => setActiveCategory(cat)}
                                            className={`px-4 py-2 border rounded-sm text-[9px] font-black uppercase tracking-widest transition-all ${activeCategory === cat ? 'bg-[#D4AF37] border-[#D4AF37] text-black' : 'bg-transparent border-white/10 text-gray-500 hover:text-white hover:border-[#D4AF37]'}`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {restPosts.map((post, idx) => (
                                    <article key={post.id} className="group bg-[#121212] border border-white/5 rounded-sm overflow-hidden hover:border-[#D4AF37]/20 transition-all flex flex-col">
                                        <div className="aspect-video bg-black flex items-center justify-center relative border-b border-white/5">
                                            <div className="text-[80px] font-serif font-bold text-black border-[1px] border-[#D4AF37]/30 px-6 py-0 leading-none select-none opacity-20 group-hover:opacity-40 transition-all">
                                                {post.category.charAt(0)}
                                            </div>
                                            <div className="absolute top-4 left-4">
                                                <span className="px-2 py-1 border border-white/10 text-white text-[8px] font-black uppercase tracking-widest bg-black/40 backdrop-blur-md">{post.category}</span>
                                            </div>
                                        </div>
                                        <div className="p-8 flex-grow flex flex-col">
                                            <div className="flex items-center gap-4 text-[9px] font-black text-gray-600 uppercase tracking-widest mb-4">
                                                <span>{post.date}</span> &bull; <span>5 min</span>
                                            </div>
                                            <h4 className="text-xl font-serif font-bold text-white mb-6 group-hover:text-[#D4AF37] transition-all leading-tight">
                                                {post.title}
                                            </h4>
                                            <Link to={`/blog/${post.slug}`} className="mt-auto text-[#D4AF37] text-[9px] font-black uppercase tracking-[0.3em] flex items-center gap-2">
                                                Ler mais <ArrowRight className="w-3 h-3" />
                                            </Link>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>

                        {/* SIDEBAR - REPLICATING IMAGE_10 STRUC (image_8 style consultant) */}
                        <aside className="lg:col-span-4 space-y-20">

                            {/* Material Gratuito Banner */}
                            <div className="bg-[#121212] border border-[#D4AF37]/30 rounded-sm overflow-hidden group">
                                <div className="p-4 bg-[#D4AF37] text-black text-center text-[10px] font-black uppercase tracking-[0.3em]">
                                    Material Gratuito
                                </div>
                                <div className="p-8">
                                    <div className="aspect-square bg-black rounded-sm mb-8 overflow-hidden border border-white/5 relative">
                                        <img src="https://images.unsplash.com/photo-1556155092-490a1ba16c14?auto=format&fit=crop&q=80" alt="Consultor" className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 transition-all" />
                                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent" />
                                    </div>
                                    <h4 className="text-xl font-serif font-bold text-white mb-4">Checklist: 27 Ações para Dobrar suas Vendas Online</h4>
                                    <p className="text-gray-500 text-sm font-light mb-8 leading-relaxed">O mesmo checklist que usamos com nossos clientes elite para dominar anúncios nos primeiros 30 dias.</p>
                                    <a href="https://pay.kiwify.com.br/GhaKpCv" className="block w-full text-center bg-[#D4AF37] text-black text-[10px] font-black uppercase tracking-[0.3em] py-5 rounded-sm hover:bg-white transition-all shadow-xl">
                                        Baixar Grátis &rarr;
                                    </a>
                                </div>
                            </div>

                            {/* Tags Populares */}
                            <div>
                                <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-white mb-8 border-b border-white/5 pb-4">Tags Populares</h5>
                                <div className="flex flex-wrap gap-2">
                                    {['Google Ads', 'Meta Ads', 'SEO Local', 'Landing Page', 'CRO', 'GA4', 'Remarketing'].map(tag => (
                                        <button key={tag} className="px-3 py-2 bg-black border border-white/5 text-[9px] text-[#D4AF37] font-black uppercase tracking-widest hover:border-[#D4AF37] transition-all">
                                            {tag}
                                        </button>
                                    ))}
                                </div>
                            </div>

                        </aside>

                    </div>
                </div>

                {/* NEWSLETTER */}
                <section className="bg-[#050505] py-32 border-t border-white/5 relative">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <Mail className="w-12 h-12 text-[#D4AF37] mx-auto mb-8" />
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 tracking-tight">Receba estratégias exclusivas toda semana</h2>
                        <p className="text-gray-500 text-lg mb-12 font-light max-w-2xl mx-auto">
                            +2.000 empresários já recebem nossas dicas semanais sobre tráfego pago, SEO e conversão. Sem spam, só conteúdo que gera resultado.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                            <input type="email" placeholder="Seu melhor e-mail" className="flex-grow bg-[#121212] border border-white/10 text-white rounded-sm py-5 px-8 focus:outline-none focus:border-[#D4AF37] transition-all font-light" />
                            <button className="bg-[#D4AF37] text-black text-[11px] font-black uppercase tracking-[0.2em] px-12 py-5 rounded-sm hover:bg-white transition-all">Quero receber</button>
                        </div>
                    </div>
                </section>
            </main>

            {/* RODAPÉ */}
            <footer className="bg-[#050505] pt-32 pb-16 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
                        <div className="md:col-span-1">
                            <Link to="/" className="text-2xl font-heading font-bold mb-8 block text-white">MIGRAÇÃO<span className="text-[#D4AF37]">DIGITAL</span></Link>
                            <p className="text-gray-600 text-sm leading-relaxed mb-8 font-light italic">Agência de marketing digital focada em resultados. Fazemos você vender todo santo dia com estratégias de tráfego pago, SEO e conversão.</p>
                            <div className="flex gap-4">
                                {['LinkedIn', 'Instagram', 'Facebook'].map(s => <button key={s} className="text-[10px] font-black uppercase tracking-widest text-[#D4AF37] hover:text-white transition-all">{s}</button>)}
                            </div>
                        </div>
                        <div>
                            <h5 className="text-[11px] font-black uppercase tracking-widest text-white mb-8">Categorias</h5>
                            <ul className="space-y-4">
                                {['Tráfego Pago', 'SEO', 'Conversão', 'Google Analytics', 'Redes Sociais'].map(c => (
                                    <li key={c}><button className="text-gray-600 hover:text-[#D4AF37] text-sm font-light transition-all">{c}</button></li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <h5 className="text-[11px] font-black uppercase tracking-widest text-white mb-8">Pronto para o próximo?</h5>
                            <p className="text-gray-600 text-sm mb-8 font-light">Agende uma consultoria gratuita e descubra como podemos escalar seu negócio digital hoje.</p>
                            <a href="https://wa.me/5511999999999" className="inline-block bg-[#D4AF37] text-black text-[10px] font-black uppercase tracking-[0.3em] py-5 px-10 rounded-sm hover:bg-white transition-all shadow-xl">Agendar agora →</a>
                        </div>
                    </div>
                    <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-black uppercase tracking-[0.4em] text-gray-800">
                        <p>&copy; 2026 Migração Digital — Todos os direitos reservados.</p>
                        <div className="flex gap-8">
                            <button className="hover:text-white">Privacidade</button>
                            <button className="hover:text-white">Termos</button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
