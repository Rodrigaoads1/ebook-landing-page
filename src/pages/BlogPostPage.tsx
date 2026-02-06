import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { posts } from '../data/posts';
import { SEOHelmet } from '../components/SEOHelmet';
import { ArrowLeft, Calendar, User, MessageCircle } from 'lucide-react';

export function BlogPostPage() {
    const { slug } = useParams<{ slug: string }>();
    const post = posts.find(p => p.slug === slug);
    const [scrollProgress, setScrollProgress] = React.useState(0);

    React.useEffect(() => {
        const handleScroll = () => {
            const totalWidth = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.pageYOffset / totalWidth) * 100;
            setScrollProgress(progress);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!post) {
        return <Navigate to="/blog" />;
    }

    // Process content to add drop cap to first paragraph
    const contentWithDropCap = post.content.replace(
        '<p>',
        '<p class="capitular text-white text-xl md:text-2xl leading-relaxed">'
    );

    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-[#D4AF37]/30 selection:text-[#D4AF37]">
            <SEOHelmet
                title={post.title}
                description={post.metaDescription}
                slug={post.slug}
                article={true}
            />

            {/* Progress Bar */}
            <div className="fixed top-0 left-0 h-[2px] bg-[#D4AF37] z-[200] transition-all duration-300" style={{ width: `${scrollProgress}%` }} />

            <nav className="fixed top-0 w-full z-[100] bg-black/40 backdrop-blur-2xl border-b border-white/5 py-6 px-6">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link to="/" className="text-2xl font-black bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] bg-clip-text text-transparent tracking-tighter">
                        MIGRAÇÃO DIGITAL
                    </Link>
                    <Link to="/blog" className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-[#D4AF37] transition-all">
                        <ArrowLeft className="w-4 h-4" /> Voltar ao Pensamento
                    </Link>
                </div>
            </nav>

            <main className="pt-48 pb-32">
                <article className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-20">

                    <div className="lg:col-span-8">
                        <header className="mb-16">
                            <div className="flex items-center gap-6 text-[10px] text-gray-500 mb-10 font-black uppercase tracking-[0.4em]">
                                <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</span>
                                <span className="text-[#D4AF37]">{post.author}</span>
                            </div>
                            <h1 className="text-5xl md:text-8xl font-serif font-bold mb-12 leading-[0.9] tracking-tighter">
                                {post.title}
                            </h1>
                            <div className="aspect-[21/9] rounded-[40px] overflow-hidden border border-white/5 bg-white/[0.02]">
                                <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
                            </div>
                        </header>

                        <div
                            className="prose prose-invert prose-gold max-w-none text-gray-400 text-lg leading-relaxed font-light mb-24"
                            dangerouslySetInnerHTML={{ __html: contentWithDropCap }}
                        />

                        {/* Author Bio */}
                        <div className="pt-16 border-t border-white/5 flex items-center gap-8">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8960C] p-[2px]">
                                <div className="w-full h-full rounded-full bg-black overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Autor" className="w-full h-full object-cover grayscale" />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-white font-serif font-bold text-xl mb-2">{post.author}</h4>
                                <p className="text-gray-500 text-sm font-light">Estrategista Digital e Fundador da Migração Digital. Especialista em acelerar faturamento através de tecnologia e posicionamento de elite.</p>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar de Conversão */}
                    <aside className="lg:col-span-4 lg:pt-20">
                        <div className="lg:sticky lg:top-40 space-y-12">
                            <div className="p-10 bg-white/[0.02] border border-[#D4AF37]/20 rounded-[40px] text-center">
                                <MessageCircle className="w-12 h-12 text-[#D4AF37] mx-auto mb-6" />
                                <h3 className="text-2xl font-serif font-bold mb-4">Análise Profissional</h3>
                                <p className="text-gray-500 text-sm mb-8 leading-relaxed">Sua empresa merece ser vista como líder. Vamos descobrir o caminho?</p>
                                <a
                                    href="https://wa.me/5511999999999"
                                    className="block w-full bg-[#D4AF37] text-black text-[10px] font-black uppercase tracking-[0.3em] py-5 rounded-2xl hover:scale-105 transition-all"
                                >
                                    Agendar Diagnóstico
                                </a>
                            </div>

                            <div className="space-y-6">
                                <h4 className="text-[10px] text-gray-600 font-black uppercase tracking-[0.4em]">Compartilhar Insight</h4>
                                <div className="flex gap-4">
                                    {['LinkedIn', 'WhatsApp', 'X'].map(social => (
                                        <button key={social} className="flex-1 py-3 border border-white/5 rounded-xl text-[10px] text-gray-500 font-black uppercase tracking-widest hover:border-[#D4AF37]/30 hover:text-white transition-all">
                                            {social}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>
                </article>
            </main>

            <footer className="py-24 border-t border-white/5 bg-black text-center text-gray-800 text-[10px] uppercase tracking-[0.4em]">
                &copy; 2026 Migração Digital — Direção Estratégica por Rodrigo Rodrigues.
            </footer>

            <style>{`
                .prose h3 { color: #D4AF37; font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: 700; margin-top: 4rem; margin-bottom: 2rem; line-height: 1.1; }
                .prose p { margin-bottom: 2rem; color: #9CA3AF; }
                .prose strong { color: white; font-weight: 700; }
                .prose ul { margin-bottom: 2.5rem; list-style-type: none; padding-left: 0; }
                .prose li { position: relative; padding-left: 2rem; margin-bottom: 1rem; }
                .prose li::before { content: ''; position: absolute; left: 0; top: 0.7rem; width: 0.5rem; height: 1px; background: #D4AF37; }
                .prose blockquote { border-left: none; padding: 3rem 0; font-family: 'Playfair Display', serif; font-style: italic; font-size: 2rem; color: white; line-height: 1.4; position: relative; text-align: center; }
                .prose blockquote::before { content: '"'; position: absolute; top: 0; left: 50%; transform: translateX(-50%); color: #D4AF37; font-size: 4rem; opacity: 0.2; }
            `}</style>
        </div>
    );
}
