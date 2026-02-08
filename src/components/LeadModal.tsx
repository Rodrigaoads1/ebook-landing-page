
import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { LeadForm } from './LeadForm';

interface LeadModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const LeadModal: React.FC<LeadModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-black/90 backdrop-blur-md"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-lg bg-[#0a0a0a] rounded-[40px] border border-[#D4AF37]/30 shadow-2xl p-10 md:p-14 overflow-hidden">
                {/* Decorative background flare */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4AF37]/10 blur-[100px] -translate-y-1/2 translate-x-1/2" />

                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-gray-500 hover:text-[#D4AF37] transition-colors"
                >
                    <X className="w-8 h-8" />
                </button>

                <div className="text-center mb-10 relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4AF37]/10 rounded-full text-[#D4AF37] text-[10px] font-black uppercase tracking-widest mb-6">
                        <ShieldCheck className="w-4 h-4" /> Diagnóstico de Vagas
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                        Falar com um <br /><span className="text-[#D4AF37]">Estrategista</span>
                    </h2>
                    <p className="text-gray-500 font-light leading-relaxed">
                        Preencha os dados para verificar a disponibilidade de uma análise gratuita ou consultoria premium.
                    </p>
                </div>

                <div className="relative z-10">
                    <LeadForm />
                </div>

                <p className="mt-8 text-center text-[10px] text-gray-700 uppercase tracking-[0.3em] font-black">
                    MIGRAÇÃO DIGITAL • PREVISIBILIDADE COMERCIAL
                </p>
            </div>
        </div>
    );
};
