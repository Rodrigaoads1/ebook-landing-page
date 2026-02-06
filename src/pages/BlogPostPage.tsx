import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { posts } from '../data/posts';
import { SEOHelmet } from '../components/SEOHelmet';
import { ArrowLeft, Calendar, MessageCircle, Zap, Users, ArrowRight, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

export function BlogPostPage() {
    const { slug } = useParams<{ slug: string }>();
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <div className="min-h-screen bg-[#050505] text-[#D1D1D1] font-sans selection:bg-[#D4AF37]/30 selection:text-[#D4AF37]">
            <SEOHelmet
                title={`${post.title} | Migração Digital`}
                description={post.excerpt}
            />

            {/* Reading Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1 z-[110] bg-[#121212]">
                <div className="h-full bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]" style={{ width: '35%' }} />
            </div>

            {/* Sticky Navigation */}
            <header className="fixed top-0 w-full z-[100] bg-black/80 backdrop-blur-xl border-b border-[#D4AF37]/10 py-6 px-6 md:px-12">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link to="/blog" className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-[#D4AF37] hover:text-white transition-all group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" /> Voltar ao Blog
                    </Link>
                    <div className="hidden md:flex items-center gap-6">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-600">Compartilhar:</span>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                                <button key={i} className="text-[#D4AF37] hover:text-white transition-all"><Icon className="w-4 h-4" /></button>
                            ))}
                        </div>
                    </div>
                </div>
            </header>

            <main className="pt-40 pb-32">
                <article className="max-w-4xl mx-auto px-6">

                    {/* Post Meta */}
                    <div className="flex flex-col items-center text-center mb-16">
                        <div className="inline-block px-4 py-1.5 bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.3em] mb-8 rounded-sm">
                            {post.category}
                        </div>
                        <h1 className="text-4xl md:text-7xl font-serif font-bold text-white mb-10 leading-[1.1] tracking-tight">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-8 text-[11px] font-black text-gray-500 uppercase tracking-widest">
                            <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-[#D4AF37]" /> {post.date}</span>
                            <span className="flex items-center gap-2 text-white"><Users className="w-4 h-4 text-[#D4AF37]" /> Rodrigo Ads</span>
                        </div>
                    </div>

                    {/* Featured Image Block (Luxury Style) */}
                    <div className="relative aspect-video bg-[#121212] rounded-sm overflow-hidden mb-20 border border-white/5 group">
                        <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 transition-all duration-[3s]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                        <div className="absolute inset-0 border-[20px] border-black/20 pointer-events-none" />
                    </div>

                    {/* Content Column */}
                    <div className="prose prose-invert prose-lg max-w-none">
                        <div className="text-gray-400 font-light leading-relaxed space-y-8 text-xl">
                            {/* Drop Cap Effect */}
                            <p className="first-letter:text-8xl first-letter:font-serif first-letter:font-bold first-letter:text-[#D4AF37] first-letter:mr-4 first-letter:float-left first-letter:leading-[1] first-line:uppercase first-line:tracking-widest first-line:text-white">
                                {post.content.split('\n\n')[0]}
                            </p>

                            {post.content.split('\n\n').slice(1, 3).map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}

                            {/* MID-ARTICLE CONVERSION BANNER (Luxury Style) */}
                            <div className="my-20 p-12 bg-[#121212] border border-[#D4AF37]/20 rounded-sm relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <Zap className="w-32 h-32 text-[#D4AF37]" />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-3xl font-serif font-bold text-white mb-6 leading-tight">Precisa de ajuda para implementar essas estratégias?</h3>
                                    <p className="text-gray-500 mb-10 max-w-xl font-light">Agende uma consultoria gratuita com nossa equipe e descubra como escalar seus resultados com quem domina o mercado.</p>
                                    <a href="https://wa.me/5511999999999" className="inline-block bg-[#D4AF37] text-black text-[10px] font-black uppercase tracking-[0.3em] py-5 px-10 rounded-sm hover:bg-white transition-all shadow-xl">
                                        Agendar Consultoria Gratuita &rarr;
                                    </a>
                                </div>
                            </div>

                            {post.content.split('\n\n').slice(3).map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </div>
                    </div>

                    {/* Footer CTA Section */}
                    <div className="mt-32 pt-20 border-t border-white/5">
                        <div className="bg-gradient-to-br from-[#121212] to-black p-16 border border-[#D4AF37]/30 rounded-sm text-center relative overflow-hidden">
                            <div className="absolute top-[-20%] left-[-10%] w-64 h-64 bg-[#D4AF37]/5 blur-[100px] rounded-full" />
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 tracking-tight relative z-10">Domine o seu mercado agora.</h2>
                            <p className="text-gray-500 text-lg mb-12 max-w-2xl mx-auto font-light relative z-10">O próximo nível de escala exige parceiros que entendem de tecnologia e posicionamento de elite.</p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                                <a href="https://wa.me/5511999999999" className="bg-[#D4AF37] text-black text-[11px] font-black uppercase tracking-[0.3em] py-5 px-12 rounded-sm hover:bg-white transition-all shadow-2xl">Quero Escalar Agora</a>
                                <Link to="/blog" className="bg-black border border-white/10 text-white text-[11px] font-black uppercase tracking-[0.3em] py-5 px-12 rounded-sm hover:border-[#D4AF37] transition-all">Ver Outros Artigos</Link>
                            </div>
                        </div>
                    </div>

                    {/* Related Posts */}
                    <div className="mt-32">
                        <h3 className="text-[12px] font-black uppercase tracking-[0.4em] text-[#D4AF37] mb-12">Artigos Relacionados</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {posts.slice(0, 2).map((p, i) => (
                                <article key={i} className="group bg-[#121212] border border-white/5 rounded-sm overflow-hidden flex flex-col hover:border-[#D4AF37]/20 transition-all">
                                    <div className="aspect-video bg-black flex items-center justify-center relative border-b border-white/5">
                                        <div className="text-[80px] font-serif font-bold text-black border-[1px] border-[#D4AF37]/20 px-6 py-0 leading-none select-none opacity-20">
                                            {i === 0 ? 'T' : 'R'}
                                        </div>
                                    </div>
                                    <div className="p-10">
                                        <div className="flex items-center gap-4 text-[9px] font-black text-gray-600 uppercase tracking-widest mb-4">
                                            <span>{p.date}</span> &bull; <span>5 min</span>
                                        </div>
                                        <h4 className="text-xl font-serif font-bold text-white mb-6 group-hover:text-[#D4AF37] transition-all line-clamp-2 leading-tight">{p.title}</h4>
                                        <Link to={`/blog/${p.slug}`} className="text-[#D4AF37] text-[9px] font-black uppercase tracking-[0.3em] flex items-center gap-2">Explorar <ArrowRight className="w-3 h-3" /></Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </article>
            </main>

            {/* Newsletter Integration */}
            <section className="bg-black py-32 border-t border-white/5">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <Mail className="w-12 h-12 text-[#D4AF37] mx-auto mb-8" />
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 tracking-tight">Receba estratégias exclusivas toda semana</h2>
                    <p className="text-gray-500 text-lg mb-12 font-light max-w-2xl mx-auto">
                        +2.000 empresários já recebem nossas dicas semanais sobre tráfego pago, SEO e conversão.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                        <input type="email" placeholder="Seu melhor e-mail" className="flex-grow bg-[#121212] border border-white/10 text-white rounded-sm py-5 px-8 focus:outline-none focus:border-[#D4AF37] transition-all" />
                        <button className="bg-[#D4AF37] text-black text-[11px] font-black uppercase tracking-[0.2em] px-12 py-5 rounded-sm hover:bg-white transition-all">Quero receber</button>
                    </div>
                </div>
            </section>
        </div>
    );
}
