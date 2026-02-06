import React from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../data/posts';
import { SEOHelmet } from '../components/SEOHelmet';
import { ArrowRight, Calendar, User } from 'lucide-react';

export function BlogPage() {
    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans">
            <SEOHelmet
                title="Blog e Estratégias de SEO Local"
                description="Artigos sobre marketing digital, SEO local e posicionamento para empresas em Campo Grande RJ e região."
            />

            {/* Nav Simplificada */}
            <nav className="fixed top-0 w-full z-[100] bg-black/50 backdrop-blur-xl border-b border-white/5 py-5 px-6">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link to="/" className="text-xl md:text-2xl font-black bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] bg-clip-text text-transparent tracking-tighter">
                        MIGRAÇÃO DIGITAL
                    </Link>
                    <Link to="/" className="text-sm font-medium text-gray-400 hover:text-[#D4AF37] transition-colors">Voltar para Home</Link>
                </div>
            </nav>

            <main className="pt-32 pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <header className="mb-20 text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-xs font-black uppercase tracking-[0.3em] mb-8">
                            SEO Local • Estratégia • Vendas
                        </div>
                        <h1 className="text-5xl md:text-8xl font-serif font-bold mb-6">
                            Venda Mais com <br />
                            <span className="text-[#D4AF37] italic">Estratégias de Elite.</span>
                        </h1>
                        <p className="text-gray-400 text-xl max-w-3xl mx-auto font-light leading-relaxed">
                            Não criamos apenas conteúdo. Construímos autoridade para atrair clientes que pesquisam e estão prontos para comprar o seu serviço. Especialistas em resultados locais.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Lado Esquerdo: Posts */}
                        <div className="space-y-12">
                            <h3 className="text-sm font-black uppercase tracking-[0.4em] text-gray-600 mb-8 border-b border-white/5 pb-4">Últimas do Blog</h3>
                            {posts.map((post) => (
                                <Link
                                    key={post.id}
                                    to={`/blog/${post.slug}`}
                                    className="group block bg-[#0a0a0a] border border-white/5 rounded-[40px] overflow-hidden hover:border-[#D4AF37]/30 transition-all duration-500"
                                >
                                    <div className="aspect-[16/9] overflow-hidden">
                                        <img
                                            src={post.coverImage}
                                            alt={post.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="p-8">
                                        <div className="flex items-center gap-6 text-[10px] text-gray-500 mb-6 font-black uppercase tracking-widest">
                                            <span className="flex items-center gap-2 transition-colors group-hover:text-[#D4AF37]"><Calendar className="w-3 h-3" /> {post.date}</span>
                                            <span className="flex items-center gap-2"><User className="w-3 h-3" /> {post.author}</span>
                                        </div>
                                        <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-[#D4AF37] transition-colors leading-tight">{post.title}</h2>
                                        <p className="text-gray-500 mb-6 font-light leading-relaxed line-clamp-2">{post.excerpt}</p>
                                        <div className="flex items-center gap-2 text-[#D4AF37] font-black uppercase tracking-widest text-xs">
                                            Ver Estratégia <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* Lado Direito: Call To Actions / Sales Sidebar */}
                        <div className="lg:sticky lg:top-32 space-y-8">
                            <div className="p-10 bg-[#121212] border border-[#D4AF37]/20 rounded-[40px] relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37] to-[#B8960C]" />
                                <h4 className="text-2xl font-serif font-bold mb-4">Sua empresa está invisível no Google?</h4>
                                <p className="text-gray-500 mb-8 font-light leading-relaxed">
                                    Cuidamos da sua presença digital para que você seja o primeiro a ser encontrado quando um cliente pesquisar em Campo Grande ou qualquer região de atuação.
                                </p>
                                <a
                                    href="https://wa.me/5511999999999"
                                    className="w-full bg-[#D4AF37] text-black font-black py-5 rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-all"
                                >
                                    Falar com Consultor
                                </a>
                            </div>

                            <div className="p-10 border border-white/5 rounded-[40px] bg-white/[0.01]">
                                <h4 className="text-xl font-bold mb-6 italic text-[#D4AF37]">Nossas Soluções Locais:</h4>
                                <ul className="space-y-4">
                                    {[
                                        "Otimização de Google Meu Negócio",
                                        "SEO Nativo para Bairros e Cidades",
                                        "Geração de Leads Qualificados",
                                        "Análise de Concorrência Digital"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-400 text-sm">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="py-20 border-t border-white/5 bg-black text-center">
                <p className="text-gray-700 text-[10px] uppercase tracking-[0.4em]">&copy; 2026 Migração Digital — Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}
