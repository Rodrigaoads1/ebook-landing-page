import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Tag, Mail, MessageCircle, BarChart3, Users, Zap, TrendingUp, ShieldCheck } from 'lucide-react';
import { posts } from '../data/posts';
import { SEOHelmet } from '../components/SEOHelmet';

const categories = [
    'Todos',
    'Tráfego Pago',
    'SEO Local',
    'Meta Ads',
    'GA4',
    'Landing Pages',
    'Instagram Orgânico',
    'Escolha de Agência',
    'Remarketing'
];

export function BlogPage() {
    const [activeCategory, setActiveCategory] = useState('Todos');
    const filteredPosts = activeCategory === 'Todos'
        ? posts
        : posts.filter(post => post.category === activeCategory);

    const featuredPost = posts[0];

    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#D4AF37]/30 selection:text-[#D4AF37]">
            <SEOHelmet
                title="Blog Migração Digital | Inteligência em Marketing"
                description="Conteúdo estratégico sobre tráfego pago, SEO e conversão para elevar o faturamento da sua empresa."
            />

            {/* Header Sticky */}
            <header className="fixed top-0 w-full z-[100] bg-black/60 backdrop-blur-2xl border-b border-white/5 py-4 px-6 md:px-12">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#D4AF37] to-[#B8960C] rounded-lg flex items-center justify-center font-black text-black text-lg">MD</div>
                        <span className="text-xl font-heading font-bold tracking-tighter">MIGRAÇÃO<span className="text-[#D4AF37]">DIGITAL</span></span>
                    </Link>

                    <nav className="hidden lg:flex items-center gap-8">
                        {['Tráfego', 'SEO', 'Conversão', 'Estratégia'].map(item => (
                            <button key={item} className="text-[10px] font-black uppercase tracking-widest text-gray-500 hover:text-[#D4AF37] transition-colors">{item}</button>
                        ))}
                    </nav>

                    <div className="flex items-center gap-6">
                        <Link to="/" className="hidden md:block text-[10px] font-black uppercase tracking-widest text-gray-400">Home</Link>
                        <a href="https://wa.me/5511999999999" className="text-[10px] font-black uppercase tracking-[0.2em] px-6 py-3 rounded-xl bg-[#D4AF37] text-black hover:scale-105 transition-all shadow-lg shadow-[#D4AF37]/20">
                            Fale Conosco
                        </a>
                    </div>
                </div>
            </header>

            <main className="pt-32 pb-32 px-6">
                <div className="max-w-7xl mx-auto">

                    {/* Hero Section with Stats */}
                    <section className="mb-24 py-16 text-center lg:text-left">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                                    <Zap className="w-3 h-3 fill-[#D4AF37]" stroke="none" />
                                    Blog Oficial da Agência
                                </div>
                                <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-[0.95] tracking-tight">
                                    Inteligência que <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F4D03F]">Escala Faturamento.</span>
                                </h1>
                                <p className="text-gray-500 text-lg mb-12 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                                    Análises profundas e estratégias práticas para empresas que buscam o posicionamento de elite no mercado digital.
                                </p>

                                {/* Stats Cards */}
                                <div className="grid grid-cols-3 gap-4 mb-12">
                                    {[
                                        { label: 'ROI Médio', val: '8x', icon: TrendingUp },
                                        { label: 'Clientes', val: '120+', icon: Users },
                                        { label: 'Retenção', val: '95%', icon: ShieldCheck }
                                    ].map((stat, i) => (
                                        <div key={i} className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl text-center md:text-left">
                                            <stat.icon className="w-5 h-5 text-[#D4AF37] mb-3 mx-auto md:ml-0" />
                                            <div className="text-2xl font-heading font-bold text-white mb-1">{stat.val}</div>
                                            <div className="text-[10px] text-gray-600 font-black uppercase tracking-widest">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>

                                <Link to={`/blog/${featuredPost.slug}`} className="inline-flex items-center gap-4 px-8 py-5 rounded-2xl border border-[#D4AF37]/30 text-[#D4AF37] font-black uppercase tracking-[0.2em] text-xs hover:bg-[#D4AF37]/5 transition-all">
                                    Artigo em Destaque <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>

                            {/* Featured Post Visual */}
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-[#D4AF37]/5 blur-[100px] rounded-full group-hover:bg-[#D4AF37]/10 transition-all" />
                                <Link to={`/blog/${featuredPost.slug}`} className="block relative aspect-[4/3] rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
                                    <img src={featuredPost.coverImage} alt={featuredPost.title} className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                                    <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-black via-black/60 to-transparent">
                                        <span className="px-4 py-1.5 rounded-full bg-[#D4AF37] text-black text-[9px] font-black uppercase mb-4 inline-block">{featuredPost.category}</span>
                                        <h2 className="text-2xl md:text-3xl font-heading font-bold text-white group-hover:text-[#D4AF37] transition-all">{featuredPost.title}</h2>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* Category Filter Bar */}
                    <nav className="mb-20 pb-4 border-b border-white/5 flex items-center justify-between gap-8 overflow-x-auto">
                        <div className="flex items-center gap-4 min-w-max">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeCategory === cat ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/20 scale-105' : 'bg-white/5 text-gray-500 hover:text-white'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <div className="relative hidden xl:block">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                            <input type="text" placeholder="Buscar artigo..." className="bg-white/5 border border-white/10 rounded-full py-2 pl-12 pr-6 text-xs text-gray-400 focus:outline-none focus:border-[#D4AF37]/50 w-64" />
                        </div>
                    </nav>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                        {/* Posts Feed */}
                        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
                            {filteredPosts.map((post) => (
                                <article key={post.id} className="group flex flex-col transition-all duration-500">
                                    <Link to={`/blog/${post.slug}`} className="relative aspect-video rounded-3xl overflow-hidden mb-8 border border-white/5">
                                        <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[9px] font-bold text-[#D4AF37] uppercase tracking-widest">{post.category}</span>
                                        </div>
                                    </Link>
                                    <div className="flex items-center gap-4 text-[9px] font-black uppercase tracking-widest text-gray-600 mb-4">
                                        <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {post.date}</span>
                                        <span className="text-[#D4AF37]">{post.author}</span>
                                    </div>
                                    <Link to={`/blog/${post.slug}`}>
                                        <h3 className="text-xl md:text-2xl font-heading font-bold mb-4 group-hover:text-[#D4AF37] transition-all leading-snug">{post.title}</h3>
                                    </Link>
                                    <p className="text-gray-500 text-sm font-light leading-relaxed mb-6 line-clamp-2">{post.excerpt}</p>
                                    <Link to={`/blog/${post.slug}`} className="mt-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white group-hover:text-[#D4AF37] transition-all">
                                        Ler Completo <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                                    </Link>
                                </article>
                            ))}
                        </div>

                        {/* Strategic Sidebar */}
                        <aside className="lg:col-span-4 space-y-16">

                            {/* Lead Magnet CTA */}
                            <div className="p-10 bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 rounded-[40px] relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 blur-[60px] rounded-full group-hover:bg-[#D4AF37]/20 transition-all" />
                                <Zap className="w-10 h-10 text-[#D4AF37] mb-8" />
                                <h4 className="text-2xl font-heading font-bold mb-4">Checklist: Os 7 Sinais que você está Perdendo Clientes</h4>
                                <p className="text-gray-500 text-sm mb-8 leading-relaxed font-light">Identifique onde o faturamento do seu negócio está escorrendo pelas mãos.</p>
                                <a href="https://pay.kiwify.com.br/GhaKpCv" className="block w-full text-center bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] py-5 rounded-2xl hover:bg-[#D4AF37] transition-all shadow-xl">
                                    Baixar Checklist Agora
                                </a>
                            </div>

                            {/* Newsletter */}
                            <div className="space-y-8">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 border-b border-white/5 pb-4">Newsletter Estratégica</h4>
                                <p className="text-gray-500 text-sm font-light leading-relaxed">Assine para receber novos artigos e estudos de caso exclusivos no seu e-mail.</p>
                                <div className="space-y-4">
                                    <input type="email" placeholder="Seu melhor e-mail" className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-6 text-sm focus:outline-none focus:border-[#D4AF37]/50 transition-colors" />
                                    <button className="w-full bg-white/5 text-white text-[10px] font-black uppercase tracking-[0.2em] py-5 rounded-xl border border-white/10 hover:bg-white hover:text-black transition-all">Inscrever-se</button>
                                </div>
                            </div>

                            {/* Popular Tags */}
                            <div className="space-y-8">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 border-b border-white/5 pb-4">Tags Populares</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['Google Ads', 'SEO', 'Conversion', 'ROI', 'Branding', 'IA'].map(tag => (
                                        <button key={tag} className="px-4 py-2 bg-white/5 border border-white/5 rounded-lg text-[10px] text-gray-500 hover:border-[#D4AF37]/30 hover:text-white transition-all">#{tag}</button>
                                    ))}
                                </div>
                            </div>

                        </aside>

                    </div>
                </div>
            </main>

            {/* Footer Descrito */}
            <footer className="pt-24 pb-12 bg-black border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-24">
                        <div className="lg:col-span-1">
                            <Link to="/" className="text-2xl font-heading font-bold mb-6 block">MIGRAÇÃO<span className="text-[#D4AF37]">DIGITAL</span></Link>
                            <p className="text-gray-600 text-sm leading-relaxed mb-8">Elevando padrões de posicionamento e tecnologia para negócios que não aceitam o comum.</p>
                            <div className="flex gap-4">
                                {['LinkedIn', 'Insta', 'X'].map(s => <button key={s} className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-[10px] font-black text-gray-500 hover:border-[#D4AF37] hover:text-white transition-all">{s}</button>)}
                            </div>
                        </div>
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-widest mb-8 text-white">Serviços</h4>
                            <ul className="space-y-4 text-gray-600 text-sm">
                                <li>Tráfego Pago (Google/Meta)</li>
                                <li>SEO Local Estratégico</li>
                                <li>Gestão de Dados & GA4</li>
                                <li>Otimização de Conversão</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-widest mb-8 text-white">Sobre</h4>
                            <ul className="space-y-4 text-gray-600 text-sm">
                                <li>Nossa História</li>
                                <li>Casos de Sucesso</li>
                                <li>Carreiras</li>
                                <li>Contato</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-widest mb-8 text-[#D4AF37]">Consultoria</h4>
                            <p className="text-gray-600 text-sm mb-6">Pronto para acelerar? Agende um diagnóstico gratuito e profissional.</p>
                            <a href="https://wa.me/5511999999999" className="text-white text-[10px] font-black uppercase tracking-widest border-b border-[#D4AF37] pb-1 hover:brightness-125 transition-all">Link para WhatsApp &rarr;</a>
                        </div>
                    </div>
                    <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] font-black uppercase tracking-widest text-gray-700">
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
