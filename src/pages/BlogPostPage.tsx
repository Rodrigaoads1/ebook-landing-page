
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Share2, Bookmark, MessageSquare, ArrowRight, Target, ShieldCheck, Users, Rss, Facebook, Twitter, Linkedin } from 'lucide-react';
import { posts } from '../data/posts';
import { SEOHelmet } from '../components/SEOHelmet';
import { SocialProof } from '../components/SocialProof';
import profileImg from '../assets/profile.png';

export function BlogPostPage() {
    const { slug } = useParams();
    const post = posts.find(p => p.slug === slug);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!post) return <div className="min-h-screen flex items-center justify-center bg-[#FAF9F6] text-[#111111] font-serif italic text-2xl">Relatório não encontrado...</div>;

    return (
        <div className="min-h-screen bg-[#FAF9F6] text-[#111111] font-sans selection:bg-[#BD9F67]/20 selection:text-[#BD9F67] overflow-x-hidden">
            <SEOHelmet
                title={`${post.title} | Intelligence Bureau`}
                description={post.excerpt}
            />

            {/* Reading Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-[3px] bg-gray-100 z-[150]">
                <div
                    className="h-full bg-[#BD9F67] transition-all duration-300 shadow-[0_0_10px_rgba(189,159,103,0.5)]"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>

            {/* Navigation: Boutique Edition */}
            <header className="fixed top-0 w-full z-[140] bg-[#FAF9F6]/90 backdrop-blur-xl border-b border-[#BD9F67]/5 py-6 px-6 md:px-20">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link to="/blog" className="flex items-center gap-4 group">
                        <ArrowLeft className="w-5 h-5 text-[#BD9F67] group-hover:-translate-x-2 transition-transform" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] group-hover:text-[#BD9F67] transition-all text-[#111111]">Intelligence Reports</span>
                    </Link>
                    <div className="hidden md:flex gap-8">
                        {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                            <button key={i} className="text-gray-300 hover:text-[#BD9F67] transition-all"><Icon className="w-4 h-4" /></button>
                        ))}
                    </div>
                </div>
            </header>

            <main className="pt-48 pb-32">
                <article className="max-w-4xl mx-auto px-6">

                    {/* Editorial Header */}
                    <div className="flex flex-col items-start mb-24">
                        <div className="inline-block px-6 py-2 bg-[#BD9F67]/5 border border-[#BD9F67]/20 text-[#BD9F67] text-[10px] font-black uppercase tracking-[0.4em] mb-12">
                            Investigation {parseInt(post.id, 10) % 100} — {post.category}
                        </div>
                        <h1 className="text-6xl md:text-8xl font-serif font-bold text-[#111111] mb-12 leading-[0.95] tracking-tighter">
                            {post.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-10 text-[11px] font-black text-gray-400 uppercase tracking-widest border-t border-gray-100 pt-10 w-full">
                            <span className="flex items-center gap-3"><Calendar className="w-4 h-4 text-[#BD9F67]" /> {post.date}</span>
                            <span className="flex items-center gap-3 text-[#111111]"><User className="w-4 h-4 text-[#BD9F67]" /> Rodrigo Rodrigues</span>
                            <span className="ml-auto hidden sm:block italic lowercase font-serif text-lg text-gray-200">Boutique Intelligence</span>
                        </div>
                    </div>

                    {/* Showcase Image */}
                    <div className="relative aspect-[16/9] bg-gray-50 overflow-hidden mb-24 shadow-2xl border border-gray-100">
                        <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/10 to-transparent" />
                    </div>

                    {/* Editorial Body */}
                    <div className="max-w-none">
                        <div className="prose prose-xl prose-stone max-w-none
                            [&>div>p:first-child]:first-letter:text-8xl 
                            [&>div>p:first-child]:first-letter:font-serif 
                            [&>div>p:first-child]:first-letter:font-bold 
                            [&>div>p:first-child]:first-letter:text-[#BD9F67] 
                            [&>div>p:first-child]:first-letter:mr-6 
                            [&>div>p:first-child]:first-letter:float-left 
                            [&>div>p:first-child]:first-letter:leading-[0.8]
                            [&>div>p]:text-gray-500 [&>div>p]:font-light [&>div>p]:leading-relaxed [&>div>p]:mb-10
                            [&>div>h3]:font-serif [&>div>h3]:text-3xl [&>div>h3]:text-[#111111] [&>div>h3]:mt-16 [&>div>h3]:mb-8
                            [&>div>ul]:mb-10 [&>div>ul]:list-disc [&>div>ul]:pl-6 [&>div>ul>li]:text-gray-500 [&>div>ul>li]:font-light [&>div>ul>li]:mb-4
                            [&>div>blockquote]:border-l-4 [&>div>blockquote]:border-[#BD9F67] [&>div>blockquote]:pl-6 [&>div>blockquote]:italic [&>div>blockquote]:text-2xl [&>div>blockquote]:text-gray-700 [&>div>blockquote]:my-12
                        ">
                            <div dangerouslySetInnerHTML={{ __html: post.content }} />
                        </div>

                        {/* Boutique CTA Block */}
                        <div className="my-24 p-16 bg-[#111111] text-white relative overflow-hidden group shadow-3xl">
                            <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
                                <Target className="w-64 h-64 text-[#BD9F67]" />
                            </div>
                            <div className="relative z-10 text-center">
                                <h3 className="text-4xl font-serif font-bold text-white mb-8 leading-tight italic">O conhecimento vem antes da escala.</h3>
                                <p className="text-gray-400 mb-12 max-w-xl mx-auto font-light text-lg">Pare de tentar hacks baratos. Nosso Checklist Estratégico revela os pilares de autoridade que sustentam +5 anos de mercado.</p>
                                <Link to="/ebook" className="inline-block bg-[#BD9F67] text-black text-[10px] font-black uppercase tracking-[0.4em] py-6 px-12 hover:bg-white transition-all shadow-xl shadow-[#BD9F67]/20 font-bold">
                                    Garantir Checklist R$ 19,90 &rarr;
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Manifesto Signature */}
                    <div className="mt-32 py-32 border-y border-gray-100 text-center relative overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none">
                            <span className="text-[12rem] font-serif font-bold italic">Integrity</span>
                        </div>
                        <p className="italic font-serif text-4xl text-gray-300 relative z-10">"Marketing sem estratégia é só barulho."</p>
                    </div>

                    {/* Author Box: Prestige Edition */}
                    <div className="mt-32 bg-white p-16 border border-gray-100 flex flex-col md:flex-row items-center gap-12 shadow-sm">
                        <div className="w-32 h-32 shrink-0 rounded-full overflow-hidden border-4 border-[#BD9F67]/10 group">
                            <img src={profileImg} alt="Rodrigo Rodrigues" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                        </div>
                        <div className="text-center md:text-left flex-grow">
                            <h4 className="font-serif font-bold text-3xl mb-4 text-[#111111]">Rodrigo Rodrigues</h4>
                            <div className="h-[2px] w-20 bg-[#BD9F67] mb-6 mx-auto md:mx-0" />
                            <p className="text-gray-500 text-lg font-light leading-relaxed max-w-xl">
                                Estrategista Digital especializado em modelagem de negócios High-Ticket. Criador do ecossistema Migração Digital.
                            </p>
                        </div>
                    </div>
                </article>

                <SocialProof />

                <article className="max-w-4xl mx-auto px-6">
                    {/* The Final Verdict CTA */}
                    <div className="mt-40 pt-32 border-t border-gray-100 flex flex-col items-center">
                        <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[#BD9F67] mb-12">The Next Step</span>
                        <h2 className="text-5xl md:text-8xl font-serif font-bold text-[#111111] mb-16 tracking-tighter text-center leading-[0.85]">Substitua ganchos por <br /> <span className="italic">Fundamentos.</span></h2>
                        <div className="flex flex-col sm:flex-row gap-10 w-full max-w-2xl">
                            <Link to="/ebook" className="flex-1 bg-[#111111] text-white text-[11px] font-black uppercase tracking-[0.4em] py-8 text-center hover:bg-[#BD9F67] hover:text-black transition-all shadow-2xl">Checklist Estratégico R$ 19,90</Link>
                            <a href="https://wa.me/5521979043854" className="flex-1 border border-black/10 text-black text-[11px] font-black uppercase tracking-[0.4em] py-8 text-center hover:bg-black hover:text-white transition-all">Falar com Estrategista &rarr;</a>
                        </div>
                    </div>
                </article>

                {/* Footnotes: Recommended Intelligence */}
                <div className="max-w-7xl mx-auto px-6 mt-60">
                    <div className="flex items-center justify-between mb-20 border-b border-gray-100 pb-10">
                        <h3 className="text-[12px] font-black uppercase tracking-[0.5em] text-gray-300">Keep Reading</h3>
                        <Link to="/blog" className="text-[10px] font-black uppercase tracking-widest text-[#BD9F67] flex items-center gap-2">Explorar Tudo <ArrowRight className="w-4 h-4" /></Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                        {posts.slice(0, 2).map((p, i) => (
                            <Link key={i} to={`/blog/${p.slug}`} className="group block">
                                <div className="aspect-[16/10] bg-gray-100 overflow-hidden mb-12 relative">
                                    <img src={p.coverImage} alt={p.title} className="w-full h-full object-cover grayscale-[1] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all" />
                                </div>
                                <span className="text-[9px] font-black text-[#BD9F67] uppercase tracking-widest block mb-4">{p.category}</span>
                                <h4 className="text-3xl font-serif font-bold text-[#111111] group-hover:text-[#BD9F67] transition-all leading-tight">{p.title}</h4>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>

            <footer className="py-20 px-6 md:px-20 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
                    <div className="flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-gray-200">
                        <Link to="/" className="text-[#111111]">M. Digital</Link>
                        <span>&copy; 2026 Intelligence Bureau</span>
                    </div>
                    <div className="flex gap-10">
                        <a href="/rss.xml" className="text-[9px] font-black uppercase tracking-widest text-[#BD9F67] flex items-center gap-2">RSS Feed <Rss className="w-3 h-3" /></a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
