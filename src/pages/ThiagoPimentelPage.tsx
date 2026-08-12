import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Shield, CheckCircle2, ArrowRight, MessageCircle, HelpCircle,
    TrendingUp, Award, Users, ChevronDown, Sparkles, Building2,
    DollarSign, Clock, Target, Check, ExternalLink, Send
} from 'lucide-react';
import { SEOHelmet } from '../components/SEOHelmet';

export function ThiagoPimentelPage() {
    const [faqOpen, setFaqOpen] = useState<number | null>(null);
    const [formData, setFormData] = useState({
        nome: '',
        whatsapp: '',
        email: '',
        patrimonio: 'Até R$ 100 mil',
        agonia: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const toggleFaq = (index: number) => {
        setFaqOpen(faqOpen === index ? null : index);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        const text = `Olá! Preenchi o formulário no site do Thiago Pimentel:%0A%0A*Nome:* ${formData.nome}%0A*WhatsApp:* ${formData.whatsapp}%0A*E-mail:* ${formData.email}%0A*Patrimônio:* ${formData.patrimonio}%0A*Principal agonia:* ${formData.agonia || 'Organizar estratégia de investimentos'}`;
        window.open(`https://wa.me/5521979043854?text=${text}`, '_blank');
    };

    const faqs = [
        {
            q: "Como funciona o primeiro atendimento?",
            a: "A primeira conversa serve para entender sua realidade, seus objetivos e seu momento atual. Não vendemos produtos de prateleira; primeiro entendemos você para avaliar a melhor estratégia."
        },
        {
            q: "Quanto custa a assessoria de investimentos?",
            a: "O modelo de atendimento através da Volare Investimentos (credenciada à XP) é transparente. Explicamos todos os custos e modelos de remuneração de forma clara antes de qualquer decisão."
        },
        {
            q: "Preciso ter muito dinheiro para conversar com a equipe?",
            a: "Atendemos investidores em diferentes estágios da vida financeira: desde quem está organizando os primeiros passos até empresários e famílias com patrimônio consolidado."
        },
        {
            q: "Como o conteúdo do Instagram se conecta com a assessoria?",
            a: "O conteúdo serve para desmistificar o mercado e trazer clareza. Quando você decide sair das dicas soltas e quer uma estratégia personalizada para o seu patrimônio, a equipe da Volare assume a execução técnica."
        }
    ];

    return (
        <div className="min-h-screen bg-[#0a0f1d] text-white selection:bg-amber-500/30 selection:text-amber-400 font-sans overflow-x-hidden antialiased">
            <SEOHelmet
                title="Thiago Pimentel | O Investidor Agoniado - Assessoria de Investimentos"
                description="Menos agonia, mais clareza para investir. Conteúdo direto sobre dinheiro e assessoria de investimentos com a Volare, credenciada à XP."
            />

            {/* Header Navigation */}
            <nav className="fixed top-0 w-full z-[100] bg-[#0a0f1d]/90 backdrop-blur-2xl border-b border-white/10 py-4 px-6">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <a href="#topo" className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black font-extrabold text-lg shadow-lg">
                            TP
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="text-base font-bold text-white leading-none tracking-tight">Thiago Pimentel</span>
                            <span className="text-[10px] font-mono tracking-wider text-amber-400 uppercase leading-none mt-1">O Investidor Agoniado</span>
                        </div>
                    </a>

                    <div className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-wider text-gray-300">
                        <a href="#metodo" className="hover:text-amber-400 transition-colors">Como Funciona</a>
                        <a href="#conteudos" className="hover:text-amber-400 transition-colors">Conteúdos</a>
                        <a href="#sobre" className="hover:text-amber-400 transition-colors">Sobre o Thiago</a>
                        <a href="#formulario" className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-black px-5 py-2.5 rounded-xl font-bold transition-all shadow-lg flex items-center gap-2">
                            <MessageCircle className="w-4 h-4" />
                            Quero Organizar
                        </a>
                    </div>
                </div>
            </nav>

            <main className="pt-28 md:pt-36">
                {/* HERO SECTION */}
                <section id="topo" className="px-6 pb-20 md:pb-32 border-b border-white/10 relative overflow-hidden">
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none" />

                    <div className="max-w-6xl mx-auto text-center space-y-8 relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-amber-400/30 text-amber-400 text-xs font-mono tracking-wider">
                            <Sparkles className="w-4 h-4" />
                            CLAREZA FINANCEIRA & ASSESSORIA DE INVESTIMENTOS
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.15] text-white">
                            Menos agonia. <br />
                            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
                                Mais clareza para investir.
                            </span>
                        </h1>

                        <p className="max-w-3xl mx-auto text-base md:text-xl text-gray-300 font-light leading-relaxed">
                            Eu sou <strong className="text-white font-semibold">Thiago Pimentel</strong>, o Investidor Agoniado. Falo sobre dinheiro, investimentos e comportamento financeiro de um jeito direto, sem transformar complexidade em espetáculo.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
                            <a
                                href="#formulario"
                                className="w-full sm:w-auto bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-black font-bold text-sm uppercase tracking-wider py-4 px-8 rounded-2xl transition-all shadow-xl hover:scale-105 flex items-center justify-center gap-3"
                            >
                                Quero organizar minha estratégia
                                <ArrowRight className="w-4 h-4" />
                            </a>
                            <a
                                href="#conteudos"
                                className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 text-sm font-semibold py-4 px-8 rounded-2xl transition-all flex items-center justify-center"
                            >
                                Conhecer os conteúdos
                            </a>
                        </div>

                        {/* BADGES & PROVA SOCIAL */}
                        <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
                                <p className="text-3xl font-extrabold text-amber-400">174 mil</p>
                                <p className="text-xs font-mono text-gray-400 uppercase tracking-wider mt-1">Seguidores no Instagram</p>
                            </div>
                            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
                                <p className="text-3xl font-extrabold text-amber-400">1.796</p>
                                <p className="text-xs font-mono text-gray-400 uppercase tracking-wider mt-1">Conteúdos Publicados</p>
                            </div>
                            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
                                <p className="text-3xl font-extrabold text-amber-400">+R$ 280 Mi</p>
                                <p className="text-xs font-mono text-gray-400 uppercase tracking-wider mt-1">Orientados na XP Investimentos*</p>
                            </div>
                        </div>
                        <p className="text-[11px] font-mono text-gray-500 text-center">*Informações sujeitas a validação institucional.</p>
                    </div>
                </section>

                {/* PROBLEMAS / DORES DO INVESTIDOR */}
                <section className="py-20 md:py-28 px-6 border-b border-white/10 bg-[#080d19]">
                    <div className="max-w-6xl mx-auto space-y-16">
                        <div className="text-center max-w-3xl mx-auto space-y-4">
                            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block font-bold">Diagnóstico Real</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                Você não está necessariamente sem informação. Talvez esteja sem clareza.
                            </h2>
                            <p className="text-gray-400 font-light text-base leading-relaxed">
                                Um dia falam de bitcoin. No outro, de imóveis. Depois aparece uma oportunidade “imperdível”, uma carteira nova ou alguém dizendo que você está investindo errado.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-3 hover:border-amber-400/40 transition-all">
                                <span className="text-2xl">❓</span>
                                <h3 className="text-lg font-bold text-white">"Acompanho conteúdos, mas não sei por onde começar."</h3>
                                <p className="text-sm text-gray-400 font-light leading-relaxed">Dicas isoladas na internet geram excesso de estímulos e pouca execução prática.</p>
                            </div>

                            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-3 hover:border-amber-400/40 transition-all">
                                <span className="text-2xl">📊</span>
                                <h3 className="text-lg font-bold text-white">"Tenho carteira, mas sem conexão com meus objetivos."</h3>
                                <p className="text-sm text-gray-400 font-light leading-relaxed">Investimentos acumulados sem prazo ou estratégia definida para o momento de vida.</p>
                            </div>

                            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-3 hover:border-amber-400/40 transition-all">
                                <span className="text-2xl">⚡</span>
                                <h3 className="text-lg font-bold text-white">"Tomo decisões por impulso quando o mercado muda."</h3>
                                <p className="text-sm text-gray-400 font-light leading-relaxed">Comprar no topo da euforia e vender na queda por falta de um plano de longo prazo.</p>
                            </div>

                            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-3 hover:border-amber-400/40 transition-all">
                                <span className="text-2xl">⏳</span>
                                <h3 className="text-lg font-bold text-white">"Não tenho tempo para acompanhar tudo sozinho."</h3>
                                <p className="text-sm text-gray-400 font-light leading-relaxed">Desejo de contar com assessoria dedicada para alinhar prioridades e riscos.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SOBRE THIAGO PIMENTEL */}
                <section id="sobre" className="py-20 md:py-28 px-6 border-b border-white/10 bg-[#0a0f1d]">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-5 relative">
                            <div className="rounded-3xl overflow-hidden border border-amber-400/30 shadow-2xl bg-gradient-to-br from-amber-400/10 to-transparent p-2">
                                <div className="rounded-2xl overflow-hidden bg-[#111827] aspect-[4/5] flex items-center justify-center relative">
                                    <div className="text-center p-8 space-y-4">
                                        <div className="w-24 h-24 rounded-full bg-amber-400 text-black font-extrabold text-3xl mx-auto flex items-center justify-center shadow-2xl">
                                            TP
                                        </div>
                                        <h3 className="text-2xl font-bold text-white">Thiago Pimentel</h3>
                                        <p className="text-xs font-mono text-amber-400 uppercase tracking-widest">O Investidor Agoniado</p>
                                        <p className="text-xs text-gray-400 font-light">Sócio da Volare Investimentos (Credenciada XP)</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7 space-y-6 text-left">
                            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block font-bold">Sobre o Thiago</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                Eu falo de investimentos porque sei que dinheiro não é só número.
                            </h2>
                            <div className="space-y-4 text-gray-300 font-light text-base md:text-lg leading-relaxed">
                                <p>
                                    No meu conteúdo, eu respondo perguntas, questiono certezas e tento traduzir assuntos financeiros para a vida real. Às vezes falando sério. Às vezes usando humor.
                                </p>
                                <p>
                                    Além do conteúdo, sou sócio da <strong className="text-white font-medium">Volare Investimentos</strong>, escritório de assessoria de investimentos credenciado à <strong className="text-amber-400 font-medium">XP Investimentos</strong>.
                                </p>
                                <p>
                                    É por meio dessa estrutura profissional que você pode avançar da informação para uma conversa estruturada sobre o seu próprio patrimônio.
                                </p>
                            </div>
                            <div className="pt-4">
                                <a
                                    href="#formulario"
                                    className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-black font-bold text-sm uppercase tracking-wider py-4 px-8 rounded-2xl transition-all shadow-xl"
                                >
                                    Falar com a equipe
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* COMO FUNCIONA (O MÉTODOS EM 4 PASSOS) */}
                <section id="metodo" className="py-20 md:py-28 px-6 border-b border-white/10 bg-[#080d19]">
                    <div className="max-w-6xl mx-auto space-y-16">
                        <div className="text-center max-w-3xl mx-auto space-y-4">
                            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block font-bold">Nosso Método</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                Antes de falar sobre investimento, a gente entende você.
                            </h2>
                            <p className="text-gray-400 font-light text-base leading-relaxed">
                                Não existe uma carteira universal que sirva para todas as pessoas. O trabalho começa entendendo seus objetivos e seu momento.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-3 relative">
                                <span className="text-3xl font-extrabold text-amber-400">01</span>
                                <h3 className="text-xl font-bold text-white">Entender</h3>
                                <p className="text-xs text-gray-400 font-light leading-relaxed">
                                    Conversamos sobre sua realidade, seus objetivos, suas prioridades e as decisões que você precisa tomar.
                                </p>
                            </div>

                            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-3 relative">
                                <span className="text-3xl font-extrabold text-amber-400">02</span>
                                <h3 className="text-xl font-bold text-white">Organizar</h3>
                                <p className="text-xs text-gray-400 font-light leading-relaxed">
                                    Colocamos contexto no que hoje pode estar espalhado: investimentos, prioridades, prazos e riscos.
                                </p>
                            </div>

                            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-3 relative">
                                <span className="text-3xl font-extrabold text-amber-400">03</span>
                                <h3 className="text-xl font-bold text-white">Construir</h3>
                                <p className="text-xs text-gray-400 font-light leading-relaxed">
                                    Estruturação de uma estratégia de investimentos alinhada ao seu perfil e aos seus objetivos.
                                </p>
                            </div>

                            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-3 relative">
                                <span className="text-3xl font-extrabold text-amber-400">04</span>
                                <h3 className="text-xl font-bold text-white">Acompanhar</h3>
                                <p className="text-xs text-gray-400 font-light leading-relaxed">
                                    Acompanhamento e revisão contínua à medida que sua vida e seus objetivos mudam.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CONTEÚDOS & CATEGORIAS */}
                <section id="conteudos" className="py-20 md:py-28 px-6 border-b border-white/10 bg-[#0a0f1d]">
                    <div className="max-w-6xl mx-auto space-y-16">
                        <div className="text-center max-w-3xl mx-auto space-y-4">
                            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block font-bold">Conteúdos & Temas</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                Educação financeira sem enrolação.
                            </h2>
                            <p className="text-gray-400 font-light text-base leading-relaxed">
                                Respostas para dúvidas reais sobre bitcoin, imóveis, consumo, patrimônio e comportamento.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-3 text-left">
                                <span className="px-3 py-1 bg-amber-400/20 text-amber-400 text-xs font-mono rounded-lg">Tira a Agonia</span>
                                <h3 className="text-xl font-bold text-white">Conceitos básicos e dúvidas iniciais</h3>
                                <p className="text-xs text-gray-400 font-light leading-relaxed">Respostas diretas sem termos difíceis para quem quer dar os primeiros passos com segurança.</p>
                            </div>

                            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-3 text-left">
                                <span className="px-3 py-1 bg-amber-400/20 text-amber-400 text-xs font-mono rounded-lg">Comportamento</span>
                                <h3 className="text-xl font-bold text-white">Dinheiro, impulsividade e consumo</h3>
                                <p className="text-xs text-gray-400 font-light leading-relaxed">Entender o aspecto psicológico e emocional antes de tomar decisões financeiras.</p>
                            </div>

                            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-3 text-left">
                                <span className="px-3 py-1 bg-amber-400/20 text-amber-400 text-xs font-mono rounded-lg">Contexto Real</span>
                                <h3 className="text-xl font-bold text-white">Bitcoin, imóveis e renda fixa</h3>
                                <p className="text-xs text-gray-400 font-light leading-relaxed">Análise de risco e diversificação real, sem falsas promessas de ganho rápido.</p>
                            </div>

                            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl space-y-3 text-left">
                                <span className="px-3 py-1 bg-amber-400/20 text-amber-400 text-xs font-mono rounded-lg">Patrimônio</span>
                                <h3 className="text-xl font-bold text-white">Empreendedorismo e planejamento</h3>
                                <p className="text-xs text-gray-400 font-light leading-relaxed">Organização patrimonial para famílias, profissionais e empresários.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FORMULÁRIO DE CAPTURA COM ENVIO PARA WHATSAPP */}
                <section id="formulario" className="py-20 md:py-28 px-6 border-b border-white/10 bg-[#080d19]">
                    <div className="max-w-3xl mx-auto space-y-12">
                        <div className="text-center space-y-4">
                            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block font-bold">Primeiro Passo</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                Vamos entender o que está deixando você agoniado?
                            </h2>
                            <p className="text-gray-400 font-light text-base leading-relaxed">
                                Preencha os dados abaixo. A equipe entrará em contato para entender seu momento e explicar os próximos passos.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="p-8 md:p-12 bg-white/5 border border-amber-400/30 rounded-3xl text-left space-y-6 shadow-2xl backdrop-blur-xl">
                            <div>
                                <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">Seu Nome Completo *</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.nome}
                                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                                    placeholder="Ex: Carlos Silva"
                                    className="w-full px-4 py-3.5 bg-black/60 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none transition-colors"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">Seu WhatsApp *</label>
                                    <input
                                        type="tel"
                                        required
                                        value={formData.whatsapp}
                                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                                        placeholder="(21) 99999-9999"
                                        className="w-full px-4 py-3.5 bg-black/60 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">Seu E-mail *</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="carlos@email.com"
                                        className="w-full px-4 py-3.5 bg-black/60 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">Patrimônio / Valor Estimado para Investir</label>
                                <select
                                    value={formData.patrimonio}
                                    onChange={(e) => setFormData({ ...formData, patrimonio: e.target.value })}
                                    className="w-full px-4 py-3.5 bg-black/60 border border-white/10 rounded-xl text-white focus:border-amber-400 focus:outline-none transition-colors"
                                >
                                    <option value="Até R$ 100 mil">Até R$ 100 mil</option>
                                    <option value="De R$ 100 mil a R$ 300 mil">De R$ 100 mil a R$ 300 mil</option>
                                    <option value="De R$ 300 mil a R$ 1 Milhão">De R$ 300 mil a R$ 1 Milhão</option>
                                    <option value="Acima de R$ 1 Milhão">Acima de R$ 1 Milhão</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">Qual é sua principal dúvida ou agonia hoje?</label>
                                <textarea
                                    rows={3}
                                    value={formData.agonia}
                                    onChange={(e) => setFormData({ ...formData, agonia: e.target.value })}
                                    placeholder="Ex: Quero organizar meus investimentos para ter mais tranquilidade..."
                                    className="w-full px-4 py-3.5 bg-black/60 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-amber-400 focus:outline-none transition-colors"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-black font-extrabold text-sm uppercase tracking-wider py-4 rounded-xl transition-all shadow-xl flex items-center justify-center gap-2"
                            >
                                <Send className="w-4 h-4" />
                                Iniciar Conversa com a Equipe
                            </button>

                            {submitted && (
                                <p className="text-xs text-amber-400 text-center font-mono">
                                    ✓ Redirecionando para o WhatsApp da equipe...
                                </p>
                            )}
                        </form>
                    </div>
                </section>

                {/* PERGUNTAS FREQUENTES (FAQ) */}
                <section className="py-20 md:py-28 px-6 bg-[#0a0f1d]">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <div className="text-center space-y-4">
                            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block font-bold">Dúvidas Frequentes</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white">
                                Chega de tomar decisão financeira no escuro.
                            </h2>
                        </div>

                        <div className="space-y-4 text-left">
                            {faqs.map((faq, idx) => (
                                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                                    <button
                                        onClick={() => toggleFaq(idx)}
                                        className="w-full p-6 text-left font-bold text-base md:text-lg text-white flex justify-between items-center gap-4 hover:text-amber-400 transition-colors"
                                    >
                                        <span>{faq.q}</span>
                                        <ChevronDown className={`w-5 h-5 text-amber-400 transition-transform ${faqOpen === idx ? 'rotate-180' : ''}`} />
                                    </button>
                                    {faqOpen === idx && (
                                        <div className="p-6 pt-0 text-sm text-gray-300 font-light leading-relaxed border-t border-white/5">
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* FOOTER */}
            <footer className="py-12 bg-black border-t border-white/10 text-gray-500 text-xs font-mono">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3 text-left">
                        <div className="w-8 h-8 rounded-lg bg-amber-400 text-black font-extrabold flex items-center justify-center">TP</div>
                        <div>
                            <p className="text-white font-bold text-sm">Thiago Pimentel</p>
                            <p className="text-[10px] text-gray-400">O Investidor Agoniado • Volare Investimentos (XP)</p>
                        </div>
                    </div>

                    <p className="text-center md:text-right max-w-xl text-[10px] text-gray-500 leading-relaxed">
                        Este site tem caráter informativo. Rentabilidade passada não representa garantia de rentabilidade futura. Assessoria via Volare Investimentos, credenciada à XP.
                    </p>
                </div>
            </footer>
        </div>
    );
}
