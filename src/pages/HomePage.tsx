import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight, MessageCircle, ChevronDown, Sparkles,
    Check, Send, ArrowUpRight, Search, MapPin, Share2,
    ShieldCheck, Zap, HelpCircle, Layers, Target, Award, User
} from 'lucide-react';
import profileJeans from '../assets/rodrigo_externa_jeans.jpg';
import profileAnalise from '../assets/rodrigo_analise_perfil.png';
import { SEOHelmet } from '../components/SEOHelmet';

export function HomePage() {
    const [faqOpen, setFaqOpen] = useState<number | null>(null);
    const [formData, setFormData] = useState({
        nome: '',
        empresa: '',
        whatsapp: '',
        segmento: 'Negócio Local / Comércio',
        estagio: 'Quero gerar mais contatos no WhatsApp'
    });
    const [submitted, setSubmitted] = useState(false);

    const toggleFaq = (index: number) => {
        setFaqOpen(faqOpen === index ? null : index);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        const text = `Olá, Rodrigo! Preenchi o formulário no site da Migração Digital:%0A%0A*Nome:* ${formData.nome}%0A*Empresa:* ${formData.empresa}%0A*WhatsApp:* ${formData.whatsapp}%0A*Segmento:* ${formData.segmento}%0A*Objetivo:* ${formData.estagio}`;
        window.open(`https://wa.me/5521979043854?text=${text}`, '_blank');
    };

    const faqs = [
        {
            q: "Vocês atendem qual tipo de empresa?",
            a: "Nosso foco principal são pequenas e médias empresas (PMEs), clínicas, consultórios médicos/odontológicos, advogados, contadores, profissionais liberais e negócios locais (como serralherias, mecânicas, móveis planejados e prestadores de serviços). Atuamos com empresas que entregam um serviço de valor real."
        },
        {
            q: "A Migração Digital cuida apenas de anúncios pagos?",
            a: "Não. Anúncios no Google ou Instagram são apenas uma parte do processo. Nós estruturamos o sistema completo: clareza na oferta, presença nas buscas e mapas, páginas profissionais de alta velocidade e roteiro de atendimento no WhatsApp para garantir conversão."
        },
        {
            q: "Preciso ter uma equipe de marketing na minha empresa?",
            a: "Não. Nós desenhamos, construímos e gerenciamos toda a estrutura comercial digital. Sua única responsabilidade é ter alguém (ou você mesmo) para responder às mensagens no WhatsApp com atenção aos clientes."
        },
        {
            q: "Vocês trabalham com negócios fora do Rio de Janeiro?",
            a: "Sim! Nossa sede fica em Campo Grande, Rio de Janeiro/RJ, mas atendemos clientes e clínicas em diversas regiões do Brasil por meio de reuniões de alinhamento 100% digitais."
        },
        {
            q: "Vocês garantem quantidade exata de vendas?",
            a: "Nenhuma agência séria pode garantir quantidade exata de vendas. A conversão final depende da sua oferta, preço, mercado e atendimento. Nós garantimos colocar clientes qualificados no seu WhatsApp todas as semanas com uma estrutura profissional."
        },
        {
            q: "Como funciona o diagnóstico inicial?",
            a: "Você preenche as informações do seu negócio, nossa equipe analisa como sua empresa aparece hoje no Google, Instagram e mapas, e agendamos uma conversa para mostrar exatamente o próximo passo recomendado."
        },
        {
            q: "Quanto tempo leva para colocar a estrutura no ar?",
            a: "O tempo médio de estruturação e ativação dos primeiros canais varia entre 7 a 14 dias úteis, dependendo da complexidade do projeto."
        }
    ];

    return (
        <div className="min-h-screen bg-[#0B1020] text-[#F2EFE7] selection:bg-[#315CFF]/30 selection:text-[#315CFF] font-sans overflow-x-hidden antialiased">
            <SEOHelmet
                title="Agência Migração Digital | Captação Comercial & Estratégia Digital"
                description="Mova sua empresa para o próximo estado. Estruturação completa de presença digital, Google Ads, SEO Local e conversão no WhatsApp para PMEs e clínicas."
            />

            {/* 1. CABEÇALHO MINIMALISTA E AUTORAL */}
            <nav className="fixed top-0 w-full z-[100] bg-[#0B1020]/95 backdrop-blur-2xl border-b border-[#171B27] py-3.5 px-4 md:px-6">
                <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
                    <Link to="/" className="flex items-center gap-3 group">
                        <div className="w-9 h-9 rounded-xl bg-[#315CFF] text-white font-extrabold flex items-center justify-center text-xs font-mono shadow-md group-hover:scale-105 transition-transform">
                            MD
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="text-base md:text-lg font-extrabold tracking-tight text-[#F2EFE7] leading-none uppercase font-sans">
                                MIGRAÇÃO DIGITAL
                            </span>
                            <span className="text-[9px] font-mono tracking-widest text-[#BCC5D6] uppercase leading-none mt-1">
                                SISTEMA DE CAPTAÇÃO COMERCIAL
                            </span>
                        </div>
                    </Link>

                    <div className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-wider text-[#BCC5D6]">
                        <a href="#como-funciona" className="hover:text-[#315CFF] transition-colors">Como funciona</a>
                        <a href="#sistema" className="hover:text-[#315CFF] transition-colors">Soluções</a>
                        <a href="#cases" className="hover:text-[#315CFF] transition-colors">Cases</a>
                        <a href="#sobre" className="hover:text-[#315CFF] transition-colors">Sobre o Rodrigo</a>
                        <Link to="/blog" className="hover:text-[#315CFF] transition-colors">Blog</Link>
                    </div>

                    <a
                        href="#diagnostico"
                        className="bg-[#315CFF] hover:bg-[#2546cc] text-white px-4 py-2 md:px-6 md:py-2.5 rounded-xl font-bold transition-all shadow-lg text-[10px] md:text-xs uppercase tracking-wider whitespace-nowrap flex items-center gap-2"
                    >
                        <MessageCircle className="w-3.5 h-3.5 hidden sm:inline" />
                        <span>Falar sobre meu negócio</span>
                    </a>
                </div>
            </nav>

            <main className="pt-24 md:pt-36">
                {/* 2. HERO SECTION - CONCEITO PRÓXIMO ESTADO (FUNDO NOITE DIGITAL #0B1020) */}
                <section className="px-4 md:px-6 pb-20 md:pb-32 border-b border-[#171B27] relative overflow-hidden bg-[#0B1020]">
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#315CFF]/10 blur-[180px] rounded-full pointer-events-none" />

                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-center relative z-10">
                        {/* Mensagem Principal */}
                        <div className="lg:col-span-7 text-left space-y-6 md:space-y-8">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171B27] border border-[#315CFF]/30 text-[#315CFF] text-[10px] md:text-xs font-mono tracking-widest uppercase font-bold">
                                <span className="w-2 h-2 rounded-full bg-[#FF6047] animate-pulse shrink-0" />
                                <span>PRÓXIMO ESTADO • ESTRUTURA COMERCIAL INTEGRADA</span>
                            </div>

                            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-sans tracking-tight leading-[1.08] text-[#F2EFE7]">
                                Seu negócio já entrega valor. Agora precisa ser <span className="text-[#315CFF]">encontrado, escolhido e lembrado.</span>
                            </h1>

                            <p className="text-sm md:text-lg text-[#BCC5D6] font-light leading-relaxed max-w-2xl">
                                A Migração Digital estrutura presença, aquisição e conversão para empresas, clínicas e negócios locais que não querem depender apenas de indicação ou de posts soltos.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                                <a
                                    href="#diagnostico"
                                    className="w-full sm:w-auto bg-[#315CFF] hover:bg-[#2546cc] text-white font-bold text-xs uppercase tracking-wider py-4 px-8 rounded-xl transition-all shadow-xl shadow-[#315CFF]/20 flex items-center justify-center gap-3"
                                >
                                    <span>Falar sobre meu negócio</span>
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                                <a
                                    href="#sistema"
                                    className="w-full sm:w-auto bg-transparent hover:bg-white/5 text-[#F2EFE7] border border-[#171B27] text-xs font-bold uppercase tracking-wider py-4 px-8 rounded-xl transition-all flex items-center justify-center"
                                >
                                    Ver como funciona
                                </a>
                            </div>

                            {/* Sinais Provas Técnicas */}
                            <div className="pt-6 flex flex-wrap items-center gap-6 text-[11px] font-mono text-[#BCC5D6] border-t border-[#171B27]">
                                <div className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-[#315CFF]" />
                                    <span>+100 Empresas Estruturadas</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-[#315CFF]" />
                                    <span>Foco em PMEs e Clínicas</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-[#315CFF]" />
                                    <span>Sem Contrato De Fidelidade Forçada</span>
                                </div>
                            </div>
                        </div>

                        {/* Fotografia Documental do Rodrigo Rodrigues */}
                        <div className="lg:col-span-5 relative mt-4 lg:mt-0">
                            <div className="relative rounded-3xl overflow-hidden border border-[#171B27] shadow-2xl bg-[#171B27] p-2 group">
                                <div className="rounded-2xl overflow-hidden aspect-[4/5] relative">
                                    <img
                                        src={profileJeans}
                                        alt="Rodrigo Rodrigues em ação de trabalho"
                                        className="w-full h-full object-cover object-bottom transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1020] via-transparent to-transparent opacity-80" />
                                </div>

                                <div className="p-4 text-left border-t border-[#171B27] flex items-center justify-between bg-[#0B1020]/90">
                                    <div>
                                        <p className="text-sm font-bold text-[#F2EFE7]">Rodrigo Rodrigues</p>
                                        <p className="text-[10px] font-mono uppercase text-[#315CFF] tracking-wider mt-0.5">Estrategista Comercial & Fundador</p>
                                    </div>
                                    <span className="px-2.5 py-1 bg-[#FF6047]/10 text-[#FF6047] text-[9px] font-mono font-bold uppercase rounded-md border border-[#FF6047]/30">
                                        Operação Real
                                    </span>
                                </div>
                            </div>

                            {/* Badge Flutuante Próximo Estado */}
                            <div className="absolute -bottom-5 -left-4 max-w-[240px] bg-[#171B27]/95 border border-[#315CFF]/40 p-3.5 rounded-2xl shadow-2xl backdrop-blur-md text-left">
                                <div className="flex items-center gap-2 text-[#315CFF] text-[10px] font-mono uppercase font-bold tracking-wider">
                                    <Zap className="w-3.5 h-3.5" />
                                    CONCEITO OFICIAL
                                </div>
                                <p className="text-xs text-[#F2EFE7] mt-1 leading-snug font-medium">Mover negócios com valor real para o Próximo Estado comercial.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. DIAGNÓSTICO DA DOR (SEÇÃO CLARA MARFIM INTERFACE #F2EFE7) */}
                <section className="py-20 md:py-28 px-4 md:px-6 border-b border-[#BCC5D6]/30 bg-[#F2EFE7] text-[#0B1020]">
                    <div className="max-w-6xl mx-auto space-y-16">
                        <div className="text-left max-w-3xl space-y-4">
                            <span className="text-xs font-mono text-[#315CFF] uppercase tracking-widest block font-bold">Diagnóstico comercial</span>
                            <h2 className="text-3xl md:text-5xl font-extrabold font-sans text-[#0B1020] leading-tight">
                                O problema nem sempre é falta de qualidade. <span className="text-[#315CFF] italic">Muitas vezes é falta de estrutura para mostrar essa qualidade.</span>
                            </h2>
                            <p className="text-[#171B27]/80 font-light text-base md:text-lg leading-relaxed">
                                Donos de empresas excelentes enfrentam a mesma frustração todos os dias: ver concorrentes inferiores atraindo mais clientes simplesmente porque aparecem melhor no Google, no Instagram e no mapa.
                            </p>
                        </div>

                        {/* 4 Situações Reais */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                            <div className="p-8 bg-white border border-[#BCC5D6]/40 rounded-2xl shadow-sm hover:border-[#315CFF] transition-colors space-y-3">
                                <span className="w-8 h-8 rounded-lg bg-[#FF6047]/10 text-[#FF6047] font-mono font-bold flex items-center justify-center text-xs">01</span>
                                <h3 className="text-lg font-bold text-[#0B1020]">Sua empresa é boa, mas quase ninguém encontra você no Google.</h3>
                                <p className="text-xs text-[#171B27]/70 font-light leading-relaxed">Quando um cliente digita exatamente o que você oferece na sua cidade, sua empresa não aparece nas primeiras posições ou no mapa.</p>
                            </div>

                            <div className="p-8 bg-white border border-[#BCC5D6]/40 rounded-2xl shadow-sm hover:border-[#315CFF] transition-colors space-y-3">
                                <span className="w-8 h-8 rounded-lg bg-[#FF6047]/10 text-[#FF6047] font-mono font-bold flex items-center justify-center text-xs">02</span>
                                <h3 className="text-lg font-bold text-[#0B1020]">Seu Instagram existe, mas não explica por que escolher você.</h3>
                                <p className="text-xs text-[#171B27]/70 font-light leading-relaxed">Publicar artes aleatórias sem estratégia não gera autoridade nem desejo. O perfil precisa transmitir o verdadeiro valor da sua marca.</p>
                            </div>

                            <div className="p-8 bg-white border border-[#BCC5D6]/40 rounded-2xl shadow-sm hover:border-[#315CFF] transition-colors space-y-3">
                                <span className="w-8 h-8 rounded-lg bg-[#FF6047]/10 text-[#FF6047] font-mono font-bold flex items-center justify-center text-xs">03</span>
                                <h3 className="text-lg font-bold text-[#0B1020]">Você recebe contatos, mas não existe processo para convertê-los.</h3>
                                <p className="text-xs text-[#171B27]/70 font-light leading-relaxed">Leads chegam no WhatsApp, mas demoram a ser respondidos ou não possuem um roteiro de atendimento estruturado para fechar a venda.</p>
                            </div>

                            <div className="p-8 bg-white border border-[#BCC5D6]/40 rounded-2xl shadow-sm hover:border-[#315CFF] transition-colors space-y-3">
                                <span className="w-8 h-8 rounded-lg bg-[#FF6047]/10 text-[#FF6047] font-mono font-bold flex items-center justify-center text-xs">04</span>
                                <h3 className="text-lg font-bold text-[#0B1020]">Sua operação depende demais de indicação e de esforço pessoal.</h3>
                                <p className="text-xs text-[#171B27]/70 font-light leading-relaxed">Sem um canal de aquisição previsível, o faturamento oscila mês a mês e você fica dependente da sorte ou do boca a boca.</p>
                            </div>
                        </div>

                        <p className="text-xl md:text-2xl font-sans font-bold text-[#0B1020] text-left border-l-4 border-[#315CFF] pl-6 py-2">
                            Não basta estar no digital. É preciso operar digitalmente com um sistema integrado.
                        </p>
                    </div>
                </section>

                {/* 4. CONCEITO PRÓXIMO ESTADO (VISUALIZADOR DE TRANSIÇÃO COMERCIAL) */}
                <section className="py-20 md:py-28 px-4 md:px-6 border-b border-[#171B27] bg-[#0B1020]">
                    <div className="max-w-7xl mx-auto space-y-16">
                        <div className="text-left max-w-3xl space-y-4">
                            <span className="text-xs font-mono text-[#315CFF] uppercase tracking-widest block font-bold">A TRANSIÇÃO COMERCIAL</span>
                            <h2 className="text-3xl md:text-5xl font-extrabold font-sans text-[#F2EFE7] leading-tight">
                                Da invisibilidade para a <span className="text-[#315CFF]">relevância comercial.</span>
                            </h2>
                            <p className="text-[#BCC5D6] font-light text-base leading-relaxed">
                                Toda empresa passa por quatro estados no ambiente digital. Nossa função é conduzir seu negócio até a maturidade comercial.
                            </p>
                        </div>

                        {/* 4 Estados em Linha do Tempo */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                            <div className="p-8 bg-[#171B27] border border-[#171B27] rounded-2xl space-y-3 opacity-60">
                                <span className="text-xs font-mono text-[#FF6047] uppercase font-bold">Estado 01</span>
                                <h3 className="text-xl font-bold text-[#F2EFE7]">Confusão</h3>
                                <p className="text-xs text-[#BCC5D6] font-light leading-relaxed">Posts soltos sem objetivo, anúncios sem retorno e dependência total de indicação.</p>
                            </div>

                            <div className="p-8 bg-[#171B27] border border-[#171B27] rounded-2xl space-y-3 opacity-80">
                                <span className="text-xs font-mono text-[#BCC5D6] uppercase font-bold">Estado 02</span>
                                <h3 className="text-xl font-bold text-[#F2EFE7]">Clareza</h3>
                                <p className="text-xs text-[#BCC5D6] font-light leading-relaxed">Definição do público prioritário, proposta de valor irresistível e mensagem direta.</p>
                            </div>

                            <div className="p-8 bg-[#171B27] border border-[#315CFF]/50 rounded-2xl space-y-3">
                                <span className="text-xs font-mono text-[#315CFF] uppercase font-bold">Estado 03</span>
                                <h3 className="text-xl font-bold text-[#F2EFE7]">Presença</h3>
                                <p className="text-xs text-[#BCC5D6] font-light leading-relaxed">Instagram com autoridade, Google Meu Negócio otimizado e site profissional rápido.</p>
                            </div>

                            <div className="p-8 bg-[#315CFF]/10 border border-[#315CFF] rounded-2xl space-y-3 shadow-xl">
                                <span className="text-xs font-mono text-[#315CFF] uppercase font-bold">Estado 04 • Próximo Estado</span>
                                <h3 className="text-xl font-bold text-white">Conversão</h3>
                                <p className="text-xs text-[#F2EFE7] font-light leading-relaxed">Anúncios ativos no Google/Meta direcionando clientes qualificados todos os dias para o WhatsApp.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. SISTEMA MIGRAÇÃO DIGITAL EM 4 MOVIMENTOS (SUBSTITUI SERVIÇOS SEPARADOS) */}
                <section id="sistema" className="py-20 md:py-28 px-4 md:px-6 border-b border-[#171B27] bg-[#0B1020]">
                    <div className="max-w-7xl mx-auto space-y-16">
                        <div className="text-left max-w-3xl space-y-4">
                            <span className="text-xs font-mono text-[#315CFF] uppercase tracking-widest block font-bold">SISTEMA INTEGRADO</span>
                            <h2 className="text-3xl md:text-5xl font-extrabold font-sans text-[#F2EFE7] leading-tight">
                                Não vendemos posts isolados. <br />
                                <span className="text-[#315CFF]">Estruturamos um sistema em 4 movimentos.</span>
                            </h2>
                            <p className="text-[#BCC5D6] font-light text-base leading-relaxed">
                                Redes sociais, Google Ads, SEO Local e Landing Pages são as ferramentas. O Sistema Migração Digital é o método que une todas elas em um único objetivo comercial.
                            </p>
                        </div>

                        {/* 4 Movimentos do Sistema */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                            <div className="p-8 bg-[#171B27] border border-[#171B27] rounded-3xl space-y-4 hover:border-[#315CFF] transition-all">
                                <span className="text-3xl font-mono font-extrabold text-[#315CFF]">01</span>
                                <h3 className="text-xl font-bold text-[#F2EFE7]">Clareza</h3>
                                <p className="text-xs text-[#BCC5D6] font-light leading-relaxed">Definição estratégica da sua oferta, do público prioritário da sua região e da mensagem comercial que diferencia seu negócio da concorrência.</p>
                                <span className="text-[10px] font-mono text-[#315CFF] uppercase tracking-wider block pt-2 border-t border-white/5">• Posicionamento & Oferta</span>
                            </div>

                            <div className="p-8 bg-[#171B27] border border-[#171B27] rounded-3xl space-y-4 hover:border-[#315CFF] transition-all">
                                <span className="text-3xl font-mono font-extrabold text-[#315CFF]">02</span>
                                <h3 className="text-xl font-bold text-[#F2EFE7]">Presença</h3>
                                <p className="text-xs text-[#BCC5D6] font-light leading-relaxed">Estruturação da sua autoridade no Instagram, otimização do perfil no Google Meu Negócio / Mapas e criação da sua Landing Page profissional de alta velocidade.</p>
                                <span className="text-[10px] font-mono text-[#315CFF] uppercase tracking-wider block pt-2 border-t border-white/5">• Instagram, Google & Site</span>
                            </div>

                            <div className="p-8 bg-[#171B27] border border-[#171B27] rounded-3xl space-y-4 hover:border-[#315CFF] transition-all">
                                <span className="text-3xl font-mono font-extrabold text-[#315CFF]">03</span>
                                <h3 className="text-xl font-bold text-[#F2EFE7]">Aquisição</h3>
                                <p className="text-xs text-[#BCC5D6] font-light leading-relaxed">Ativação de tráfego pago no Google Ads (para capturar quem já quer comprar agora) e Meta Ads (para atrair clientes qualificados no Instagram da sua cidade).</p>
                                <span className="text-[10px] font-mono text-[#315CFF] uppercase tracking-wider block pt-2 border-t border-white/5">• Google Ads & Meta Ads</span>
                            </div>

                            <div className="p-8 bg-[#171B27] border border-[#171B27] rounded-3xl space-y-4 hover:border-[#315CFF] transition-all">
                                <span className="text-3xl font-mono font-extrabold text-[#315CFF]">04</span>
                                <h3 className="text-xl font-bold text-[#F2EFE7]">Conversão</h3>
                                <p className="text-xs text-[#BCC5D6] font-light leading-relaxed">Estruturação do fluxo de atendimento no WhatsApp com roteiros e acompanhamento técnico para garantir que os contatos se transformem em vendas reais.</p>
                                <span className="text-[10px] font-mono text-[#315CFF] uppercase tracking-wider block pt-2 border-t border-white/5">• Roteiro & Vendas no WhatsApp</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. APLICAÇÃO POR SEGMENTO (3 TRILHAS DE PÚBLICO) */}
                <section className="py-20 md:py-28 px-4 md:px-6 border-b border-[#171B27] bg-[#0B1020]">
                    <div className="max-w-7xl mx-auto space-y-16">
                        <div className="text-left max-w-3xl space-y-4">
                            <span className="text-xs font-mono text-[#315CFF] uppercase tracking-widest block font-bold">PARA QUEM É</span>
                            <h2 className="text-3xl md:text-5xl font-extrabold font-sans text-[#F2EFE7] leading-tight">
                                Soluções sob medida para o momento do seu negócio.
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                            <div className="p-8 bg-[#171B27] border border-[#171B27] rounded-3xl space-y-6 flex flex-col justify-between">
                                <div className="space-y-4">
                                    <span className="px-3 py-1 bg-[#315CFF]/10 text-[#315CFF] text-[10px] font-mono font-bold uppercase rounded-md">Trilha 01</span>
                                    <h3 className="text-2xl font-bold text-white">Clínicas & Profissionais Liberais</h3>
                                    <p className="text-xs text-[#BCC5D6] font-light leading-relaxed">
                                        Médicos, dentistas, psicólogos, advogados e contadores que possuem excelência técnica, mas precisam ser facilmente encontrados e transmitir total segurança para agendamento.
                                    </p>
                                </div>
                                <a href="#diagnostico" className="inline-flex items-center gap-2 text-xs font-bold text-[#315CFF] hover:underline">
                                    Quero atrair mais pacientes / clientes <ArrowUpRight className="w-4 h-4" />
                                </a>
                            </div>

                            <div className="p-8 bg-[#171B27] border border-[#171B27] rounded-3xl space-y-6 flex flex-col justify-between">
                                <div className="space-y-4">
                                    <span className="px-3 py-1 bg-[#315CFF]/10 text-[#315CFF] text-[10px] font-mono font-bold uppercase rounded-md">Trilha 02</span>
                                    <h3 className="text-2xl font-bold text-white">Negócios Locais & Comércio</h3>
                                    <p className="text-xs text-[#BCC5D6] font-light leading-relaxed">
                                        Serralherias, mecânicas, motopeças, lojas de móveis e prestadores de serviços de Campo Grande/RJ e região que precisam aparecer no topo do mapa e gerar orçamentos todos os dias.
                                    </p>
                                </div>
                                <a href="#diagnostico" className="inline-flex items-center gap-2 text-xs font-bold text-[#315CFF] hover:underline">
                                    Quero gerar contatos na minha região <ArrowUpRight className="w-4 h-4" />
                                </a>
                            </div>

                            <div className="p-8 bg-[#171B27] border border-[#171B27] rounded-3xl space-y-6 flex flex-col justify-between">
                                <div className="space-y-4">
                                    <span className="px-3 py-1 bg-[#315CFF]/10 text-[#315CFF] text-[10px] font-mono font-bold uppercase rounded-md">Trilha 03</span>
                                    <h3 className="text-2xl font-bold text-white">Empresas em Crescimento</h3>
                                    <p className="text-xs text-[#BCC5D6] font-light leading-relaxed">
                                        Empresas que já vendem, mas possuem a presença digital fragmentada e precisam integrar mídias sociais, Google Ads e atendimento comercial para escalar faturamento.
                                    </p>
                                </div>
                                <a href="#diagnostico" className="inline-flex items-center gap-2 text-xs font-bold text-[#315CFF] hover:underline">
                                    Quero organizar meu crescimento <ArrowUpRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 7. COMO FUNCIONA O TRABALHO (PROCESSO EM 5 ETAPAS REAIS) */}
                <section id="como-funciona" className="py-20 md:py-28 px-4 md:px-6 border-b border-[#171B27] bg-[#0B1020]">
                    <div className="max-w-7xl mx-auto space-y-16">
                        <div className="text-left max-w-3xl space-y-4">
                            <span className="text-xs font-mono text-[#315CFF] uppercase tracking-widest block font-bold">O PROCESSO NA PRÁTICA</span>
                            <h2 className="text-3xl md:text-5xl font-extrabold font-sans text-[#F2EFE7] leading-tight">
                                Sem enrolação. 5 passos para a sua estrutura comercial operar.
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-left">
                            <div className="p-6 bg-[#171B27] border border-[#171B27] rounded-2xl space-y-3">
                                <span className="text-2xl font-mono font-bold text-[#315CFF]">01</span>
                                <h3 className="text-base font-bold text-white">Diagnóstico</h3>
                                <p className="text-xs text-[#BCC5D6] font-light leading-relaxed">Análise detalhada da sua presença atual no Google, Instagram e mapas.</p>
                            </div>

                            <div className="p-6 bg-[#171B27] border border-[#171B27] rounded-2xl space-y-3">
                                <span className="text-2xl font-mono font-bold text-[#315CFF]">02</span>
                                <h3 className="text-base font-bold text-white">Próximo Estado</h3>
                                <p className="text-xs text-[#BCC5D6] font-light leading-relaxed">Definição das metas de atração de clientes e estratégia de oferta.</p>
                            </div>

                            <div className="p-6 bg-[#171B27] border border-[#171B27] rounded-2xl space-y-3">
                                <span className="text-2xl font-mono font-bold text-[#315CFF]">03</span>
                                <h3 className="text-base font-bold text-white">Construção</h3>
                                <p className="text-xs text-[#BCC5D6] font-light leading-relaxed">Desenvolvimento da Landing Page e estruturação das mídias sociais.</p>
                            </div>

                            <div className="p-6 bg-[#171B27] border border-[#171B27] rounded-2xl space-y-3">
                                <span className="text-2xl font-mono font-bold text-[#315CFF]">04</span>
                                <h3 className="text-base font-bold text-white">Ativação</h3>
                                <p className="text-xs text-[#BCC5D6] font-light leading-relaxed">Lançamento das campanhas de tráfego pago no Google Ads e Meta Ads.</p>
                            </div>

                            <div className="p-6 bg-[#171B27] border border-[#315CFF]/40 rounded-2xl space-y-3">
                                <span className="text-2xl font-mono font-bold text-[#315CFF]">05</span>
                                <h3 className="text-base font-bold text-white">Acompanhamento</h3>
                                <p className="text-xs text-[#BCC5D6] font-light leading-relaxed">Otimização contínua dos anúncios e roteiros de atendimento.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 8. CASES E BASTIDORES REAIS */}
                <section id="cases" className="py-20 md:py-28 px-4 md:px-6 border-b border-[#171B27] bg-[#0B1020]">
                    <div className="max-w-7xl mx-auto space-y-16">
                        <div className="text-left max-w-3xl space-y-4">
                            <span className="text-xs font-mono text-[#315CFF] uppercase tracking-widest block font-bold">BASTIDORES & EVIDÊNCIAS</span>
                            <h2 className="text-3xl md:text-5xl font-extrabold font-sans text-[#F2EFE7] leading-tight">
                                Transparência total. Provas reais de operações comerciais.
                            </h2>
                            <p className="text-[#BCC5D6] font-light text-base leading-relaxed">
                                Não usamos depoimentos falsos ou prints de faturamento sem origem. Apresentamos a lógica técnica e o impacto gerado na atração de clientes.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                            <div className="p-8 bg-[#171B27] border border-[#171B27] rounded-3xl space-y-4">
                                <div className="p-3 bg-[#0B1020] rounded-xl border border-white/5 font-mono text-[11px] text-[#315CFF]">
                                    [ CASE CLINICA ODONTOLÓGICA • CAMPO GRANDE/RJ ]
                                </div>
                                <h3 className="text-lg font-bold text-white">Captação por Busca Direta no Google Ads</h3>
                                <p className="text-xs text-[#BCC5D6] font-light leading-relaxed">
                                    <strong>Problema:</strong> Dependência exclusiva de indicações.<br />
                                    <strong>Ação:</strong> Otimização do perfil no Google Meu Negócio + Google Ads focado na região.<br />
                                    <strong>Resultado:</strong> Fluxo diário de pacientes buscando por implantes e próteses no WhatsApp.
                                </p>
                            </div>

                            <div className="p-8 bg-[#171B27] border border-[#171B27] rounded-3xl space-y-4">
                                <div className="p-3 bg-[#0B1020] rounded-xl border border-white/5 font-mono text-[11px] text-[#315CFF]">
                                    [ CASE COMÉRCIO DE MÓVEIS PLANEJADOS ]
                                </div>
                                <h3 className="text-lg font-bold text-white">Dominância Regional & Redes Sociais</h3>
                                <p className="text-xs text-[#BCC5D6] font-light leading-relaxed">
                                    <strong>Problema:</strong> Instagram sem autoridade e orçamentos baixos.<br />
                                    <strong>Ação:</strong> Redesign da presença visual + Anúncios direcionados para bairros nobres.<br />
                                    <strong>Resultado:</strong> Aumento na taxa de agendamento de medição presencial.
                                </p>
                            </div>

                            <div className="p-8 bg-[#171B27] border border-[#171B27] rounded-3xl space-y-4">
                                <div className="p-3 bg-[#0B1020] rounded-xl border border-white/5 font-mono text-[11px] text-[#315CFF]">
                                    [ CASE PRESTADOR DE SERVIÇOS / SERRALHERIA ]
                                </div>
                                <h3 className="text-lg font-bold text-white">Landing Page de Alta Velocidade</h3>
                                <p className="text-xs text-[#BCC5D6] font-light leading-relaxed">
                                    <strong>Problema:</strong> Anúncios rodavam para um site antigo e lento.<br />
                                    <strong>Ação:</strong> Criação de Landing Page com foco único no botão de WhatsApp.<br />
                                    <strong>Resultado:</strong> Redução do custo por lead e conversão imediata de chamados.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 9. SOBRE RODRIGO RODRIGUES */}
                <section id="sobre" className="py-20 md:py-28 px-4 md:px-6 border-b border-[#171B27] bg-[#0B1020]">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-5 relative">
                            <div className="relative rounded-3xl overflow-hidden border border-[#171B27] shadow-2xl bg-[#171B27] p-2">
                                <div className="rounded-2xl overflow-hidden aspect-[4/5] relative">
                                    <img
                                        src={profileAnalise}
                                        alt="Rodrigo Rodrigues em análise de estratégia comercial"
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7 text-left space-y-6">
                            <span className="text-xs font-mono text-[#315CFF] uppercase tracking-widest block font-bold">QUEM CONSTRÓI SUA ESTRUTURA</span>
                            <h2 className="text-3xl md:text-5xl font-extrabold font-sans text-[#F2EFE7] leading-tight">
                                Eu não construí a Migração Digital para vender ferramenta. Construí para ajudar negócios bons a serem percebidos como bons.
                            </h2>
                            <div className="space-y-4 text-[#BCC5D6] font-light text-base md:text-lg leading-relaxed">
                                <p>
                                    Sou <strong className="text-[#F2EFE7] font-semibold">Rodrigo Rodrigues</strong>, fundador e estrategista comercial da Migração Digital. Trabalho com vendas, posicionamento e estratégia porque acredito que crescimento não é apenas "postar mais". É criar uma estrutura previsível que faça sentido para a sua empresa e para a sua rotina.
                                </p>
                                <p>
                                    Nossa atuação se baseia em valores fundamentais: responsabilidade com o seu investimento, disciplina na execução técnica, honestidade nos diagnósticos e foco em resultados comerciais reais.
                                </p>
                            </div>
                            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs font-mono text-[#F2EFE7]">
                                <div className="p-4 bg-[#171B27] border border-[#171B27] rounded-xl">
                                    <p className="text-2xl font-bold text-[#315CFF]">+100</p>
                                    <p className="text-[11px] text-[#BCC5D6] mt-1">Empresas Estruturadas</p>
                                </div>
                                <div className="p-4 bg-[#171B27] border border-[#171B27] rounded-xl">
                                    <p className="text-2xl font-bold text-[#315CFF]">Sede RJ</p>
                                    <p className="text-[11px] text-[#BCC5D6] mt-1">Campo Grande / Brasil</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 10. CTA DE DIAGNÓSTICO SEM PRESSÃO */}
                <section id="diagnostico" className="py-20 md:py-28 px-4 md:px-6 border-b border-[#171B27] bg-[#0B1020]">
                    <div className="max-w-3xl mx-auto space-y-12">
                        <div className="text-center space-y-4">
                            <span className="text-xs font-mono text-[#315CFF] uppercase tracking-widest block font-bold">DIAGNÓSTICO COMERCIAL</span>
                            <h2 className="text-3xl md:text-5xl font-extrabold font-sans text-[#F2EFE7] leading-tight">
                                Quer descobrir qual é o próximo estado do seu negócio?
                            </h2>
                            <p className="text-[#BCC5D6] font-light text-base leading-relaxed">
                                Envie algumas informações sobre sua empresa. Vamos entender onde você está, o que já funciona e qual estrutura pode fazer sentido antes de falar em proposta.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="p-8 md:p-12 bg-[#171B27] border border-[#315CFF]/30 rounded-3xl text-left space-y-6 shadow-2xl backdrop-blur-xl">
                            <div>
                                <label className="block text-xs font-mono uppercase tracking-wider text-[#BCC5D6] mb-2 font-bold">Seu Nome *</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.nome}
                                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                                    placeholder="Como prefere ser chamado?"
                                    className="w-full px-4 py-3.5 bg-[#0B1020] border border-[#171B27] rounded-xl text-[#F2EFE7] placeholder-[#BCC5D6]/40 focus:border-[#315CFF] focus:outline-none transition-colors text-sm"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-mono uppercase tracking-wider text-[#BCC5D6] mb-2 font-bold">Nome da Empresa / Clínica *</label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.empresa}
                                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                                        placeholder="Ex: Clínica Odonto / Serralheria Silva"
                                        className="w-full px-4 py-3.5 bg-[#0B1020] border border-[#171B27] rounded-xl text-[#F2EFE7] placeholder-[#BCC5D6]/40 focus:border-[#315CFF] focus:outline-none transition-colors text-sm"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-mono uppercase tracking-wider text-[#BCC5D6] mb-2 font-bold">WhatsApp de Contato *</label>
                                    <input
                                        type="tel"
                                        required
                                        value={formData.whatsapp}
                                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                                        placeholder="(21) 99999-9999"
                                        className="w-full px-4 py-3.5 bg-[#0B1020] border border-[#171B27] rounded-xl text-[#F2EFE7] placeholder-[#BCC5D6]/40 focus:border-[#315CFF] focus:outline-none transition-colors text-sm"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-mono uppercase tracking-wider text-[#BCC5D6] mb-2 font-bold">Segmento do Negócio</label>
                                    <select
                                        value={formData.segmento}
                                        onChange={(e) => setFormData({ ...formData, segmento: e.target.value })}
                                        className="w-full px-4 py-3.5 bg-[#0B1020] border border-[#171B27] rounded-xl text-[#F2EFE7] focus:border-[#315CFF] focus:outline-none transition-colors text-sm"
                                    >
                                        <option value="Clínica / Saúde / Odontologia">Clínica / Saúde / Odontologia</option>
                                        <option value="Profissional Liberal (Advocacia/Contabilidade)">Profissional Liberal (Advocacia/Contabilidade)</option>
                                        <option value="Negócio Local / Comércio / Serviço">Negócio Local / Comércio / Serviço</option>
                                        <option value="Empresa de Móveis / Reforma / Indústria">Empresa de Móveis / Reforma / Indústria</option>
                                        <option value="Outro Segmento">Outro Segmento</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-mono uppercase tracking-wider text-[#BCC5D6] mb-2 font-bold">Principal Objetivo Hoje</label>
                                    <select
                                        value={formData.estagio}
                                        onChange={(e) => setFormData({ ...formData, estagio: e.target.value })}
                                        className="w-full px-4 py-3.5 bg-[#0B1020] border border-[#171B27] rounded-xl text-[#F2EFE7] focus:border-[#315CFF] focus:outline-none transition-colors text-sm"
                                    >
                                        <option value="Quero gerar mais contatos no WhatsApp">Quero gerar mais contatos no WhatsApp</option>
                                        <option value="Quero aparecer nas primeiras buscas do Google">Quero aparecer nas primeiras buscas do Google</option>
                                        <option value="Quero profissionalizar meu Instagram">Quero profissionalizar meu Instagram</option>
                                        <option value="Quero integrar tudo em um sistema">Quero integrar tudo em um sistema</option>
                                    </select>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#315CFF] hover:bg-[#2546cc] text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl transition-all shadow-xl flex items-center justify-center gap-2"
                            >
                                <Send className="w-4 h-4" />
                                Quero conversar sobre meu negócio
                            </button>

                            {submitted && (
                                <p className="text-xs text-[#315CFF] text-center font-mono">
                                    ✓ Abrindo conversa direta no WhatsApp...
                                </p>
                            )}
                        </form>
                    </div>
                </section>

                {/* 11. FAQ COM RESPOSTAS DIRETAS */}
                <section className="py-20 md:py-28 px-4 md:px-6 bg-[#0B1020]">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <div className="text-center space-y-4">
                            <span className="text-xs font-mono text-[#315CFF] uppercase tracking-widest block font-bold">PERGUNTAS FREQUENTES</span>
                            <h2 className="text-3xl md:text-5xl font-extrabold font-sans text-[#F2EFE7]">
                                Respostas diretas sem jargões.
                            </h2>
                        </div>

                        <div className="space-y-4 text-left">
                            {faqs.map((faq, idx) => (
                                <div key={idx} className="bg-[#171B27] border border-[#171B27] rounded-2xl overflow-hidden">
                                    <button
                                        onClick={() => toggleFaq(idx)}
                                        className="w-full p-6 text-left font-bold text-base md:text-lg text-[#F2EFE7] flex justify-between items-center gap-4 hover:text-[#315CFF] transition-colors"
                                    >
                                        <span>{faq.q}</span>
                                        <ChevronDown className={`w-5 h-5 text-[#315CFF] transition-transform ${faqOpen === idx ? 'rotate-180' : ''}`} />
                                    </button>
                                    {faqOpen === idx && (
                                        <div className="p-6 pt-0 text-sm text-[#BCC5D6] font-light leading-relaxed border-t border-white/5">
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* 12. RODAPÉ OFICIAL DA AGÊNCIA */}
            <footer className="py-12 bg-[#0B1020] border-t border-[#171B27] text-[#BCC5D6] text-xs font-mono">
                <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-[#315CFF] text-white font-extrabold flex items-center justify-center text-xs font-mono">
                            MD
                        </div>
                        <span className="text-base font-extrabold text-[#F2EFE7] tracking-tight">AGÊNCIA MIGRAÇÃO DIGITAL</span>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-6 text-[11px] font-mono uppercase tracking-widest text-[#BCC5D6]">
                        <a href="#como-funciona" className="hover:text-[#315CFF] transition-colors">Como funciona</a>
                        <a href="#sistema" className="hover:text-[#315CFF] transition-colors">Soluções</a>
                        <Link to="/blog" className="hover:text-[#315CFF] transition-colors">Blog</Link>
                        <Link to="/thiagopimentel" className="hover:text-[#315CFF] transition-colors">Thiago Pimentel</Link>
                    </div>

                    <p className="text-center md:text-right text-[10px] text-[#BCC5D6]/70 leading-relaxed max-w-xs">
                        Agência Migração Digital • Campo Grande, Rio de Janeiro / RJ. Atendimento presencial e digital em todo o Brasil. © 2026.
                    </p>
                </div>
            </footer>
        </div>
    );
}
