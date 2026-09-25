import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight, MessageCircle, ChevronDown, Sparkles,
    Check, Send, ArrowUpRight, Search, MapPin, Share2,
    ShieldCheck, Zap, HelpCircle, Layers, Target, Award, User, PhoneCall
} from 'lucide-react';
import profileEstudio from '../assets/rodrigo_estudio_preto.jpg';
import profileJeans from '../assets/rodrigo_externa_jeans.jpg';
import { SocialProof } from '../components/SocialProof';
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
            a: "Atendemos pequenas e médias empresas (PMEs), clínicas médicas/odontológicas, advogados, contadores, profissionais liberais e negócios locais (como serralherias, mecânicas, motopeças e móveis planejados). Atuamos com empresas que entregam um serviço de valor real."
        },
        {
            q: "A Migração Digital cuida apenas de anúncios pagos?",
            a: "Não. Anúncios no Google ou Instagram são apenas um canal. Nós estruturamos a presença comercial completa: autoridade no Instagram, mapa no Google Meu Negócio, site de alta velocidade e roteiro de atendimento no WhatsApp."
        },
        {
            q: "Preciso ter uma equipe de marketing na minha empresa?",
            a: "Não. Nós desenhamos, construímos e gerenciamos toda a estrutura de atração. Sua única função é atender às mensagens de clientes que chegam qualificadas no seu WhatsApp."
        },
        {
            q: "Vocês trabalham com negócios fora do Rio de Janeiro?",
            a: "Sim! Nossa sede fica em Campo Grande, Rio de Janeiro/RJ, mas atendemos empresas e clínicas em todo o Brasil com acompanhamento 100% digital e alinhamentos periódicos."
        },
        {
            q: "Vocês garantem uma quantidade exata de vendas?",
            a: "Nenhuma agência séria garante volume fixo de vendas, pois a fechamento depende da sua oferta e atendimento. Garantimos colocar contatos reais e interessados no seu WhatsApp todas as semanas com uma estrutura de alto impacto."
        },
        {
            q: "Como funciona o diagnóstico inicial?",
            a: "Você envia os dados da sua empresa, nós analisamos como seu negócio aparece hoje no Google, Instagram e mapas, e agendamos uma conversa para apresentar a estratégia ideal."
        },
        {
            q: "Em quanto tempo os contatos começam a chegar?",
            a: "Assim que a estrutura entra no ar e as campanhas são ativadas, os primeiros contatos costumam chegar ao WhatsApp em poucos dias."
        }
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-[#FFFFFF] selection:bg-[#D4AF37]/30 selection:text-[#D4AF37] font-sans overflow-x-hidden antialiased">
            <SEOHelmet
                title="Agência Migração Digital | Captação Comercial & Estratégia Digital"
                description="Captação comercial previsível para empresas, clínicas e prestadores de serviços. Leve clientes qualificados para o seu WhatsApp todas as semanas com a Migração Digital."
            />

            {/* 1. NAVEGAÇÃO DE PRESTÍGIO PRETO E DOURADO */}
            <nav className="fixed top-0 w-full z-[100] bg-black/90 backdrop-blur-2xl border-b border-white/10 py-4 px-4 md:px-6">
                <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
                    <Link to="/" className="flex items-center gap-3 group">
                        <img
                            src="/logo.png"
                            alt="Migração Digital"
                            className="h-8 md:h-9 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
                        />
                        <div className="flex flex-col text-left">
                            <span className="text-base md:text-lg font-bold tracking-tight bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#FFFFFF] bg-clip-text text-transparent leading-none">
                                MIGRAÇÃO DIGITAL
                            </span>
                            <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase leading-none mt-1 group-hover:text-white/70 transition-colors">
                                Estratégia Comercial & Mídias
                            </span>
                        </div>
                    </Link>

                    <div className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-wider text-gray-400">
                        <a href="#como-funciona" className="hover:text-[#D4AF37] transition-colors">Como Funciona</a>
                        <a href="#solucoes" className="hover:text-[#D4AF37] transition-colors">Soluções</a>
                        <a href="#cases" className="hover:text-[#D4AF37] transition-colors">Cases</a>
                        <a href="#sobre" className="hover:text-[#D4AF37] transition-colors">Quem Sou</a>
                        <Link to="/blog" className="hover:text-[#D4AF37] transition-colors">Blog</Link>
                    </div>

                    <a
                        href="https://wa.me/5521979043854?text=Olá%2C+gostaria+de+conversar+sobre+uma+estrutura+de+captação+para+o+meu+negócio."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/5 hover:bg-[#D4AF37] hover:text-black border border-[#D4AF37]/40 text-[#D4AF37] px-4 py-2 md:px-5 md:py-2.5 rounded-xl text-[10px] md:text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg"
                    >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Falar com Estrategista</span>
                    </a>
                </div>
            </nav>

            <main className="pt-28 md:pt-36">
                {/* 2. HERO PRINCIPAL - DESIGN EDITORIAL PRETO E DOURADO */}
                <section className="relative pb-20 md:pb-32 px-4 md:px-6 bg-[#050505] border-b border-white/5">
                    {/* Luzes Suaves Douradas de Estúdio */}
                    <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#D4AF37]/5 blur-[140px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D4AF37]/5 blur-[140px] rounded-full pointer-events-none" />

                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-center relative z-10">
                        {/* Coluna da Esquerda (Copy Principal) */}
                        <div className="lg:col-span-7 space-y-6 md:space-y-8 text-left">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] md:text-xs font-mono tracking-wider">
                                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
                                PLANO DE MIGRAÇÃO PARA O DIGITAL
                            </div>

                            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif tracking-tight text-white leading-[1.12]">
                                Transforme estratégia em reconhecimento e <span className="text-[#D4AF37]">crescimento digital.</span>
                            </h1>

                            <p className="text-base md:text-xl text-gray-300 font-light leading-relaxed max-w-2xl">
                                Diagnóstico, posicionamento, comunicação e aceleração. Ampliamos a presença da sua marca e aceleramos a geração de oportunidades comerciais.
                            </p>

                            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                                <a
                                    href="https://wa.me/5521979043854?text=Olá%2C+gostaria+de+conversar+sobre+uma+estrutura+de+captação+para+o+meu+negócio."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#D4AF37] hover:bg-[#F5D142] text-black font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all shadow-xl shadow-[#D4AF37]/20 text-base"
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

                            {/* Sinais de Autoridade */}
                            <div className="pt-6 flex flex-wrap items-center gap-6 text-xs text-gray-400 font-mono border-t border-white/5">
                                <div className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-[#D4AF37]" />
                                    <span>+100 Empresas Atendidas</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-[#D4AF37]" />
                                    <span>PMEs, Clínicas & Serviços</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Check className="w-4 h-4 text-[#D4AF37]" />
                                    <span>Sem Fidelidade Forçada</span>
                                </div>
                            </div>
                        </div>

                        {/* Coluna da Direita (Foto Real de Rodrigo em Jaqueta Jeans) */}
                        <div className="lg:col-span-5 relative mt-4 lg:mt-0">
                            <div className="relative rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl bg-[#0D0D0D] p-2 group">
                                <div className="rounded-2xl overflow-hidden aspect-[4/5] relative">
                                    <img
                                        src={profileJeans}
                                        alt="Rodrigo Rodrigues em jaqueta jeans - Estrategista Comercial"
                                        className="w-full h-full object-cover object-bottom transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-70" />
                                </div>

                                <div className="p-4 text-left border-t border-white/10 flex items-center justify-between bg-black/90">
                                    <div>
                                        <p className="text-sm font-bold text-[#D4AF37] font-serif">Rodrigo Rodrigues</p>
                                        <p className="text-[10px] font-mono uppercase text-gray-400 tracking-wider mt-0.5">Estrategista Comercial & Fundador</p>
                                    </div>
                                    <span className="px-2.5 py-1 bg-[#D4AF37]/10 text-[#D4AF37] text-[9px] font-mono font-bold uppercase rounded-md border border-[#D4AF37]/30">
                                        Migração Digital
                                    </span>
                                </div>
                            </div>

                            {/* Badge Flutuante de Atração */}
                            <div className="absolute -bottom-5 -left-4 max-w-[240px] bg-[#0D0D0D]/95 border border-[#D4AF37]/40 p-3.5 rounded-2xl shadow-2xl backdrop-blur-md text-left">
                                <div className="flex items-center gap-2 text-[#D4AF37] text-[10px] font-mono uppercase font-bold tracking-wider">
                                    <Sparkles className="w-3.5 h-3.5" />
                                    ATENDIMENTO DIRETO
                                </div>
                                <p className="text-xs text-gray-200 mt-1 leading-snug font-medium">Estrutura comercial conduzida diretamente pelo estrategista.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. METODOLOGIA: O PLANO DE TRANSFORMAÇÃO */}
                <section id="como-funciona" className="py-20 md:py-28 bg-[#080808] px-4 md:px-6 border-b border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="max-w-3xl mb-16 text-left">
                            <span className="text-[#D4AF37] text-xs font-mono uppercase tracking-widest block mb-3">O PLANO DE TRANSFORMAÇÃO</span>
                            <h2 className="text-3xl md:text-5xl font-bold font-serif text-white leading-tight">
                                Uma estratégia conectada, da compreensão do negócio à ampliação do alcance.
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 text-left">
                            <div className="space-y-4 border-t border-[#D4AF37]/30 pt-8">
                                <span className="text-4xl md:text-5xl font-mono font-bold text-[#D4AF37]/50 block">01</span>
                                <h3 className="text-xl font-bold text-white">Diagnóstico</h3>
                                <p className="text-gray-400 text-sm font-light leading-relaxed">
                                    Compreender o cenário atual do seu negócio, identificar desafios e definir uma direção clara através de um briefing detalhado.
                                </p>
                            </div>

                            <div className="space-y-4 border-t border-[#D4AF37]/30 pt-8">
                                <span className="text-4xl md:text-5xl font-mono font-bold text-[#D4AF37]/50 block">02</span>
                                <h3 className="text-xl font-bold text-white">Posicionamento</h3>
                                <p className="text-gray-400 text-sm font-light leading-relaxed">
                                    A intersecção entre Empresa, Público e Mercado. Definimos como o seu negócio deve ser percebido e qual espaço deve ocupar.
                                </p>
                            </div>

                            <div className="space-y-4 border-t border-[#D4AF37]/30 pt-8">
                                <span className="text-4xl md:text-5xl font-mono font-bold text-[#D4AF37] block">03</span>
                                <h3 className="text-xl font-bold text-white">Comunicação</h3>
                                <p className="text-gray-400 text-sm font-light leading-relaxed">
                                    Dar vida ao posicionamento com linhas editoriais, roteirização, design e uma presença digital coerente e orientada por dados.
                                </p>
                            </div>

                            <div className="space-y-4 border-t border-[#D4AF37]/30 pt-8">
                                <span className="text-4xl md:text-5xl font-mono font-bold text-[#D4AF37] block">04</span>
                                <h3 className="text-xl font-bold text-white">Aceleração</h3>
                                <p className="text-gray-400 text-sm font-light leading-relaxed">
                                    Campanhas de distribuição, direcionamento de público e monitoramento para ampliar o alcance e acelerar a geração de oportunidades.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. COMO ESSA ESTRATÉGIA GANHA VIDA */}
                <section id="solucoes" className="py-20 md:py-28 bg-[#050505] px-4 md:px-6 border-b border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="max-w-3xl mb-16 text-left">
                            <span className="text-[#D4AF37] text-xs font-mono uppercase tracking-widest block mb-3">ENTREGÁVEIS</span>
                            <h2 className="text-3xl md:text-5xl font-bold font-serif text-white leading-tight">
                                Como essa estratégia ganha vida.
                            </h2>
                            <p className="text-gray-400 text-sm md:text-base font-light mt-4 leading-relaxed">
                                Apresentamos de forma objetiva o que está incluído na operação, considerando as necessidades e os objetivos discutidos.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                            {/* Card 1 */}
                            <div className="p-8 bg-[#0D0D0D] border border-white/10 rounded-3xl hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between group">
                                <div>
                                    <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-colors">
                                        <Layers className="w-6 h-6 text-[#D4AF37] group-hover:text-black transition-colors" />
                                    </div>
                                    <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider block mb-2">APENAS INSTAGRAM</span>
                                    <h3 className="text-xl font-bold text-white mb-3">Gestão & Conteúdo</h3>
                                    <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed mb-6">
                                        Planejamento editorial, definição de pautas, textos, roteiros e criação de capas e carrosséis.
                                    </p>
                                </div>
                                <div className="text-xs font-semibold text-gray-300 flex flex-col gap-2 border-t border-white/5 pt-4">
                                    <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#D4AF37]" /> 12 Conteúdos por Mês</span>
                                    <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#D4AF37]" /> Agendamento e Publicação</span>
                                    <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#D4AF37]" /> Acompanhamento de Métricas</span>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="p-8 bg-[#0D0D0D] border border-white/10 rounded-3xl hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between group">
                                <div>
                                    <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-colors">
                                        <Sparkles className="w-6 h-6 text-[#D4AF37] group-hover:text-black transition-colors" />
                                    </div>
                                    <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider block mb-2">AUDIOVISUAL PROFISSIONAL</span>
                                    <h3 className="text-xl font-bold text-white mb-3">Captação e Produção</h3>
                                    <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed mb-6">
                                        Captação com profissional especializado, equipamentos profissionais e direção durante a gravação.
                                    </p>
                                </div>
                                <div className="text-xs font-semibold text-gray-300 flex flex-col gap-2 border-t border-white/5 pt-4">
                                    <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#D4AF37]" /> 1 Sessão de Captação/mês</span>
                                    <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#D4AF37]" /> Preparação e Organização</span>
                                    <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#D4AF37]" /> Edição e Finalização dos vídeos</span>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="p-8 bg-[#0D0D0D] border border-white/10 rounded-3xl hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between group">
                                <div>
                                    <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-colors">
                                        <Target className="w-6 h-6 text-[#D4AF37] group-hover:text-black transition-colors" />
                                    </div>
                                    <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider block mb-2">MÍDIA PAGA</span>
                                    <h3 className="text-xl font-bold text-white mb-3">Campanhas & Distribuição</h3>
                                    <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed mb-6">
                                        Gestão de anúncios no Meta Ads. Planejamento, configuração, definição de públicos e segmentações.
                                    </p>
                                </div>
                                <div className="text-xs font-semibold text-gray-300 flex flex-col gap-2 border-t border-white/5 pt-4">
                                    <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#D4AF37]" /> Criação de Criativos para anúncios</span>
                                    <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#D4AF37]" /> Distribuição estratégica de conteúdos</span>
                                    <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[#D4AF37]" /> Monitoramento e Otimização</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. QUEM ESTÁ POR TRÁS DA METODOLOGIA */}
                <section id="sobre" className="py-20 md:py-28 px-4 md:px-6 bg-[#080808] border-b border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-[#D4AF37] text-xs font-mono uppercase tracking-widest block mb-3">EXPERIÊNCIA E AUTORIDADE</span>
                            <h2 className="text-3xl md:text-5xl font-bold font-serif text-white leading-tight">
                                Quem está por trás da metodologia?
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start text-left">
                            {/* RODRIGO RODRIGUES */}
                            <div className="relative group">
                                <div className="rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl bg-[#0D0D0D] mb-6 aspect-square max-w-md mx-auto relative">
                                    <img
                                        src={profileEstudio}
                                        alt="Rodrigo Rodrigues"
                                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                                    
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <p className="text-2xl font-bold font-serif text-[#D4AF37]">RODRIGO RODRIGUES</p>
                                        <p className="text-white text-xs font-mono uppercase tracking-widest mt-1">ESTRATEGISTA DE MARKETING</p>
                                    </div>
                                </div>
                                <div className="space-y-3 max-w-md mx-auto text-gray-400 text-sm font-light">
                                    <p className="flex items-center gap-2"><ArrowUpRight className="w-4 h-4 text-[#D4AF37]" /> 5 anos de experiência</p>
                                    <p className="flex items-center gap-2"><ArrowUpRight className="w-4 h-4 text-[#D4AF37]" /> Geração de Demanda</p>
                                    <p className="flex items-center gap-2"><ArrowUpRight className="w-4 h-4 text-[#D4AF37]" /> Meta Ads e Google Ads</p>
                                    <p className="flex items-center gap-2"><ArrowUpRight className="w-4 h-4 text-[#D4AF37]" /> Estratégia de Vendas</p>
                                </div>
                            </div>

                            {/* ANDERSON SOARES */}
                            <div className="relative group">
                                <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0D0D0D] mb-6 aspect-square max-w-md mx-auto relative">
                                    {/* Placeholder para a foto do Anderson até que o usuário envie */}
                                    <div className="w-full h-full bg-[#111] flex flex-col items-center justify-center grayscale transition-transform duration-500 group-hover:scale-105">
                                        <User className="w-16 h-16 text-white/20 mb-4" />
                                        <span className="text-white/30 text-xs font-mono tracking-widest uppercase">Foto pendente</span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                                    
                                    <div className="absolute bottom-0 right-0 p-6 text-right">
                                        <p className="text-2xl font-bold font-serif text-white">ANDERSON SOARES</p>
                                        <p className="text-[#D4AF37] text-xs font-mono uppercase tracking-widest mt-1">ESTRATEGISTA DE CONTEÚDO</p>
                                    </div>
                                </div>
                                <div className="space-y-3 max-w-md mx-auto text-gray-400 text-sm font-light flex flex-col items-end">
                                    <p className="flex items-center gap-2">9 anos de experiência <ArrowUpRight className="w-4 h-4 text-[#D4AF37]" /></p>
                                    <p className="flex items-center gap-2">Design e audiovisual <ArrowUpRight className="w-4 h-4 text-[#D4AF37]" /></p>
                                    <p className="flex items-center gap-2">Direção criativa <ArrowUpRight className="w-4 h-4 text-[#D4AF37]" /></p>
                                    <p className="flex items-center gap-2">Posicionamento e conteúdo <ArrowUpRight className="w-4 h-4 text-[#D4AF37]" /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <SocialProof />

                {/* 6. DÚVIDAS FREQUENTES */}
                <section className="py-20 md:py-28 px-4 md:px-6 bg-[#030303] border-t border-white/5">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-left mb-16">
                            <span className="text-[#D4AF37] text-xs font-mono uppercase tracking-widest block mb-2">PERGUNTAS FREQUENTES</span>
                            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white">Respostas Diretas</h2>
                        </div>

                        <div className="space-y-4 text-left">
                            {faqs.map((faq, idx) => (
                                <div key={idx} className="p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                                    <button
                                        onClick={() => toggleFaq(idx)}
                                        className="w-full text-left font-bold text-base md:text-lg text-white flex justify-between items-center gap-4 hover:text-[#D4AF37] transition-colors"
                                    >
                                        <span className="flex items-center gap-3">
                                            <HelpCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                                            {faq.q}
                                        </span>
                                        <ChevronDown className={`w-5 h-5 text-[#D4AF37] transition-transform ${faqOpen === idx ? 'rotate-180' : ''}`} />
                                    </button>
                                    {faqOpen === idx && (
                                        <div className="pt-4 text-sm text-gray-400 font-light leading-relaxed pl-7 border-t border-white/5 mt-3">
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* RODAPÉ DE PRESTÍGIO PRETO E DOURADO */}
            <footer className="py-12 bg-black border-t border-white/10 text-gray-500 font-sans">
                <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3">
                        <img src="/logo.png" alt="Migração Digital" className="h-7 w-auto object-contain brightness-0 invert opacity-80" />
                        <span className="text-base font-bold text-white tracking-tight">MIGRAÇÃO DIGITAL</span>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-6 text-xs font-mono uppercase tracking-widest text-gray-400">
                        <Link to="/blog" className="hover:text-[#D4AF37] transition-colors">Blog</Link>
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
