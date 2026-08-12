import { Link } from 'react-router-dom';
import { Target, Zap, ShieldCheck, ArrowRight, CheckCircle2, HelpCircle, MapPin, MessageCircle, XCircle, ChevronRight, Check } from 'lucide-react';
import profileImg from '../assets/rodrigo_analise_extra.png';
import { SocialProof } from '../components/SocialProof';
import { SEOHelmet } from '../components/SEOHelmet';

export function HomePage() {
    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-[#D4AF37]/30 selection:text-[#D4AF37] font-sans overflow-x-hidden">
            <SEOHelmet 
                title="Agência de Marketing Digital no Rio de Janeiro | Migração Digital"
                description="Captação comercial ética e previsível para empresas e clínicas no Rio de Janeiro. Clientes qualificados no seu WhatsApp."
            />

            {/* Navigation Bar */}
            <nav className="fixed top-0 w-full z-[100] bg-black/80 backdrop-blur-2xl border-b border-white/5 py-4 px-6">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-3 group">
                        <img src="/logo.png" alt="Migração Digital" className="h-8 md:h-10 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity" />
                        <div className="flex flex-col">
                            <span className="text-lg md:text-xl font-black bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#FFFFFF] bg-clip-text text-transparent tracking-tighter leading-none">
                                MIGRAÇÃO DIGITAL
                            </span>
                            <span className="text-[8px] font-medium tracking-[0.3em] text-white/40 uppercase leading-none mt-1 group-hover:text-white/80 transition-colors">
                                Captação Comercial no RJ
                            </span>
                        </div>
                    </Link>
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#como-funciona" className="text-sm font-medium text-gray-400 hover:text-[#D4AF37] transition-colors">Como Funciona</a>
                        <a href="#solucoes" className="text-sm font-medium text-gray-400 hover:text-[#D4AF37] transition-colors">O Que Fazemos</a>
                        <Link to="/blog" className="text-sm font-medium text-gray-400 hover:text-[#D4AF37] transition-colors">Blog</Link>
                        <a href="#sobre" className="text-sm font-medium text-gray-400 hover:text-[#D4AF37] transition-colors">Quem Sou</a>
                        <a
                            href="https://wa.me/5521979043854?text=Olá%2C+gostaria+de+saber+como+atrair+mais+clientes+para+o+meu+WhatsApp."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider hover:scale-[1.05] transition-all shadow-lg shadow-[#D4AF37]/20 flex items-center gap-2"
                        >
                            <MessageCircle className="w-4 h-4 fill-black" />
                            Falar no WhatsApp
                        </a>
                    </div>
                </div>
            </nav>

            <main>
                {/* [HERO SECTION] - BIG IDEA 2 ÉTICA & REALISTA: CLIENTES QUALIFICADOS NO WHATSAPP */}
                <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden bg-[#050505] border-b border-white/5">
                    {/* Elementos de Iluminação Editorial */}
                    <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[160px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#D4AF37]/5 blur-[140px] rounded-full pointer-events-none" />

                    <div className="max-w-7xl mx-auto text-center relative z-10">
                        {/* Tag de Transparência */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#D4AF37] text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mb-6">
                            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                            Captação Comercial Sem MISTÉRIO • Rio de Janeiro
                        </div>

                        {/* PALAVRA DE IMPACTO */}
                        <div className="mb-4">
                            <span className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-none bg-gradient-to-b from-[#FFFFFF] via-[#D4AF37] to-[#8A6D3B] bg-clip-text text-transparent block drop-shadow-2xl">
                                NOVOS CLIENTES
                            </span>
                        </div>

                        {/* TÍTULO PRINCIPAL - TEMA 2 (Focado no WhatsApp + Ético) */}
                        <h1 className="text-2xl md:text-5xl lg:text-6xl font-serif font-bold text-white max-w-5xl mx-auto leading-tight mb-8">
                            Leve pessoas interessadas para o seu WhatsApp todas as semanas — <span className="text-[#D4AF37] italic">sem ilusões, sem virar "blogueiro".</span>
                        </h1>

                        {/* TEXTO DE APOIO (Simples, direto e verdadeiro) */}
                        <p className="text-base md:text-2xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed mb-12">
                            Criamos a estrutura para a sua empresa ser encontrada no Rio de Janeiro no momento exato em que o cliente procura pelo seu serviço. <strong className="text-white font-medium">Você foca em prestar um ótimo atendimento; nós cuidamos de fazer o contato acontecer.</strong>
                        </p>

                        {/* BOTOES DE AÇÃO */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 max-w-xl mx-auto">
                            <a
                                href="https://wa.me/5521979043854?text=Olá%2C+gostaria+de+conversar+sobre+uma+estrutura+de+captação+para+o+meu+negócio."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto bg-gradient-to-r from-[#D4AF37] via-[#F5D142] to-[#B8960C] text-black font-black py-5 px-10 rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.03] active:scale-[0.98] transition-all text-lg shadow-2xl shadow-[#D4AF37]/25"
                            >
                                <MessageCircle className="w-5 h-5 fill-black" />
                                Conversar no WhatsApp
                            </a>
                            <a
                                href="#como-funciona"
                                className="w-full sm:w-auto bg-white/5 border border-white/10 text-gray-300 font-bold py-5 px-8 rounded-2xl flex items-center justify-center gap-2 hover:bg-white/10 hover:text-white transition-all text-sm uppercase tracking-wider"
                            >
                                Entender Como Funciona
                                <ChevronRight className="w-4 h-4 text-[#D4AF37]" />
                            </a>
                        </div>

                        {/* Selos de Honestidade */}
                        <div className="mt-16 pt-10 border-t border-white/5 flex flex-wrap justify-center items-center gap-8 md:gap-16 text-gray-500 text-xs font-semibold uppercase tracking-widest">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                                Sem Promessas Inalcançáveis
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                                Foco em PMEs e Clínicas no RJ
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                                Atendimento Direto com Estrategista
                            </div>
                        </div>
                    </div>
                </section>

                {/* [O SONHO VS A REALIDADE] - DIAGNÓSTICO DIRETO */}
                <section id="como-funciona" className="py-24 md:py-32 bg-[#080808] px-6 border-b border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                            <span className="text-[#D4AF37] text-xs font-black uppercase tracking-[0.3em] block mb-3">Sem Enrolação</span>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
                                O que realmente faz o seu <br /><span className="text-[#D4AF37] italic">WhatsApp tocar com clientes?</span>
                            </h2>
                            <p className="text-gray-400 mt-4 text-base md:text-lg font-light">
                                Não é fazer dancinhas, postar fotos de café ou gastar fortuna com agências que só prometem curtidas. O segredo é estar presente no momento exato em que a dor do cliente surge.
                            </p>
                        </div>

                        {/* COMPARATIVO DIRETO */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
                            {/* LADO 1: O Que Não Funciona Mais */}
                            <div className="p-8 md:p-12 bg-white/[0.02] border border-white/10 rounded-3xl relative">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-wider rounded-lg mb-6">
                                    <XCircle className="w-4 h-4 text-red-400" />
                                    O caminho cansativo e sem garantia
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-6">Ficar refém das redes sociais</h3>
                                <ul className="space-y-4 text-gray-400 text-sm md:text-base font-light">
                                    <li className="flex items-start gap-3">
                                        <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                        <span> Ter que gravar vídeos diários mesmo odiando aparecer.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                        <span> Pagar mensalidades para agências criarem artes bonitas que ninguém compra.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                        <span> Ficar dependendo apenas de indicações que oscilam mês a mês.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* LADO 2: A Solução Direta */}
                            <div className="p-8 md:p-12 bg-[#D4AF37]/5 border border-[#D4AF37]/30 rounded-3xl relative shadow-2xl shadow-[#D4AF37]/10">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold uppercase tracking-wider rounded-lg mb-6">
                                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                                    A Solução Prática e Honesta
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-6">Captação Direta de Oportunidades</h3>
                                <ul className="space-y-4 text-gray-200 text-sm md:text-base font-light">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                                        <span> <strong className="text-white">Presença no momento da pesquisa:</strong> Quando alguém no RJ busca pelo seu serviço no Google, sua empresa aparece em destaque.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                                        <span> <strong className="text-white">Página de Atendimento Limpa:</strong> O visitante encontra as informações exatas e clica para falar no seu WhatsApp.</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                                        <span> <strong className="text-white">Processo Transparente:</strong> Você acompanha quantos contatos reais entraram no mês e ajusta a capacidade do seu negócio.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* [O QUE FAZEMOS / COMO ESTRUTURAMOS] */}
                <section id="solucoes" className="py-24 md:py-32 px-6 bg-[#050505] border-b border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                            <span className="text-[#D4AF37] text-xs font-black uppercase tracking-[0.3em] block mb-3">Na Prática</span>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">
                                As 3 Etapas da Sua <span className="text-[#D4AF37] italic">Estrutura de Captação</span>
                            </h2>
                            <p className="text-gray-400 mt-4 text-base font-light">
                                Sem termos técnicos complicados. Tudo pensado para ser simples e funcionar.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Etapa 1 */}
                            <div className="p-8 bg-[#0a0a0a] border border-white/10 rounded-3xl flex flex-col justify-between">
                                <div>
                                    <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] font-black text-lg mb-6">
                                        1
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">Atração no Momento Certo</h3>
                                    <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                                        Colocamos o seu negócio no topo das buscas no Google quando clientes na sua cidade ou bairro pesquisam exatamente o serviço que você oferece.
                                    </p>
                                </div>
                                <div className="text-xs text-[#D4AF37] font-semibold flex items-center gap-2">
                                    <Check className="w-4 h-4" /> Encontrado por quem quer comprar
                                </div>
                            </div>

                            {/* Etapa 2 */}
                            <div className="p-8 bg-[#0a0a0a] border border-white/10 rounded-3xl flex flex-col justify-between">
                                <div>
                                    <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] font-black text-lg mb-6">
                                        2
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">Apresentação Limpa e Clara</h3>
                                    <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                                        Desenvolvemos uma página rápida e objetiva, focada em mostrar o valor do seu trabalho sem distração ou poluição visual.
                                    </p>
                                </div>
                                <div className="text-xs text-[#D4AF37] font-semibold flex items-center gap-2">
                                    <Check className="w-4 h-4" /> Facilidade de leitura e decisão
                                </div>
                            </div>

                            {/* Etapa 3 */}
                            <div className="p-8 bg-[#0a0a0a] border border-white/10 rounded-3xl flex flex-col justify-between">
                                <div>
                                    <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] font-black text-lg mb-6">
                                        3
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">Contato Direto no WhatsApp</h3>
                                    <p className="text-gray-400 text-sm font-light leading-relaxed mb-6">
                                        O visitante clica em um botão em destaque e inicia uma conversa diretamente com você ou com a recepção da sua empresa.
                                    </p>
                                </div>
                                <div className="text-xs text-[#D4AF37] font-semibold flex items-center gap-2">
                                    <Check className="w-4 h-4" /> Sem formulários longos e chatos
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* [SOBRE RODRIGO RODRIGUES - PROPOSTA ÉTICA E SINCERA] */}
                <section id="sobre" className="py-24 md:py-32 px-6 bg-[#080808] border-b border-white/5">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
                        <div className="relative">
                            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a]">
                                <img
                                    src={profileImg}
                                    alt="Rodrigo Rodrigues - Estrategista Comercial"
                                    className="w-full h-auto grayscale-[15%] contrast-110 object-cover"
                                />
                                <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/80 backdrop-blur-xl rounded-2xl border border-white/10">
                                    <p className="text-xl font-bold text-[#D4AF37]">Rodrigo Rodrigues</p>
                                    <p className="text-gray-400 text-xs uppercase tracking-widest mt-1">Estrategista Comercial & Fundador da Migração Digital</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <span className="text-[#D4AF37] text-xs font-black uppercase tracking-[0.3em] block mb-3">Compromisso com a Verdade</span>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                                "Sem promessas milagrosas. O que entrego é trabalho sério e processo."
                            </h2>
                            <div className="space-y-4 text-gray-400 font-light text-base md:text-lg leading-relaxed">
                                <p>
                                    Não acredito em fórmulas mágicas para enriquecer da noite para o dia. Sei como é difícil administrar uma empresa de verdade no Rio de Janeiro, pagar contas e cuidar de funcionários.
                                </p>
                                <p>
                                    Meu trabalho nos últimos 5 anos tem sido simples: <strong className="text-white">ajudar empresários e profissionais liberais éticos a serem encontrados por quem precisa do serviço deles</strong>, gerando um fluxo constante e honesto de contatos no WhatsApp.
                                </p>
                            </div>
                            <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-8">
                                <div>
                                    <p className="text-3xl font-black text-[#D4AF37]">+50</p>
                                    <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Nichos Atendidos</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-black text-[#D4AF37]">RJ</p>
                                    <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Foco no Mercado Local</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <SocialProof />

                {/* [DÚVIDAS FREQUENTES ÉTICAS] */}
                <section className="py-24 px-6 bg-[#030303] border-t border-white/5">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="text-[#D4AF37] text-xs font-black uppercase tracking-[0.3em] block mb-2">Transparência</span>
                            <h2 className="text-3xl md:text-4xl font-serif font-bold">Perguntas Frequentes</h2>
                        </div>

                        <div className="space-y-6">
                            {[
                                { q: "Vocês garantem uma quantidade exata de vendas por mês?", a: "Não. Nenhuma empresa séria pode garantir vendas exatas, pois a venda final depende do seu atendimento no WhatsApp e da qualidade do seu serviço. O que nós garantimos é colocar pessoas qualificadas e interessadas em contato direto com você." },
                                { q: "Preciso ter uma equipe de marketing na minha empresa?", a: "Não. Nós cuidamos de toda a parte de estruturação e captação. Você só precisa ter alguém (ou você mesmo) para responder às mensagens no WhatsApp." },
                                { q: "Em quanto tempo os primeiros contatos começam a chegar?", a: "Assim que a estrutura entra no ar, os primeiros contatos costumam chegar no seu WhatsApp em poucos dias, à medida que as buscas ocorrem no Google." },
                                { q: "Como começamos o trabalho?", a: "Basta clicar no botão e nos enviar uma mensagem no WhatsApp. Vamos conversar sobre o seu negócio, entender seu momento atual e apresentar a melhor proposta." }
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
                        <p className="text-xs text-gray-500 max-w-sm">Captação comercial ética e previsível para empresas e clínicas no Rio de Janeiro - RJ.</p>
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
