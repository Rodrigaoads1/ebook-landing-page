import React, { useState, useEffect } from 'react';
import { X, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ExitIntentPopup: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasShown, setHasShown] = useState(false);

    useEffect(() => {
        // Check if user has already seen the popup in this session
        const popupShown = sessionStorage.getItem('exitPopupShown');
        if (popupShown) {
            setHasShown(true);
            return;
        }

        // Desktop: Mouse leave detection
        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0 && !hasShown) {
                setIsVisible(true);
                setHasShown(true);
                sessionStorage.setItem('exitPopupShown', 'true');
            }
        };

        // Mobile: Scroll to top detection (back button behavior)
        let lastScrollY = window.scrollY;
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // If user scrolls up significantly (potential exit behavior)
            if (lastScrollY - currentScrollY > 100 && currentScrollY < 300 && !hasShown) {
                setIsVisible(true);
                setHasShown(true);
                sessionStorage.setItem('exitPopupShown', 'true');
            }

            lastScrollY = currentScrollY;
        };

        // Add event listeners
        document.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => {
            document.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [hasShown]);

    const handleClose = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200] animate-fadeIn"
                onClick={handleClose}
            />

            {/* Popup */}
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[201] w-[90%] max-w-2xl animate-slideUp">
                <div className="bg-white border border-gray-200 shadow-2xl relative overflow-hidden">

                    {/* Close Button */}
                    <button
                        onClick={handleClose}
                        className="absolute top-6 right-6 z-10 p-2 hover:bg-gray-100 transition-colors rounded-full"
                        aria-label="Fechar"
                    >
                        <X className="w-5 h-5 text-gray-400" />
                    </button>

                    {/* Content */}
                    <div className="p-12 md:p-16 text-center">
                        {/* Icon */}
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-[#BD9F67]/10 rounded-full mb-8">
                            <Target className="w-8 h-8 text-[#BD9F67]" />
                        </div>

                        {/* Headline */}
                        <h3 className="text-3xl md:text-5xl font-serif font-bold text-[#111111] mb-6 leading-tight">
                            Antes de sair, <br />
                            <span className="italic text-[#BD9F67]">leve o mapa.</span>
                        </h3>

                        {/* Subheadline */}
                        <p className="text-gray-500 text-lg font-light leading-relaxed mb-8 max-w-lg mx-auto">
                            O <strong>Checklist Estratégico</strong> revela os 7 erros ocultos que estão impedindo sua presença digital de gerar clientes previsíveis.
                        </p>

                        {/* Value Prop */}
                        <div className="bg-[#FAF9F6] border border-gray-100 p-6 mb-10 text-left max-w-md mx-auto">
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li className="flex items-start gap-3">
                                    <span className="text-[#BD9F67] mt-1">✓</span>
                                    <span>Diagnóstico de Presença Digital em 15 minutos</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#BD9F67] mt-1">✓</span>
                                    <span>Identifique onde está perdendo clientes</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#BD9F67] mt-1">✓</span>
                                    <span>Plano de ação imediato para corrigir</span>
                                </li>
                            </ul>
                        </div>

                        {/* Price */}
                        <div className="mb-8">
                            <div className="text-gray-400 text-sm line-through mb-2">De R$ 97,00</div>
                            <div className="text-5xl font-serif font-bold text-[#111111]">
                                R$ 19<span className="text-2xl">,90</span>
                            </div>
                            <div className="text-xs text-gray-400 uppercase tracking-widest mt-2">Investimento Único</div>
                        </div>

                        {/* CTA */}
                        <Link
                            to="/ebook"
                            onClick={handleClose}
                            className="inline-flex items-center gap-3 bg-[#111111] text-white text-sm font-black uppercase tracking-[0.3em] py-5 px-12 hover:bg-[#BD9F67] hover:text-black transition-all shadow-xl group"
                        >
                            Garantir Checklist Agora
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        {/* Trust */}
                        <p className="text-xs text-gray-400 mt-8 uppercase tracking-widest">
                            Acesso imediato • Garantia de 7 dias
                        </p>
                    </div>

                    {/* Decorative Element */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#BD9F67]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                </div>
            </div>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes slideUp {
                    from { 
                        opacity: 0;
                        transform: translate(-50%, -45%);
                    }
                    to { 
                        opacity: 1;
                        transform: translate(-50%, -50%);
                    }
                }
                
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
                
                .animate-slideUp {
                    animation: slideUp 0.4s ease-out;
                }
            `}</style>
        </>
    );
};
