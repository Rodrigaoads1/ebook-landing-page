import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { posts } from '../data/posts';
import { SEOHelmet } from '../components/SEOHelmet';
import { ArrowLeft, Calendar, MessageCircle, Zap } from 'lucide-react';

export function BlogPostPage() {
    const { slug } = useParams<{ slug: string }>();
    const post = posts.find(p => p.slug === slug);
    const [scrollProgress, setScrollProgress] = React.useState(0);

    const relatedPosts = posts.filter(p => p.slug !== slug).slice(0, 2);

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

    // Split content to insert a middle CTA if possible
    const paragraphs = post.content.split('</p>');
    const middleIndex = Math.floor(paragraphs.length / 2);

    const contentWithBanners = paragraphs.map((p, i) => {
        let content = p + (p.trim() ? '</p>' : '');

        // Insert drop cap on first paragraph
        if (i === 0) {
            content = content.replace('<p>', '<p class="capitular text-white text-xl md:text-2xl leading-relaxed">');
        }

        // Insert middle banner
        if (i === middleIndex && paragraphs.length > 2) {
            return content + `
                <div class="my-16 p-10 bg-gradient-to-br from-[#D4AF37]/20 to-transparent border border-[#D4AF37]/30 rounded-[40px] text-center">
                    <h4 class="text-2xl font-heading font-bold mb-4 text-white">Precisa de escala real no seu faturamento?</h4>
                    <p class="text-gray-400 text-sm mb-8">Nossa análise estratégica já gerou ROI de 8x para mais de 120 clientes elite.</p>
                    <a href="https://wa.me/5511999999999" class="inline-block bg-[#D4AF37] text-black text-[10px] font-black uppercase tracking-[0.3em] py-4 px-10 rounded-xl hover:scale-105 transition-all">Quero um Diagnóstico Gratuito</a>
                </div>
            `;
        }
        return content;
    }).join('');

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

            {/* Header Sticky (Same as BlogPage) */}
            <header className="fixed top-0 w-full z-[100] bg-black/60 backdrop-blur-2xl border-b border-white/5 py-4 px-6 md:px-12">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-[#D4AF37] to-[#B8960C] rounded-lg flex items-center justify-center font-black text-black text-lg">MD</div>
                        <span className="text-xl font-heading font-bold tracking-tighter">MIGRAÇÃO<span className="text-[#D4AF37]">DIGITAL</span></span>
                    </Link>
                    <Link to="/blog" className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-[#D4AF37] transition-all">
                        <ArrowLeft className="w-4 h-4" /> Voltar ao Pensamento
                    </Link>
                </div>
            </header>

            <main className="pt-48 pb-32">
                <article className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-20">

                    <div className="lg:col-span-8">
                        <header className="mb-16">
                            <div className="flex items-center gap-6 text-[10px] text-gray-500 mb-10 font-black uppercase tracking-[0.4em]">
                                <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</span>
                                <span className="text-[#D4AF37] font-bold">{post.category}</span>
                            </div>
                            <h1 className="text-5xl md:text-8xl font-heading font-bold mb-12 leading-[0.95] tracking-tighter">
                                {post.title}
                            </h1>
                            <div className="aspect-[21/9] rounded-[40px] overflow-hidden border border-white/5 bg-white/[0.02]">
                                <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
                            </div>
                        </header>

                        <div
                            className="prose prose-invert prose-gold max-w-none text-gray-400 text-lg leading-relaxed font-light mb-24"
                            dangerouslySetInnerHTML={{ __html: contentWithBanners }}
                        />

                        {/* End of Article Banner */}
                        <div className="p-12 md:p-16 border border-white/10 rounded-[40px] bg-white/[0.02] text-center mb-24">
                            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white leading-tight">Pronto para o Próximo Nível?</h2>
                            <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto font-light">Não deixe sua estratégia digital no amadorismo. Fale com um estrategista sênior e mude seu jogo hoje.</p>
                            <a
                                href="https://wa.me/5511999999999"
                                className="inline-flex items-center gap-4 bg-[#D4AF37] text-black text-xs font-black uppercase tracking-[0.3em] py-6 px-12 rounded-2xl hover:scale-105 transition-all shadow-xl shadow-[#D4AF37]/20"
                            >
                                <MessageCircle className="w-6 h-6" /> Agendar meu Diagnóstico Free
                            </a>
                        </div>

                        {/* Related Posts */}
                        <div className="pt-24 border-t border-white/5">
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-600 mb-12 italic">Pode interessar você:</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                {relatedPosts.map(rp => (
                                    <Link key={rp.id} to={`/blog/${rp.slug}`} className="group">
                                        <div className="aspect-video rounded-3xl overflow-hidden mb-6 border border-white/5">
                                            <img src={rp.coverImage} alt={rp.title} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" />
                                        </div>
                                        <h5 className="text-xl font-heading font-bold group-hover:text-[#D4AF37] transition-all">{rp.title}</h5>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar de Conversão */}
                    <aside className="lg:col-span-4 lg:pt-20">
                        <div className="lg:sticky lg:top-40 space-y-12">
                            {/* Lead Magnet CTA */}
                            <div className="p-10 bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 rounded-[40px] text-center">
                                <Zap className="w-10 h-10 text-[#D4AF37] mx-auto mb-8" />
                                <h3 className="text-2xl font-heading font-bold mb-4">Checklist Gratuito</h3>
                                <p className="text-gray-500 text-sm mb-8 leading-relaxed">Descubra os 7 sinais que estão drenando seu faturamento.</p>
                                <a
                                    href="https://pay.kiwify.com.br/GhaKpCv"
                                    className="block w-full bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] py-5 rounded-2xl hover:bg-[#D4AF37] transition-all"
                                >
                                    Baixar Checklist
                                </a>
                            </div>

                            <div className="pt-12 border-t border-white/5">
                                <h4 className="text-[10px] text-gray-600 font-black uppercase tracking-[0.4em] mb-8">Compartilhar</h4>
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
                .prose h3 { color: #D4AF37; font-family: 'Space Grotesk', sans-serif; font-size: 2.5rem; font-weight: 700; margin-top: 4rem; margin-bottom: 2rem; line-height: 1.1; letter-spacing: -0.02em; }
                .prose p { margin-bottom: 2rem; color: #9CA3AF; }
                .prose strong { color: white; font-weight: 700; }
                .prose ul { margin-bottom: 2.5rem; list-style-type: none; padding-left: 0; }
                .prose li { position: relative; padding-left: 2rem; margin-bottom: 1rem; }
                .prose li::before { content: ''; position: absolute; left: 0; top: 0.7rem; width: 0.5rem; height: 1px; background: #D4AF37; }
                .prose blockquote { border-left: none; padding: 3rem 0; font-family: 'Playfair Display', serif; font-style: italic; font-size: 2rem; color: white; line-height: 1.4; position: relative; text-align: center; }
                .prose blockquote::before { content: '"'; position: absolute; top: 0; left: 50%; transform: translateX(-50%); color: #D4AF37; font-size: 4rem; opacity: 0.2; }
                .capitular::first-letter {
                    float: left;
                    font-family: 'Playfair Display', serif;
                    font-size: 4.5rem;
                    line-height: 1;
                    padding-right: 0.5rem;
                    color: #D4AF37;
                    font-weight: 700;
                }
            `}</style>
        </div>
    );
}
