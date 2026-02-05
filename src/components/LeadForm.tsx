import React, { useState } from 'react';
import { Send, Phone, Mail, User, Loader2 } from 'lucide-react';

export const LeadForm: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: ''
    });

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validateWhatsApp = (phone: string) => {
        const digits = phone.replace(/\D/g, '');
        return digits.length >= 10 && digits.length <= 11;
    };

    const formatPhone = (value: string) => {
        const digits = value.replace(/\D/g, '');
        if (digits.length <= 2) return digits;
        if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
        return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7, 11)}`;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: Record<string, string> = {};

        if (!validateEmail(formData.email)) {
            newErrors.email = 'E-mail inválido';
        }
        if (!validateWhatsApp(formData.whatsapp)) {
            newErrors.whatsapp = 'Número inválido (use DDD + número)';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        setIsSubmitting(true);

        try {
            // URL corrigida para envio direto no Formspree (sem o /f/)
            const response = await fetch('https://formspree.io/rodrigorodrigues@migracaodigital.com', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('Sucesso! Verifique seu e-mail (e a caixa de spam) para confirmar o recebimento do checklist.');
                setFormData({ name: '', email: '', whatsapp: '' });
            } else {
                const data = await response.json();
                if (data.error && data.error.includes('verified')) {
                    alert('AVISO: O e-mail de destino ainda não foi verificado no Formspree. Por favor, verifique a caixa de entrada de rodrigorodrigues@migracaodigital.com e clique no link de "Confirm Email" enviado pelo Formspree nas últimas horas.');
                } else {
                    alert('Ops! Ocorreu um erro ao enviar. Por favor, tente novamente mais tarde.');
                }
            }
        } catch (error) {
            alert('Erro de conexão. Verifique sua internet.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        let finalValue = value;

        if (name === 'whatsapp') {
            finalValue = formatPhone(value);
        }

        setFormData(prev => ({ ...prev, [name]: finalValue }));

        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full space-y-4 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
            <div className="relative">
                <User className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${errors.name ? 'text-red-400' : 'text-[#D4AF37]/50'}`} />
                <input
                    required
                    disabled={isSubmitting}
                    type="text"
                    name="name"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-black/40 border ${errors.name ? 'border-red-500/50' : 'border-white/10'} rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]/50 transition-colors disabled:opacity-50`}
                />
            </div>

            <div className="relative">
                <Mail className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${errors.email ? 'text-red-400' : 'text-[#D4AF37]/50'}`} />
                <input
                    required
                    disabled={isSubmitting}
                    type="email"
                    name="email"
                    placeholder="Seu melhor e-mail"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-black/40 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]/50 transition-colors disabled:opacity-50`}
                />
                {errors.email && <p className="text-[10px] text-red-400 mt-1 ml-1">{errors.email}</p>}
            </div>

            <div className="relative">
                <Phone className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${errors.whatsapp ? 'text-red-400' : 'text-[#D4AF37]/50'}`} />
                <input
                    required
                    disabled={isSubmitting}
                    type="tel"
                    name="whatsapp"
                    placeholder="WhatsApp (ex: 21 99999-9999)"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    className={`w-full bg-black/40 border ${errors.whatsapp ? 'border-red-500/50' : 'border-white/10'} rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-[#D4AF37]/50 transition-colors disabled:opacity-50`}
                />
                {errors.whatsapp && <p className="text-[10px] text-red-400 mt-1 ml-1">{errors.whatsapp}</p>}
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#D4AF37]/20 disabled:grayscale disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Enviando...
                    </>
                ) : (
                    <>
                        <Send className="w-5 h-5" />
                        Quero Receber Agora
                    </>
                )}
            </button>

            <p className="text-[10px] text-gray-500 text-center uppercase tracking-widest">
                🔐 Seus dados estão 100% seguros
            </p>
        </form>
    );
};
