import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send, User, Phone } from 'lucide-react';

export const WhatsAppChat: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showBadge, setShowBadge] = useState(false);

    useEffect(() => {
        // Mostra o badge após 5 segundos para chamar atenção de forma sutil
        const timer = setTimeout(() => setShowBadge(true), 5000);
        return () => clearTimeout(timer);
    }, []);

    const handleOpenChat = () => {
        setIsOpen(true);
        setShowBadge(false);
    };

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        const message = "Olá, vim pelo site e gostaria de saber mais sobre o Sistema de Aquisição Previsível.";
        const phone = "5511999999999"; // Substituir pelo número real do Rodrigo
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="fixed bottom-8 right-8 z-[200] font-sans">
            {/* FAB Button */}
            <button
                onClick={handleOpenChat}
                className={`
                    flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] text-white shadow-2xl 
                    hover:scale-110 active:scale-95 transition-all duration-300 relative group
                    ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}
                `}
            >
                <MessageCircle className="w-8 h-8 fill-white" />
                {showBadge && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[8px] font-bold items-center justify-center">1</span>
                    </span>
                )}
                {/* Tooltip */}
                <div className="absolute right-20 bg-white text-black px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl pointer-events-none border border-gray-100">
                    Falar com Estrategista
                </div>
            </button>

            {/* Chat Window */}
            <div className={`
                absolute bottom-0 right-0 w-80 bg-white rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.3)]
                transition-all duration-500 transform origin-bottom-right overflow-hidden
                ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-0 opacity-0 translate-y-10'}
            `}>
                {/* Header */}
                <div className="bg-[#075e54] p-6 text-white flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="relative">
                            <div className="w-10 h-10 rounded-full bg-[#128c7e] flex items-center justify-center font-bold border-2 border-[#25D366]">R</div>
                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] border-2 border-[#075e54] rounded-full"></span>
                        </div>
                        <div>
                            <p className="font-bold text-sm leading-none mb-1">Rodrigo Rodrigues</p>
                            <p className="text-[10px] opacity-80 uppercase tracking-widest font-black">Online agora</p>
                        </div>
                    </div>
                    <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6 bg-[#e5ddd5] min-h-[120px] relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: `url('https://i.pinimg.com/originals/97/c0/07/97c00754ca36034e4023c72b22bb8fa2.jpg')` }} />

                    <div className="relative z-10 bg-white p-4 rounded-2xl rounded-tl-none shadow-sm max-w-[80%] mb-4">
                        <p className="text-sm text-gray-800 leading-relaxed italic">
                            "Marketing sem estratégia é só barulho. Como posso ajudar seu negócio hoje?"
                        </p>
                        <span className="text-[9px] text-gray-400 block text-right mt-1">16:40</span>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-6 bg-white">
                    <button
                        onClick={handleSendMessage}
                        className="w-full bg-[#25D366] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#128c7e] transition-all"
                    >
                        <Send className="w-4 h-4" />
                        Iniciar Conversa
                    </button>
                    <p className="text-[9px] text-gray-400 text-center mt-4 uppercase tracking-[0.2em] font-black">
                        Resposta média: 5 minutos
                    </p>
                </div>
            </div>
        </div>
    );
};
