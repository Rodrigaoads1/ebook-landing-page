import React, { useState } from 'react';
import { Send, Phone, Mail, User, MapPin, Globe, Loader2 } from 'lucide-react';

export const LeadForm: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: '',
        neighborhood: '',
        city: ''
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
            const response = await fetch('https://formsubmit.co/ajax/rodrigorodrigues@migracaodigital.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    Nome: formData.name,
                    Email: formData.email,
                    WhatsApp: formData.whatsapp,
                    Bairro: formData.neighborhood,
                    Cidade: formData.city,
                    _subject: `Novo Lead Premium: ${formData.name}`,
                    _template: 'table'
                })
            });

            if (response.ok) {
                alert('Solicitação enviada com sucesso! Entraremos em contato em breve.');
                setFormData({ name: '', email: '', whatsapp: '', neighborhood: '', city: '' });
            } else {
                alert('Houve um problema. Por favor, tente novamente.');
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
        <form onSubmit={handleSubmit} className="w-full space-y-4 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md">
            <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4AF37]/50" />
                <input
                    required
                    disabled={isSubmitting}
                    type="text"
                    name="name"
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4AF37]/50" />
                    <input
                        required
                        disabled={isSubmitting}
                        type="email"
                        name="email"
                        placeholder="E-mail profissional"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-black/40 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37]/50 transition-colors`}
                    />
                </div>
                <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4AF37]/50" />
                    <input
                        required
                        disabled={isSubmitting}
                        type="tel"
                        name="whatsapp"
                        placeholder="WhatsApp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        className={`w-full bg-black/40 border ${errors.whatsapp ? 'border-red-500/50' : 'border-white/10'} rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37]/50 transition-colors`}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4AF37]/50" />
                    <input
                        required
                        disabled={isSubmitting}
                        type="text"
                        name="neighborhood"
                        placeholder="Bairro"
                        value={formData.neighborhood}
                        onChange={handleChange}
                        className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
                    />
                </div>
                <div className="relative">
                    <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D4AF37]/50" />
                    <input
                        required
                        disabled={isSubmitting}
                        type="text"
                        name="city"
                        placeholder="Cidade"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
                    />
                </div>
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black font-black py-5 rounded-xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-xl shadow-[#D4AF37]/20 disabled:grayscale"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="w-6 h-6 animate-spin" />
                        Processando...
                    </>
                ) : (
                    <>
                        <Send className="w-6 h-6" />
                        Verificar Disponibilidade
                    </>
                )}
            </button>

            <p className="text-[10px] text-gray-600 text-center uppercase tracking-[0.3em] font-black">
                🔒 Seus dados estão protegidos pela Migração Digital
            </p>
        </form>
    );
};
