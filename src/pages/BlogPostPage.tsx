import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { posts } from '../data/posts';
import { SEOHelmet } from '../components/SEOHelmet';
import { ArrowLeft, Calendar, User, MessageCircle } from 'lucide-react';

export function BlogPostPage() {
    const { slug } = useParams<{ slug: string }>();
    const post = posts.find(p => p.slug === slug);

    if (!post) {
        return <Navigate to="/blog" />;
    }

    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans">
            <SEOHelmet
                title={post.title}
                description={post.metaDescription}
                slug={post.slug}
                article={true}
            />

            <nav className="fixed top-0 w-full z-[100] bg-black/50 backdrop-blur-xl border-b border-white/5 py-5 px-6">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link to="/" className="text-xl md:text-2xl font-black bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] bg-clip-text text-transparent tracking-tighter">
                        MIGRAÇÃO DIGITAL
                    </Link>
                    <Link to="/blog" className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-[#D4AF37] transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Voltar ao Blog
                    </Link>
                </div>
            </nav>

            <main className="pt-32 pb-20">
                <article className="max-w-4xl mx-auto px-6">
                    <header className="mb-12">
                        <div className="flex items-center gap-6 text-xs text-gray-500 mb-8 font-black uppercase tracking-widest">
                            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</span>
                            <span className="flex items-center gap-2 text-[#D4AF37]"><User className="w-4 h-4" /> {post.author}</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">{post.title}</h1>
                        <div className="aspect-[21/9] rounded-[40px] overflow-hidden border border-white/10 mb-12">
                            <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
                        </div>
                    </header>

                    <div
                        className="prose prose-invert prose-gold max-w-none text-gray-400 text-lg leading-relaxed font-light mb-20"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    {/* CTA Box */}
                    <div className="bg-[#121212] border border-[#D4AF37]/20 rounded-[40px] p-10 md:p-16 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37] to-[#B8960C]" />
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 italic">Pronto para migrar seus <br />resultados para o próximo nível?</h2>
                        <p className="text-gray-400 mb-10 max-w-xl mx-auto">Agende um diagnóstico gratuito e descubra como o Sistema MAE™ pode escalar seu faturamento através de posicionamento e tecnologia.</p>
                        <a
                            href="https://wa.me/5511999999999"
                            className="inline-flex items-center gap-3 bg-[#D4AF37] text-black font-black py-6 px-12 rounded-2xl hover:scale-105 transition-all text-xl"
                        >
                            <MessageCircle className="w-6 h-6" /> Agendar meu Diagnóstico
                        </a>
                    </div>
                </article>
            </main>

            <footer className="py-20 border-t border-white/5 bg-black text-center text-gray-700 text-[10px] uppercase tracking-[0.4em]">
                &copy; 2026 Migração Digital — Direção Estratégica por Rodrigo Rodrigues.
            </footer>

            <style>{`
        .prose h3 { color: #D4AF37; font-family: serif; font-size: 1.875rem; font-weight: 700; margin-top: 2.5rem; margin-bottom: 1.25rem; }
        .prose p { margin-bottom: 1.5rem; }
        .prose strong { color: white; font-weight: 700; }
      `}</style>
        </div>
    );
}
