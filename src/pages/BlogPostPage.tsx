import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, MessageCircle } from 'lucide-react';
import { posts } from '../data/posts';
import { SEOHelmet } from '../components/SEOHelmet';
import { ExitIntentPopup } from '../components/ExitIntentPopup';
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

    if (!post) return <div className="min-h-screen flex items-center justify-center bg-[#050505] text-white font-mono text-xl">Artigo não encontrado...</div>;

    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-[#D4AF37]/30 selection:text-[#D4AF37] font-sans overflow-x-hidden antialiased">
            <SEOHelmet
                title={`${post.title} | Migração Digital`}
                description={post.excerpt}
            />

            <ExitIntentPopup />

            {/* Reading Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-[3px] bg-white/10 z-[150]">
                <div
                    className="h-full bg-[#D4AF37] transition-all duration-300 shadow-[0_0_10px_rgba(212,175,55,0.5)]"
                    style={{ width: `${scrollProgress}%` }}
                />
            </div>

            {/* Navigation Bar */}
            <header className="fixed top-0 w-full z-[140] bg-black/80 backdrop-blur-2xl border-b border-white/5 py-4 px-6">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link to="/blog" className="flex items-center gap-3 group text-gray-400 hover:text-[#D4AF37] transition-colors">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-xs font-mono uppercase tracking-wider">Voltar ao Blog</span>
                    </Link>
                    <a
                        href="https://wa.me/5521979043854?text=Olá%2C+li+o+artigo+no+blog+da+Migração+Digital+e+quero+conversar."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/5 hover:bg-[#D4AF37] hover:text-black border border-[#D4AF37]/30 text-[#D4AF37] px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
                    >
                        <MessageCircle className="w-3.5 h-3.5" />
                        Falar no WhatsApp
                    </a>
                </div>
            </header>

            <main className="pt-32 md:pt-40 pb-24">
                <article className="max-w-4xl mx-auto px-6">

                    {/* Editorial Header */}
                    <div className="space-y-6 mb-12 text-left">
                        <span className="inline-block px-3.5 py-1.5 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-mono uppercase tracking-widest rounded-lg">
                            {post.category}
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
                            {post.title}
                        </h1>
                        <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed">
                            {post.excerpt}
                        </p>
                        <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-gray-400 border-t border-b border-white/10 py-4 w-full">
                            <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-[#D4AF37]" /> {post.date}</span>
                            <span className="flex items-center gap-2 text-white"><User className="w-4 h-4 text-[#D4AF37]" /> Rodrigo Rodrigues</span>
                            <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#D4AF37]" /> 5 min de leitura</span>
                        </div>
                    </div>

                    {/* Showcase Image */}
                    <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-16 border border-white/10 shadow-2xl bg-[#0a0a0a]">
                        <img
                            src={post.coverImage}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Editorial Body */}
                    <div className="max-w-none text-left">
                        <div className="prose prose-invert prose-lg max-w-none
                            [&>div>p]:text-gray-300 [&>div>p]:font-light [&>div>p]:leading-relaxed [&>div>p]:mb-6 [&>div>p]:text-base [&>div>p]:md:text-lg
                            [&>div>h3]:text-2xl [&>div>h3]:md:text-3xl [&>div>h3]:font-bold [&>div>h3]:text-white [&>div>h3]:mt-10 [&>div>h3]:mb-4 [&>div>h3]:text-[#D4AF37]
                            [&>div>ul]:mb-8 [&>div>ul]:list-disc [&>div>ul]:pl-6 [&>div>ul>li]:text-gray-300 [&>div>ul>li]:mb-3
                            [&>div>blockquote]:border-l-4 [&>div>blockquote]:border-[#D4AF37] [&>div>blockquote]:pl-6 [&>div>blockquote]:italic [&>div>blockquote]:text-xl [&>div>blockquote]:text-gray-200 [&>div>blockquote]:my-8 [&>div>blockquote]:bg-white/5 [&>div>blockquote]:py-4 [&>div>blockquote]:rounded-r-xl
                        ">
                            <div dangerouslySetInnerHTML={{ __html: post.content }} />
                        </div>

                        {/* CTA WhatsApp Box */}
                        <div className="my-16 p-8 md:p-12 bg-gradient-to-br from-[#0a0a0a] to-[#121212] border border-[#D4AF37]/30 rounded-3xl text-left space-y-6 shadow-2xl">
                            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                                Quer aplicar essa estrutura na sua empresa?
                            </h3>
                            <p className="text-gray-400 font-light text-base leading-relaxed">
                                Agende uma análise direta com Rodrigo Rodrigues. Vamos avaliar sua presença no Google e Instagram para desenhar seu fluxo comercial.
                            </p>
                            <a
                                href="https://wa.me/5521979043854?text=Olá%2C+li+o+artigo+no+blog+e+quero+uma+análise+da+minha+empresa."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-[#D4AF37] hover:bg-[#F5D142] text-black text-sm font-bold uppercase tracking-wider px-8 py-4 rounded-2xl transition-all shadow-lg"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Conversar no WhatsApp
                            </a>
                        </div>

                        {/* Author Box */}
                        <div className="mt-16 bg-[#0a0a0a] p-8 rounded-3xl border border-white/10 flex flex-col md:flex-row items-center gap-8">
                            <img src={profileImg} alt="Rodrigo Rodrigues" className="w-24 h-24 rounded-2xl object-cover border border-[#D4AF37]/30" />
                            <div className="text-center md:text-left space-y-2">
                                <h4 className="font-bold text-xl text-white">Rodrigo Rodrigues</h4>
                                <p className="text-xs font-mono text-[#D4AF37] uppercase tracking-wider">Estrategista Comercial & Fundador da Migração Digital</p>
                                <p className="text-gray-400 text-sm font-light leading-relaxed">
                                    Mais de 100 empresas e clínicas atendidas com estratégias de tráfego direto, SEO local e estruturação comercial de vendas no WhatsApp.
                                </p>
                            </div>
                        </div>
                    </div>
                </article>
            </main>

            {/* Footer */}
            <footer className="py-12 bg-black border-t border-white/10 text-gray-500 font-sans">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3">
                        <img src="/logo.png" alt="Migração Digital" className="h-7 w-auto object-contain brightness-0 invert opacity-80" />
                        <span className="text-base font-bold text-white tracking-tight">MIGRAÇÃO DIGITAL</span>
                    </div>

                    <div className="flex items-center gap-6 text-xs font-mono uppercase tracking-widest text-gray-400">
                        <Link to="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
                        <Link to="/blog" className="hover:text-[#D4AF37] transition-colors">Blog</Link>
                        <a href="https://wa.me/5521979043854?text=Olá%2C+gostaria+de+falar+com+o+estrategista." target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">WhatsApp</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
