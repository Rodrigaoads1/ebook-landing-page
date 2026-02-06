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
        <div className="min-h-screen bg-white text-[#111111] font-sans selection:bg-[#B8960C]/20 selection:text-[#B8960C] overflow-x-hidden">
            <SEOHelmet
                title="Blog Migração Digital | Consultoria de Alto Padrão"
                description="Estratégias avançadas para negócios que buscam posicionamento de elite e ROI previsível."
            />

            {/* Sticky Header */}
            <header className="fixed top-0 w-full z-[100] bg-white/90 backdrop-blur-xl border-b border-gray-100 py-6 px-6 md:px-12">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#B8960C] rounded-sm flex items-center justify-center font-black text-white text-xl">MD</div>
                        <span className="text-2xl font-heading font-bold tracking-tighter text-black">MIGRAÇÃO<span className="text-[#B8960C]">DIGITAL</span></span>
                    </Link>

                    <nav className="hidden lg:flex items-center gap-10">
                        {['Blog', 'Tráfego Pago', 'SEO', 'Conversão'].map(item => (
                            <button key={item} className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-[#B8960C] transition-all">
                                {item}
                            </button>
                        ))}
                    </nav>

                    <a href="https://wa.me/5511999999999" className="text-[10px] font-black uppercase tracking-[0.3em] px-8 py-3.5 rounded-sm bg-[#B8960C] text-white hover:bg-black transition-all">
                        Fale Conosco
                    </a>
                </div>
            </header>

            <main className="pt-24 relative z-10">

                {/* HERO SECTION - REPLICATING IMAGE_10 STRUC (Luxury Light) */}
                <section className="relative pt-32 pb-40 px-6 overflow-hidden bg-white border-b border-gray-50">
                    {/* Geometric Pattern Overlay (Subtle Light) */}
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: `radial-gradient(#B8960C 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#B8960C]/5 to-transparent pointer-events-none" />

                    <div className="max-w-7xl mx-auto relative flex flex-col items-start">
                        <div className="inline-block px-4 py-1.5 bg-[#B8960C]/10 border border-[#B8960C]/20 text-[#B8960C] text-[10px] font-black uppercase tracking-[0.3em] mb-8 rounded-sm">
                            &bull; Blog Migração Digital
                        </div>

                        <div className="flex flex-col lg:flex-row gap-16 items-start w-full">
                            <div className="flex-1">
                                <h1 className="text-6xl md:text-8xl font-serif font-bold text-black mb-8 leading-[1.05] tracking-tight">
                                    Estratégias que fazem <br />
                                    você <span className="text-[#B8960C] italic text-transparent bg-clip-text bg-gradient-to-r from-[#B8960C] to-[#D4AF37]">vender todo santo dia.</span>
                                </h1>
                                <p className="text-gray-500 text-xl max-w-2xl font-light leading-relaxed mb-12">
                                    Conteúdo avançado sobre tráfego pago, SEO, conversão e analytics. Tudo o que você precisa para escalar seu negócio digital.
                                </p>
                                <button className="px-10 py-5 bg-black text-white text-[11px] font-black uppercase tracking-[0.3em] rounded-sm hover:bg-[#B8960C] transition-all mb-16 shadow-xl">
                                    Ler artigo em destaque
                                </button>
                            </div>

                            {/* Stats Blocks (Light Backgrounds) */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full lg:w-auto">
                                {[
                                    { v: '8x', l: 'ROI MÉDIO', i: TrendingUp },
                                    { v: '120+', l: 'CLIENTES ATIVOS', i: Users },
                                    { v: '95%', l: 'TAXA DE RETENÇÃO', i: ShieldCheck }
                                ].map((s, i) => (
                                    <div key={i} className="p-8 bg-[#F9F9F9] border border-gray-100 rounded-sm min-w-[200px] group hover:border-[#B8960C]/30 transition-all shadow-sm">
                                        <s.i className="w-8 h-8 text-[#B8960C] mb-6" />
                                        <div className="text-4xl font-serif font-bold text-black mb-2">{s.v}</div>
                                        <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{s.l}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <div className="max-w-7xl mx-auto px-6 pb-32">

                    {/* SECTION: EM DESTAQUE */}
                    <div className="mb-24 mt-24">
                        <h2 className="text-[12px] font-black uppercase tracking-[0.4em] text-[#B8960C] mb-12 flex items-center gap-4">
                            Em Destaque <div className="h-[1px] flex-grow bg-gray-100" />
                        </h2>

                        <div className="space-y-6">
                            {featuredPosts.map((post, idx) => (
                                <article key={post.id} className="group bg-[#F9F9F9] border border-gray-100 rounded-sm overflow-hidden flex flex-col md:flex-row items-center hover:border-[#B8960C]/20 transition-all shadow-sm hover:shadow-md">
                                    {/* Real Image Thumb */}
                                    <div className="w-full md:w-[400px] h-[250px] bg-white border-r border-gray-100 relative shrink-0 overflow-hidden">
                                        <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale-[0.5] group-hover:grayscale-0" />
                                        <div className="absolute top-6 left-6">
                                            <span className="px-3 py-1 bg-[#B8960C] text-white text-[9px] font-black uppercase tracking-widest">{post.category}</span>
                                        </div>
                                    </div>
                                    <div className="p-12">
                                        <div className="flex items-center gap-4 text-[10px] font-black text-gray-400 uppercase tracking-widest mb-6">
                                            <span>{post.date}</span> &bull; <span>8 min</span>
                                        </div>
                                        <h3 className="text-3xl font-serif font-bold text-black mb-6 group-hover:text-[#B8960C] transition-all leading-tight">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-500 font-light mb-8 line-clamp-2 max-w-xl">
                                            {post.excerpt}
                                        </p>
                                        <Link to={`/blog/${post.slug}`} className="text-[#B8960C] text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2 hover:gap-4 transition-all">
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
                                <h2 className="text-[12px] font-black uppercase tracking-[0.4em] text-black">Todos os Artigos</h2>
                                <div className="hidden md:flex gap-2">
                                    {categories.map(cat => (
                                        <button
                                            key={cat}
                                            onClick={() => setActiveCategory(cat)}
                                            className={`px-4 py-2 border rounded-sm text-[9px] font-black uppercase tracking-widest transition-all ${activeCategory === cat ? 'bg-[#B8960C] border-[#B8960C] text-white shadow-lg shadow-[#B8960C]/20' : 'bg-transparent border-gray-200 text-gray-400 hover:text-black hover:border-black'}`}
                                        >
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                {restPosts.map((post, idx) => (
                                    <article key={post.id} className="group bg-[#F9F9F9] border border-gray-100 rounded-sm overflow-hidden hover:border-[#B8960C]/20 transition-all flex flex-col shadow-sm">
                                        <div className="aspect-video bg-white flex items-center justify-center relative border-b border-gray-100 overflow-hidden">
                                            <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale-[0.2] group-hover:grayscale-0" />
                                            <div className="absolute top-4 left-4">
                                                <span className="px-2 py-1 border border-gray-100 text-gray-500 text-[8px] font-black uppercase tracking-widest bg-white/80 backdrop-blur-md shadow-sm">{post.category}</span>
                                            </div>
                                        </div>
                                        <div className="p-8 flex-grow flex flex-col">
                                            <div className="flex items-center gap-4 text-[9px] font-black text-gray-400 uppercase tracking-widest mb-4">
                                                <span>{post.date}</span> &bull; <span>5 min</span>
                                            </div>
                                            <h4 className="text-xl font-serif font-bold text-black mb-6 group-hover:text-[#B8960C] transition-all leading-tight">
                                                {post.title}
                                            </h4>
                                            <Link to={`/blog/${post.slug}`} className="mt-auto text-[#B8960C] text-[9px] font-black uppercase tracking-[0.3em] flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                                                Ler mais <ArrowRight className="w-3 h-3" />
                                            </Link>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>

                        {/* SIDEBAR - Luxury Light Structure */}
                        <aside className="lg:col-span-4 space-y-20">

                            {/* Material Gratuito Banner */}
                            <div className="bg-[#F9F9F9] border border-[#B8960C]/20 rounded-sm overflow-hidden group shadow-sm">
                                <div className="p-4 bg-black text-white text-center text-[10px] font-black uppercase tracking-[0.3em]">
                                    Material Gratuito
                                </div>
                                <div className="p-8">
                                    <div className="aspect-square bg-white rounded-sm mb-8 overflow-hidden border border-gray-100 relative group-hover:shadow-lg transition-all">
                                        <img src="https://images.unsplash.com/photo-1556155092-490a1ba16c14?auto=format&fit=crop&q=80" alt="Consultor" className="w-full h-full object-cover grayscale brightness-110 group-hover:scale-105 transition-all" />
                                    </div>
                                    <h4 className="text-xl font-serif font-bold text-black mb-4 leading-tight">Checklist: 27 Ações para Dobrar suas Vendas Online</h4>
                                    <p className="text-gray-500 text-sm font-light mb-8 leading-relaxed">O mesmo checklist que usamos com nossos clientes elite para dominar anúncios nos primeiros 30 dias.</p>
                                    <a href="https://pay.kiwify.com.br/GhaKpCv" className="block w-full text-center bg-[#B8960C] text-white text-[10px] font-black uppercase tracking-[0.3em] py-5 rounded-sm hover:bg-black transition-all shadow-xl shadow-[#B8960C]/20">
                                        Baixar Grátis &rarr;
                                    </a>
                                </div>
                            </div>

                            {/* Tags Populares */}
                            <div>
                                <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-black mb-8 border-b border-gray-100 pb-4">Tags Populares</h5>
                                <div className="flex flex-wrap gap-2">
                                    {['Google Ads', 'Meta Ads', 'SEO Local', 'Landing Page', 'CRO', 'GA4', 'Remarketing'].map(tag => (
                                        <button key={tag} className="px-3 py-2 bg-white border border-gray-100 text-[9px] text-gray-400 font-black uppercase tracking-widest hover:border-[#B8960C] hover:text-[#B8960C] transition-all">
                                            {tag}
                                        </button>
                                    ))}
                                </div>
                            </div>

                        </aside>

                    </div>
                </div>

                {/* NEWSLETTER */}
                <section className="bg-[#F9F9F9] py-32 border-t border-gray-100 relative">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <Mail className="w-12 h-12 text-[#B8960C] mx-auto mb-8" />
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-6 tracking-tight">Receba estratégias exclusivas toda semana</h2>
                        <p className="text-gray-500 text-lg mb-12 font-light max-w-2xl mx-auto">
                            +2.000 empresários já recebem nossas dicas semanais sobre tráfego pago, SEO e conversão. Sem spam, só conteúdo que gera resultado.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                            <input type="email" placeholder="Seu melhor e-mail" className="flex-grow bg-white border border-gray-200 text-black rounded-sm py-5 px-8 focus:outline-none focus:border-[#B8960C] transition-all font-light shadow-sm" />
                            <button className="bg-black text-white text-[11px] font-black uppercase tracking-[0.2em] px-12 py-5 rounded-sm hover:bg-[#B8960C] transition-all shadow-xl">Quero receber</button>
                        </div>
                    </div>
                </section>
            </main>

            {/* RODAPÉ */}
            <footer className="bg-white pt-32 pb-16 border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
                        <div className="md:col-span-1">
                            <Link to="/" className="text-2xl font-heading font-bold mb-8 block text-black">MIGRAÇÃO<span className="text-[#B8960C]">DIGITAL</span></Link>
                            <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light">Agência de marketing digital focada em resultados. Fazemos você vender todo santo dia com estratégias de tráfego pago, SEO e conversão.</p>
                            <div className="flex gap-4">
                                {['LinkedIn', 'Instagram', 'Facebook'].map(s => <button key={s} className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-[#B8960C] transition-all">{s}</button>)}
                            </div>
                        </div>
                        <div>
                            <h5 className="text-[11px] font-black uppercase tracking-widest text-black mb-8">Categorias</h5>
                            <ul className="space-y-4">
                                {['Tráfego Pago', 'SEO', 'Conversão', 'Google Analytics', 'Redes Sociais'].map(c => (
                                    <li key={c}><button className="text-gray-400 hover:text-[#B8960C] text-sm font-light transition-all">{c}</button></li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <h5 className="text-[11px] font-black uppercase tracking-widest text-black mb-8">Pronto para o próximo?</h5>
                            <p className="text-gray-400 text-sm mb-8 font-light">Agende uma consultoria gratuita e descubra como podemos escalar seu negócio digital hoje.</p>
                            <a href="https://wa.me/5511999999999" className="inline-block bg-[#B8960C] text-white text-[10px] font-black uppercase tracking-[0.3em] py-5 px-10 rounded-sm hover:bg-black transition-all shadow-xl shadow-[#B8960C]/10">Agendar agora →</a>
                        </div>
                    </div>
                    <div className="pt-16 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-black uppercase tracking-[0.4em] text-gray-300">
                        <p>&copy; 2026 Migração Digital — Todos os direitos reservados.</p>
                        <div className="flex gap-8">
                            <button className="hover:text-black transition-colors">Privacidade</button>
                            <button className="hover:text-black transition-colors">Termos</button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
