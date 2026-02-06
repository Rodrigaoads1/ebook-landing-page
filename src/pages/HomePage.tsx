import { Link } from 'react-router-dom';
import { Target, Zap, ShieldCheck, ChevronRight, MessageSquare, MessageCircle, BarChart3, Users, Globe, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import profileImg from '../assets/rodrigo_analise_extra.png';

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
                        <a href="#solucoes" className="text-sm font-medium text-gray-400 hover:text-[#D4AF37] transition-colors">Soluções</a>
                        <a href="#metodo" className="text-sm font-medium text-gray-400 hover:text-[#D4AF37] transition-colors">O Método</a>
                        <Link to="/blog" className="text-sm font-medium text-gray-400 hover:text-[#D4AF37] transition-colors">Blog</Link>
                        <a href="#rodrigo" className="text-sm font-medium text-gray-400 hover:text-[#D4AF37] transition-colors">O Estrategista</a>
                        <a
                            href="https://wa.me/5511999999999"
                            className="bg-white/5 border border-white/10 px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#D4AF37] hover:text-black hover:border-transparent transition-all"
                        >
                            Falar com Estrategista
                        </a>
                    </div>
                </div>
            </nav>

            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 px-6 overflow-hidden">
                    {/* Atmospheric Glows */}
                    <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[600px] bg-[#D4AF37]/10 blur-[150px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-[10%] left-[-10%] w-[50%] h-[500px] bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

                    <div className="max-w-7xl mx-auto text-center relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#D4AF37] text-xs font-black uppercase tracking-[0.3em] mb-8 animate-fade-in">
                            Estratégia • Posicionamento • Tecnologia
                        </div>

                        <h1 className="text-5xl md:text-8xl font-serif font-bold leading-[1.05] tracking-tight mb-8">
                            Transformamos Especialistas <br className="hidden md:block" />
                            em <span className="text-[#D4AF37] italic">Autoridades Lucrativas.</span>
                        </h1>

                        <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
                            A Migração Digital não é apenas uma agência de marketing. Somos o braço estratégico de profissionais liberais que buscam escala através de posicionamento único e sistemas de vendas automáticos.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <a
                                href="https://wa.me/5511999999999"
                                className="w-full md:w-auto bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black font-black py-6 px-12 rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.05] hover:shadow-[0_20px_50px_rgba(212,175,55,0.3)] transition-all text-xl"
                            >
                                Escalar meu Faturamento
                                <ArrowUpRight className="w-6 h-6" />
                            </a>
                            <a
                                href="#solucoes"
                                className="w-full md:w-auto bg-white/5 border border-white/10 text-white font-bold py-6 px-12 rounded-2xl hover:bg-white/10 transition-all text-xl"
                            >
                                Ver Nossas Soluções
                            </a>
                        </div>
                    </div>
                </section>

                {/* Numbers / Trust Section */}
                <section className="py-12 border-y border-white/5 bg-black/30 backdrop-blur-sm">
                    <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                        {[
                            { val: "+500", label: "Diagnósticos" },
                            { val: "R$ 0,00", label: "Desperdício" }, // Focused on efficiency
                            { val: "100%", label: "Personalizado" },
                            { val: "24/7", label: "Escala Digital" }
                        ].map((item, i) => (
                            <div key={i} className="group">
                                <p className="text-3xl md:text-5xl font-serif font-bold text-white mb-1 group-hover:text-[#D4AF37] transition-colors">{item.val}</p>
                                <p className="text-[10px] uppercase tracking-[0.4em] font-black text-gray-600">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Solutions Section */}
                <section id="solucoes" className="py-32 px-6 relative">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                            <div className="max-w-2xl">
                                <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Onde a Estratégia <br />encontra a Conversão.</h2>
                                <p className="text-gray-400 text-lg md:text-xl font-light">Nossas frentes de atuação são projetadas para estancar a perda de faturamento e criar fluxos previsíveis de atraçao de clientes qualificados.</p>
                            </div>
                            <div className="h-[1px] flex-grow bg-white/10 hidden md:block mx-12 mb-4" />
                            <Target className="w-16 h-16 text-[#D4AF37] opacity-20 hidden md:block" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Posicionamento Único",
                                    desc: "Não fazemos marketing de conteúdo. Construímos narrativas que transformam você na única opção viável para o seu cliente ideal.",
                                    icon: Target
                                },
                                {
                                    title: "Infraestrutura de Escala",
                                    desc: "Landing pages, integrações e ferramentas. Criamos a base tecnológica necessária para que seu processo de vendas não dependa de você.",
                                    icon: Zap
                                },
                                {
                                    title: "Funis de Vendas",
                                    desc: "Construção de caminhos estratégicos que educam o lead e o preparam para a compra, desde a primeira impressão até o fechamento.",
                                    icon: Users
                                }
                            ].map((service, i) => (
                                <div key={i} className="group p-10 bg-[#121212] border border-white/5 rounded-[40px] hover:border-[#D4AF37]/30 transition-all duration-500 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.1] transition-opacity">
                                        <service.icon className="w-24 h-24" />
                                    </div>
                                    <service.icon className="w-12 h-12 text-[#D4AF37] mb-8" />
                                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                                    <p className="text-gray-500 leading-relaxed font-light">{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Methodology (Sistema MAE) */}
                <section id="metodo" className="py-32 bg-[#080808] px-6 border-y border-white/5 relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none" />

                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="text-center mb-24">
                            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">O Sistema <span className="text-[#D4AF37] italic">MAE™</span></h2>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">A metodologia que rege cada projeto na Migração Digital. Sem achismos, apenas processos validados.</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                            {[
                                { step: "01", name: "Mentalidade e Mensagem", detail: "O ajuste do seu posicionamento interno e a clareza do que você comunica ao mundo." },
                                { step: "02", name: "Atração e Audiência", detail: "Sistemas para captar a atenção das pessoas certas, no momento certo da jornada." },
                                { step: "03", name: "Execução e Escala", detail: "A implementação técnica e o acompanhamento métrico para expandir o faturamento." }
                            ].map((item, i) => (
                                <div key={i} className="relative flex flex-col items-center text-center">
                                    <div className="text-7xl md:text-9xl font-serif font-black text-white/[0.03] absolute -top-12 leading-none">{item.step}</div>
                                    <h4 className="text-2xl font-bold mb-4 relative z-10">{item.name}</h4>
                                    <p className="text-gray-500 relative z-10 max-w-xs">{item.detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Authority Profile */}
                <section id="rodrigo" className="py-32 px-6 bg-[#050505]">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="absolute -inset-10 bg-[#D4AF37]/10 blur-[100px] rounded-full opacity-40 animate-pulse" />
                            <div className="relative rounded-[60px] overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a]">
                                <img
                                    src={profileImg}
                                    alt="Rodrigo Rodrigues"
                                    className="w-full h-auto grayscale-[20%] contrast-110"
                                />
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <div className="inline-block px-4 py-2 bg-[#D4AF37]/10 text-[#D4AF37] text-xs font-black uppercase tracking-widest rounded-full mb-8">
                                O Estrategista por trás da Agência
                            </div>
                            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">Conectando <br /><span className="text-[#D4AF37]">Pessoas e Negócios.</span></h2>

                            <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
                                <p>Rodrigo Rodrigues fundou a <strong className="text-white">Migração Digital</strong> com uma missão clara: ajudar especialistas qualificados que estão invisíveis no digital a ocuparem seu lugar de direito no mercado.</p>
                                <p>Com um olhar clínico para estratégias de vendas e uma base sólida em tecnologia, Rodrigo unifica as duas pontas que a maioria das agências ignora: a profundidade do posicionamento e a inteligência da automação.</p>
                            </div>

                            <div className="mt-12 grid grid-cols-2 gap-8">
                                <div className="flex flex-col">
                                    <CheckCircle2 className="w-8 h-8 text-[#D4AF37] mb-3" />
                                    <p className="text-white font-bold text-sm uppercase tracking-widest">Leitura Estratégica</p>
                                    <p className="text-gray-600 text-xs">Diagnósticos precisos para ações rápidas.</p>
                                </div>
                                <div className="flex flex-col">
                                    <CheckCircle2 className="w-8 h-8 text-[#D4AF37] mb-3" />
                                    <p className="text-white font-bold text-sm uppercase tracking-widest">Tecnologia Aplicada</p>
                                    <p className="text-gray-600 text-xs">Transformando complexidade em lucros.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final Call to Action */}
                <section className="py-40 px-6 relative overflow-hidden bg-white/[0.01]">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[800px] bg-[#D4AF37]/5 blur-[150px] rounded-full pointer-events-none" />

                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <h2 className="text-5xl md:text-8xl font-serif font-bold mb-10 tracking-tighter">
                            Pronto para sua <br className="hidden md:block" />
                            <span className="text-[#D4AF37] italic">Migração Digital?</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-gray-400 mb-16 font-light leading-relaxed">
                            Se você busca uma agência que entenda o seu jogo no longo prazo e construa ativos digitais reais, precisamos conversar.
                        </p>

                        <div className="flex flex-col items-center gap-8">
                            <a
                                href="https://wa.me/5511999999999"
                                className="w-full md:w-auto bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black font-black py-8 px-16 rounded-[32px] flex items-center justify-center gap-3 hover:scale-[1.05] hover:shadow-[0_20px_50px_rgba(212,175,55,0.4)] transition-all text-2xl group"
                            >
                                <MessageCircle className="w-8 h-8 group-hover:rotate-12 transition-transform" />
                                Agendar Reunião Estratégica
                            </a>
                            <div className="flex items-center gap-4 text-gray-500 text-xs font-black uppercase tracking-[0.3em]">
                                <ShieldCheck className="w-5 h-5 text-[#D4AF37]" /> Seleção por Diagnóstico Prealinhado
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="py-20 border-t border-white/5 bg-black">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12 font-medium">
                    <div className="text-center md:text-left">
                        <span className="text-2xl font-black bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] bg-clip-text text-transparent tracking-tighter mb-4 block">MIGRAÇÃO DIGITAL</span>
                        <p className="text-gray-600 text-sm max-w-xs">Estratégia, Posicionamento e Tecnologia para especialistas qualificados que buscam escala real.</p>
                    </div>

                    <div className="flex gap-12 text-xs uppercase tracking-widest text-gray-500">
                        <div className="flex flex-col gap-4">
                            <h5 className="text-white font-black mb-2">Páginas</h5>
                            <Link to="/blog" className="hover:text-[#D4AF37]">Blog de Estratégia</Link>
                            <Link to="/ebook" className="hover:text-[#D4AF37]">Checklist 7 Sinais</Link>
                            <Link to="/analise-profissional-de-presenca-digital-02" className="hover:text-[#D4AF37]">Análise Profissional</Link>
                            <Link to="/bio-instagram" className="hover:text-[#D4AF37]">Links Oficiais</Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h5 className="text-white font-black mb-2">Comunicação</h5>
                            <a href="https://www.youtube.com/@Rodrigorodrigues-md" className="hover:text-[#D4AF37]">YouTube</a>
                            <a href="#" className="hover:text-[#D4AF37]">Instagram</a>
                            <a href="#" className="hover:text-[#D4AF37]">LinkedIn</a>
                        </div>
                    </div>
                </div>
                <div className="mt-20 pt-10 border-t border-white/5 text-center px-6">
                    <p className="text-gray-700 text-[10px] uppercase tracking-[0.4em]">&copy; 2026 Migração Digital — Todos os direitos reservados. Direção Estratégica por Rodrigo Rodrigues.</p>
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
