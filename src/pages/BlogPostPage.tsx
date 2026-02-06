import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { posts } from '../data/posts';
import { SEOHelmet } from '../components/SEOHelmet';
import { ArrowLeft, Calendar, MessageCircle, Zap, Users, ArrowRight } from 'lucide-react';

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

    const paragraphs = post.content.split('</p>');
    const middleIndex = Math.floor(paragraphs.length / 2);

    const contentWithBanners = paragraphs.map((p, i) => {
        let content = p + (p.trim() ? '</p>' : '');

        if (i === 0) {
            content = content.replace('<p>', '<p class="capitular text-white text-xl md:text-2xl leading-relaxed font-light">');
        }

        if (i === middleIndex && paragraphs.length > 2) {
            return content + `
                <div class="my-20 p-12 bg-white/[0.03] backdrop-blur-xl border border-[#D4AF37]/30 rounded-[40px] text-center relative overflow-hidden group">
                    <div class="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent pointer-events-none" />
                    <Zap class="w-12 h-12 text-[#D4AF37] mx-auto mb-8 animate-pulse" />
                    <h4 class="text-3xl font-heading font-bold mb-6 text-white tracking-tighter">Sua empresa merece o posicionamento de elite.</h4>
                    <p class="text-gray-400 text-lg mb-10 font-light max-w-xl mx-auto">Nossa metodologia já escalou o faturamento de centenas de negócios através de dados e psicologia de conversão.</p>
                    <a href="https://wa.me/5511999999999" class="inline-flex items-center gap-4 bg-[#D4AF37] text-black text-[10px] font-black uppercase tracking-[0.3em] py-5 px-12 rounded-2xl hover:scale-105 transition-all shadow-2xl shadow-[#D4AF37]/20">Quero meu Diagnóstico Free</a>
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

            {/* Reading Progress Line */}
            <div className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] z-[200] transition-all duration-300" style={{ width: `${scrollProgress}%` }} />

            {/* Nano-Navbar (Same as BlogPage) */}
            <header className="fixed top-0 w-full z-[100] py-6 px-6 md:px-12">
                <div className="max-w-7xl mx-auto flex justify-between items-center bg-black/40 backdrop-blur-3xl border border-white/5 rounded-3xl py-4 px-8 shadow-2xl">
                    <Link to="/blog" className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-white transition-all group">
                        <ArrowLeft className="w-4 h-4 text-[#D4AF37] group-hover:-translate-x-2 transition-transform" /> Voltar ao Pensamento
                    </Link>
                    <Link to="/" className="text-xl font-heading font-bold tracking-tighter">MIGRAÇÃO<span className="text-[#D4AF37]">DIGITAL</span></Link>
                    <div className="hidden md:flex gap-6">
                        {['LinkedIn', 'Insta'].map(s => <button key={s} className="text-[10px] font-black uppercase tracking-widest text-gray-600 hover:text-white transition-all">{s}</button>)}
                    </div>
                </div>
            </header>

            <main className="pt-48 pb-32 relative">
                <div className="max-w-4xl mx-auto px-6">

                    <header className="mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.4em] mb-12">
                            {post.category} &bull; 5 min de leitura
                        </div>
                        <h1 className="text-5xl md:text-8xl font-heading font-bold mb-12 leading-[0.95] tracking-tighter">
                            {post.title}
                        </h1>

                        <div className="flex items-center gap-6 mb-16 border-b border-white/5 pb-12">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#B8960C] p-[2px]">
                                <div className="w-full h-full rounded-2xl bg-black overflow-hidden">
                                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Autor" className="w-full h-full object-cover grayscale" />
                                </div>
                            </div>
                            <div>
                                <h4 className="text-white font-heading font-bold text-xl">{post.author}</h4>
                                <p className="text-gray-600 text-[10px] font-black uppercase tracking-widest">Estrategista Digital Sênior</p>
                            </div>
                        </div>

                        <div className="aspect-[21/9] rounded-[40px] overflow-hidden border border-white/5 bg-white/[0.02] shadow-2xl">
                            <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
                        </div>
                    </header>

                    <div
                        className="prose prose-invert prose-gold max-w-none text-gray-400 text-xl leading-[1.7] font-light mb-32"
                        dangerouslySetInnerHTML={{ __html: contentWithBanners }}
                    />

                    {/* End of Article "Bento" CTA */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
                        <div className="p-12 bg-white/[0.02] border border-white/10 rounded-[40px] group">
                            <Users className="w-10 h-10 text-[#D4AF37] mb-8" />
                            <h3 className="text-3xl font-heading font-bold mb-4">Alcance o topo do seu nicho.</h3>
                            <p className="text-gray-500 font-light mb-10 leading-relaxed text-sm">Pare de perder clientes para o amadorismo. Nossos cases provam que técnica e design vendem.</p>
                            <a href="https://wa.me/5511999999999" className="text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.3em] flex items-center gap-2 group-hover:gap-4 transition-all">Falar com o Rodrigo <ArrowRight className="w-4 h-4" /></a>
                        </div>
                        <div className="p-12 bg-gradient-to-br from-[#D4AF37]/5 to-transparent border border-[#D4AF37]/20 rounded-[40px] flex flex-col justify-between">
                            <div>
                                <Zap className="w-10 h-10 text-[#D4AF37] mb-8" />
                                <h3 className="text-3xl font-heading font-bold mb-4">Checklist Grátis</h3>
                                <p className="text-gray-500 font-light text-sm mb-8">Saiba exatamente o que está errado na sua estratégia atual.</p>
                            </div>
                            <a href="https://pay.kiwify.com.br/GhaKpCv" className="bg-[#D4AF37] text-black text-[10px] font-black uppercase tracking-[0.3em] py-5 px-8 rounded-2xl text-center hover:shadow-xl transition-all">Baixar Agora</a>
                        </div>
                    </div>

                    {/* Infinite Content Link */}
                    <div className="pt-24 border-t border-white/5 flex flex-col items-center">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-700 mb-16">Continuar a Jornada</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
                            {relatedPosts.map(rp => (
                                <Link key={rp.id} to={`/blog/${rp.slug}`} className="group block">
                                    <div className="aspect-video rounded-[30px] overflow-hidden mb-8 border border-white/5">
                                        <img src={rp.coverImage} alt={rp.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                                    </div>
                                    <h5 className="text-2xl font-heading font-bold group-hover:text-[#D4AF37] transition-all tracking-tight leading-tight">{rp.title}</h5>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <footer className="py-24 bg-[#030303] border-t border-white/5 text-center px-6">
                <Link to="/" className="text-2xl font-heading font-bold mb-8 block">MIGRAÇÃO<span className="text-[#D4AF37]">DIGITAL</span></Link>
                <div className="flex justify-center gap-12 text-[9px] font-black uppercase tracking-[0.4em] text-gray-700">
                    <p>&copy; 2026 Inteligência de Mercado</p>
                    <button className="hover:text-white transition-colors">Privacidade</button>
                    <button className="hover:text-white transition-colors">Termos</button>
                </div>
            </footer>

            <style>{`
                .prose h3 { color: #D4AF37; font-family: 'Space Grotesk', sans-serif; font-size: 3rem; font-weight: 700; margin-top: 5rem; margin-bottom: 2.5rem; line-height: 1; letter-spacing: -0.04em; }
                .prose p { margin-bottom: 2.5rem; color: #9CA3AF; }
                .prose strong { color: white; font-weight: 700; }
                .prose blockquote { border-left: 2px solid #D4AF37; padding: 2rem 0 2rem 3rem; font-family: 'Playfair Display', serif; font-style: italic; font-size: 2.25rem; color: white; line-height: 1.3; margin: 4rem 0; opacity: 0.9; }
                .capitular::first-letter {
                    float: left;
                    font-family: 'Playfair Display', serif;
                    font-size: 5rem;
                    line-height: 0.85;
                    padding-top: 0.5rem;
                    padding-right: 1rem;
                    color: #D4AF37;
                    font-weight: 700;
                    text-shadow: 0 0 20px rgba(212,175,55,0.3);
                }
            `}</style>
        </div>
    );
}
