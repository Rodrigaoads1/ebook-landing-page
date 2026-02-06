import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Tag, Mail, MessageCircle, BarChart3, Users, Zap, TrendingUp, ShieldCheck, ChevronRight } from 'lucide-react';
import { posts } from '../data/posts';
import { SEOHelmet } from '../components/SEOHelmet';

const categories = [
    'Todos',
    'Tráfego Pago',
    'SEO Local',
    'Meta Ads',
    'GA4',
    'Landing Pages'
];

export function BlogPage() {
    const [activeCategory, setActiveCategory] = useState('Todos');
    const filteredPosts = activeCategory === 'Todos'
        ? posts
        : posts.filter(post => post.category === activeCategory);

    const featuredPost = posts[0];
    const restPosts = filteredPosts.slice(1);

    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#D4AF37]/30 selection:text-[#D4AF37] overflow-x-hidden">
            <SEOHelmet
                title="Blog Migração Digital | Intel de Elite"
                description="O blog definitivo para empresários que buscam o posicionamento de elite e ROI previsível."
            />

            {/* Premium Glowing Backgrounds */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#D4AF37]/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#D4AF37]/5 blur-[120px] rounded-full" />
            </div>

            {/* Nano-Navbar */}
            <header className="fixed top-0 w-full z-[100] py-6 px-6 md:px-12 transition-all duration-500">
                <div className="max-w-7xl mx-auto flex justify-between items-center bg-black/40 backdrop-blur-3xl border border-white/5 rounded-3xl py-4 px-8 shadow-2xl">
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#B8960C] rounded-xl flex items-center justify-center font-black text-black text-xl shadow-[0_0_20px_rgba(212,175,55,0.3)] group-hover:scale-110 transition-transform">MD</div>
                        <span className="text-2xl font-heading font-bold tracking-tighter">MIGRAÇÃO<span className="text-[#D4AF37]">DIGITAL</span></span>
                    </Link>

                    <nav className="hidden lg:flex items-center gap-10">
                        {['Tráfego', 'SEO', 'Cases', 'Estratégia'].map(item => (
                            <button key={item} className="text-[11px] font-black uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-all relative group">
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] group-hover:w-full transition-all duration-300" />
                            </button>
                        ))}
                    </nav>

                    <a href="https://wa.me/5511999999999" className="text-[11px] font-black uppercase tracking-[0.2em] px-8 py-4 rounded-2xl bg-[#D4AF37] text-black hover:bg-[#F4D03F] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all">
                        Agendar Diagnóstico
                    </a>
                </div>
            </header>

            <main className="pt-40 pb-32 px-6 relative z-10">
                <div className="max-w-7xl mx-auto">

                    {/* Header Intro */}
                    <header className="mb-20 text-center lg:text-left flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                                <Zap className="w-3 h-3 fill-[#D4AF37]" stroke="none" />
                                Inteligência Estratégica 4.0
                            </div>
                            <h1 className="text-6xl md:text-8xl font-heading font-bold mb-4 leading-[0.9] tracking-tighter">
                                Insights para <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37] bg-[length:200%_auto] animate-gradient">Negócios de Elite.</span>
                            </h1>
                        </div>
                        <p className="text-gray-500 text-lg max-w-md font-light leading-relaxed mb-4">
                            Onde o alto faturamento encontra a previsibilidade tecnológica. O canal oficial da Migração Digital.
                        </p>
                    </header>

                    {/* Category Selector (Pills) */}
                    <div className="mb-12 flex flex-wrap items-center gap-3">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-500 border ${activeCategory === cat ? 'bg-[#D4AF37] border-[#D4AF37] text-black shadow-xl shadow-[#D4AF37]/20 scale-105' : 'bg-white/5 border-white/5 text-gray-500 hover:border-white/20 hover:text-white'}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* BENTO GRID START */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-[minmax(200px,auto)]">

                        {/* FEATURED POST (Big Card) */}
                        <article className="lg:col-span-8 lg:row-span-2 group relative rounded-[40px] overflow-hidden border border-white/5 bg-black">
                            <Link to={`/blog/${featuredPost.slug}`} className="block h-full w-full relative">
                                <img src={featuredPost.coverImage} alt={featuredPost.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-700 z-10" />

                                <div className="absolute bottom-0 left-0 p-12 z-20 w-full">
                                    <span className="px-4 py-1.5 rounded-full bg-[#D4AF37] text-black text-[9px] font-black uppercase mb-6 inline-block tracking-widest">ARTIGO EM DESTAQUE</span>
                                    <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight group-hover:text-[#D4AF37] transition-all tracking-tighter">
                                        {featuredPost.title}
                                    </h2>
                                    <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
                                        <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-[#D4AF37]" /> {featuredPost.date}</span>
                                        <span className="flex items-center gap-2 text-white"><ArrowRight className="w-4 h-4 text-[#D4AF37]" /> Ler agora</span>
                                    </div>
                                </div>
                            </Link>
                        </article>

                        {/* STATS MODULE (High Fidelity) */}
                        <div className="lg:col-span-4 lg:row-span-1 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[40px] p-10 flex flex-col justify-between group hover:border-[#D4AF37]/30 transition-all">
                            <div className="flex justify-between items-start">
                                <BarChart3 className="w-10 h-10 text-[#D4AF37]" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-gray-600 italic">Autoridade MD</span>
                            </div>
                            <div className="space-y-6">
                                {[
                                    { l: 'ROI Médio', v: '8.4x', c: 'text-[#D4AF37]' },
                                    { l: 'Investimento Gerido', v: 'R$ 2.5M+', c: 'text-white' },
                                    { l: 'Taxa de Retenção', v: '95%', c: 'text-[#D4AF37]' }
                                ].map((s, i) => (
                                    <div key={i} className="flex justify-between items-end border-b border-white/5 pb-3">
                                        <span className="text-[10px] font-black uppercase text-gray-500 tracking-widest">{s.l}</span>
                                        <span className={`text-2xl font-heading font-bold ${s.c}`}>{s.v}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* LEAD MAGNET MODULE (Bento style) */}
                        <div className="lg:col-span-4 lg:row-span-1 bg-gradient-to-br from-[#D4AF37]/5 to-[#D4AF37]/20 border border-[#D4AF37]/20 rounded-[40px] p-10 relative overflow-hidden group">
                            <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-[#D4AF37]/20 blur-[80px] rounded-full group-hover:bg-[#D4AF37]/30 transition-all" />
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <Zap className="w-10 h-10 text-[#D4AF37] mb-6 animate-pulse" />
                                    <h3 className="text-2xl font-heading font-bold mb-4 tracking-tight leading-tight">Os 7 Sinais que sua Empresa está Perdendo Dinheiro no Digital</h3>
                                </div>
                                <a href="https://pay.kiwify.com.br/GhaKpCv" className="flex items-center justify-between bg-black text-white px-8 py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-2xl">
                                    Baixar Checklist <ChevronRight className="w-4 h-4 ml-2" />
                                </a>
                            </div>
                        </div>

                        {/* REST OF POSTS (Grid of 3) */}
                        {restPosts.map((post, idx) => (
                            <article key={post.id} className="lg:col-span-4 lg:row-span-1 group relative rounded-[40px] overflow-hidden border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all">
                                <Link to={`/blog/${post.slug}`} className="block h-full p-8 flex flex-col">
                                    <div className="relative aspect-video rounded-3xl overflow-hidden mb-8 border border-white/5">
                                        <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-[9px] font-bold text-[#D4AF37] uppercase tracking-widest">{post.category}</span>
                                        </div>
                                    </div>
                                    <div className="mb-4 flex items-center gap-4 text-[9px] font-black uppercase tracking-widest text-gray-600">
                                        <span className="flex items-center gap-2"><Calendar className="w-3 h-3" /> {post.date}</span>
                                        <span>3 min leitura</span>
                                    </div>
                                    <h3 className="text-xl font-heading font-bold mb-6 flex-grow group-hover:text-[#D4AF37] transition-all leading-tight">{post.title}</h3>
                                    <div className="mt-auto flex items-center justify-between text-[9px] font-black uppercase tracking-widest text-gray-500 group-hover:text-white transition-all">
                                        Explorar Artigo <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </Link>
                            </article>
                        ))}

                        {/* NEWSLETTER MODULE (Small & Wide) */}
                        <div className="lg:col-span-12 lg:row-span-1 bg-white/[0.02] border border-white/5 rounded-[40px] p-12 flex flex-col lg:flex-row items-center justify-between gap-12 group hover:border-[#D4AF37]/20 transition-all">
                            <div className="max-w-xl text-center lg:text-left">
                                <h4 className="text-3xl font-heading font-bold mb-4">Mantenha a sua agência atualizada com o <span className="text-[#D4AF37]">Inner Circle.</span></h4>
                                <p className="text-gray-500 font-light leading-relaxed">Assine para receber insights técnicos e estratégicos semanais que não publicamos abertamente.</p>
                            </div>
                            <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-4">
                                <input type="email" placeholder="Seu melhor e-mail corporativo" className="min-w-[300px] bg-black border border-white/10 rounded-2xl py-5 px-8 text-sm focus:outline-none focus:border-[#D4AF37] transition-all font-light" />
                                <button className="bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] px-12 py-5 rounded-2xl hover:bg-[#D4AF37] transition-all shadow-xl">Inscrever-se</button>
                            </div>
                        </div>

                    </div>
                    {/* BENTO GRID END */}

                </div>
            </main>

            {/* HIGH FIDELITY FOOTER */}
            <footer className="pt-32 pb-16 bg-[#030303] relative overflow-hidden border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-24">
                        <div className="lg:col-span-2">
                            <Link to="/" className="text-3xl font-heading font-bold mb-8 block">MIGRAÇÃO<span className="text-[#D4AF37]">DIGITAL</span></Link>
                            <p className="text-gray-500 text-lg max-w-sm mb-12 font-light leading-relaxed italic">"Transformando complexidade tecnológica em vantagem competitiva de mercado."</p>
                            <div className="flex gap-6">
                                {['LinkedIn', 'Instagram', 'X (Twitter)', 'Email'].map(social => (
                                    <button key={social} className="text-[10px] font-black uppercase tracking-widest text-gray-700 hover:text-[#D4AF37] transition-all">{social}</button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 mb-10">Agência</h5>
                            <ul className="space-y-6 text-sm font-light text-gray-600">
                                <li><button className="hover:text-white transition-colors">Nossa Metodologia</button></li>
                                <li><button className="hover:text-white transition-colors">Vagas Abertas</button></li>
                                <li><button className="hover:text-white transition-colors">Contate um Estrategista</button></li>
                                <li><button className="hover:text-white transition-colors">Políticas</button></li>
                            </ul>
                        </div>
                        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5">
                            <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#D4AF37] mb-6">Diagnóstico Gratuito</h5>
                            <p className="text-gray-500 text-xs mb-8 leading-relaxed">Você está a uma conversa de descobrir os gargalos do seu crescimento.</p>
                            <a href="https://wa.me/5511999999999" className="text-white text-[10px] font-black uppercase tracking-widest border-b border-[#D4AF37] pb-2 hover:brightness-125 transition-all inline-block">Fale Agora com o Rodrigo</a>
                        </div>
                    </div>
                    <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                        <p className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-800">&copy; 2026 Migração Digital &bull; Todos os direitos reservados.</p>
                        <div className="flex items-center gap-4">
                            <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                            <span className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-700">Digital Intelligence Core Active</span>
                        </div>
                    </div>
                </div>
            </footer>

            <style>{`
                @keyframes gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-gradient {
                    background-size: 200% auto;
                    animation: gradient 5s ease infinite;
                }
                body {
                    background-color: #050505;
                    color: white;
                }
            `}</style>
        </div>
    );
}
