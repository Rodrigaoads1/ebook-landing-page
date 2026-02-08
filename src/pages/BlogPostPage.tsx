
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { posts } from '../data/posts';
import { SEOHelmet } from '../components/SEOHelmet';
import { ArrowLeft, Calendar, Zap, Users, ArrowRight, Facebook, Twitter, Linkedin, Target, ShieldCheck } from 'lucide-react';
import { SocialProof } from '../components/SocialProof';
import profileImg from '../assets/rodrigo_analise_extra.png';

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
                        <div className="flex gap-4 text-black">
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
                            &bull; {post.category}
                        </div>
                        <h1 className="text-4xl md:text-7xl font-serif font-bold text-black mb-10 leading-[1.1] tracking-tight">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-8 text-[11px] font-black text-gray-400 uppercase tracking-widest">
                            <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-[#B8960C]" /> {post.date}</span>
                            <span className="flex items-center gap-2 text-black"><Users className="w-4 h-4 text-[#B8960C]" /> Rodrigo Rodrigues</span>
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="relative aspect-video bg-gray-50 rounded-sm overflow-hidden mb-20 border border-gray-100 group shadow-lg">
                        <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700" />
                    </div>

                    {/* Content */}
                    <div className="max-w-none">
                        <div className="text-gray-600 font-light leading-relaxed space-y-10 text-xl">
                            {/* Signature Initial */}
                            <p className="first-letter:text-8xl first-letter:font-serif first-letter:font-bold first-letter:text-[#B8960C] first-letter:mr-4 first-letter:float-left first-letter:leading-[1]">
                                {post.content.split('\n\n')[0]}
                            </p>

                            {post.content.split('\n\n').slice(1, 3).map((para, i) => (
                                <p key={i} className="leading-loose">{para}</p>
                            ))}

                            {/* MID-ARTICLE CALL TO ACTION */}
                            <div className="my-20 p-12 bg-black text-white rounded-sm relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 opacity-[0.05]">
                                    <Target className="w-48 h-48 text-[#B8960C]" />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-3xl font-serif font-bold text-white mb-6 leading-tight">Marketing sem estratégia é só barulho.</h3>
                                    <p className="text-gray-400 mb-10 max-w-xl font-light">Prepare sua empresa para a previsibilidade. Baixe o Checklist Estratégico e identifique os 7 sinais de perda de faturamento.</p>
                                    <Link to="/ebook" className="inline-block bg-[#B8960C] text-white text-[10px] font-black uppercase tracking-[0.3em] py-5 px-10 rounded-sm hover:bg-white hover:text-black transition-all shadow-xl shadow-[#B8960C]/20">
                                        Baixar Checklist R$ 19,90 &rarr;
                                    </Link>
                                </div>
                            </div>

                            {post.content.split('\n\n').slice(3).map((para, i) => (
                                <p key={i} className="leading-loose">{para}</p>
                            ))}
                        </div>
                    </div>

                    {/* SIGNATURE */}
                    <div className="mt-20 py-20 border-y border-gray-100 text-center italic font-serif text-3xl text-gray-300">
                        "Marketing sem estratégia é só barulho."
                    </div>

                    {/* AUTHOR BIO */}
                    <div className="mt-20 bg-[#F9F9F9] p-12 rounded-sm border border-gray-100 flex flex-col md:flex-row items-center gap-10">
                        <div className="w-24 h-24 shrink-0 rounded-full overflow-hidden border-2 border-[#B8960C]">
                            <img src={profileImg} alt="Rodrigo Rodrigues" className="w-full h-full object-cover" />
                        </div>
                        <div className="text-center md:text-left">
                            <h4 className="font-serif font-bold text-2xl mb-2 text-black">Rodrigo Rodrigues</h4>
                            <p className="text-[#B8960C] text-[10px] font-black uppercase tracking-widest mb-4">Estrategista Digital | 50+ nichos atendidos</p>
                            <p className="text-gray-500 text-sm font-light leading-relaxed">
                                Há mais de 5 anos no mercado desenhando funis para clínicas, consultórios e empresas de serviços. Acredito que a estrutura comercial vem antes do tráfego.
                            </p>
                        </div>
                    </div>

                    <SocialProof />

                    {/* FINAL CTA BOX */}
                    <div className="mt-32 pt-20 border-t border-gray-100">
                        <div className="bg-black p-16 border border-[#B8960C]/20 rounded-sm text-center relative overflow-hidden group">
                            <div className="absolute top-[-20%] left-[-10%] w-64 h-64 bg-[#B8960C]/10 blur-[100px] rounded-full" />
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 tracking-tight relative z-10">Pronto para sua vitória previsível?</h2>
                            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto font-light relative z-10">Assuma o controle da sua aquisição de clientes com o Checklist Estratégico testado em 50+ nichos.</p>
                            <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                                <Link to="/ebook" className="bg-[#B8960C] text-white text-[11px] font-black uppercase tracking-[0.3em] py-5 px-12 rounded-sm hover:bg-white hover:text-black transition-all shadow-xl shadow-[#B8960C]/20">Garantir Ebook R$ 19,90</Link>
                                <a href="https://wa.me/5511999999999" className="bg-white/5 border border-white/20 text-white text-[11px] font-black uppercase tracking-[0.3em] py-5 px-12 rounded-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2 font-bold"><ShieldCheck className="w-4 h-4 text-[#B8960C]" /> Falar com Estrategista</a>
                            </div>
                        </div>
                    </div>

                    {/* Related Posts */}
                    <div className="mt-32">
                        <h3 className="text-[12px] font-black uppercase tracking-[0.4em] text-[#B8960C] mb-12">Artigos Relacionados</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            {posts.slice(0, 2).map((p, i) => (
                                <article key={i} className="group bg-[#F9F9F9] border border-gray-100 rounded-sm overflow-hidden flex flex-col hover:border-[#B8960C]/20 transition-all shadow-sm">
                                    <div className="aspect-video bg-white overflow-hidden">
                                        <img src={p.coverImage} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale-[0.2] group-hover:grayscale-0" />
                                    </div>
                                    <div className="p-10">
                                        <div className="flex items-center gap-4 text-[9px] font-black text-gray-400 uppercase tracking-widest mb-4">
                                            <span>{p.date}</span> &bull; <span>5 min</span>
                                        </div>
                                        <h4 className="text-xl font-serif font-bold text-black mb-6 group-hover:text-[#B8960C] transition-all line-clamp-2 leading-tight">{p.title}</h4>
                                        <Link to={`/blog/${p.slug}`} className="text-[#B8960C] text-[9px] font-black uppercase tracking-[0.3em] flex items-center gap-2 group-hover:translate-x-1 transition-transform">Ler Artigo <ArrowRight className="w-3 h-3" /></Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </article>
            </main>
        </div>
    );
}
