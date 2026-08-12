import { Link } from 'react-router-dom';
import { Target, Zap, ShieldCheck, ArrowRight, CheckCircle2, HelpCircle, Download, XCircle, ChevronRight, MapPin, Sparkles } from 'lucide-react';
import profileImg from '../assets/rodrigo_analise_extra.png';
import { SocialProof } from '../components/SocialProof';
import { SEOHelmet } from '../components/SEOHelmet';

export function HomePage() {
    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-[#D4AF37]/30 selection:text-[#D4AF37] font-sans overflow-x-hidden">
            <SEOHelmet 
                title="Agência de Marketing Digital no Rio de Janeiro | Migração Digital"
                description="Estrutura comercial, tráfego pago no Google Ads e SEO local com previsibilidade de vendas para empresas, clínicas e serviços no RJ."
            />

            {/* Navigation Bar */}
            <nav className="fixed top-0 w-full z-[100] bg-black/70 backdrop-blur-2xl border-b border-white/5 py-4 px-6">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-3 group">
                        <img src="/logo.png" alt="Migração Digital" className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity" />
                        <div className="flex flex-col">
                            <span className="text-lg md:text-xl font-black bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#FFFFFF] bg-clip-text text-transparent tracking-tighter leading-none">
                                MIGRAÇÃO DIGITAL
                            </span>
                            <span className="text-[8px] font-medium tracking-[0.3em] text-white/40 uppercase leading-none mt-1 group-hover:text-white/80 transition-colors">
                                Estratégia & Aquisição no RJ
                            </span>
                        </div>
                    </Link>
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#comparativo" className="text-sm font-medium text-gray-400 hover:text-[#D4AF37] transition-colors">O Diagnóstico</a>
                        <a href="#solucoes" className="text-sm font-medium text-gray-400 hover:text-[#D4AF37] transition-colors">Nossas Soluções</a>
                        <Link to="/blog" className="text-sm font-medium text-gray-400 hover:text-[#D4AF37] transition-colors">Blog & Insights</Link>
                        <a href="#sobre" className="text-sm font-medium text-gray-400 hover:text-[#D4AF37] transition-colors">Quem Sou</a>
                        <a
                            href="https://wa.me/5521979043854?text=Olá%2C+gostaria+de+um+diagnóstico+de+aquisição+para+o+meu+negócio."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider hover:scale-[1.05] transition-all shadow-lg shadow-[#D4AF37]/20"
                        >
                            Falar no WhatsApp
                        </a>
                    </div>
                </div>
            </nav>

            <main>
                {/* [HERO SECTION] - ESTRUTURA IMPACTO -> TÍTULO -> APOIO */}
                <section className="relative pt-32 pb-24 md:pt-48 md:pb-36 px-6 overflow-hidden bg-[#050505] border-b border-white/5">
                    {/* Elementos de Iluminação Editorial */}
                    <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[160px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#D4AF37]/5 blur-[140px] rounded-full pointer-events-none" />

                    <div className="max-w-7xl mx-auto text-center relative z-10">
                        {/* Eyebrow de Localização e Autoridade */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#D4AF37] text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mb-6">
                            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                            Estratégia Comercial & Aquisição • Rio de Janeiro
                        </div>

                        {/* PALAVRA DE IMPACTO GIGANTE */}
                        <div className="mb-4">
                            <span className="text-5xl md:text-8xl lg:text-[10rem] font-black tracking-tighter uppercase leading-none bg-gradient-to-b from-[#FFFFFF] via-[#D4AF37] to-[#8A6D3B] bg-clip-text text-transparent block drop-shadow-2xl">
                                PREVISIBILIDADE
                            </span>
                        </div>

                        {/* TÍTULO PRINCIPAL (Focado na dor real do cliente) */}
                        <h1 className="text-2xl md:text-5xl lg:text-6xl font-serif font-bold text-white max-w-5xl mx-auto leading-tight mb-8">
                            Chega de depender da sorte ou de indicações que <span className="text-[#D4AF37] italic">oscilam todo mês.</span>
                        </h1>

                        {/* TEXTO DE APOIO (Claro, direto e sem jargões de IA) */}
                        <p className="text-base md:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed mb-12">
                            Construímos a estrutura de tráfego pago no Google Ads e SEO Local que coloca clientes qualificados no seu WhatsApp todos os dias. <strong className="text-white font-medium">Sem conversa fiada, sem relatórios confusos.</strong>
                        </p>

                        {/* BOTOES DE AÇÃO PRINCIPAL E SECUNDÁRIO */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 max-w-xl mx-auto">
                            <a
                                href="https://wa.me/5521979043854?text=Olá%2C+gostaria+de+solicitar+uma+análise+de+aquisição+para+o+meu+negócio."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto bg-gradient-to-r from-[#D4AF37] via-[#F5D142] to-[#B8960C] text-black font-black py-5 px-10 rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.03] active:scale-[0.98] transition-all text-lg shadow-2xl shadow-[#D4AF37]/25"
                            >
                                <Zap className="w-5 h-5 fill-black" />
                                Quero Vendas Previsíveis
                            </a>
                            <a
                                href="#comparativo"
                                className="w-full sm:w-auto bg-white/5 border border-white/10 text-gray-300 font-bold py-5 px-8 rounded-2xl flex items-center justify-center gap-2 hover:bg-white/10 hover:text-white transition-all text-sm uppercase tracking-wider"
                            >
                                Entender o Diagnóstico
                                <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
                            </a>
                        </div>

                        {/* Prova Social Rápida */}
                        <div className="mt-16 pt-10 border-t border-white/5 flex flex-wrap justify-center items-center gap-8 md:gap-16 text-gray-500 text-xs font-semibold uppercase tracking-widest">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                                Atendimento no RJ & Brasil
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                                +50 Nichos Validados
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                                Sem Contrato de Fidelidade Forçada
                            </div>
                        </div>
                    </div>
                </section>

                {/* [DIAGNÓSTICO / COMPARATIVO] - "VENDAS HOJE VS COM A MIGRAÇÃO DIGITAL" */}
                <section id="comparativo" className="py-24 md:py-32 bg-[#080808] px-6 border-b border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                            <span className="text-[#D4AF37] text-xs font-black uppercase tracking-[0.3em] block mb-3">O Diagnóstico Real</span>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
                                Por que seu marketing atual <br /><span className="text-[#D4AF37] italic">custa caro e vende pouco?</span>
                            </h2>
                            <p className="text-gray-400 mt-4 text-base md:text-lg font-light">
                                A maioria dos empresários comete o erro de contratar "postagens para Instagram" achando que isso traz clientes. Postagem gera engajamento, mas o que gera caixa é <strong className="text-white">Captação Ativa de Alta Intenção</strong>.
                            </p>
                        </div>

                        {/* COMPARATIVO LADO A LADO */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                            {/* LADO ESQUERDO: O Modelo Antigo / Amador */}
                            <div className="p-8 md:p-12 bg-red-950/10 border border-red-500/20 rounded-3xl relative overflow-hidden">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-wider rounded-lg mb-6">
                                    <XCircle className="w-4 h-4 text-red-400" />
                                    Como sua empresa vende hoje
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-6">Marketing de Esperança</h3>
                                <ul className="space-y-5 text-gray-400 text-sm md:text-base font-light">
                                    <li className="flex items-start gap-3">
                                        <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                        <span> Dependência cega de indicações boca a boca (se o telefone não tocar, o caixa fecha no vermelho).</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                        <span> Horas gastas produzindo "dancinhas" ou "posts bonitos" no Instagram que só atraem concorrentes e curiosos.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                        <span> Dinheiro queimado em anúncios sem saber exatamente quanto custou cada cliente que fechou.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                        <span> Atendimento no WhatsApp demorado e sem um roteiro persuasivo de conversão comercial.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* LADO DIREITO: O Sistema Migração Digital */}
                            <div className="p-8 md:p-12 bg-[#D4AF37]/5 border border-[#D4AF37]/30 rounded-3xl relative overflow-hidden shadow-2xl shadow-[#D4AF37]/10">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold uppercase tracking-wider rounded-lg mb-6">
                                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                                    Com a Migração Digital
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-6">Sistema de Aquisição Previsível</h3>
                                <ul className="space-y-5 text-gray-300 text-sm md:text-base font-light">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                                        <span> <strong className="text-white">Google Ads Direcionado:</strong> Seu anúncio aparece no topo para quem digita exatamente o serviço que você oferece no RJ.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                                        <span> <strong className="text-white">Domínio do SEO Local:</strong> Sua empresa é a 1ª opção no mapa quando o cliente pesquisa no bairro ou cidade.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                                        <span> <strong className="text-white">Landing Pages Diretas ao Ponto:</strong> Páginas sem distrações, projetadas exclusivamente para transformar o clique em orçamento.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                                        <span> <strong className="text-white">Relatórios com Foco em Caixa:</strong> Você sabe exatamente quanto investiu e quanto lucro retornou no mês.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* [SOLUÇÕES E SERVIÇOS] */}
                <section id="solucoes" className="py-24 md:py-32 px-6 bg-[#050505] border-b border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                            <span className="text-[#D4AF37] text-xs font-black uppercase tracking-[0.3em] block mb-3">Engrenagens de Vendas</span>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">
                                Nossas Soluções de <span className="text-[#D4AF37] italic">Alta Performance</span>
                            </h2>
                            <p className="text-gray-400 mt-4 text-base font-light">
                                Escolha a estrutura ideal para o momento atual do seu negócio.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Card 1: Google Ads */}
                            <div className="p-8 bg-[#0a0a0a] border border-white/10 rounded-3xl hover:border-[#D4AF37]/40 transition-all flex flex-col justify-between group">
                                <div>
                                    <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-colors">
                                        <Target className="w-6 h-6 text-[#D4AF37] group-hover:text-black transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">Google Ads de Alta Intenção</h3>
                                    <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                                        Anúncios cirúrgicos posicionados no exato momento em que o seu cliente pesquisa pelo seu serviço no Google com a carteira na mão.
                                    </p>
                                </div>
                                <a href="https://wa.me/5521979043854?text=Olá%2C+gostaria+de+anunciar+no+Google+Ads." target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider flex items-center gap-2 hover:underline">
                                    Quero Anunciar no Google <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>

                            {/* Card 2: SEO Local */}
                            <div className="p-8 bg-[#0a0a0a] border border-white/10 rounded-3xl hover:border-[#D4AF37]/40 transition-all flex flex-col justify-between group">
                                <div>
                                    <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-colors">
                                        <MapPin className="w-6 h-6 text-[#D4AF37] group-hover:text-black transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">SEO Local & Google Meu Negócio</h3>
                                    <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                                        Otimização completa do seu perfil no Google Mapas para colocar a sua empresa nas 3 primeiras posições da sua região sem pagar por clique.
                                    </p>
                                </div>
                                <a href="https://wa.me/5521979043854?text=Olá%2C+gostaria+de+otimizar+meu+Google+Meu+Negócio." target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider flex items-center gap-2 hover:underline">
                                    Dominar o Mapa Local <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>

                            {/* Card 3: Landing Pages */}
                            <div className="p-8 bg-[#0a0a0a] border border-white/10 rounded-3xl hover:border-[#D4AF37]/40 transition-all flex flex-col justify-between group">
                                <div>
                                    <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-colors">
                                        <Sparkles className="w-6 h-6 text-[#D4AF37] group-hover:text-black transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">Landing Pages de Alta Conversão</h3>
                                    <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                                        Páginas ultra-rápidas, limpas e com copywriting direto ao ponto, desenvolvidas para transformar até 30% dos visitantes em mensagens no WhatsApp.
                                    </p>
                                </div>
                                <a href="https://wa.me/5521979043854?text=Olá%2C+gostaria+de+uma+Landing+Page+de+Alta+Conversão." target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider flex items-center gap-2 hover:underline">
                                    Criar Minha Landing Page <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* [ESCADA DE PRODUTOS & MATERIAIS] */}
                <section className="py-20 md:py-28 px-6 bg-[#080808] border-b border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-3xl md:text-4xl font-serif font-bold">Comece do seu jeito</h2>
                            <p className="text-gray-400 text-sm mt-2">Seja para corrigir um erro pontual ou para uma implementação completa de vendas.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {/* Ebook / Checklist */}
                            <div className="p-8 bg-[#050505] border border-white/10 rounded-3xl flex flex-col justify-between text-center">
                                <div>
                                    <span className="text-[10px] font-black text-[#D4AF37] uppercase tracking-widest bg-[#D4AF37]/10 px-3 py-1 rounded-full">Para Ajuste Rápido</span>
                                    <h3 className="text-xl font-bold mt-4 mb-2">Checklist de Diagnóstico</h3>
                                    <p className="text-gray-400 text-xs mb-6 font-light leading-relaxed">
                                        7 passos práticos em PDF para identificar onde sua empresa está perdendo clientes online.
                                    </p>
                                </div>
                                <div>
                                    <p className="text-2xl font-black text-[#D4AF37] mb-4">R$ 19,90</p>
                                    <Link to="/ebook" className="block w-full py-3 bg-white/5 border border-white/10 rounded-xl text-white text-xs font-bold uppercase tracking-wider hover:bg-[#D4AF37] hover:text-black transition-all">
                                        Garantir Checklist
                                    </Link>
                                </div>
                            </div>

                            {/* Análise de Presença */}
                            <div className="p-8 bg-[#D4AF37]/10 border-2 border-[#D4AF37] rounded-3xl flex flex-col justify-between text-center relative shadow-2xl shadow-[#D4AF37]/20">
                                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[9px] font-black bg-[#D4AF37] text-black uppercase tracking-widest px-4 py-1 rounded-full">
                                    Mais Procurado
                                </span>
                                <div>
                                    <span className="text-[10px] font-black text-[#D4AF37] uppercase tracking-widest">Análise Individual</span>
                                    <h3 className="text-xl font-bold mt-4 mb-2">Diagnóstico de Presença</h3>
                                    <p className="text-gray-300 text-xs mb-6 font-light leading-relaxed">
                                        Avaliação cirúrgica gravada em vídeo apontando exatamente o que corrigir na sua estrutura digital.
                                    </p>
                                </div>
                                <div>
                                    <p className="text-2xl font-black text-[#D4AF37] mb-4">R$ 197,00</p>
                                    <Link to="/analise-profissional-de-presenca-digital-02" className="block w-full py-3 bg-[#D4AF37] text-black rounded-xl text-xs font-black uppercase tracking-wider hover:bg-[#F5D142] transition-all">
                                        Solicitar Análise
                                    </Link>
                                </div>
                            </div>

                            {/* Assessoria Completa */}
                            <div className="p-8 bg-[#050505] border border-white/10 rounded-3xl flex flex-col justify-between text-center">
                                <div>
                                    <span className="text-[10px] font-black text-[#D4AF37] uppercase tracking-widest bg-[#D4AF37]/10 px-3 py-1 rounded-full">Projetos de Escala</span>
                                    <h3 className="text-xl font-bold mt-4 mb-2">Assessoria de Aquisição</h3>
                                    <p className="text-gray-400 text-xs mb-6 font-light leading-relaxed">
                                        Implementação completa do funil de vendas + Gestão estratégica contínua de anúncios.
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Sob Aplicação</p>
                                    <a href="https://wa.me/5521979043854?text=Olá%2C+gostaria+de+saber+mais+sobre+a+Assessoria+de+Aquisição." target="_blank" rel="noopener noreferrer" className="block w-full py-3 bg-white/5 border border-white/10 rounded-xl text-white text-xs font-bold uppercase tracking-wider hover:bg-white/10 transition-all">
                                        Falar com Rodrigo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* [SOBRE O FUNDADOR / AUTORIDADE] */}
                <section id="sobre" className="py-24 md:py-32 px-6 bg-[#050505] border-b border-white/5">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
                        <div className="relative">
                            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a]">
                                <img
                                    src={profileImg}
                                    alt="Rodrigo Rodrigues - Estrategista Digital"
                                    className="w-full h-auto grayscale-[15%] contrast-110 object-cover"
                                />
                                <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/80 backdrop-blur-xl rounded-2xl border border-white/10">
                                    <p className="text-xl font-bold text-[#D4AF37]">Rodrigo Rodrigues</p>
                                    <p className="text-gray-400 text-xs uppercase tracking-widest mt-1">Estrategista Comercial & Fundador da Migração Digital</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <span className="text-[#D4AF37] text-xs font-black uppercase tracking-[0.3em] block mb-3">Sem Enrolação</span>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                                "Não sou uma agência que cobra mensalidade para postar fotos bonitinhas."
                            </h2>
                            <div className="space-y-4 text-gray-400 font-light text-base md:text-lg leading-relaxed">
                                <p>
                                    Ao longo de 5 anos atuando nos bastidores do marketing digital para empresas, clínicas e prestadores de serviços, vi empresários excepcionais perdendo mercado para concorrentes medíocres simplesmente porque não tinham uma estrutura digital que vendia.
                                </p>
                                <p>
                                    A Migração Digital nasceu com uma única missão: <strong className="text-white">construir pontes comerciais previsíveis</strong> entre pessoas que precisam do seu serviço e o botão de WhatsApp da sua empresa.
                                </p>
                            </div>
                            <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 gap-6">
                                <div>
                                    <p className="text-3xl font-black text-[#D4AF37]">+50</p>
                                    <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Nichos Atendidos com Sucesso</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-black text-[#D4AF37]">100%</p>
                                    <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Foco em Vendas e Caixa</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <SocialProof />

                {/* [DÚVIDAS FREQUENTES] */}
                <section className="py-24 px-6 bg-[#030303] border-t border-white/5">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-[#D4AF37] text-xs font-black uppercase tracking-[0.3em] block mb-2">Clareza Total</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold">Dúvidas Frequentes</h2>
                        </div>

                        <div className="space-y-6">
                            {[
                                { q: "Como o Google Ads ajuda meu negócio no Rio de Janeiro?", a: "O Google Ads exibe a sua empresa nas primeiras posições das pesquisas exatamente quando alguém no RJ digita pelo seu serviço (ex: 'médico urologista campo grande' ou 'empresa de reforma no rj'). Você atrai pessoas com alta intenção de compra imediata." },
                                { q: "Em quanto tempo começo a receber mensagens no WhatsApp?", a: "Diferente de estratégias lentas de redes sociais, campanhas no Google Ads e Landing Pages começam a gerar chamadas no seu WhatsApp nas primeiras 48 a 72 horas após entrarem no ar." },
                                { q: "Tenho que assinar contrato de fidelidade de longo prazo?", a: "Não. Acreditamos que você deve continuar conosco pelos resultados reais que colocamos no seu caixa, e não por uma multa contratual travada." },
                                { q: "Já tentei fazer anúncios e não funcionou. O que deu errado?", a: "Anúncios sozinhos sem uma Landing Page persuasiva e sem um SEO Local estruturado são como jogar água em um balde furado. Nós corrigimos toda a jornada de vendas antes de investir seu dinheiro." }
                            ].map((faq, idx) => (
                                <div key={idx} className="p-6 md:p-8 bg-white/[0.02] border border-white/5 rounded-2xl">
                                    <h4 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                                        <HelpCircle className="w-5 h-5 text-[#D4AF37] shrink-0 mt-1" />
                                        {faq.q}
                                    </h4>
                                    <p className="text-gray-400 font-light text-sm pl-8 leading-relaxed">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Rodapé Prestígio */}
            <footer className="py-16 bg-black border-t border-white/10 text-gray-500 font-sans">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <div className="flex items-center gap-3 justify-center md:justify-start mb-3">
                            <img src="/logo.png" alt="Migração Digital" className="h-8 w-auto object-contain brightness-0 invert" />
                            <span className="text-xl font-black text-white tracking-tighter">MIGRAÇÃO DIGITAL</span>
                        </div>
                        <p className="text-xs text-gray-500 max-w-sm">Estrutura comercial, tráfego pago no Google Ads e SEO local no Rio de Janeiro - RJ.</p>
                    </div>

                    <div className="flex items-center gap-6 text-xs uppercase tracking-widest">
                        <Link to="/blog" className="hover:text-[#D4AF37] transition-colors">Blog</Link>
                        <Link to="/ebook" className="hover:text-[#D4AF37] transition-colors">Checklist</Link>
                        <a href="https://wa.me/5521979043854?text=Olá%2C+gostaria+de+falar+com+o+estrategista." target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37] transition-colors">WhatsApp</a>
                    </div>
                </div>
                <div className="mt-12 text-center text-[10px] uppercase tracking-widest text-gray-600">
                    &copy; 2026 Agência Migração Digital — Todos os direitos reservados.
                </div>
            </footer>
        </div>
    );
}
