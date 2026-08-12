import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Shield, CheckCircle2, ArrowRight, MessageCircle, HelpCircle,
    TrendingUp, Award, Users, ChevronDown, Sparkles, Building2,
    DollarSign, Clock, Target, Check, ExternalLink, Send, Play
} from 'lucide-react';
import { SEOHelmet } from '../components/SEOHelmet';
import thiagoHeroImg from '../assets/thiago_hero.jpg';
import thiagoProImg from '../assets/thiago_pro.jpg';

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
        <div className="min-h-screen bg-[#070c18] text-white selection:bg-emerald-500/30 selection:text-emerald-400 font-sans overflow-x-hidden antialiased">
            <SEOHelmet
                title="Thiago Pimentel | O Investidor Agoniado - Assessoria de Investimentos"
                description="Menos agonia, mais clareza para investir. Conteúdo direto sobre dinheiro e assessoria de investimentos com a Volare, credenciada à XP."
            />

            {/* Header Navigation */}
            <nav className="fixed top-0 w-full z-[100] bg-[#070c18]/90 backdrop-blur-2xl border-b border-white/10 py-4 px-6">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <a href="#topo" className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-lime-400 flex items-center justify-center text-black font-extrabold text-base shadow-lg">
                            TP
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="text-base font-bold text-white leading-none tracking-tight">Thiago Pimentel</span>
                            <span className="text-[10px] font-mono tracking-wider text-emerald-400 uppercase leading-none mt-1">O Investidor Agoniado</span>
                        </div>
                    </a>

                    <div className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-wider text-gray-300">
                        <a href="#metodo" className="hover:text-emerald-400 transition-colors">Como funciona</a>
                        <a href="#conteudos" className="hover:text-emerald-400 transition-colors">Conteúdos</a>
                        <a href="#sobre" className="hover:text-emerald-400 transition-colors">Sobre o Thiago</a>
                        <a href="#formulario" className="bg-emerald-400 hover:bg-emerald-300 text-black px-6 py-2.5 rounded-full font-bold transition-all shadow-lg flex items-center gap-2">
                            <MessageCircle className="w-4 h-4" />
                            Quero Organizar
                        </a>
                    </div>
                </div>
            </nav>

            <main className="pt-28 md:pt-36">
                {/* HERO SECTION WITH REAL PHOTO */}
                <section id="topo" className="px-6 pb-20 md:pb-32 border-b border-white/10 relative overflow-hidden">
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[160px] rounded-full pointer-events-none" />

                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                        <div className="lg:col-span-7 text-left space-y-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-emerald-400/30 text-emerald-400 text-xs font-mono tracking-wider">
                                <Sparkles className="w-4 h-4" />
                                MENOS AGONIA • MAIS CLAREZA PARA INVESTIR
                            </div>

                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white">
                                O dinheiro não precisa ser uma fonte permanente de <br />
                                <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-lime-400 bg-clip-text text-transparent">
                                    agonia.
                                </span>
                            </h1>

                            <p className="text-base md:text-xl text-gray-300 font-light leading-relaxed max-w-2xl">
                                Eu sou <strong className="text-white font-semibold">Thiago Pimentel</strong>, o Investidor Agoniado. Falo sobre dinheiro, investimentos e comportamento financeiro de um jeito direto, sem transformar complexidade em espetáculo.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                                <a
                                    href="#formulario"
                                    className="w-full sm:w-auto bg-emerald-400 hover:bg-emerald-300 text-black font-bold text-sm uppercase tracking-wider py-4 px-8 rounded-full transition-all shadow-xl hover:scale-105 flex items-center justify-center gap-3"
                                >
                                    Quero organizar minha estratégia
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                                <a
                                    href="#conteudos"
                                    className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-gray-300 border border-white/10 text-sm font-semibold py-4 px-8 rounded-full transition-all flex items-center justify-center"
                                >
                                    Conhecer os conteúdos
                                </a>
                            </div>

                            <p className="text-xs text-gray-400 font-mono">
                                Educação financeira, visão prática e assessoria para quem quer tomar decisões com mais clareza.
                            </p>
                        </div>

                        {/* FOTO DO THIAGO HERO */}
                        <div className="lg:col-span-5 relative">
                            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-b from-white/10 to-black/80 p-2">
                                <div className="rounded-2xl overflow-hidden aspect-[4/5] relative">
                                    <img
                                        src={thiagoHeroImg}
                                        alt="Thiago Pimentel - O Investidor Agoniado"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                </div>
                            </div>

                            {/* Floating Question Box */}
                            <div className="absolute -bottom-6 -left-6 max-w-[240px] bg-[#111827]/95 border border-emerald-400/40 p-4 rounded-2xl shadow-2xl backdrop-blur-md text-left">
                                <p className="text-[10px] font-mono uppercase text-emerald-400 tracking-wider font-bold">Caixinha de perguntas</p>
                                <p className="text-xs text-white mt-1 leading-snug font-medium">Você investe ou só acompanha conteúdo sobre investimentos?</p>
                            </div>
                        </div>
                    </div>

                    {/* BADGES DA PROVA SOCIAL */}
                    <div className="pt-20 max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-left">
                                <p className="text-3xl font-extrabold text-emerald-400">174 mil</p>
                                <p className="text-xs font-mono text-gray-400 uppercase tracking-wider mt-1">seguidores no Instagram</p>
                            </div>
                            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-left">
                                <p className="text-3xl font-extrabold text-emerald-400">1.796</p>
                                <p className="text-xs font-mono text-gray-400 uppercase tracking-wider mt-1">posts publicados</p>
                            </div>
                            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl text-left">
                                <p className="text-3xl font-extrabold text-emerald-400">+R$ 280 milhões</p>
                                <p className="text-xs font-mono text-gray-400 uppercase tracking-wider mt-1">orientados na XP*</p>
                            </div>
                        </div>
                        <p className="text-[10px] font-mono text-gray-500 text-left mt-3">*Informações sujeitas a atualização e validação pela equipe responsável.</p>
                    </div>
                </section>

                {/* DIAGNÓSTICO E DORES */}
                <section className="py-20 md:py-28 px-6 border-b border-white/10 bg-[#FAF9F6] text-[#111111]">
                    <div className="max-w-6xl mx-auto space-y-16">
                        <div className="text-left max-w-3xl space-y-4">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#111111] leading-tight">
                                Você não está necessariamente sem informação. <span className="italic text-emerald-600">Talvez esteja sem clareza.</span>
                            </h2>
                            <p className="text-gray-600 font-light text-base md:text-lg leading-relaxed">
                                Você vê uma opinião diferente todos os dias. Um dia falam de bitcoin. No outro, de imóveis. No fim, sobra a dúvida: <strong className="text-black">o que realmente faz sentido para a minha vida e meus objetivos?</strong>
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-8 bg-white border border-gray-200 rounded-2xl text-left shadow-sm space-y-3">
                                <p className="text-lg font-bold text-gray-900">“Eu acompanho vários conteúdos, mas continuo sem saber por onde começar.”</p>
                            </div>
                            <div className="p-8 bg-white border border-gray-200 rounded-2xl text-left shadow-sm space-y-3">
                                <p className="text-lg font-bold text-gray-900">“Tenho investimentos, mas não sei se estão organizados para os meus objetivos.”</p>
                            </div>
                            <div className="p-8 bg-white border border-gray-200 rounded-2xl text-left shadow-sm space-y-3">
                                <p className="text-lg font-bold text-gray-900">“Tomo decisões quando o mercado sobe ou cai e depois fico arrependido.”</p>
                            </div>
                            <div className="p-8 bg-white border border-gray-200 rounded-2xl text-left shadow-sm space-y-3">
                                <p className="text-lg font-bold text-gray-900">“Não tenho tempo para acompanhar tudo e queria alguém para me ajudar a estruturar.”</p>
                            </div>
                        </div>

                        <p className="text-2xl font-bold text-[#111111] text-left border-l-4 border-emerald-500 pl-6 py-2">
                            Investir não começa escolhendo um produto. Começa entendendo o contexto.
                        </p>
                    </div>
                </section>

                {/* SOBRE O THIAGO COM FOTO SECUNDÁRIA */}
                <section id="sobre" className="py-20 md:py-28 px-6 border-b border-white/10 bg-[#070c18]">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-5 relative">
                            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                                <img
                                    src={thiagoProImg}
                                    alt="Thiago Pimentel - Assessor de Investimentos"
                                    className="w-full aspect-[4/5] object-cover"
                                />
                            </div>
                        </div>

                        <div className="lg:col-span-7 space-y-6 text-left">
                            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block font-bold">Sobre o Thiago</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                Eu falo de investimentos porque sei que dinheiro não é só número.
                            </h2>
                            <div className="space-y-4 text-gray-300 font-light text-base md:text-lg leading-relaxed">
                                <p>
                                    Sou Thiago Pimentel, assessor de investimentos e criador do <strong className="text-white font-semibold">O Investidor Agoniado</strong>.
                                </p>
                                <p>
                                    No meu conteúdo, eu respondo perguntas, questiono certezas e tento traduzir assuntos financeiros para a vida real. Às vezes falando sério. Às vezes usando humor.
                                </p>
                                <p>
                                    Além do conteúdo, sou sócio da <strong className="text-white font-semibold">Volare Investimentos</strong>, escritório de assessoria de investimentos credenciado à <strong className="text-emerald-400 font-semibold">XP Investimentos</strong>.
                                </p>
                            </div>
                            <div className="pt-4">
                                <a
                                    href="#formulario"
                                    className="inline-flex items-center gap-3 bg-emerald-400 hover:bg-emerald-300 text-black font-bold text-sm uppercase tracking-wider py-4 px-8 rounded-full transition-all shadow-xl"
                                >
                                    Quero falar com a equipe
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* MÉTODO EM 4 PASSOS */}
                <section id="metodo" className="py-20 md:py-28 px-6 border-b border-white/10 bg-[#0a0f1d]">
                    <div className="max-w-7xl mx-auto space-y-16">
                        <div className="text-left max-w-3xl space-y-4">
                            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block font-bold">Como Funciona</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                Antes de falar sobre investimento, a gente entende você.
                            </h2>
                            <p className="text-gray-300 font-light text-base leading-relaxed">
                                Não existe uma carteira universal que sirva para todas as pessoas. O trabalho começa entendendo objetivos, prazos, patrimônio e risco.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl text-left space-y-3">
                                <span className="text-4xl font-extrabold text-emerald-400">01</span>
                                <h3 className="text-xl font-bold text-white">Entender</h3>
                                <p className="text-xs text-gray-400 font-light leading-relaxed">Conversamos sobre sua realidade, seus objetivos, suas prioridades e as decisões que você precisa tomar.</p>
                            </div>

                            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl text-left space-y-3">
                                <span className="text-4xl font-extrabold text-emerald-400">02</span>
                                <h3 className="text-xl font-bold text-white">Organizar</h3>
                                <p className="text-xs text-gray-400 font-light leading-relaxed">Colocamos contexto no que hoje pode estar espalhado: investimentos, prioridades, prazos, riscos e próximos passos.</p>
                            </div>

                            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl text-left space-y-3">
                                <span className="text-4xl font-extrabold text-emerald-400">03</span>
                                <h3 className="text-xl font-bold text-white">Construir</h3>
                                <p className="text-xs text-gray-400 font-light leading-relaxed">A equipe estrutura uma estratégia de investimentos alinhada ao seu perfil e aos seus objetivos.</p>
                            </div>

                            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl text-left space-y-3">
                                <span className="text-4xl font-extrabold text-emerald-400">04</span>
                                <h3 className="text-xl font-bold text-white">Acompanhar</h3>
                                <p className="text-xs text-gray-400 font-light leading-relaxed">A estratégia não termina na implementação. A evolução é acompanhada e revisada continuamente.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FORMULÁRIO */}
                <section id="formulario" className="py-20 md:py-28 px-6 bg-[#070c18]">
                    <div className="max-w-3xl mx-auto space-y-12">
                        <div className="text-center space-y-4">
                            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block font-bold">Formulário</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                Vamos entender o que está deixando você agoniado?
                            </h2>
                            <p className="text-gray-400 font-light text-base leading-relaxed">
                                Preencha os dados abaixo. A equipe entrará em contato para entender seu momento e explicar os próximos passos.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="p-8 md:p-12 bg-white/5 border border-emerald-400/30 rounded-3xl text-left space-y-6 shadow-2xl backdrop-blur-xl">
                            <div>
                                <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">Nome *</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.nome}
                                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                                    placeholder="Seu nome completo"
                                    className="w-full px-4 py-3.5 bg-black/60 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-emerald-400 focus:outline-none transition-colors"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">WhatsApp *</label>
                                    <input
                                        type="tel"
                                        required
                                        value={formData.whatsapp}
                                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                                        placeholder="(21) 99999-9999"
                                        className="w-full px-4 py-3.5 bg-black/60 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-emerald-400 focus:outline-none transition-colors"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">E-mail *</label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="seu@email.com"
                                        className="w-full px-4 py-3.5 bg-black/60 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-emerald-400 focus:outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">Patrimônio / Valor para Investir</label>
                                <select
                                    value={formData.patrimonio}
                                    onChange={(e) => setFormData({ ...formData, patrimonio: e.target.value })}
                                    className="w-full px-4 py-3.5 bg-black/60 border border-white/10 rounded-xl text-white focus:border-emerald-400 focus:outline-none transition-colors"
                                >
                                    <option value="Até R$ 100 mil">Até R$ 100 mil</option>
                                    <option value="De R$ 100 mil a R$ 300 mil">De R$ 100 mil a R$ 300 mil</option>
                                    <option value="De R$ 300 mil a R$ 1 Milhão">De R$ 300 mil a R$ 1 Milhão</option>
                                    <option value="Acima de R$ 1 Milhão">Acima de R$ 1 Milhão</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-mono uppercase tracking-wider text-gray-300 mb-2">Qual é sua principal agonia hoje?</label>
                                <textarea
                                    rows={3}
                                    value={formData.agonia}
                                    onChange={(e) => setFormData({ ...formData, agonia: e.target.value })}
                                    placeholder="Ex: Não sei se meus investimentos estão certos para meus objetivos..."
                                    className="w-full px-4 py-3.5 bg-black/60 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-emerald-400 focus:outline-none transition-colors"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-emerald-400 hover:bg-emerald-300 text-black font-extrabold text-sm uppercase tracking-wider py-4 rounded-xl transition-all shadow-xl flex items-center justify-center gap-2"
                            >
                                <Send className="w-4 h-4" />
                                Falar com a Equipe no WhatsApp
                            </button>

                            {submitted && (
                                <p className="text-xs text-emerald-400 text-center font-mono">
                                    ✓ Abrindo WhatsApp da equipe...
                                </p>
                            )}
                        </form>
                    </div>
                </section>
            </main>

            {/* FOOTER */}
            <footer className="py-12 bg-black border-t border-white/10 text-gray-500 text-xs font-mono">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3 text-left">
                        <div className="w-8 h-8 rounded-full bg-emerald-400 text-black font-extrabold flex items-center justify-center">TP</div>
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
