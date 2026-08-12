import { Link } from 'react-router-dom';
import { Target, Zap, ShieldCheck, ArrowRight, CheckCircle2, HelpCircle, MapPin, MessageCircle, XCircle, ChevronRight, Check, ArrowUpRight, Search, PhoneCall, Share2, Sparkles, Award } from 'lucide-react';
import profileSofa from '../assets/rodrigo_sofa_branca.png';
import profileEstudio from '../assets/rodrigo_estudio_preto.jpg';
import profileJeans from '../assets/rodrigo_externa_jeans.jpg';
import { SocialProof } from '../components/SocialProof';
import { SEOHelmet } from '../components/SEOHelmet';

export function HomePage() {
    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-[#D4AF37]/30 selection:text-[#D4AF37] font-sans overflow-x-hidden antialiased">
            <SEOHelmet 
                title="Agência de Captação Comercial & Estratégia Digital | Migração Digital"
                description="Estrutura de atração de clientes e gestão estratégica de redes sociais para empresas, clínicas e prestadores de serviços. Receba contatos qualificados no WhatsApp."
            />

            {/* Navigation Bar */}
            <nav className="fixed top-0 w-full z-[100] bg-black/80 backdrop-blur-2xl border-b border-white/5 py-4 px-6">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-3 group">
                        <img src="/logo.png" alt="Migração Digital" className="h-8 md:h-9 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity" />
                        <div className="flex flex-col">
                            <span className="text-base md:text-lg font-bold tracking-tight bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#FFFFFF] bg-clip-text text-transparent leading-none">
                                MIGRAÇÃO DIGITAL
                            </span>
                            <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase leading-none mt-1 group-hover:text-white/70 transition-colors">
                                Estratégia Comercial & Mídias
                            </span>
                        </div>
                    </Link>
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#como-funciona" className="text-xs uppercase tracking-wider font-semibold text-gray-400 hover:text-[#D4AF37] transition-colors">Como Funciona</a>
                        <a href="#solucoes" className="text-xs uppercase tracking-wider font-semibold text-gray-400 hover:text-[#D4AF37] transition-colors">Soluções</a>
                        <Link to="/blog" className="text-xs uppercase tracking-wider font-semibold text-gray-400 hover:text-[#D4AF37] transition-colors">Blog</Link>
                        <a href="#sobre" className="text-xs uppercase tracking-wider font-semibold text-gray-400 hover:text-[#D4AF37] transition-colors">Quem Sou</a>
                        <a
                            href="https://wa.me/5521979043854?text=Olá%2C+gostaria+de+conversar+sobre+uma+estrutura+de+captação+para+o+meu+negócio."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/5 hover:bg-[#D4AF37] hover:text-black border border-[#D4AF37]/30 text-[#D4AF37] px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
                        >
                            <MessageCircle className="w-3.5 h-3.5" />
                            Falar com Estrategista
                        </a>
                    </div>
                </div>
            </nav>

            <main>
                {/* [HERO SECTION SPLIT - DESIGN EDITORIAL DE ALTA CONVERSÃO] */}
                <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 px-6 bg-[#050505] border-b border-white/5">
                    {/* Luzes sutis de estúdio */}
                    <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D4AF37]/5 blur-[120px] rounded-full pointer-events-none" />

                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
                        {/* Coluna da Esquerda (Mensagem & Ação) */}
                        <div className="lg:col-span-7 space-y-6 text-left">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#D4AF37] text-xs font-mono tracking-wider">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                AQUISIÇÃO DE CLIENTES • ESTRATÉGIA COMERCIAL
                            </div>

                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
                                Atraia pessoas interessadas para o seu WhatsApp <span className="text-[#D4AF37]">todas as semanas.</span>
                            </h1>

                            <p className="text-base md:text-xl text-gray-400 font-light leading-relaxed max-w-2xl">
                                Construímos a presença digital completa e estratégica para o seu negócio ser a primeira escolha dos seus clientes nas redes sociais e nas pesquisas.
                            </p>

                            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                                <a
                                    href="https://wa.me/5521979043854?text=Olá%2C+gostaria+de+conversar+sobre+uma+estrutura+de+captação+para+o+meu+negócio."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#D4AF37] hover:bg-[#F5D142] text-black font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-[#D4AF37]/15 text-base"
                                >
                                    <MessageCircle className="w-5 h-5 fill-black" />
                                    Conversar no WhatsApp
                                </a>
                                <a
                                    href="#como-funciona"
                                    className="bg-white/5 hover:bg-white/10 text-gray-300 font-medium py-4 px-6 rounded-xl flex items-center justify-center gap-2 border border-white/10 transition-all text-sm"
                                >
                                    Entender o Processo
                                    <ArrowRight className="w-4 h-4 text-gray-400" />
                                </a>
                            </div>

                            {/* Prova Social Discreta */}
                            <div className="pt-6 flex items-center gap-6 text-xs text-gray-500 font-mono border-t border-white/5">
                                <div className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-[#D4AF37]" />
                                    +50 Projetos Atendidos
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-[#D4AF37]" />
                                    Empresas & Clínicas
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-[#D4AF37]" />
                                    Sem Fidelidade Forçada
                                </div>
                            </div>
                        </div>

                        {/* Coluna da Direita (Painel Visual de Demonstração Real) */}
                        <div className="lg:col-span-5">
                            <div className="p-6 md:p-8 bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl relative overflow-hidden group">
                                <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-2xl group-hover:bg-[#D4AF37]/20 transition-all" />
                                
                                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                                        <span className="text-xs font-mono uppercase tracking-wider text-gray-400">Fluxo de Captação Ativo</span>
                                    </div>
                                    <span className="text-[10px] font-mono bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-[#D4AF37]">
                                        Redes Sociais & Google → WhatsApp
                                    </span>
                                </div>

                                <div className="py-6 space-y-4">
                                    {/* Item de Notificação 1 */}
                                    <div className="p-4 bg-white/[0.03] border border-white/5 rounded-2xl flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                                            <Search className="w-4 h-4 text-emerald-400" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold text-white">Cliente encontra a empresa no Google & Instagram</p>
                                            <p className="text-[11px] text-gray-400 font-light mt-0.5">Visualiza autoridade, especialidade e depoimentos.</p>
                                        </div>
                                    </div>

                                    {/* Item de Notificação 2 */}
                                    <div className="p-4 bg-white/[0.03] border border-white/5 rounded-2xl flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center shrink-0 mt-0.5">
                                            <ArrowUpRight className="w-4 h-4 text-[#D4AF37]" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold text-white">Acessa a Página de Apresentação</p>
                                            <p className="text-[11px] text-gray-400 font-light mt-0.5">Encontra horários e informações claras em segundos.</p>
                                        </div>
                                    </div>

                                    {/* Item de Notificação 3 */}
                                    <div className="p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-2xl flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                                            <PhoneCall className="w-4 h-4 text-emerald-400" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-emerald-300">Nova Mensagem no WhatsApp</p>
                                            <p className="text-[11px] text-emerald-100/70 font-light mt-0.5">"Olá! Vi o perfil e o site de vocês e gostaria de agendar um horário."</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-white/5 flex justify-between items-center text-[11px] text-gray-500">
                                    <span>Presença Digital Integrada</span>
                                    <span className="text-[#D4AF37] font-mono">Alta Performance</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* [O PROCESSO EM 3 ETAPAS - LAYOUT NUMÉRICO EDITORIAL] */}
                <section id="como-funciona" className="py-24 md:py-32 bg-[#080808] px-6 border-b border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="max-w-3xl mb-16 md:mb-24 text-left">
                            <span className="text-[#D4AF37] text-xs font-mono uppercase tracking-widest block mb-3">Como Funciona na Prática</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                3 Passos para colocar clientes <br className="hidden md:block" />no seu WhatsApp.
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                            {/* Passo 01 */}
                            <div className="space-y-4 border-t border-white/10 pt-8">
                                <span className="text-4xl md:text-5xl font-mono font-bold text-[#D4AF37]/40 block">01</span>
                                <h3 className="text-xl font-bold text-white">Presença & Conexão</h3>
                                <p className="text-gray-400 text-sm font-light leading-relaxed">
                                    Posicionamos a sua empresa em destaque nas redes sociais e no Google para construir autoridade imediata na sua região.
                                </p>
                            </div>

                            {/* Passo 02 */}
                            <div className="space-y-4 border-t border-white/10 pt-8">
                                <span className="text-4xl md:text-5xl font-mono font-bold text-[#D4AF37]/40 block">02</span>
                                <h3 className="text-xl font-bold text-white">Apresentação Profissional</h3>
                                <p className="text-gray-400 text-sm font-light leading-relaxed">
                                    Uma estrutura limpa e elegante que transmite extrema confiança e responde com clareza às principais dúvidas do seu cliente.
                                </p>
                            </div>

                            {/* Passo 03 */}
                            <div className="space-y-4 border-t border-white/10 pt-8">
                                <span className="text-4xl md:text-5xl font-mono font-bold text-[#D4AF37] block">03</span>
                                <h3 className="text-xl font-bold text-white">Contato no Seu WhatsApp</h3>
                                <p className="text-gray-400 text-sm font-light leading-relaxed">
                                    Com um único clique, o cliente inicia o contato diretamente com você ou com sua recepção para fechar o orçamento.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* [NOSSOS SERVIÇOS & SOLUÇÕES COMERCIAIS COMPLETAS] */}
                <section id="solucoes" className="py-24 md:py-32 bg-[#050505] px-6 border-b border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="max-w-3xl mb-16 md:mb-20 text-left">
                            <span className="text-[#D4AF37] text-xs font-mono uppercase tracking-widest block mb-3">Soluções Integradas</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                Estrutura comercial completa para <br className="hidden md:block" />atrair e converter clientes.
                            </h2>
                            <p className="text-gray-400 text-sm md:text-base font-light mt-4 leading-relaxed">
                                Combinamos mídias sociais, inteligência de busca e páginas de alta conversão para fortalecer sua marca e trazer vendas reais.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Serviço 1: Gestão Estratégica de Redes Sociais */}
                            <div className="p-8 bg-[#0a0a0a] border border-white/10 rounded-3xl hover:border-[#D4AF37]/40 transition-all flex flex-col justify-between group">
                                <div>
                                    <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-colors">
                                        <Share2 className="w-6 h-6 text-[#D4AF37] group-hover:text-black transition-colors" />
                                    </div>
                                    <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider block mb-2">Autoridade & Conexão</span>
                                    <h3 className="text-xl font-bold text-white mb-3">Gestão de Redes Sociais (Instagram & Mídias)</h3>
                                    <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed mb-6">
                                        Planejamento editorial, design de prestígio e posicionamento estratégico no Instagram para conectar sua marca aos clientes e gerar autoridade indiscutível.
                                    </p>
                                </div>
                                <div className="text-xs font-semibold text-gray-300 flex items-center gap-2 border-t border-white/5 pt-4">
                                    <Check className="w-4 h-4 text-[#D4AF37]" /> Perfil profissional e imponente
                                </div>
                            </div>

                            {/* Serviço 2: Anúncios no Instagram & Facebook */}
                            <div className="p-8 bg-[#0a0a0a] border border-white/10 rounded-3xl hover:border-[#D4AF37]/40 transition-all flex flex-col justify-between group">
                                <div>
                                    <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-colors">
                                        <Zap className="w-6 h-6 text-[#D4AF37] group-hover:text-black transition-colors" />
                                    </div>
                                    <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider block mb-2">Atenção & Alcance</span>
                                    <h3 className="text-xl font-bold text-white mb-3">Tráfego Pago no Instagram & Meta Ads</h3>
                                    <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed mb-6">
                                        Campanhas visuais marcantes direcionadas exclusivamente para os clientes de alto valor da sua cidade e região.
                                    </p>
                                </div>
                                <div className="text-xs font-semibold text-gray-300 flex items-center gap-2 border-t border-white/5 pt-4">
                                    <Check className="w-4 h-4 text-[#D4AF37]" /> Atração direta no feed e stories
                                </div>
                            </div>

                            {/* Serviço 3: Google Ads */}
                            <div className="p-8 bg-[#0a0a0a] border border-white/10 rounded-3xl hover:border-[#D4AF37]/40 transition-all flex flex-col justify-between group">
                                <div>
                                    <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-colors">
                                        <Search className="w-6 h-6 text-[#D4AF37] group-hover:text-black transition-colors" />
                                    </div>
                                    <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider block mb-2">Busca & Intenção</span>
                                    <h3 className="text-xl font-bold text-white mb-3">Google Ads & Busca Direta</h3>
                                    <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed mb-6">
                                        Posicionamos a sua empresa no topo quando o cliente digita exatamente o serviço que você oferece no momento da decisão.
                                    </p>
                                </div>
                                <div className="text-xs font-semibold text-gray-300 flex items-center gap-2 border-t border-white/5 pt-4">
                                    <Check className="w-4 h-4 text-[#D4AF37]" /> Presença na hora da necessidade
                                </div>
                            </div>

                            {/* Serviço 4: SEO Local & Google Mapas */}
                            <div className="p-8 bg-[#0a0a0a] border border-white/10 rounded-3xl hover:border-[#D4AF37]/40 transition-all flex flex-col justify-between group">
                                <div>
                                    <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-colors">
                                        <MapPin className="w-6 h-6 text-[#D4AF37] group-hover:text-black transition-colors" />
                                    </div>
                                    <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider block mb-2">Dominância Regional</span>
                                    <h3 className="text-xl font-bold text-white mb-3">SEO Local & Google Meu Negócio</h3>
                                    <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed mb-6">
                                        Otimização completa do seu perfil no mapa local para destacar a sua empresa entre as primeiras opções no seu bairro.
                                    </p>
                                </div>
                                <div className="text-xs font-semibold text-gray-300 flex items-center gap-2 border-t border-white/5 pt-4">
                                    <Check className="w-4 h-4 text-[#D4AF37]" /> Destaque orgânico na sua cidade
                                </div>
                            </div>

                            {/* Serviço 5: Landing Pages & Sites de Conversão */}
                            <div className="p-8 bg-[#0a0a0a] border border-white/10 rounded-3xl hover:border-[#D4AF37]/40 transition-all flex flex-col justify-between group">
                                <div>
                                    <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-colors">
                                        <ArrowUpRight className="w-6 h-6 text-[#D4AF37] group-hover:text-black transition-colors" />
                                    </div>
                                    <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider block mb-2">Estrutura de Conversão</span>
                                    <h3 className="text-xl font-bold text-white mb-3">Landing Pages & Sites Profissionais</h3>
                                    <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed mb-6">
                                        Desenvolvimento de páginas ultra-rápidas e elegantes, projetadas para transformar visitantes em mensagens de WhatsApp.
                                    </p>
                                </div>
                                <div className="text-xs font-semibold text-gray-300 flex items-center gap-2 border-t border-white/5 pt-4">
                                    <Check className="w-4 h-4 text-[#D4AF37]" /> Máxima eficiência de conversão
                                </div>
                            </div>

                            {/* Serviço 6: Estrutura Comercial de WhatsApp */}
                            <div className="p-8 bg-[#0a0a0a] border border-white/10 rounded-3xl hover:border-[#D4AF37]/40 transition-all flex flex-col justify-between group">
                                <div>
                                    <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-colors">
                                        <MessageCircle className="w-6 h-6 text-[#D4AF37] group-hover:text-black transition-colors" />
                                    </div>
                                    <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider block mb-2">Fechamento Comercial</span>
                                    <h3 className="text-xl font-bold text-white mb-3">Estrutura Comercial de WhatsApp</h3>
                                    <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed mb-6">
                                        Alinhamento e roteiros de atendimento para que sua equipe receba os contatos e os transforme em contratos fechados.
                                    </p>
                                </div>
                                <div className="text-xs font-semibold text-gray-300 flex items-center gap-2 border-t border-white/5 pt-4">
                                    <Check className="w-4 h-4 text-[#D4AF37]" /> Aproveitamento total dos contatos
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* [A FORÇA COMBINADA DE REDES SOCIAIS + BUSCAS] */}
                <section id="processo" className="py-24 md:py-32 bg-[#050505] px-6 border-b border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <span className="text-[#D4AF37] text-xs font-mono uppercase tracking-widest block mb-3">Estratégia Multicanal</span>
                                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                    A união perfeita entre Redes Sociais e Inteligência de Busca.
                                </h2>
                                <p className="text-gray-400 font-light text-base md:text-lg leading-relaxed mb-6">
                                    O Instagram constrói desejo, autoridade visual e conexão emocional com o seu cliente. O Google captura quem já está pronto para contratar imediatamente.
                                </p>
                                <p className="text-gray-300 font-medium text-base leading-relaxed">
                                    Quando combinamos mídias sociais fortes com campanhas de busca ativas, sua empresa domina a atenção do mercado.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="p-6 bg-[#D4AF37]/5 border border-[#D4AF37]/30 rounded-2xl">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Sparkles className="w-5 h-5 text-[#D4AF37] shrink-0" />
                                        <h4 className="text-base font-bold text-white">Redes Sociais (Instagram & Facebook)</h4>
                                    </div>
                                    <p className="text-xs text-gray-300 font-light leading-relaxed pl-8">
                                        Criações visuais de prestígio que encantam o cliente, geram confiança e provam o valor da sua marca antes mesmo do primeiro atendimento.
                                    </p>
                                </div>

                                <div className="p-6 bg-white/[0.03] border border-white/10 rounded-2xl">
                                    <div className="flex items-center gap-3 mb-2">
                                        <Search className="w-5 h-5 text-emerald-400 shrink-0" />
                                        <h4 className="text-base font-bold text-white">Buscas Diretas (Google & Mapas)</h4>
                                    </div>
                                    <p className="text-xs text-gray-400 font-light leading-relaxed pl-8">
                                        Presença imbatível no exato momento em que o cliente pesquisa pela solução que você oferece na sua região.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* [SOBRE RODRIGO RODRIGUES - APENAS FOTO DE JAQUETA JEANS] */}
                <section id="sobre" className="py-24 md:py-32 px-6 bg-[#080808] border-b border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
                            <div className="relative">
                                <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a] group">
                                    <img
                                        src={profileJeans}
                                        alt="Rodrigo Rodrigues - Estrategista Comercial"
                                        className="w-full h-[450px] md:h-[580px] object-cover object-bottom transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="p-6 bg-black/90 border-t border-white/10 flex items-center justify-between">
                                        <div>
                                            <p className="text-lg font-bold text-[#D4AF37]">Rodrigo Rodrigues</p>
                                            <p className="text-gray-400 text-xs font-mono uppercase tracking-wider mt-1">Estrategista Comercial & Fundador da Migração Digital</p>
                                        </div>
                                        <Award className="w-6 h-6 text-[#D4AF37]" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6 text-left">
                                <span className="text-[#D4AF37] text-xs font-mono uppercase tracking-widest block">Quem Constrói Suas Campanhas</span>
                                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                    Atendimento direto com quem entende de negócio.
                                </h2>
                                <div className="space-y-4 text-gray-400 font-light text-base md:text-lg leading-relaxed">
                                    <p>
                                        Você não será atendido por um estagiário de agência. Eu mesmo desenho a estratégia, acompanho a execução e garanto a estrutura comercial da sua empresa.
                                    </p>
                                    <p>
                                        Meu objetivo é simples: <strong className="text-white font-medium">garantir que pessoas com capacidade de pagamento encontrem o seu trabalho e entrem em contato pelo WhatsApp.</strong>
                                    </p>
                                </div>
                                <div className="pt-4 flex items-center gap-8 text-xs font-mono text-gray-400">
                                    <div>
                                        <p className="text-2xl font-bold text-[#D4AF37]">+50</p>
                                        <p className="mt-1">Projetos Atendidos</p>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold text-[#D4AF37]">5 Anos</p>
                                        <p className="mt-1">De Atuação Comercial</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <SocialProof />

                {/* [DÚVIDAS FREQUENTES] */}
                <section className="py-24 px-6 bg-[#030303] border-t border-white/5">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-left mb-16">
                            <span className="text-[#D4AF37] text-xs font-mono uppercase tracking-widest block mb-2">Perguntas Frequentes</span>
                            <h2 className="text-3xl md:text-4xl font-bold">Respostas Diretas</h2>
                        </div>

                        <div className="space-y-4">
                            {[
                                { q: "Vocês garantem uma quantidade exata de vendas por mês?", a: "Não. Nenhuma empresa séria pode garantir vendas exatas, pois a conversão final depende do seu atendimento no WhatsApp e da qualidade do seu serviço. O que nós garantimos é colocar pessoas qualificadas e interessadas em contato direto com você." },
                                { q: "Preciso ter uma equipe de marketing na minha empresa?", a: "Não. Nós cuidamos de toda a parte de estruturação e captação. Você só precisa ter alguém (ou você mesmo) para responder às mensagens no WhatsApp." },
                                { q: "Em quanto tempo os primeiros contatos começam a chegar?", a: "Assim que a estrutura entra no ar, os primeiros contatos costumam chegar no seu WhatsApp em poucos dias, à medida que as pesquisas ocorrem no Google." },
                                { q: "Como começamos o trabalho?", a: "Basta clicar no botão e nos enviar uma mensagem no WhatsApp. Vamos conversar sobre o seu negócio, entender seu momento atual e apresentar a melhor proposta." }
                            ].map((faq, idx) => (
                                <div key={idx} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl text-left">
                                    <h4 className="text-base font-bold text-white mb-2 flex items-center gap-3">
                                        <HelpCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                                        {faq.q}
                                    </h4>
                                    <p className="text-gray-400 font-light text-xs md:text-sm pl-7 leading-relaxed">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Rodapé Prestígio */}
            <footer className="py-12 bg-black border-t border-white/10 text-gray-500 font-sans">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3">
                        <img src="/logo.png" alt="Migração Digital" className="h-7 w-auto object-contain brightness-0 invert opacity-80" />
                        <span className="text-base font-bold text-white tracking-tight">MIGRAÇÃO DIGITAL</span>
                    </div>

                    <div className="flex items-center gap-6 text-xs font-mono uppercase tracking-widest text-gray-400">
                        <Link to="/blog" className="hover:text-[#D4AF37] transition-colors">Blog</Link>
                        <Link to="/ebook" className="hover:text-[#D4AF37] transition-colors">Checklist</Link>
                        <a href="https://wa.me/5521979043854?text=Olá%2C+gostaria+de+falar+com+o+estrategista." target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">WhatsApp</a>
                    </div>
                </div>
                <div className="mt-8 text-center text-[10px] font-mono uppercase tracking-widest text-gray-600">
                    &copy; 2026 Agência Migração Digital — Todos os direitos reservados.
                </div>
            </footer>
        </div>
    );
}

