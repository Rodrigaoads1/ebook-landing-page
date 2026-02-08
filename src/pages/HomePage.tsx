
import { Link } from 'react-router-dom';
import { Target, Zap, ShieldCheck, ArrowUpRight, CheckCircle2, HelpCircle, MessageCircle } from 'lucide-react';
import profileImg from '../assets/rodrigo_analise_extra.png';
import { SocialProof } from '../components/SocialProof';

export function HomePage() {
    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-[#D4AF37]/30 selection:text-[#D4AF37] font-sans overflow-x-hidden">

            {/* Nav */}
            <nav className="fixed top-0 w-full z-[100] bg-black/50 backdrop-blur-xl border-b border-white/5 py-5 px-6">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <span className="text-xl md:text-2xl font-black bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] bg-clip-text text-transparent tracking-tighter">
                        MIGRAÇÃO DIGITAL
                    </span>
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#metodo" className="text-sm font-medium text-gray-400 hover:text-[#D4AF37] transition-colors">O Método</a>
                        <Link to="/blog" className="text-sm font-medium text-gray-400 hover:text-[#D4AF37] transition-colors">Blog</Link>
                        <a href="#sobre" className="text-sm font-medium text-gray-400 hover:text-[#D4AF37] transition-colors">Sobre</a>
                        <Link
                            to="/ebook"
                            className="bg-white/5 border border-white/10 px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#D4AF37] hover:text-black hover:border-transparent transition-all"
                        >
                            Começar Agora
                        </Link>
                    </div>
                </div>
            </nav>

            <main>
                {/* [HERO] SECTION */}
                <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 px-6 overflow-hidden">
                    <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[600px] bg-[#D4AF37]/10 blur-[150px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-[10%] left-[-10%] w-[50%] h-[500px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

                    <div className="max-w-7xl mx-auto text-center relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#D4AF37] text-xs font-black uppercase tracking-[0.3em] mb-8 animate-fade-in">
                            Estratégia • Previsibilidade • Estrutura
                        </div>

                        <h1 className="text-4xl md:text-8xl font-serif font-bold leading-[1.05] tracking-tight mb-8">
                            Marketing sem estratégia <br className="hidden md:block" />
                            é só <span className="text-[#D4AF37] italic">barulho.</span>
                        </h1>

                        <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
                            Desenho sistemas de aquisição previsíveis para profissionais liberais, clínicas e empresas de serviços que cansaram de depender apenas de indicações e posts aleatórios.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <Link
                                to="/ebook"
                                className="w-full md:w-auto bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black font-black py-6 px-12 rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.05] hover:shadow-[0_20px_50px_rgba(212,175,55,0.3)] transition-all text-xl"
                            >
                                Baixar Checklist Estratégico
                                <ArrowUpRight className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* [DORES] SECTION */}
                <section className="py-24 bg-[#080808] border-y border-white/5 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Por que sua estrutura atual <br/>não gera previsibilidade?</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                { title: "Indicações Instáveis", desc: "Você vive o ciclo do 'mês bom e mês ruim' porque não controla a entrada de novos leads." },
                                { title: "Marketing de Esperança", desc: "Posta conteúdo e faz anúncios sem um funil claro, esperando que alguém apareça." },
                                { title: "Invisibilidade Digital", desc: "Sua competência técnica é alta, mas seu posicionamento online não reflete sua autoridade." },
                                { title: "Dependência Vital", desc: "O processo de vendas depende 100% de você. Se você para, o faturamento estaciona." }
                            ].map((item, i) => (
                                <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl hover:border-[#D4AF37]/40 transition-all group">
                                    <h3 className="text-xl font-bold mb-4 text-[#D4AF37]">{item.title}</h3>
                                    <p className="text-gray-400 font-light leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* [COMO FUNCIONA / MÉTODO] SECTION */}
                <section id="metodo" className="py-32 px-6 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto text-center mb-24">
                        <div className="inline-block px-4 py-2 bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-black uppercase tracking-widest rounded-full mb-6">
                            Minha Metodologia
                        </div>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Sistema de Aquisição <span className="text-[#D4AF37] italic">Previsível™</span></h2>
                        <p className="text-gray-400 text-xl max-w-2xl mx-auto font-light">Estrutura antes do tráfego. Clareza antes da conversão.</p>
                    </div>

                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                        {[
                            { step: "01", title: "Fundação Estratégica", desc: "Ajustamos sua mensagem e posicionamento para atrair o cliente ideal, não apenas curiosos." },
                            { step: "02", title: "Estrutura de Conversão", desc: "Criamos os ativos (landing pages, funis, automações) que preparam o lead para a compra." },
                            { step: "03", title: "Escala com Tráfego", desc: "Injetamos audiência qualificada em um sistema que já sabemos que funciona." }
                        ].map((item, i) => (
                            <div key={i} className="relative p-10 bg-[#111] rounded-[40px] border border-white/5 hover:border-[#D4AF37]/20 transition-all">
                                <span className="text-5xl font-serif font-black text-white/5 absolute top-8 right-10">{item.step}</span>
                                <h4 className="text-2xl font-bold mb-6">{item.title}</h4>
                                <p className="text-gray-500 font-light leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* [SOCIAL PROOF / AUTHORITY] SECTION */}
                <section id="sobre" className="py-32 px-6 bg-[#050505]">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative">
                            <div className="absolute -inset-10 bg-[#D4AF37]/10 blur-[100px] rounded-full opacity-40 animate-pulse" />
                            <div className="relative rounded-[60px] overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a]">
                                <img
                                    src={profileImg}
                                    alt="Rodrigo Rodrigues"
                                    className="w-full h-auto grayscale-[20%] contrast-110"
                                />
                                <div className="absolute bottom-10 left-10 p-6 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10">
                                    <p className="text-2xl font-bold text-[#D4AF37]">Rodrigo Rodrigues</p>
                                    <p className="text-gray-400 text-sm">Estrategista Digital</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="inline-block px-4 py-2 bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-black uppercase tracking-widest rounded-full mb-8">
                                O Estrategista
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">5 anos de mercado, <br /><span className="text-[#D4AF37]">50+ nichos atendidos.</span></h2>
                            
                            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
                                <p>Vi os bastidores de empresas reais — de clínicas a grandes operações de serviços. Descobri que experts vivem de indicações instáveis simplesmente por falta de um sistema digital estruturado.</p>
                                <p>Meu trabalho é desenhar o funil completo: atração, conversão e venda. <strong className="text-white">"Marketing sem estratégia é só barulho."</strong></p>
                            </div>

                            <div className="mt-12 grid grid-cols-2 gap-8">
                                <div className="flex flex-col">
                                    <CheckCircle2 className="w-8 h-8 text-[#D4AF37] mb-3" />
                                    <p className="text-white font-bold text-sm uppercase tracking-widest">+50 Nichos Atendidos</p>
                                    <p className="text-gray-600 text-xs text-balance">Clínicas, consultórios e empresas de serviços.</p>
                                </div>
                                <div className="flex flex-col">
                                    <CheckCircle2 className="w-8 h-8 text-[#D4AF37] mb-3" />
                                    <p className="text-white font-bold text-sm uppercase tracking-widest">+100 Funis Estruturados</p>
                                    <p className="text-gray-600 text-xs">Transformando tráfego em faturamento real.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <SocialProof />

                {/* [OFERTA] SECTION */}
                <section className="py-40 px-6 relative overflow-hidden bg-white/[0.01]">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[800px] bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none" />

                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <div className="inline-block px-4 py-1.5 bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.3em] mb-8 rounded-full">
                            Oferta Exclusiva
                        </div>
                        <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 tracking-tighter">
                            A primeira vitória por <span className="text-[#D4AF37] italic">R$ 19,90.</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-gray-400 mb-12 font-light leading-relaxed">
                            O Checklist Estratégico: 7 sinais que sua clínica ou empresa está perdendo dinheiro. <br className="hidden md:block"/>
                            <span className="text-white font-medium">Bônus: Análise gratuita do seu site para os primeiros 50 inscritos.</span>
                        </p>

                        <div className="flex flex-col items-center gap-8">
                            <Link
                                to="/ebook"
                                className="w-full md:w-auto bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black font-black py-8 px-16 rounded-[32px] flex items-center justify-center gap-3 hover:scale-[1.05] hover:shadow-[0_20px_50px_rgba(212,175,55,0.4)] transition-all text-2xl group"
                            >
                                <Target className="w-8 h-8 group-hover:rotate-12 transition-transform" />
                                Garantir Ebook + Bônus
                            </Link>
                            <div className="flex items-center gap-4 text-gray-500 text-xs font-black uppercase tracking-[0.3em]">
                                <ShieldCheck className="w-5 h-5 text-[#D4AF37]" /> Apenas 50 vagas para o bônus de análise
                            </div>
                        </div>
                    </div>
                </section>

                {/* [FAQ] SECTION */}
                <section className="py-32 px-6 border-t border-white/5 bg-[#030303]">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-4xl font-serif font-bold">Dúvidas Frequentes</h2>
                        </div>
                        <div className="space-y-6">
                            {[
                                { q: "Meu nicho é muito específico, funciona?", a: "Sim. Já atendemos mais de 50 nichos diferentes. O Sistema de Aquisição Previsível foca no comportamento de compra humano, que é universal." },
                                { q: "Preciso ser um 'influencer' para dar certo?", a: "Absolutamente não. Nosso foco é estrutura comercial e anúncios. Você precisa ser um expert no seu serviço, não um criador de conteúdo em tempo integral." },
                                { q: "Já tentei fazer tráfego pago e não tive resultado. Por que agora seria diferente?", a: "Provavelmente você injetou tráfego em uma estrutura fraca. Sem estratégia, o tráfego só acelera o desperdício de dinheiro. Nós corrigimos a estrutura antes." },
                                { q: "Sou profissional autônomo. Esse sistema é para mim?", a: "É perfeito para você. O objetivo é criar um sistema que trabalha por você, filtrando os melhores clientes e economizando seu tempo de prospecção." },
                                { q: "Como recebo o bônus da análise gratuita?", a: "Após garantir seu ebook por R$ 19,90, se você estiver entre as 50 primeiras vagas, nossa equipe entrará em contato para agendar o diagnóstico." }
                            ].map((item, i) => (
                                <div key={i} className="p-8 border border-white/5 bg-white/[0.02] rounded-3xl">
                                    <h4 className="text-lg font-bold mb-4 flex items-start gap-3">
                                        <HelpCircle className="w-6 h-6 text-[#D4AF37] shrink-0 mt-1" />
                                        {item.q}
                                    </h4>
                                    <p className="text-gray-400 font-light leading-relaxed pl-9">{item.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <footer className="py-20 border-t border-white/5 bg-black">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12 font-medium">
                    <div className="text-center md:text-left">
                        <span className="text-2xl font-black bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] bg-clip-text text-transparent tracking-tighter mb-4 block">MIGRAÇÃO DIGITAL</span>
                        <p className="text-gray-600 text-sm max-w-xs">Estrutura comercial e previsibilidade para profissionais liberais e empresas de serviços.</p>
                    </div>

                    <div className="flex gap-12 text-xs uppercase tracking-widest text-gray-500">
                        <div className="flex flex-col gap-4">
                            <h5 className="text-white font-black mb-2">Páginas</h5>
                            <Link to="/blog" className="hover:text-[#D4AF37]">Blog de Estratégia</Link>
                            <Link to="/ebook" className="hover:text-[#D4AF37]">Ebook Checklist</Link>
                            <Link to="/analise-profissional-de-presenca-digital-02" className="hover:text-[#D4AF37]">Análise Profissional</Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h5 className="text-white font-black mb-2">Comunicação</h5>
                            <a href="https://www.youtube.com/@Rodrigorodrigues-md" className="hover:text-[#D4AF37]">YouTube</a>
                            <a href="https://wa.me/5511999999999" className="hover:text-[#D4AF37]">WhatsApp</a>
                        </div>
                    </div>
                </div>
                <div className="mt-20 pt-10 border-t border-white/5 text-center px-6">
                    <p className="text-gray-700 text-[10px] uppercase tracking-[0.4em]">&copy; 2026 Migração Digital — "Marketing sem estratégia é só barulho."</p>
                </div>
            </footer>

            <style>{`
                html { scroll-behavior: smooth; }
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 1s ease-out forwards;
                }
            `}</style>
        </div>
    );
}
