import React from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';
import { SEOHelmet } from '../components/SEOHelmet';
import { ArrowRight, Calendar, User } from 'lucide-react';

export function BlogPage() {
    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#D4AF37]/30 selection:text-[#D4AF37]">
            <SEOHelmet
                title="Blog e Estratégias de SEO Local"
                description="Artigos sobre marketing digital, SEO local e posicionamento para empresas em Campo Grande RJ e região."
            />

            {/* Nav Minimalista */}
            <nav className="fixed top-0 w-full z-[100] bg-black/40 backdrop-blur-2xl border-b border-white/5 py-6 px-6">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link to="/" className="text-2xl font-black bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] bg-clip-text text-transparent tracking-tighter">
                        MIGRAÇÃO DIGITAL
                    </Link>
                    <div className="flex items-center gap-8">
                        <Link to="/" className="text-xs uppercase font-bold tracking-widest text-gray-400 hover:text-[#D4AF37] transition-colors">Home</Link>
                        <a href="https://wa.me/5511999999999" className="hidden md:block text-[10px] font-black uppercase tracking-[0.2em] px-6 py-3 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all">
                            Agendar Diagnóstico
                        </a>
                    </div>
                </div>
            </nav>

            <main className="pt-40 pb-32 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Editorial Header */}
                    <header className="mb-24 flex flex-col items-center text-center">
                        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/[0.03] border border-white/10 text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.4em] mb-12 animate-fade-in">
                            Explorando a Nova Economia Digital
                        </div>
                        <h1 className="text-6xl md:text-9xl font-serif font-bold mb-8 tracking-tighter leading-[0.9]">
                            O Pensamento <br />
                            <span className="text-[#D4AF37] italic">Estratégico.</span>
                        </h1>
                        <p className="text-gray-500 text-xl max-w-2xl mx-auto font-light leading-relaxed">
                            Insight, análise e direção para quem não aceita resultados comuns. <br />
                            <span className="text-white/60">Onde a tecnologia encontra o posicionamento de elite.</span>
                        </p>
                    </header>

                    {/* Featured Layout Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* Feed Principal */}
                        <div className="lg:col-span-8 space-y-24">
                            {posts.map((post, idx) => (
                                <article key={post.id} className="group flex flex-col gap-8 transition-all duration-700">
                                    <Link to={`/blog/${post.slug}`} className="relative aspect-[21/9] w-full overflow-hidden rounded-[40px] border border-white/5">
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-700 z-10" />
                                        <img
                                            src={post.coverImage}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]"
                                        />
                                        <div className="absolute top-8 left-8 z-20">
                                            <span className="px-5 py-2 rounded-full bg-black/60 backdrop-blur-md border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] font-black uppercase tracking-widest">
                                                SEO Local
                                            </span>
                                        </div>
                                    </Link>

                                    <div className="max-w-3xl">
                                        <div className="flex items-center gap-6 text-[10px] text-gray-600 mb-6 font-black uppercase tracking-[0.3em]">
                                            <span className="flex items-center gap-2"><Calendar className="w-3 h-3" /> {post.date}</span>
                                            <span className="text-[#D4AF37]">{post.author}</span>
                                            <span className="hidden md:block">8 min de leitura</span>
                                        </div>
                                        <Link to={`/blog/${post.slug}`}>
                                            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 group-hover:text-[#D4AF37] group-hover:italic transition-all duration-500 leading-tight">
                                                {post.title}
                                            </h2>
                                        </Link>
                                        <p className="text-gray-500 text-lg font-light leading-relaxed mb-8 line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                        <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-3 text-white text-xs font-black uppercase tracking-[0.3em] group/btn">
                                            Ler Artigo Completo
                                            <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover/btn:translate-x-3 transition-transform" />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>

                        {/* Sidebar Minimalista */}
                        <aside className="lg:col-span-4 lg:pl-12">
                            <div className="lg:sticky lg:top-40 space-y-16">
                                {/* Newsletter / CTA */}
                                <div className="p-12 rounded-[40px] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 relative overflow-hidden group">
                                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#D4AF37]/10 blur-[60px] rounded-full group-hover:bg-[#D4AF37]/20 transition-all" />
                                    <h3 className="text-2xl font-serif font-bold mb-6">Receba nossa inteligência semanal.</h3>
                                    <p className="text-gray-500 text-sm mb-8 leading-relaxed font-light">Estratégias que não publicamos abertamente. Direto no seu e-mail.</p>
                                    <div className="space-y-4">
                                        <input
                                            type="email"
                                            placeholder="Seu melhor e-mail"
                                            className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 px-6 text-sm focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
                                        />
                                        <button className="w-full bg-[#D4AF37] text-black text-[10px] font-black uppercase tracking-[0.3em] py-5 rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-[#D4AF37]/10">
                                            Inscrever-se Agora
                                        </button>
                                    </div>
                                </div>

                                {/* Categorias */}
                                <div className="space-y-8">
                                    <h4 className="text-[10px] text-gray-600 font-black uppercase tracking-[0.4em] border-b border-white/5 pb-4">Tópicos</h4>
                                    <div className="flex flex-wrap gap-3">
                                        {['Estratégia', 'SEO Local', 'Vendas', 'IA', 'Mindset'].map(tag => (
                                            <button key={tag} className="px-5 py-2 rounded-full border border-white/10 text-gray-500 text-[10px] font-bold uppercase tracking-widest hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all">
                                                {tag}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Conversão Final */}
                                <div className="p-10 border border-[#D4AF37]/20 rounded-[40px] bg-black text-center">
                                    <h4 className="text-xl font-serif font-bold mb-4 italic">Sua empresa no Próximo Nível.</h4>
                                    <p className="text-gray-500 text-xs mb-8">Pare de tentar. Comece a posicionar.</p>
                                    <a href="https://wa.me/5511999999999" className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.4em] hover:brightness-125">
                                        Falar com Rodrigo &rarr;
                                    </a>
                                </div>
                            </div>
                        </aside>

                    </div>
                </div>
            </main>

            <footer className="py-24 border-t border-white/5 bg-black">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="text-center md:text-left">
                        <span className="text-lg font-black tracking-tighter text-white">MIGRAÇÃO DIGITAL</span>
                        <p className="text-gray-700 text-[10px] uppercase tracking-[0.3em] mt-3 italic">Estratégias de Elite para Negócios de Elite.</p>
                    </div>
                    <p className="text-gray-800 text-[9px] uppercase tracking-[0.4em]">&copy; 2026 Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    );
}
