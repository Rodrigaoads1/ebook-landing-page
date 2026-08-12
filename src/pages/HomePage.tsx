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
                                AQUISIÇÃO DE CLIENTES • ESTRATÉGIA COMERCIAL
                            </div>

                            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif tracking-tight text-white leading-[1.12]">
                                Atraia pessoas interessadas para o seu WhatsApp <span className="text-[#D4AF37]">todas as semanas.</span>
                            </h1>

                            <p className="text-base md:text-xl text-gray-300 font-light leading-relaxed max-w-2xl">
                                Construímos a presença digital completa e estratégica para o seu negócio ser a primeira escolha dos seus clientes nas redes sociais e nas pesquisas do Google.
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

                        {/* Coluna da Direita (Painel Visual de Demonstração Comercial) */}
                        <div className="lg:col-span-5">
                            <div className="p-6 md:p-8 bg-[#0D0D0D] border border-[#D4AF37]/20 rounded-3xl shadow-2xl relative overflow-hidden group text-left">
                                <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-2xl group-hover:bg-[#D4AF37]/20 transition-all" />

                                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                                        <span className="text-xs font-mono uppercase tracking-wider text-gray-400">Fluxo Comercial Ativo</span>
                                    </div>
                                    <span className="text-[10px] font-mono bg-white/5 border border-[#D4AF37]/30 px-2.5 py-1 rounded-full text-[#D4AF37]">
                                        Redes Sociais + Google → WhatsApp
                                    </span>
                                </div>

                                <div className="py-6 space-y-4">
                                    <div className="p-4 bg-white/[0.03] border border-white/5 rounded-2xl flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center shrink-0 mt-0.5">
                                            <Search className="w-4 h-4 text-[#D4AF37]" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold text-white">Cliente encontra a empresa no Google & Instagram</p>
                                            <p className="text-[11px] text-gray-400 font-light mt-0.5">Visualiza autoridade, fotos reais e depoimentos.</p>
                                        </div>
                                    </div>

                                    <div className="p-4 bg-white/[0.03] border border-white/5 rounded-2xl flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center shrink-0 mt-0.5">
                                            <ArrowUpRight className="w-4 h-4 text-[#D4AF37]" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold text-white">Acessa a Página Profissional de Apresentação</p>
                                            <p className="text-[11px] text-gray-400 font-light mt-0.5">Entende o serviço e as informações com clareza.</p>
                                        </div>
                                    </div>

                                    <div className="p-4 bg-emerald-950/30 border border-emerald-500/40 rounded-2xl flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-xl bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                                            <PhoneCall className="w-4 h-4 text-emerald-400" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-emerald-300">Nova Mensagem no WhatsApp</p>
                                            <p className="text-[11px] text-emerald-100/80 font-light mt-0.5">"Olá! Vi o trabalho de vocês e gostaria de um orçamento."</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-white/5 flex justify-between items-center text-[11px] text-gray-500 font-mono">
                                    <span>Presença Comercial Integrada</span>
                                    <span className="text-[#D4AF37]">Alta Conversão</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. PROCESSO EM 3 ETAPAS */}
                <section id="como-funciona" className="py-20 md:py-28 bg-[#080808] px-4 md:px-6 border-b border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="max-w-3xl mb-16 text-left">
                            <span className="text-[#D4AF37] text-xs font-mono uppercase tracking-widest block mb-3">COMO FUNCIONA NA PRÁTICA</span>
                            <h2 className="text-3xl md:text-5xl font-bold font-serif text-white leading-tight">
                                3 Passos para colocar clientes qualificados <br className="hidden md:block" />no seu WhatsApp.
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-left">
                            <div className="space-y-4 border-t border-[#D4AF37]/30 pt-8">
                                <span className="text-4xl md:text-5xl font-mono font-bold text-[#D4AF37]/50 block">01</span>
                                <h3 className="text-xl font-bold text-white">Presença & Autoridade</h3>
                                <p className="text-gray-400 text-sm font-light leading-relaxed">
                                    Posicionamos sua empresa no topo das buscas do Google, nos mapas locais e no Instagram com design profissional e reputação sólida.
                                </p>
                            </div>

                            <div className="space-y-4 border-t border-[#D4AF37]/30 pt-8">
                                <span className="text-4xl md:text-5xl font-mono font-bold text-[#D4AF37]/50 block">02</span>
                                <h3 className="text-xl font-bold text-white">Apresentação Profissional</h3>
                                <p className="text-gray-400 text-sm font-light leading-relaxed">
                                    Uma estrutura limpa e elegante que transmite extrema confiança e responde com clareza às principais dúvidas do seu cliente antes do primeiro contato.
                                </p>
                            </div>

                            <div className="space-y-4 border-t border-[#D4AF37]/30 pt-8">
                                <span className="text-4xl md:text-5xl font-mono font-bold text-[#D4AF37] block">03</span>
                                <h3 className="text-xl font-bold text-white">Conversão no WhatsApp</h3>
                                <p className="text-gray-400 text-sm font-light leading-relaxed">
                                    O cliente clica e inicia o diálogo direto com a sua equipe ou recepção com um roteiro preparado para agendamento e fechamento.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. SOLUÇÕES INTEGRADAS */}
                <section id="solucoes" className="py-20 md:py-28 bg-[#050505] px-4 md:px-6 border-b border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="max-w-3xl mb-16 text-left">
                            <span className="text-[#D4AF37] text-xs font-mono uppercase tracking-widest block mb-3">SOLUÇÕES COMERCIAIS</span>
                            <h2 className="text-3xl md:text-5xl font-bold font-serif text-white leading-tight">
                                Estrutura completa de aquisição e posicionamento.
                            </h2>
                            <p className="text-gray-400 text-sm md:text-base font-light mt-4 leading-relaxed">
                                Combinamos mídias sociais, inteligência de busca no Google e páginas de alta conversão para fortalecer sua marca e trazer vendas reais.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                            {/* Card 1 */}
                            <div className="p-8 bg-[#0D0D0D] border border-white/10 rounded-3xl hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between group">
                                <div>
                                    <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-colors">
                                        <Share2 className="w-6 h-6 text-[#D4AF37] group-hover:text-black transition-colors" />
                                    </div>
                                    <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider block mb-2">AUTORIDADE & CONEXÃO</span>
                                    <h3 className="text-xl font-bold text-white mb-3">Gestão de Redes Sociais (Instagram)</h3>
                                    <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed mb-6">
                                        Planejamento editorial, identidade de prestígio e posicionamento estratégico no Instagram para construir reputação inquestionável na sua região.
                                    </p>
                                </div>
                                <div className="text-xs font-semibold text-gray-300 flex items-center gap-2 border-t border-white/5 pt-4">
                                    <Check className="w-4 h-4 text-[#D4AF37]" /> Perfil profissional e imponente
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="p-8 bg-[#0D0D0D] border border-white/10 rounded-3xl hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between group">
                                <div>
                                    <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-colors">
                                        <Zap className="w-6 h-6 text-[#D4AF37] group-hover:text-black transition-colors" />
                                    </div>
                                    <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider block mb-2">ATRAÇÃO & ALCANCE</span>
                                    <h3 className="text-xl font-bold text-white mb-3">Tráfego Pago no Meta Ads</h3>
                                    <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed mb-6">
                                        Campanhas patrocinadas direcionadas exatamente para os clientes com poder de compra da sua cidade e bairro.
                                    </p>
                                </div>
                                <div className="text-xs font-semibold text-gray-300 flex items-center gap-2 border-t border-white/5 pt-4">
                                    <Check className="w-4 h-4 text-[#D4AF37]" /> Atração direta no feed e stories
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="p-8 bg-[#0D0D0D] border border-white/10 rounded-3xl hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between group">
                                <div>
                                    <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-colors">
                                        <Search className="w-6 h-6 text-[#D4AF37] group-hover:text-black transition-colors" />
                                    </div>
                                    <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider block mb-2">BUSCA DIRETA</span>
                                    <h3 className="text-xl font-bold text-white mb-3">Google Ads & Busca Direta</h3>
                                    <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed mb-6">
                                        Sua empresa no topo do Google no exato momento em que o cliente pesquisa pela solução que você oferece.
                                    </p>
                                </div>
                                <div className="text-xs font-semibold text-gray-300 flex items-center gap-2 border-t border-white/5 pt-4">
                                    <Check className="w-4 h-4 text-[#D4AF37]" /> Presença na hora da decisão
                                </div>
                            </div>

                            {/* Card 4 */}
                            <div className="p-8 bg-[#0D0D0D] border border-white/10 rounded-3xl hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between group">
                                <div>
                                    <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-colors">
                                        <MapPin className="w-6 h-6 text-[#D4AF37] group-hover:text-black transition-colors" />
                                    </div>
                                    <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider block mb-2">PRESENÇA REGIONAL</span>
                                    <h3 className="text-xl font-bold text-white mb-3">SEO Local & Google Meu Negócio</h3>
                                    <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed mb-6">
                                        Otimização completa do perfil no mapa para que sua clínica ou empresa seja referência número um da região.
                                    </p>
                                </div>
                                <div className="text-xs font-semibold text-gray-300 flex items-center gap-2 border-t border-white/5 pt-4">
                                    <Check className="w-4 h-4 text-[#D4AF37]" /> Destaque orgânico no mapa
                                </div>
                            </div>

                            {/* Card 5 */}
                            <div className="p-8 bg-[#0D0D0D] border border-white/10 rounded-3xl hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between group">
                                <div>
                                    <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-colors">
                                        <ArrowUpRight className="w-6 h-6 text-[#D4AF37] group-hover:text-black transition-colors" />
                                    </div>
                                    <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider block mb-2">ESTRUTURA DE CONVERSÃO</span>
                                    <h3 className="text-xl font-bold text-white mb-3">Landing Pages & Sites Profissionais</h3>
                                    <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed mb-6">
                                        Desenvolvimento de páginas ultrarrápidas, elegantes e otimizadas para levar o visitante direto para o WhatsApp.
                                    </p>
                                </div>
                                <div className="text-xs font-semibold text-gray-300 flex items-center gap-2 border-t border-white/5 pt-4">
                                    <Check className="w-4 h-4 text-[#D4AF37]" /> Alta velocidade de carregamento
                                </div>
                            </div>

                            {/* Card 6 */}
                            <div className="p-8 bg-[#0D0D0D] border border-white/10 rounded-3xl hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between group">
                                <div>
                                    <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 flex items-center justify-center mb-6 group-hover:bg-[#D4AF37] transition-colors">
                                        <MessageCircle className="w-6 h-6 text-[#D4AF37] group-hover:text-black transition-colors" />
                                    </div>
                                    <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider block mb-2">FECHAMENTO COMERCIAL</span>
                                    <h3 className="text-xl font-bold text-white mb-3">Roteiros de Atendimento Comercial</h3>
                                    <p className="text-gray-400 text-xs md:text-sm font-light leading-relaxed mb-6">
                                        Alinhamento e roteiros para que sua equipe atenda aos contatos com rapidez e garanta alta taxa de conversão em vendas.
                                    </p>
                                </div>
                                <div className="text-xs font-semibold text-gray-300 flex items-center gap-2 border-t border-white/5 pt-4">
                                    <Check className="w-4 h-4 text-[#D4AF37]" /> Aproveitamento total dos contatos
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. SOBRE RODRIGO RODRIGUES (COM A FOTO REAL DE GOLA POLO PRETA TRICOTADA!) */}
                <section id="sobre" className="py-20 md:py-28 px-4 md:px-6 bg-[#080808] border-b border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
                            {/* FOTO REAL SOLICITADA: GOLA POLO PRETA TRICOTADA */}
                            <div className="lg:col-span-5 relative">
                                <div className="rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl bg-[#0D0D0D] group">
                                    <div className="aspect-[3/4] overflow-hidden relative">
                                        <img
                                            src={profileEstudio}
                                            alt="Rodrigo Rodrigues em gola polo preta tricotada"
                                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
                                    </div>
                                    <div className="p-5 bg-black/90 border-t border-white/10 flex items-center justify-between">
                                        <div>
                                            <p className="text-lg font-bold font-serif text-[#D4AF37]">Rodrigo Rodrigues</p>
                                            <p className="text-gray-400 text-xs font-mono uppercase tracking-wider mt-0.5">Estrategista Comercial & Fundador</p>
                                        </div>
                                        <Award className="w-6 h-6 text-[#D4AF37]" />
                                    </div>
                                </div>
                            </div>

                            {/* TEXTO AUTORAL DO RODRIGO */}
                            <div className="lg:col-span-7 space-y-6">
                                <span className="text-[#D4AF37] text-xs font-mono uppercase tracking-widest block">QUEM CONSTRÓI A SUA ESTRUTURA</span>
                                <h2 className="text-3xl md:text-5xl font-bold font-serif text-white leading-tight">
                                    Eu não construí a Migração Digital para vender ferramentas. Construí para ajudar negócios bons a serem percebidos como bons.
                                </h2>
                                <div className="space-y-4 text-gray-400 font-light text-base md:text-lg leading-relaxed">
                                    <p>
                                        Sou <strong className="text-white font-medium">Rodrigo Rodrigues</strong>, empresário e fundador da Migração Digital. Trabalho com vendas, estratégias de aquisição e mídias sociais porque acredito que crescimento comercial não é sobre postar artes decorativas. É sobre criar um canal previsível que traga clientes reais para o seu WhatsApp.
                                    </p>
                                    <p>
                                        Nossa agência é guiada por princípios claros: responsabilidade com o investimento do cliente, disciplina na execução técnica, honestidade nos diagnósticos e trabalho focado em gerar valor.
                                    </p>
                                </div>
                                <div className="pt-4 flex flex-wrap items-center gap-8 text-xs font-mono text-gray-400">
                                    <div>
                                        <p className="text-2xl font-bold font-mono text-[#D4AF37]">+100</p>
                                        <p className="mt-1">Empresas Atendidas</p>
                                    </div>
                                    <div>
                                        <p className="text-2xl font-bold font-mono text-[#D4AF37]">Campo Grande</p>
                                        <p className="mt-1">Rio de Janeiro / RJ & Brasil</p>
                                    </div>
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
                        <Link to="/thiagopimentel" className="hover:text-[#D4AF37] transition-colors">Thiago Pimentel</Link>
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
