import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    ArrowRight, MessageCircle, ChevronDown, Sparkles,
    Check, Send, ArrowUpRight, Quote
} from 'lucide-react';
import { SEOHelmet } from '../components/SEOHelmet';

// Fotos Reais do Thiago Pimentel
import thiagoBracosCruzadosImg from '../assets/thiago_bracos_cruzados.jpg';
import thiagoSorrindoImg from '../assets/thiago_sorrindo.jpg';
import thiagoPodcastImg from '../assets/thiago_podcast.jpg';

export function ThiagoPimentelPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [faqOpen, setFaqOpen] = useState<number | null>(null);

    if (!isAuthenticated) {
        const password = prompt("Página protegida. Digite a senha:");
        if (password === "123456") {
            setIsAuthenticated(true);
        } else {
            return <div style={{ textAlign: 'center', padding: '50px', fontFamily: 'sans-serif', color: 'white' }}>Acesso Negado</div>;
        }
    }
    const [formData, setFormData] = useState({
        nome: '',
        whatsapp: '',
        email: '',
        desricao: 'Sou investidor individual',
        objetivo: 'Organizar meus investimentos',
        patrimonio: 'Até R$ 100 mil',
        agonia: '',
        consentimento: true
    });
    const [submitted, setSubmitted] = useState(false);

    const toggleFaq = (index: number) => {
        setFaqOpen(faqOpen === index ? null : index);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        const text = `Olá! Preenchi o formulário no site do Thiago Pimentel:%0A%0A*Nome:* ${formData.nome}%0A*WhatsApp:* ${formData.whatsapp}%0A*E-mail:* ${formData.email}%0A*Perfil:* ${formData.desricao}%0A*Objetivo:* ${formData.objetivo}%0A*Patrimônio:* ${formData.patrimonio}%0A*Principal agonia:* ${formData.agonia || 'Organizar estratégia de investimentos'}`;
        window.open(`https://wa.me/5521979043854?text=${text}`, '_blank');
    };

    const faqs = [
        {
            q: "Preciso ter muito dinheiro para conversar?",
            a: "Atendemos investidores em diferentes estágios da vida financeira: desde quem está organizando os primeiros passos até empresários e famílias com patrimônio consolidado."
        },
        {
            q: "A conversa é uma recomendação de investimento?",
            a: "A primeira conversa serve para entender sua realidade, seus objetivos e seu momento atual. Não é uma recomendação imediata; primeiro entendemos seu contexto."
        },
        {
            q: "Quanto custa a assessoria?",
            a: "O modelo de atendimento através da Volare Investimentos (credenciada à XP) é transparente. Explicamos todos os custos e modelos de remuneração de forma clara antes de qualquer decisão."
        },
        {
            q: "Vocês garantem rentabilidade?",
            a: "Não. Nenhuma assessoria séria promete rentabilidade garantida. O trabalho é focado em eficiência, gestão de risco e alinhamento com seus objetivos de vida."
        },
        {
            q: "A Volare é ligada à XP?",
            a: "Sim, a Volare Investimentos é um escritório de assessoria de investimentos devidamente credenciado à XP Investimentos."
        },
        {
            q: "Posso falar apenas sobre uma dúvida?",
            a: "Sim. A equipe está preparada para responder suas dúvidas e avaliar se faz sentido avançar para um plano de acompanhamento."
        }
    ];

    // Logo Fiel à Imagem de Referência (Texto DM Serif Display + Subtítulo em Verde)
    const BrandLogo = () => (
        <a href="#topo" className="flex flex-col text-left group">
            <span className="font-serif text-xl md:text-2xl font-normal text-[#F6F1E8] leading-none tracking-tight">
                Thiago Pimentel
            </span>
            <span className="text-[10px] md:text-[11px] font-mono tracking-[0.18em] text-[#1E9B65] font-bold uppercase leading-none mt-1.5">
                O INVESTIDOR AGONIADO
            </span>
        </a>
    );

    return (
        <div className="min-h-screen bg-[#06120D] text-[#F6F1E8] selection:bg-[#36E58D]/30 selection:text-[#36E58D] font-sans overflow-x-hidden antialiased">
            <SEOHelmet
                title="Thiago Pimentel | O Investidor Agoniado - Assessoria de Investimentos"
                description="Menos agonia, mais clareza para investir. Conteúdo direto sobre dinheiro e assessoria de investimentos com a Volare, credenciada à XP."
            />

            {/* HEADER COMPACTO E RESPONSIVO */}
            <nav className="fixed top-0 w-full z-[100] bg-[#06120D]/95 backdrop-blur-2xl border-b border-[#1B3A2C] py-3.5 px-4 md:px-6">
                <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
                    <BrandLogo />

                    <div className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-wider text-[#B9C7BE]">
                        <a href="#metodo" className="hover:text-[#36E58D] transition-colors">Como funciona</a>
                        <a href="#conteudos" className="hover:text-[#36E58D] transition-colors">Conteúdos</a>
                        <a href="#sobre" className="hover:text-[#36E58D] transition-colors">Sobre o Thiago</a>
                    </div>

                    {/* Botão no Header: Versão Compacta no Mobile */}
                    <a
                        href="#formulario"
                        className="bg-[#36E58D] hover:bg-[#1E9B65] text-[#101713] px-3.5 py-2 md:px-6 md:py-2.5 rounded-full font-bold transition-all shadow-md text-[10px] md:text-xs uppercase tracking-wider whitespace-nowrap"
                    >
                        <span className="md:hidden">Organizar</span>
                        <span className="hidden md:inline">Quero organizar meus investimentos</span>
                    </a>
                </div>
            </nav>

            <main className="pt-24 md:pt-36">
                {/* HERO PRINCIPAL - OTIMIZADO PARA MOBILE */}
                <section id="topo" className="px-4 md:px-6 pb-16 md:pb-32 border-b border-[#1B3A2C] relative overflow-hidden bg-[#06120D]">
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#36E58D]/5 blur-[180px] rounded-full pointer-events-none" />

                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
                        {/* Texto Alinhado à Esquerda */}
                        <div className="lg:col-span-7 text-left space-y-6 md:space-y-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-[#10251D] border border-[#1B3A2C] text-[#36E58D] text-[10px] md:text-xs font-mono tracking-widest uppercase font-bold">
                                <Sparkles className="w-3 h-3 md:w-3.5 md:h-3.5 shrink-0" />
                                <span>MENOS AGONIA. MAIS CLAREZA PARA INVESTIR.</span>
                            </div>

                            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal font-serif tracking-tight leading-[1.08] text-[#F6F1E8]">
                                O dinheiro não precisa ser uma fonte permanente de <br className="hidden sm:block" />
                                <span className="text-[#36E58D]">
                                    agonia.
                                </span>
                            </h1>

                            <div className="space-y-3 text-sm md:text-lg text-[#B9C7BE] font-light leading-relaxed max-w-2xl">
                                <p>
                                    Eu sou <strong className="text-[#F6F1E8] font-semibold">Thiago Pimentel</strong>, o Investidor Agoniado. Falo sobre dinheiro, investimentos e comportamento financeiro de um jeito direto, sem transformar complexidade em espetáculo.
                                </p>
                                <p className="text-xs md:text-base">
                                    Quando você quiser sair das dicas soltas e começar a organizar uma estratégia para a sua realidade, minha equipe pode ajudar.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                                <a
                                    href="#formulario"
                                    className="w-full sm:w-auto bg-[#36E58D] hover:bg-[#1E9B65] text-[#101713] font-bold text-xs uppercase tracking-wider py-3.5 px-6 md:py-4 md:px-8 rounded-full transition-all shadow-lg flex items-center justify-center gap-2"
                                >
                                    <span>Quero organizar minha estratégia</span>
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                                <a
                                    href="#conteudos"
                                    className="w-full sm:w-auto bg-transparent hover:bg-white/5 text-[#F6F1E8] border border-[#1B3A2C] text-xs font-bold uppercase tracking-wider py-3.5 px-6 md:py-4 md:px-8 rounded-full transition-all flex items-center justify-center"
                                >
                                    Conhecer os conteúdos
                                </a>
                            </div>

                            <p className="text-[11px] md:text-xs text-[#B9C7BE]/70 font-mono">
                                Educação financeira, visão prática e assessoria para quem quer tomar decisões com mais clareza.
                            </p>
                        </div>

                        {/* Imagem Real do Thiago no Mobile */}
                        <div className="lg:col-span-5 relative mt-4 lg:mt-0">
                            <div className="relative rounded-3xl overflow-hidden border border-[#1B3A2C] shadow-2xl bg-[#10251D] p-1.5 md:p-2">
                                <div className="rounded-2xl overflow-hidden aspect-[4/5] relative">
                                    <img
                                        src={thiagoBracosCruzadosImg}
                                        alt="Thiago Pimentel - O Investidor Agoniado"
                                        className="w-full h-full object-cover object-top"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#06120D] via-transparent to-transparent opacity-70" />
                                </div>
                            </div>

                            {/* Caixinha Flutuante de Pergunta (Adaptada para Mobile) */}
                            <div className="absolute -bottom-4 left-2 md:-bottom-6 md:-left-6 max-w-[210px] md:max-w-[260px] bg-[#10251D]/95 border border-[#1B3A2C] p-3 md:p-4 rounded-2xl shadow-2xl backdrop-blur-md text-left">
                                <p className="text-[9px] md:text-[10px] font-mono uppercase text-[#36E58D] tracking-wider font-bold">Caixinha de perguntas</p>
                                <p className="text-[11px] md:text-xs text-[#F6F1E8] mt-0.5 leading-snug font-medium">Você investe ou só acompanha conteúdo sobre investimentos?</p>
                            </div>
                        </div>
                    </div>

                    {/* Cards Horizontais de Autoridade */}
                    <div className="pt-20 max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-6 bg-[#10251D] border border-[#1B3A2C] rounded-2xl text-left">
                                <p className="text-3xl font-extrabold text-[#36E58D] font-mono">174 mil</p>
                                <p className="text-xs font-mono text-[#B9C7BE] uppercase tracking-wider mt-1">seguidores</p>
                            </div>
                            <div className="p-6 bg-[#10251D] border border-[#1B3A2C] rounded-2xl text-left">
                                <p className="text-3xl font-extrabold text-[#36E58D] font-mono">1.796</p>
                                <p className="text-xs font-mono text-[#B9C7BE] uppercase tracking-wider mt-1">posts publicados</p>
                            </div>
                            <div className="p-6 bg-[#10251D] border border-[#1B3A2C] rounded-2xl text-left">
                                <p className="text-3xl font-extrabold text-[#36E58D] font-mono">+R$ 280 milhões</p>
                                <p className="text-xs font-mono text-[#B9C7BE] uppercase tracking-wider mt-1">orientados na XP*</p>
                            </div>
                        </div>
                        <p className="text-[10px] font-mono text-[#B9C7BE]/60 text-left mt-3">*Informações sujeitas a atualização e validação pela equipe responsável.</p>
                    </div>
                </section>

                {/* IDENTIFICAÇÃO DA DOR (CREME QUENTE #F3EFE6) */}
                <section className="py-20 md:py-28 px-6 border-b border-[#D9D4C8] bg-[#F3EFE6] text-[#101713]">
                    <div className="max-w-6xl mx-auto space-y-16">
                        <div className="text-left max-w-3xl space-y-4">
                            <h2 className="text-3xl md:text-5xl font-normal font-serif text-[#101713] leading-tight">
                                Você não está necessariamente sem informação. <span className="text-[#1E9B65] italic">Talvez esteja sem clareza.</span>
                            </h2>
                            <p className="text-[#566158] font-light text-base md:text-lg leading-relaxed">
                                Você vê uma opinião diferente todos os dias. Um dia falam de bitcoin. No outro, de imóveis. Depois aparece uma oportunidade “imperdível”, uma carteira nova, uma promessa de retorno ou alguém dizendo que você está investindo errado.
                            </p>
                            <p className="text-[#101713] font-semibold text-base md:text-lg">
                                No fim, sobra a dúvida: o que realmente faz sentido para a minha vida, meu patrimônio, meus objetivos e meu momento?
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-8 bg-[#FAF8F2] border border-[#D9D4C8] rounded-2xl text-left shadow-sm hover:border-[#1E9B65] transition-colors space-y-3">
                                <Quote className="w-5 h-5 text-[#1E9B65]" />
                                <p className="text-lg font-bold text-[#101713]">“Eu acompanho vários conteúdos, mas continuo sem saber por onde começar.”</p>
                            </div>
                            <div className="p-8 bg-[#FAF8F2] border border-[#D9D4C8] rounded-2xl text-left shadow-sm hover:border-[#1E9B65] transition-colors space-y-3">
                                <Quote className="w-5 h-5 text-[#1E9B65]" />
                                <p className="text-lg font-bold text-[#101713]">“Tenho investimentos, mas não sei se estão organizados para os meus objetivos.”</p>
                            </div>
                            <div className="p-8 bg-[#FAF8F2] border border-[#D9D4C8] rounded-2xl text-left shadow-sm hover:border-[#1E9B65] transition-colors space-y-3">
                                <Quote className="w-5 h-5 text-[#1E9B65]" />
                                <p className="text-lg font-bold text-[#101713]">“Tomo decisões quando o mercado sobe ou cai e depois fico arrependido.”</p>
                            </div>
                            <div className="p-8 bg-[#FAF8F2] border border-[#D9D4C8] rounded-2xl text-left shadow-sm hover:border-[#1E9B65] transition-colors space-y-3">
                                <Quote className="w-5 h-5 text-[#1E9B65]" />
                                <p className="text-lg font-bold text-[#101713]">“Não tenho tempo para acompanhar tudo e queria alguém para me ajudar a estruturar.”</p>
                            </div>
                        </div>

                        <p className="text-2xl font-serif text-[#101713] text-left border-l-4 border-[#1E9B65] pl-6 py-2">
                            Investir não começa escolhendo um produto. Começa entendendo o contexto.
                        </p>
                    </div>
                </section>

                {/* SOBRE O THIAGO */}
                <section id="sobre" className="py-20 md:py-28 px-6 border-b border-[#1B3A2C] bg-[#06120D]">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-5 relative">
                            <div className="relative rounded-3xl overflow-hidden border border-[#1B3A2C] shadow-2xl bg-[#10251D] p-2">
                                <div className="rounded-2xl overflow-hidden aspect-[4/5] relative">
                                    <img
                                        src={thiagoPodcastImg}
                                        alt="Thiago Pimentel em gravação de podcast"
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7 space-y-6 text-left">
                            <span className="text-xs font-mono text-[#36E58D] uppercase tracking-widest block font-bold">SOBRE O THIAGO</span>
                            <h2 className="text-3xl md:text-5xl font-normal font-serif text-[#F6F1E8] leading-tight">
                                Eu falo de investimentos porque sei que dinheiro não é só número.
                            </h2>
                            <div className="space-y-4 text-[#B9C7BE] font-light text-base md:text-lg leading-relaxed">
                                <p>
                                    Sou Thiago Pimentel, assessor de investimentos e criador do <strong className="text-[#F6F1E8] font-semibold">O Investidor Agoniado</strong>.
                                </p>
                                <p>
                                    No meu conteúdo, eu respondo perguntas, questiono certezas e tento traduzir assuntos financeiros para a vida real. Às vezes falando sério. Às vezes usando humor. Sempre tentando mostrar que uma decisão financeira precisa fazer sentido antes de parecer sofisticada.
                                </p>
                                <p>
                                    Além do conteúdo, sou sócio da <strong className="text-[#F6F1E8] font-semibold">Volare Investimentos</strong>, escritório de assessoria de investimentos credenciado à <strong className="text-[#36E58D] font-semibold">XP</strong>. É por meio dessa estrutura que pessoas interessadas podem avançar da informação para uma conversa sobre seus próprios objetivos.
                                </p>
                            </div>
                            <div className="pt-4">
                                <a
                                    href="#formulario"
                                    className="inline-flex items-center gap-3 bg-[#36E58D] hover:bg-[#1E9B65] text-[#101713] font-bold text-xs uppercase tracking-wider py-4 px-8 rounded-full transition-all shadow-lg"
                                >
                                    Quero falar com a equipe
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* MÉTODO */}
                <section id="metodo" className="py-20 md:py-28 px-6 border-b border-[#1B3A2C] bg-[#0B2118]">
                    <div className="max-w-7xl mx-auto space-y-16">
                        <div className="text-left max-w-3xl space-y-4">
                            <span className="text-xs font-mono text-[#36E58D] uppercase tracking-widest block font-bold">Como funciona</span>
                            <h2 className="text-3xl md:text-5xl font-normal font-serif text-[#F6F1E8] leading-tight">
                                Antes de falar sobre investimento, a gente entende você.
                            </h2>
                            <p className="text-[#B9C7BE] font-light text-base leading-relaxed">
                                Não existe uma carteira universal que sirva para todas as pessoas. O trabalho começa entendendo objetivos, prazos, patrimônio, momento de vida, tolerância a riscos e o nível de acompanhamento que faz sentido para cada cliente.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="p-8 bg-[#10251D] border border-[#1B3A2C] rounded-3xl text-left space-y-3 hover:border-[#36E58D] transition-colors">
                                <span className="text-4xl font-mono font-extrabold text-[#36E58D]">01</span>
                                <h3 className="text-xl font-bold text-[#F6F1E8]"><span className="text-[#36E58D]">Entender</span></h3>
                                <p className="text-xs text-[#B9C7BE] font-light leading-relaxed">Conversamos sobre sua realidade, seus objetivos, suas prioridades e as decisões que você precisa tomar.</p>
                            </div>

                            <div className="p-8 bg-[#10251D] border border-[#1B3A2C] rounded-3xl text-left space-y-3 hover:border-[#36E58D] transition-colors">
                                <span className="text-4xl font-mono font-extrabold text-[#36E58D]">02</span>
                                <h3 className="text-xl font-bold text-[#F6F1E8]"><span className="text-[#36E58D]">Organizar</span></h3>
                                <p className="text-xs text-[#B9C7BE] font-light leading-relaxed">Colocamos contexto no que hoje pode estar espalhado: investimentos, prioridades, prazos, riscos e próximos passos.</p>
                            </div>

                            <div className="p-8 bg-[#10251D] border border-[#1B3A2C] rounded-3xl text-left space-y-3 hover:border-[#36E58D] transition-colors">
                                <span className="text-4xl font-mono font-extrabold text-[#36E58D]">03</span>
                                <h3 className="text-xl font-bold text-[#F6F1E8]"><span className="text-[#36E58D]">Construir</span></h3>
                                <p className="text-xs text-[#B9C7BE] font-light leading-relaxed">A equipe estrutura uma estratégia de investimentos alinhada ao seu perfil e aos seus objetivos, sempre com você no centro das decisões.</p>
                            </div>

                            <div className="p-8 bg-[#10251D] border border-[#1B3A2C] rounded-3xl text-left space-y-3 hover:border-[#36E58D] transition-colors">
                                <span className="text-4xl font-mono font-extrabold text-[#36E58D]">04</span>
                                <h3 className="text-xl font-bold text-[#F6F1E8]"><span className="text-[#36E58D]">Acompanhar</span></h3>
                                <p className="text-xs text-[#B9C7BE] font-light leading-relaxed">A estratégia não termina na implementação. A evolução é acompanhada e revisada conforme sua vida e seus objetivos mudam.</p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-6">
                            <p className="max-w-xl text-left border-l-2 border-[#36E58D] pl-5 text-xl font-serif text-[#F6F1E8]">
                                A ideia não é eliminar todo risco. É tomar decisões entendendo melhor quais riscos você está assumindo.
                            </p>
                            <a
                                href="#formulario"
                                className="bg-[#36E58D] hover:bg-[#1E9B65] text-[#101713] px-8 py-4 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-lg"
                            >
                                Quero entender meu próximo passo
                            </a>
                        </div>
                    </div>
                </section>

                {/* PARA QUEM É */}
                <section className="py-20 md:py-28 px-6 border-b border-[#1B3A2C] bg-[#06120D]">
                    <div className="max-w-7xl mx-auto space-y-16">
                        <div className="text-left max-w-3xl space-y-4">
                            <span className="text-xs font-mono text-[#36E58D] uppercase tracking-widest block font-bold">Para quem é</span>
                            <h2 className="text-3xl md:text-5xl font-normal font-serif text-[#F6F1E8] leading-tight">
                                Talvez você não precise de mais uma dica. <span className="text-[#36E58D]">Talvez precise de um plano.</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
                                <a href="#formulario" className="group p-8 bg-[#10251D] border border-[#1B3A2C] hover:border-[#36E58D] rounded-3xl text-left transition-all block">
                                    <h3 className="text-xl font-bold text-[#F6F1E8]">Para quem está começando</h3>
                                    <p className="text-xs text-[#B9C7BE] font-light mt-3 leading-relaxed">Você quer investir, mas ainda se sente perdido entre produtos, opiniões e termos difíceis.</p>
                                    <span className="mt-6 flex items-center gap-2 text-xs font-bold text-[#36E58D]">Quero começar com mais clareza <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></span>
                                </a>

                                <a href="#formulario" className="group p-8 bg-[#10251D] border border-[#1B3A2C] hover:border-[#36E58D] rounded-3xl text-left transition-all block">
                                    <h3 className="text-xl font-bold text-[#F6F1E8]">Para quem já investe</h3>
                                    <p className="text-xs text-[#B9C7BE] font-light mt-3 leading-relaxed">Você tem uma carteira, mas não sabe se ela está conectada aos seus objetivos ou se foi construída apenas com decisões isoladas.</p>
                                    <span className="mt-6 flex items-center gap-2 text-xs font-bold text-[#36E58D]">Quero revisar minha estratégia <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></span>
                                </a>

                                <a href="#formulario" className="group p-8 bg-[#10251D] border border-[#1B3A2C] hover:border-[#36E58D] rounded-3xl text-left transition-all block">
                                    <h3 className="text-xl font-bold text-[#F6F1E8]">Para empreendedores e profissionais</h3>
                                    <p className="text-xs text-[#B9C7BE] font-light mt-3 leading-relaxed">Seu patrimônio e sua renda cresceram, mas sua organização financeira não acompanhou a mesma velocidade.</p>
                                    <span className="mt-6 flex items-center gap-2 text-xs font-bold text-[#36E58D]">Quero organizar meu patrimônio <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></span>
                                </a>

                                <a href="#formulario" className="group p-8 bg-[#10251D] border border-[#1B3A2C] hover:border-[#36E58D] rounded-3xl text-left transition-all block">
                                    <h3 className="text-xl font-bold text-[#F6F1E8]">Para quem vive agoniado com o mercado</h3>
                                    <p className="text-xs text-[#B9C7BE] font-light mt-3 leading-relaxed">Cada notícia parece exigir uma nova decisão. Você quer uma estratégia que consiga seguir mesmo quando o cenário muda.</p>
                                    <span className="mt-6 flex items-center gap-2 text-xs font-bold text-[#36E58D]">Quero investir com mais tranquilidade <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></span>
                                </a>
                            </div>

                            <div className="lg:col-span-5 relative">
                                <div className="relative rounded-3xl overflow-hidden border border-[#1B3A2C] shadow-2xl bg-[#10251D] p-2">
                                    <div className="rounded-2xl overflow-hidden aspect-[4/5] relative">
                                        <img
                                            src={thiagoSorrindoImg}
                                            alt="Thiago Pimentel sorrindo"
                                            className="w-full h-full object-cover object-center"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CONTEÚDOS (CREME QUENTE #F3EFE6) */}
                <section id="conteudos" className="py-20 md:py-28 px-6 border-b border-[#D9D4C8] bg-[#F3EFE6] text-[#101713]">
                    <div className="max-w-7xl mx-auto space-y-16">
                        <div className="text-left max-w-3xl space-y-4">
                            <span className="text-xs font-mono text-[#1E9B65] uppercase tracking-widest block font-bold">Conteúdos</span>
                            <h2 className="text-3xl md:text-5xl font-normal font-serif text-[#101713] leading-tight">
                                A pergunta que você tem provavelmente já apareceu por aqui.
                            </h2>
                            <p className="text-[#566158] font-light text-base leading-relaxed">
                                No Instagram, eu respondo perguntas sobre bitcoin, imóveis, comportamento, consumo, trabalho, empreendedorismo e investimentos. Aqui, você encontra os conteúdos organizados para entender o contexto por trás.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="p-6 bg-[#FAF8F2] border border-[#D9D4C8] rounded-2xl space-y-2 text-left">
                                <h3 className="text-lg font-bold text-[#101713]">Tira a agonia</h3>
                                <p className="text-xs text-[#566158] font-light leading-relaxed">Conceitos básicos e dúvidas de quem está começando.</p>
                            </div>

                            <div className="p-6 bg-[#FAF8F2] border border-[#D9D4C8] rounded-2xl space-y-2 text-left">
                                <h3 className="text-lg font-bold text-[#101713]">Dinheiro e comportamento</h3>
                                <p className="text-xs text-[#566158] font-light leading-relaxed">Impulsividade, consumo, disciplina e decisões financeiras.</p>
                            </div>

                            <div className="p-6 bg-[#FAF8F2] border border-[#D9D4C8] rounded-2xl space-y-2 text-left">
                                <h3 className="text-lg font-bold text-[#101713]">Investimento com contexto</h3>
                                <p className="text-xs text-[#566158] font-light leading-relaxed">Bitcoin, imóveis, renda fixa, diversificação e risco.</p>
                            </div>

                            <div className="p-6 bg-[#FAF8F2] border border-[#D9D4C8] rounded-2xl space-y-2 text-left">
                                <h3 className="text-lg font-bold text-[#101713]">Vida real e patrimônio</h3>
                                <p className="text-xs text-[#566158] font-light leading-relaxed">Empreendedorismo, renda, família, planejamento e escolhas.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
                            <div className="bg-[#10251D] border border-[#1B3A2C] text-[#F6F1E8] p-6 rounded-2xl text-left space-y-4 shadow-lg flex flex-col justify-between">
                                <div>
                                    <span className="px-3 py-1 bg-[#36E58D]/20 text-[#36E58D] text-[10px] font-mono uppercase tracking-wider rounded-md font-bold block w-max mb-3">Investimento com contexto</span>
                                    <p className="text-lg font-bold leading-snug">“Você compraria bitcoin agora?”</p>
                                </div>
                                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full py-2.5 bg-transparent border border-[#1B3A2C] hover:bg-[#36E58D] hover:text-[#101713] text-xs font-bold uppercase tracking-wider rounded-full transition-colors">
                                    Ver explicação
                                </a>
                            </div>

                            <div className="bg-[#10251D] border border-[#1B3A2C] text-[#F6F1E8] p-6 rounded-2xl text-left space-y-4 shadow-lg flex flex-col justify-between">
                                <div>
                                    <span className="px-3 py-1 bg-[#36E58D]/20 text-[#36E58D] text-[10px] font-mono uppercase tracking-wider rounded-md font-bold block w-max mb-3">Vida real e patrimônio</span>
                                    <p className="text-lg font-bold leading-snug">“Imóvel é investimento?”</p>
                                </div>
                                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full py-2.5 bg-transparent border border-[#1B3A2C] hover:bg-[#36E58D] hover:text-[#101713] text-xs font-bold uppercase tracking-wider rounded-full transition-colors">
                                    Ver explicação
                                </a>
                            </div>

                            <div className="bg-[#10251D] border border-[#1B3A2C] text-[#F6F1E8] p-6 rounded-2xl text-left space-y-4 shadow-lg flex flex-col justify-between">
                                <div>
                                    <span className="px-3 py-1 bg-[#36E58D]/20 text-[#36E58D] text-[10px] font-mono uppercase tracking-wider rounded-md block w-max mb-3 font-bold">Investimento com contexto</span>
                                    <p className="text-lg font-bold leading-snug">“Você está diversificando ou apenas acumulando produtos?”</p>
                                </div>
                                <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full py-2.5 bg-transparent border border-[#1B3A2C] hover:bg-[#36E58D] hover:text-[#101713] text-xs font-bold uppercase tracking-wider rounded-full transition-colors">
                                    Ver explicação
                                </a>
                            </div>

                            <div className="bg-[#10251D] border border-[#1B3A2C] text-[#F6F1E8] p-6 rounded-2xl text-left space-y-4 shadow-lg flex flex-col justify-between">
                                <div>
                                    <span className="px-3 py-1 bg-[#36E58D]/20 text-[#36E58D] text-[10px] font-mono uppercase tracking-wider rounded-md font-bold block w-max mb-3">Dinheiro e comportamento</span>
                                    <p className="text-lg font-bold leading-snug">“Por que guardar dinheiro parece tão difícil?”</p>
                                </div>
                                <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full py-2.5 bg-transparent border border-[#1B3A2C] hover:bg-[#36E58D] hover:text-[#101713] text-xs font-bold uppercase tracking-wider rounded-full transition-colors">
                                    Ver explicação
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ESTRUTURA PROFISSIONAL */}
                <section className="py-20 md:py-28 px-6 border-b border-[#1B3A2C] bg-[#06120D]">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-6 text-left space-y-6">
                            <span className="text-xs font-mono text-[#36E58D] uppercase tracking-widest block font-bold">Estrutura profissional</span>
                            <h2 className="text-3xl md:text-5xl font-normal font-serif text-[#F6F1E8] leading-tight">
                                Conteúdo aproxima. <span className="text-[#36E58D]">Estrutura sustenta.</span>
                            </h2>
                            <p className="text-[#B9C7BE] font-light text-base md:text-lg leading-relaxed">
                                Por trás da conversa existe a Volare Investimentos, escritório de assessoria de investimentos credenciado à XP, com processo de entendimento, construção, implementação e acompanhamento.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-2">
                                <a href="#formulario" className="bg-[#36E58D] hover:bg-[#1E9B65] text-[#101713] px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-lg">
                                    Falar com a equipe
                                </a>
                                <a href="https://volareinvestimentos.com.br/" target="_blank" rel="noopener noreferrer" className="border border-[#1B3A2C] hover:border-[#36E58D] text-[#F6F1E8] px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2">
                                    Conhecer a Volare <ArrowUpRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        <div className="lg:col-span-6 bg-[#10251D] p-8 md:p-10 rounded-3xl border border-[#1B3A2C] text-left space-y-6 shadow-2xl">
                            <div className="flex items-center gap-3 border-b border-[#1B3A2C] pb-4">
                                <span className="text-2xl font-serif text-[#F6F1E8] tracking-tight">Volare</span>
                                <span className="text-xs font-mono uppercase text-[#36E58D] tracking-widest font-bold">Investimentos</span>
                            </div>
                            <p className="text-xs text-[#B9C7BE]">Escritório de assessoria de investimentos credenciado à XP. Uso de marcas conforme regras e aprovação institucional.</p>
                            <ul className="space-y-4 text-xs text-[#F6F1E8]">
                                <li className="flex items-start gap-3"><Check className="w-4 h-4 text-[#36E58D] mt-0.5 shrink-0" /> <span><strong className="text-white">Entender.</strong> Conversamos sobre sua realidade, seus objetivos e prioridades.</span></li>
                                <li className="flex items-start gap-3"><Check className="w-4 h-4 text-[#36E58D] mt-0.5 shrink-0" /> <span><strong className="text-white">Organizar.</strong> Colocamos contexto no que hoje pode estar espalhado.</span></li>
                                <li className="flex items-start gap-3"><Check className="w-4 h-4 text-[#36E58D] mt-0.5 shrink-0" /> <span><strong className="text-white">Construir.</strong> Estratégia de investimentos alinhada ao seu perfil.</span></li>
                                <li className="flex items-start gap-3"><Check className="w-4 h-4 text-[#36E58D] mt-0.5 shrink-0" /> <span><strong className="text-white">Acompanhar.</strong> A evolução é acompanhada e revisada continuamente.</span></li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* FAQ NOVO ESTILO (PERGUNTAS FREQUENTES EM CREME QUENTE FIEL AO PRINTSCREEN 2) */}
                <section className="py-20 md:py-28 px-6 border-b border-[#D9D4C8] bg-[#F3EFE6] text-[#101713]">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        {/* Lado Esquerdo */}
                        <div className="lg:col-span-5 text-left space-y-4">
                            <span className="text-xs font-mono text-[#1E9B65] uppercase tracking-widest block font-bold">PERGUNTAS FREQUENTES</span>
                            <h2 className="text-3xl md:text-5xl font-normal font-serif text-[#101713] leading-tight">
                                Dúvidas antes de começar a conversa.
                            </h2>
                        </div>

                        {/* Lado Direito - Lista com Linhas Divisórias Limpas */}
                        <div className="lg:col-span-7 space-y-0 text-left">
                            {faqs.map((faq, idx) => (
                                <div key={idx} className="border-b border-[#D9D4C8] py-5">
                                    <button
                                        onClick={() => toggleFaq(idx)}
                                        className="w-full text-left font-serif font-normal text-lg md:text-xl text-[#101713] flex justify-between items-center gap-4 hover:text-[#1E9B65] transition-colors"
                                    >
                                        <span>{faq.q}</span>
                                        <ChevronDown className={`w-5 h-5 text-[#1E9B65] transition-transform ${faqOpen === idx ? 'rotate-180' : ''}`} />
                                    </button>
                                    {faqOpen === idx && (
                                        <div className="pt-3 text-sm text-[#566158] font-light leading-relaxed">
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SEÇÃO "CHEGA DE TOMAR DECISÃO FINANCEIRA NO ESCURO" (FIEL AO PRINTSCREEN 2) */}
                <section className="py-24 md:py-32 px-6 border-b border-[#1B3A2C] bg-[#06120D] text-center">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <h2 className="text-4xl md:text-6xl font-normal font-serif text-[#F6F1E8] leading-tight">
                            Chega de tomar decisão financeira <span className="italic text-[#36E58D]">no escuro.</span>
                        </h2>

                        <p className="text-base md:text-lg text-[#B9C7BE] font-light max-w-2xl mx-auto leading-relaxed">
                            Você não precisa entender tudo antes de começar uma conversa. Precisa apenas dar o primeiro passo com as informações que já tem hoje.
                        </p>

                        <div className="pt-4">
                            <a
                                href="#formulario"
                                className="inline-flex items-center gap-3 bg-[#36E58D] hover:bg-[#1E9B65] text-[#101713] font-bold text-xs uppercase tracking-wider py-4 px-9 rounded-full transition-all shadow-xl hover:scale-105"
                            >
                                Quero organizar minha estratégia
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>

                        <p className="text-xs text-[#B9C7BE]/60 font-mono max-w-xl mx-auto pt-2">
                            Sem promessa de rentabilidade. Sem fórmula mágica. Uma conversa sobre contexto, objetivos e próximos passos.
                        </p>
                    </div>
                </section>

                {/* FORMULÁRIO CENTRALIZADO EM CARD ESCURO */}
                <section id="formulario" className="py-20 md:py-28 px-6 bg-[#06120D]">
                    <div className="max-w-3xl mx-auto space-y-12">
                        <div className="text-center space-y-4">
                            <span className="text-xs font-mono text-[#36E58D] uppercase tracking-widest block font-bold">Formulário</span>
                            <h2 className="text-3xl md:text-5xl font-normal font-serif text-[#F6F1E8] leading-tight">
                                Vamos entender o que está deixando você agoniado?
                            </h2>
                            <p className="text-[#B9C7BE] font-light text-base leading-relaxed">
                                Preencha os dados abaixo. A equipe entrará em contato para entender seu momento e explicar os próximos passos.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="p-8 md:p-12 bg-[#10251D] border border-[#1B3A2C] rounded-3xl text-left space-y-6 shadow-2xl backdrop-blur-xl">
                            <div>
                                <label className="block text-xs font-mono uppercase tracking-wider text-[#B9C7BE] mb-2 font-bold">Nome *</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.nome}
                                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                                    placeholder="Seu nome completo"
                                    className="w-full px-4 py-3.5 bg-[#06120D] border border-[#1B3A2C] rounded-xl text-[#F6F1E8] placeholder-[#566158] focus:border-[#36E58D] focus:outline-none transition-colors"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-mono uppercase tracking-wider text-[#B9C7BE] mb-2 font-bold">WhatsApp *</label>
                                    <input
                                        type="tel"
                                        required
                                        value={formData.whatsapp}
                                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                                        placeholder="(21) 99999-9999"
                                        className="w-full px-4 py-3.5 bg-[#06120D] border border-[#1B3A2C] rounded-xl text-[#F6F1E8] placeholder-[#566158] focus:border-[#36E58D] focus:outline-none transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-mono uppercase tracking-wider text-[#B9C7BE] mb-2 font-bold">E-mail *</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="seu@email.com"
                                        className="w-full px-4 py-3.5 bg-[#06120D] border border-[#1B3A2C] rounded-xl text-[#F6F1E8] placeholder-[#566158] focus:border-[#36E58D] focus:outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-mono uppercase tracking-wider text-[#B9C7BE] mb-2 font-bold">O que melhor descreve você?</label>
                                    <select
                                        value={formData.desricao}
                                        onChange={(e) => setFormData({ ...formData, desricao: e.target.value })}
                                        className="w-full px-4 py-3.5 bg-[#06120D] border border-[#1B3A2C] rounded-xl text-[#F6F1E8] focus:border-[#36E58D] focus:outline-none transition-colors"
                                    >
                                        <option value="Sou investidor individual">Sou investidor individual</option>
                                        <option value="Sou empresário / empreendedor">Sou empresário / empreendedor</option>
                                        <option value="Sou profissional liberal / médico">Sou profissional liberal / médico</option>
                                        <option value="Estou começando agora">Estou começando agora</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-mono uppercase tracking-wider text-[#B9C7BE] mb-2 font-bold">Faixa de Patrimônio Investível</label>
                                    <select
                                        value={formData.patrimonio}
                                        onChange={(e) => setFormData({ ...formData, patrimonio: e.target.value })}
                                        className="w-full px-4 py-3.5 bg-[#06120D] border border-[#1B3A2C] rounded-xl text-[#F6F1E8] focus:border-[#36E58D] focus:outline-none transition-colors"
                                    >
                                        <option value="Até R$ 100 mil">Até R$ 100 mil</option>
                                        <option value="De R$ 100 mil a R$ 300 mil">De R$ 100 mil a R$ 300 mil</option>
                                        <option value="De R$ 300 mil a R$ 1 Milhão">De R$ 300 mil a R$ 1 Milhão</option>
                                        <option value="Acima de R$ 1 Milhão">Acima de R$ 1 Milhão</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-[#B9C7BE] text-xs font-mono uppercase tracking-wider mb-2 font-bold">Qual é seu principal objetivo ou agonia hoje?</label>
                                <textarea
                                    rows={3}
                                    value={formData.agonia}
                                    onChange={(e) => setFormData({ ...formData, agonia: e.target.value })}
                                    placeholder="Ex: Quero organizar meus investimentos com mais segurança..."
                                    className="w-full px-4 py-3.5 bg-[#06120D] border border-[#1B3A2C] rounded-xl text-[#F6F1E8] placeholder-[#566158] focus:border-[#36E58D] focus:outline-none transition-colors"
                                />
                            </div>

                            <div className="flex items-center gap-3 pt-2">
                                <input
                                    type="checkbox"
                                    id="consent"
                                    checked={formData.consentimento}
                                    onChange={(e) => setFormData({ ...formData, consentimento: e.target.checked })}
                                    className="w-4 h-4 accent-[#36E58D]"
                                />
                                <label htmlFor="consent" className="text-xs text-[#B9C7BE] font-light">
                                    Concordo em receber o contato da equipe da Volare Investimentos para tirar minhas dúvidas.
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#36E58D] hover:bg-[#1E9B65] text-[#101713] font-bold text-xs uppercase tracking-wider py-4 rounded-xl transition-all shadow-xl flex items-center justify-center gap-2"
                            >
                                <Send className="w-4 h-4" />
                                Falar com a equipe no WhatsApp
                            </button>

                            {submitted && (
                                <p className="text-xs text-[#36E58D] text-center font-mono">
                                    ✓ Abrindo conversa no WhatsApp...
                                </p>
                            )}
                        </form>
                    </div>
                </section>
            </main>

            {/* RODAPÉ FIEL AO REQUISITO E IMAGENS */}
            <footer className="py-12 bg-[#06120D] border-t border-[#1B3A2C] text-[#B9C7BE] text-xs font-mono">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <BrandLogo />

                    <p className="text-center md:text-right max-w-xl text-[10px] text-[#B9C7BE]/70 leading-relaxed">
                        Este site tem caráter informativo. Rentabilidade passada não representa garantia de rentabilidade futura. Assessoria via Volare Investimentos, credenciada à XP. © 2026 Thiago Pimentel. Todos os direitos reservados.
                    </p>
                </div>
            </footer>
        </div>
    );
}
