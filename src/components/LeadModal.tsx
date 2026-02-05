
import React from 'react';
import { X } from 'lucide-react';
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
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-lg bg-[#141414] rounded-3xl border border-[#D4AF37]/30 shadow-2xl p-8 overflow-hidden">
                {/* Decorative background flare */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 blur-3xl -translate-y-1/2 translate-x-1/2" />

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
                >
                    <X className="w-6 h-6" />
                </button>

                <div className="text-center mb-8">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2">
                        Quase lá! 🚀
                    </h2>
                    <p className="text-gray-400">
                        Preencha os dados abaixo para receber seu <span className="text-[#D4AF37] font-semibold">Checklist Gratuito</span> agora mesmo.
                    </p>
                </div>

                <LeadForm />
            </div>
        </div>
    );
};
