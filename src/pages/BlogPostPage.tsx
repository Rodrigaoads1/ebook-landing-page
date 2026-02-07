import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { posts } from '../data/posts';
import { SEOHelmet } from '../components/SEOHelmet';
import { ArrowLeft, Calendar, MessageCircle, Zap, Users, ArrowRight, Share2, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import { SocialProof } from '../components/SocialProof';

export function BlogPostPage() {
    const { slug } = useParams<{ slug: string }>();
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <div className="min-h-screen bg-white text-[#111111] font-sans selection:bg-[#B8960C]/20 selection:text-[#B8960C]">
            <SEOHelmet
                title={`${post.title} | Migração Digital`}
                description={post.excerpt}
            />

            {/* Reading Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1 z-[110] bg-gray-50">
                <div className="h-full bg-[#B8960C] shadow-[0_0_10px_#B8960C]" style={{ width: '35%' }} />
            </div>

            {/* Sticky Navigation */}
            <header className="fixed top-0 w-full z-[100] bg-white/90 backdrop-blur-xl border-b border-gray-100 py-6 px-6 md:px-12">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link to="/blog" className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-[#B8960C] hover:text-black transition-all group">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" /> Voltar ao Blog
                    </Link>
                    <div className="hidden md:flex items-center gap-6">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-300">Compartilhar:</span>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                                <button key={i} className="text-gray-300 hover:text-[#B8960C] transition-all"><Icon className="w-4 h-4" /></button>
                            ))}
                        </div>
                    </div>
                </div>
            </header>

            <main className="pt-40 pb-32">
                <article className="max-w-4xl mx-auto px-6">

                    {/* Post Meta */}
                    <div className="flex flex-col items-center text-center mb-16">
                        <div className="inline-block px-4 py-1.5 bg-[#B8960C]/10 border border-[#B8960C]/20 text-[#B8960C] text-[10px] font-black uppercase tracking-[0.3em] mb-8 rounded-sm">
                            {post.category}
                        </div>
                        <h1 className="text-4xl md:text-7xl font-serif font-bold text-black mb-10 leading-[1.1] tracking-tight">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-8 text-[11px] font-black text-gray-400 uppercase tracking-widest">
                            <span className="flex items-center gap-2 tracking-[0.2em]"><Calendar className="w-4 h-4 text-[#B8960C]" /> {post.date}</span>
                            <span className="flex items-center gap-2 text-black tracking-[0.2em]"><Users className="w-4 h-4 text-[#B8960C]" /> Rodrigo Ads</span>
                        </div>
                    </div>

                    {/* Featured Image Block (Luxury Light Style) */}
                    <div className="relative aspect-video bg-gray-50 rounded-sm overflow-hidden mb-20 border border-gray-100 group shadow-lg">
                        <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-[3s]" />
                        <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
                    </div>

                    {/* Content Column */}
                    <div className="max-w-none">
                        <div className="text-gray-600 font-light leading-relaxed space-y-10 text-xl editor-content">
                            {/* Drop Cap Effect */}
                            <p className="first-letter:text-8xl first-letter:font-serif first-letter:font-bold first-letter:text-[#B8960C] first-letter:mr-4 first-letter:float-left first-letter:leading-[1] first-line:uppercase first-line:tracking-widest first-line:text-black">
                                {post.content.split('\n\n')[0]}
                            </p>

                            {post.content.split('\n\n').slice(1, 3).map((para, i) => (
                                <p key={i} className="leading-loose">{para}</p>
                            ))}

                            {/* MID-ARTICLE CONVERSION BANNER (Luxury Light) */}
                            <div className="my-20 p-12 bg-[#F9F9F9] border border-gray-100 rounded-sm relative overflow-hidden group shadow-sm">
                                <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-[#B8960C]">
                                    <Zap className="w-48 h-48" />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-3xl font-serif font-bold text-black mb-6 leading-tight">Precisa de ajuda para implementar essas estratégias?</h3>
                                    <p className="text-gray-500 mb-10 max-w-xl font-light">Agende uma consultoria gratuita com nossa equipe e descubra como escalar seus resultados com quem domina o mercado.</p>
                                    <a href="https://wa.me/5511999999999" className="inline-block bg-black text-white text-[10px] font-black uppercase tracking-[0.3em] py-5 px-10 rounded-sm hover:bg-[#B8960C] transition-all shadow-xl shadow-black/10">
                                        Agendar Consultoria Gratuita &rarr;
                                    </a>
                                </div>
                            </div>

                            {post.content.split('\n\n').slice(3).map((para, i) => (
                                <p key={i} className="leading-loose">{para}</p>
                            ))}
                        </div>
                    </div>

                    <SocialProof />

                    {/* Footer CTA Section */}
                    <div className="mt-32 pt-20 border-t border-gray-100">
                        <div className="bg-[#F9F9F9] p-16 border border-[#B8960C]/20 rounded-sm text-center relative overflow-hidden shadow-sm">
                            <div className="absolute top-[-20%] left-[-10%] w-64 h-64 bg-[#B8960C]/5 blur-[100px] rounded-full" />
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-8 tracking-tight relative z-10">Domine o seu mercado agora.</h2>
                            <p className="text-gray-500 text-lg mb-12 max-w-2xl mx-auto font-light relative z-10">O próximo nível de escala exige parceiros que entendem de tecnologia e posicionamento de elite.</p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                                <a href="https://wa.me/5511999999999" className="bg-[#B8960C] text-white text-[11px] font-black uppercase tracking-[0.3em] py-5 px-12 rounded-sm hover:bg-black transition-all shadow-xl shadow-[#B8960C]/20">Quero Escalar Agora</a>
                                <Link to="/blog" className="bg-white border border-gray-200 text-black text-[11px] font-black uppercase tracking-[0.3em] py-5 px-12 rounded-sm hover:border-black transition-all">Ver Outros Artigos</Link>
                            </div>
                        </div>
                    </div>

                    {/* Related Posts */}
                    <div className="mt-32">
                        <h3 className="text-[12px] font-black uppercase tracking-[0.4em] text-[#B8960C] mb-12">Artigos Relacionados</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {posts.slice(0, 2).map((p, i) => (
                                <article key={i} className="group bg-[#F9F9F9] border border-gray-100 rounded-sm overflow-hidden flex flex-col hover:border-[#B8960C]/20 transition-all shadow-sm">
                                    <div className="aspect-video bg-white flex items-center justify-center relative border-b border-gray-100 overflow-hidden">
                                        <img src={p.coverImage} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale-[0.2] group-hover:grayscale-0" />
                                    </div>
                                    <div className="p-10">
                                        <div className="flex items-center gap-4 text-[9px] font-black text-gray-400 uppercase tracking-widest mb-4">
                                            <span>{p.date}</span> &bull; <span>5 min</span>
                                        </div>
                                        <h4 className="text-xl font-serif font-bold text-black mb-6 group-hover:text-[#B8960C] transition-all line-clamp-2 leading-tight">{p.title}</h4>
                                        <Link to={`/blog/${p.slug}`} className="text-[#B8960C] text-[9px] font-black uppercase tracking-[0.3em] flex items-center gap-2 group-hover:translate-x-1 transition-transform">Explorar <ArrowRight className="w-3 h-3" /></Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </article>
            </main>

            {/* Newsletter Integration */}
            <section className="bg-[#F9F9F9] py-32 border-t border-gray-100">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <Mail className="w-12 h-12 text-[#B8960C] mx-auto mb-8" />
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-6 tracking-tight">Receba estratégias exclusivas toda semana</h2>
                    <p className="text-gray-500 text-lg mb-12 font-light max-w-2xl mx-auto">
                        +2.000 empresários já recebem nossas dicas semanais sobre tráfego pago, SEO e conversão.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                        <input type="email" placeholder="Seu melhor e-mail" className="flex-grow bg-white border border-gray-200 text-black rounded-sm py-5 px-8 focus:outline-none focus:border-[#B8960C] transition-all shadow-sm" />
                        <button className="bg-black text-white text-[11px] font-black uppercase tracking-[0.2em] px-12 py-5 rounded-sm hover:bg-[#B8960C] transition-all shadow-xl">Quero receber</button>
                    </div>
                </div>
            </section>
        </div>
    );
}
