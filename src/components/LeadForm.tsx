
import React, { useState } from 'react';
import { Send, Phone, Mail, User } from 'lucide-react';

export const LeadForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aqui você integraria com seu sistema de email ou CRM
        console.log('Lead capturado:', formData);
        alert('Obrigado! Seu checklist será enviado em instantes.');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <form onSubmit={handleSubmit} className="w-full space-y-4 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
            <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4AF37]/50" />
                <input
                    required
                    type="text"
                    name="name"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
                />
            </div>

            <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4AF37]/50" />
                <input
                    required
                    type="email"
                    name="email"
                    placeholder="Seu melhor e-mail"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
                />
            </div>

            <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4AF37]/50" />
                <input
                    required
                    type="tel"
                    name="whatsapp"
                    placeholder="Seu WhatsApp (com DDD)"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#D4AF37]/20"
            >
                <Send className="w-5 h-5" />
                Quero Receber Agora
            </button>

            <p className="text-[10px] text-gray-500 text-center uppercase tracking-widest">
                🔐 Seus dados estão 100% seguros
            </p>
        </form>
    );
};
