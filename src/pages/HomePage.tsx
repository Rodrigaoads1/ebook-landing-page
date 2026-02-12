
import { Link } from 'react-router-dom';
import { Target, Zap, ShieldCheck, ArrowUpRight, CheckCircle2, HelpCircle, MessageCircle, XCircle, Download, ArrowRight, TrendingUp, Users } from 'lucide-react';
import profileImg from '../assets/rodrigo_analise_extra.png';
import { SocialProof } from '../components/SocialProof';

export function HomePage() {
    return (
        <div className="min-h-screen bg-[#FAF9F6] text-[#111111] font-sans selection:bg-[#BD9F67]/20 selection:text-[#BD9F67] overflow-x-hidden selection-prestige">

            {/* Navigation: Boutique Edition */}
            <nav className="fixed top-0 w-full z-[140] bg-[#FAF9F6]/90 backdrop-blur-xl border-b border-[#BD9F67]/5 py-6 px-6 md:px-20">
                <div className="max-w-7xl mx-auto flex justify-between items-center font-bold">
                    <Link to="/" className="flex items-center gap-3">
                        <span className="text-xl font-serif font-black tracking-tighter text-[#111111] uppercase italic">M. Digital</span>
                    </Link>
                    <div className="hidden md:flex items-center gap-12">
                        <a href="#metodo" className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-[#BD9F67] transition-all">O Método</a>
                        <Link to="/blog" className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-[#BD9F67] transition-all">Relatórios</Link>
                        <a href="#sobre" className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 hover:text-[#BD9F67] transition-all">Biografia</a>
                        <a
                            href="#servicos"
                            className="bg-[#111111] text-white px-8 py-3 text-[10px] font-black uppercase tracking-[0.4em] hover:bg-[#BD9F67] hover:text-black transition-all shadow-xl"
                        >
                            Soluções
                        </a>
                    </div>
                </div>
            </nav>

            <main>
                {/* HERO: EDITORIAL IMPACT */}
                <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-24 px-6 md:px-20 overflow-hidden bg-[#FAF9F6]">
                    <div className="max-w-7xl mx-auto w-full relative z-10">
                        <div className="inline-flex items-center gap-4 px-8 py-3 bg-[#BD9F67]/5 border border-[#BD9F67]/20 text-[#BD9F67] text-[10px] font-black uppercase tracking-[0.5em] mb-20 animate-fade-in">
                            Volume I — Autoridade & Escala Previsível
                        </div>

                        <h1 className="text-5xl md:text-[8rem] lg:text-[10rem] font-serif font-bold leading-[0.85] tracking-tighter mb-16 text-[#111111] animate-fade-in">
                            Estratégia <br />
                            <span className="italic relative">
                                Precede.
                                <div className="absolute -bottom-4 right-0 w-1/2 h-[1px] bg-[#BD9F67] hidden md:block" />
                            </span>
                        </h1>

                        <div className="flex flex-col md:flex-row gap-20 items-end justify-between animate-fade-in">
                            <div className="max-w-2xl">
                                <h2 className="text-2xl md:text-4xl font-serif text-[#BD9F67] font-bold leading-relaxed mb-10 italic">
                                    "Marketing sem fundamentos é apenas ruído caro."
                                </h2>
                                <p className="text-lg md:text-2xl text-gray-400 font-light leading-relaxed max-wxl">
                                    Desenhamos sistemas de aquisição para marcas que cansaram do marketing de fachada e buscam converter autoridade técnica em faturamento de elite.
                                </p>
                            </div>
                            <div className="flex flex-col gap-8 w-full md:w-auto">
                                <a
                                    href="#servicos"
                                    className="group bg-[#111111] text-white py-10 px-16 text-2xl font-serif font-bold hover:bg-[#BD9F67] hover:text-black transition-all shadow-3xl text-center"
                                >
                                    Agendar Consultoria <ArrowRight className="inline-block ml-4 group-hover:translate-x-2 transition-transform" />
                                </a>
                                <div className="flex justify-between md:justify-end gap-10">
                                    <div className="text-right">
                                        <div className="text-3xl font-serif font-bold mb-1">50+</div>
                                        <div className="text-[8px] font-black uppercase tracking-[0.3em] text-gray-400">Nichos Scaled</div>
                                    </div>
                                    <div className="w-[1px] h-12 bg-gray-100" />
                                    <div className="text-right">
                                        <div className="text-3xl font-serif font-bold mb-1">5.0+</div>
                                        <div className="text-[8px] font-black uppercase tracking-[0.3em] text-gray-400">Years Domain</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* THE INVESTIGATION: WHY YOU'RE STUCK */}
                <section className="py-40 bg-white border-y border-gray-100 px-6 md:px-20 relative overflow-hidden">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
                        <div className="lg:col-span-12 mb-20">
                            <h2 className="text-6xl md:text-[8rem] font-serif font-bold leading-[0.9] tracking-tighter">
                                Pare de pagar por <br /><span className="text-[#BD9F67] italic underline decoration-[#BD9F67]/20 underline-offset-10">Curtidas Inúteis.</span>
                            </h2>
                        </div>
                        <div className="lg:col-span-5">
                            <p className="text-2xl text-gray-400 font-light leading-relaxed mb-12">
                                Muitas agências entregam seguidores e posts bonitos. Nós entregamos <span className="text-[#111111] font-bold">previsibilidade de caixa</span>.
                            </p>
                            <div className="space-y-8">
                                {[
                                    { q: "Agenda Inconstante?", a: "Dependência de indicações orgânicas é o caminho mais rápido para a falência silenciosa." },
                                    { q: "Leads Sem Verba?", a: "Seu funil atual está atraindo curiosos, não investidores. Precisamos de filtragem cirúrgica." },
                                    { q: "Falta de Rastreio?", a: "Quem não sabe o seu CAC (Custo por Aquisição) está jogando roleta russa com o próprio lucro." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-8 group border-l border-gray-100 pl-8 hover:border-[#BD9F67] transition-all">
                                        <div>
                                            <h4 className="text-lg font-bold uppercase tracking-widest mb-2 group-hover:text-[#BD9F67] transition-all">{item.q}</h4>
                                            <p className="text-gray-400 font-light leading-relaxed">{item.a}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:col-span-7">
                            <div className="aspect-[4/3] bg-[#FAF9F6] border border-gray-100 relative overflow-hidden group shadow-2xl">
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-all z-10" />
                                <div className="p-12 md:p-20 flex flex-col justify-center h-full">
                                    <span className="text-[12px] font-black uppercase tracking-[0.5em] text-[#BD9F67] mb-12">The Diagnosis</span>
                                    <h3 className="text-4xl md:text-5xl font-serif font-bold mb-10 italic leading-tight text-[#111111]">O erro não está no seu serviço. Está na forma como você se posiciona.</h3>
                                    <Link to="/analise-profissional-de-presenca-digital-02" className="text-[10px] font-black uppercase tracking-[0.4em] text-[#111111] flex items-center gap-4 hover:translate-x-4 transition-all group">
                                        Solicitar Análise de Elite <ArrowRight className="w-5 h-5 text-[#BD9F67]" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* METHODOLOGY: BOUTIQUE SYSTEM */}
                <section id="metodo" className="py-60 px-6 md:px-20 relative bg-[#FAF9F6]">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-32 border-b border-gray-200 pb-20">
                            <div>
                                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#BD9F67] mb-8 block font-black">Protocolo MD</span>
                                <h2 className="text-6xl md:text-8xl font-serif font-bold leading-none tracking-tighter">O Caminho do <br /><span className="italic">Domínio.</span></h2>
                            </div>
                            <p className="text-gray-400 text-2xl font-light italic max-w-sm">Estrutura antes do tráfego. <br />Essência antes da escala.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-200 bg-white">
                            {[
                                { step: "I", title: "Refinamento de Herança", desc: "Ajustamos sua mensagem para atrair o High-Ticket, eliminando Leads 'baratos' no primeiro toque." },
                                { step: "II", title: "Arquitetura de Ativos", desc: "Criação de Landings, Funis e Automações que educam e vendem enquanto você opera seu negócio." },
                                { step: "III", title: "Expansão de Domínio", desc: "Otimização de Anúncios focados em ROI, não em curtidas. Escala agressiva e previsível." }
                            ].map((item, i) => (
                                <div key={i} className="p-16 border-r border-gray-200 last:border-0 hover:bg-[#FAF9F6] transition-all group">
                                    <span className="text-6xl font-serif font-bold text-gray-100 group-hover:text-[#BD9F67]/20 transition-all block mb-12">{item.step}</span>
                                    <h4 className="text-2xl font-bold mb-8 uppercase tracking-tighter">{item.title}</h4>
                                    <p className="text-gray-400 font-light leading-relaxed text-lg">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <SocialProof />

                {/* THE BOUTIQUE LADDER: SOLUTIONS */}
                <section id="servicos" className="py-40 px-6 md:px-20 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-32">
                            <h2 className="text-5xl md:text-7xl font-serif font-bold mb-10 tracking-tighter">Nosso <span className="italic text-[#BD9F67]">Acervo.</span></h2>
                            <p className="text-gray-400 text-xl font-light italic">Soluções modulares para cada fase do seu império.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                            {/* Checklist */}
                            <div className="p-12 border border-gray-100 hover:border-[#BD9F67]/30 transition-all flex flex-col h-full shadow-sm hover:shadow-2xl hover:-translate-y-2 group bg-[#FAF9F6]">
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300 mb-8">Phase 01</span>
                                <h3 className="text-3xl font-serif font-bold mb-6 italic">Checklist Estratégico</h3>
                                <p className="text-gray-400 text-sm mb-12 leading-relaxed flex-grow">A correção de rota imediata para profissionais que estão perdendo faturamento.</p>
                                <div className="border-t border-gray-200 pt-8 mt-auto">
                                    <div className="flex justify-between items-center mb-8">
                                        <span className="text-2xl font-serif font-black">R$ 19,90</span>
                                        <Download className="w-5 h-5 text-[#BD9F67]" />
                                    </div>
                                    <Link to="/ebook" className="block w-full text-center py-4 bg-[#111111] text-white text-[9px] font-black uppercase tracking-[0.4em] hover:bg-[#BD9F67] hover:text-black transition-all">Acessar Guia</Link>
                                </div>
                            </div>

                            {/* Diagnose */}
                            <div className="p-12 bg-[#111111] text-white flex flex-col h-full shadow-3xl hover:-translate-y-2 transition-all relative">
                                <div className="absolute top-0 right-0 bg-[#BD9F67] text-black text-[9px] font-black px-4 py-2 uppercase tracking-widest">Recommended</div>
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-500 mb-8">Phase 02</span>
                                <h3 className="text-3xl font-serif font-bold mb-6 italic">Diagnóstico de Elite</h3>
                                <p className="text-gray-400 text-sm mb-12 leading-relaxed flex-grow">Análise cirúrgica individual da sua marca. Encontramos os pontos de fuga em 40 minutos.</p>
                                <div className="border-t border-white/5 pt-8 mt-auto">
                                    <div className="flex justify-between items-center mb-8">
                                        <span className="text-2xl font-serif font-black text-[#BD9F67]">R$ 197</span>
                                        <Target className="w-5 h-5 text-[#BD9F67]" />
                                    </div>
                                    <Link to="/analise-profissional-de-presenca-digital-02" className="block w-full text-center py-4 bg-[#BD9F67] text-black text-[9px] font-black uppercase tracking-[0.4em] hover:bg-white transition-all">Garantir Vaga</Link>
                                </div>
                            </div>

                            {/* Full Scale */}
                            <div className="p-12 border border-gray-100 hover:border-[#BD9F67]/30 transition-all flex flex-col h-full shadow-sm hover:shadow-2xl hover:-translate-y-2 group bg-[#FAF9F6]">
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300 mb-8">Phase 03</span>
                                <h3 className="text-3xl font-serif font-bold mb-6 italic">Full System Scale</h3>
                                <p className="text-gray-400 text-sm mb-12 leading-relaxed flex-grow">Implementação ponta-a-ponta + Gestão de Tráfego profissional focada em ROI real.</p>
                                <div className="border-t border-gray-200 pt-8 mt-auto">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-300 block mb-8">Investment: Application</span>
                                    <a href="https://wa.me/5521979043854" className="block w-full text-center py-4 border border-black text-black text-[9px] font-black uppercase tracking-[0.4em] hover:bg-black hover:text-white transition-all">Falar com Estrategista</a>
                                </div>
                            </div>

                            {/* Tailored */}
                            <div className="p-12 border border-gray-100 hover:border-[#BD9F67]/30 transition-all flex flex-col h-full shadow-sm hover:shadow-2xl hover:-translate-y-2 group bg-[#FAF9F6]">
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300 mb-8">Boutique</span>
                                <h3 className="text-3xl font-serif font-bold mb-6 italic">Projetos Sob Medida</h3>
                                <p className="text-gray-400 text-sm mb-12 leading-relaxed flex-grow">Landing Pages de Alta Conversão e Automações com IA customizadas.</p>
                                <div className="border-t border-gray-200 pt-8 mt-auto">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-gray-300 block mb-8">Status: Busy</span>
                                    <a href="https://wa.me/5521979043854" className="block w-full text-center py-4 border border-black text-black text-[9px] font-black uppercase tracking-[0.4em] hover:bg-black hover:text-white transition-all">Consultar Agenda</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* BIOGRAPHY: THE MENTOR */}
                <section id="sobre" className="py-60 px-6 md:px-20 bg-[#FAF9F6]">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                        <div className="relative group">
                            <div className="absolute -inset-10 bg-[#BD9F67]/5 blur-[100px] rounded-full opacity-50 group-hover:opacity-100 transition-all pointer-events-none" />
                            <div className="relative overflow-hidden bg-white p-6 shadow-3xl">
                                <img
                                    src={profileImg}
                                    alt="Rodrigo Rodrigues"
                                    className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000"
                                />
                                <div className="mt-8 border-t border-gray-100 pt-8">
                                    <p className="font-serif font-bold text-3xl italic">Rodrigo Rodrigues</p>
                                    <p className="text-[10px] font-black uppercase tracking-[0.5em] text-[#BD9F67] mt-2">Principal Strategist</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-[#BD9F67] mb-12 block">The Origins</span>
                            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-12 leading-tight tracking-tighter italic">"Marketing sem estratégia é só barulho."</h2>
                            <div className="space-y-10 text-xl font-light text-gray-500 leading-relaxed italic border-l-4 border-[#BD9F67]/20 pl-12">
                                <p>Há mais de 5 anos, vejo os bastidores de empresas reais — de clínicas de alta performance a operações globais de serviços.</p>
                                <p>Descobri que a maioria dos experts não tem um problema de serviço, mas um <span className="text-[#111111] font-bold">problema de fundação</span>. Vivem de indicações instáveis porque seu digital não comunica seu valor real.</p>
                                <p>Meu papel é desenhar o funil onde sua autoridade técnica encontra a previsibilidade comercial.</p>
                            </div>
                            <div className="mt-20 flex gap-12">
                                <div>
                                    <span className="text-4xl font-serif font-bold mb-2 block">100+</span>
                                    <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">Funis Ativos</span>
                                </div>
                                <div className="w-[1px] h-12 bg-gray-200" />
                                <div>
                                    <span className="text-4xl font-serif font-bold mb-2 block">Premium</span>
                                    <span className="text-[9px] font-black uppercase tracking-widest text-gray-400">Standard Delivery</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FINAL CALL: THE VERDICT */}
                <section className="py-60 px-6 md:px-20 bg-[#111111] text-white text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.03] flex items-center justify-center pointer-events-none">
                        <span className="text-[30rem] font-serif font-bold italic">Integrity</span>
                    </div>
                    <div className="max-w-4xl mx-auto relative z-10">
                        <span className="text-[10px] font-black uppercase tracking-[0.8em] text-[#BD9F67] mb-12 block">Final Step</span>
                        <h2 className="text-6xl md:text-[8rem] font-serif font-bold mb-16 leading-[0.85] tracking-tighter">Pronto para assumir seu <span className="italic">Lugar?</span></h2>
                        <p className="text-gray-400 text-2xl font-light mb-20 max-w-2xl mx-auto leading-relaxed">Não deixe seu faturamento ao acaso. Vamos desenhar a vitória antes da batalha começar.</p>
                        <div className="flex flex-col sm:flex-row justify-center gap-10">
                            <a
                                href="https://wa.me/5521979043854"
                                className="bg-[#BD9F67] text-black py-10 px-16 text-2xl font-serif font-bold hover:bg-white transition-all shadow-3xl"
                            >
                                Agendar Reunião
                            </a>
                            <Link to="/blog" className="py-10 px-16 border border-white/20 text-white text-[11px] font-black uppercase tracking-[0.5em] hover:bg-white hover:text-black transition-all">Ver Relatórios</Link>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="py-20 px-6 md:px-20 bg-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-20">
                    <div>
                        <span className="text-3xl font-serif font-black tracking-tighter text-[#111111] uppercase italic block mb-6">M. Digital</span>
                        <p className="text-gray-400 text-[10px] uppercase tracking-[0.4em] font-black">&copy; 2026 Intelligence Bureau</p>
                    </div>
                    <div className="flex gap-16 text-[10px] font-black uppercase tracking-widest text-gray-400 font-bold">
                        <Link to="/blog" className="hover:text-[#BD9F67] transition-all">Journal</Link>
                        <Link to="/ebook" className="hover:text-[#BD9F67] transition-all">Solutions</Link>
                        <a href="https://wa.me/5521979043854" className="hover:text-[#BD9F67] transition-all font-black">Inquiry</a>
                    </div>
                </div>
            </footer>

            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
            `}</style>
        </div>
    );
}
