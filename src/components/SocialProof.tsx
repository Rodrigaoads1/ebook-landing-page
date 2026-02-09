import React from 'react';
import { Quote, Star, Globe, CheckCircle2, ArrowUpRight, Instagram } from 'lucide-react';

// Placeholder for the "Prints" the user will send
const resultsGallery = [
  { id: 1, type: 'image', url: 'https://placehold.co/600x800/111/D4AF37?text=Print+Resultado+1', label: 'Crescimento Comprovado' },
  { id: 2, type: 'image', url: 'https://placehold.co/600x800/111/D4AF37?text=Print+Resultado+2', label: 'Agenda Lotada' },
  { id: 3, type: 'image', url: 'https://placehold.co/600x800/111/D4AF37?text=Print+Resultado+3', label: 'ROI de Alta Performance' },
  { id: 4, type: 'image', url: 'https://placehold.co/600x800/111/D4AF37?text=Print+Resultado+4', label: 'Escala Previsível' },
];

export const SocialProof: React.FC = () => {
  return (
    <section className="py-24 bg-[#050505] px-6 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-6">
            Autoridade & Prova Social
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Resultados <span className="text-[#D4AF37] italic">Auditáveis.</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Abra a caixa preta da nossa operação. Sem depoimentos fabricados, apenas resultados reais.
          </p>
        </div>

        {/* Google Reviews Live Badge Area */}
        <div className="mb-24 relative group">
           <div className="absolute inset-0 bg-gradient-to-r from-[#4285F4]/10 to-[#D4AF37]/5 blur-3xl opacity-50 rounded-[50px]" />
           
           <div className="relative bg-[#0a0a0a] border border-white/5 rounded-[40px] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 hover:border-[#D4AF37]/20 transition-all duration-700 shadow-2xl">
              
              {/* Left Side: Rating */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
                 <div className="flex items-center gap-4 bg-white/5 px-6 py-3 rounded-full border border-white/10">
                    {/* Google G Logo SVG */}
                    <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.84z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <span className="text-white font-bold tracking-tight">Google Reviews</span>
                 </div>
                 
                 <div className="space-y-2">
                    <div className="flex items-center gap-4 justify-center md:justify-start">
                        <span className="text-7xl font-serif font-bold text-white leading-none">5.0</span>
                        <div className="flex flex-col gap-1">
                             <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-6 h-6 text-[#FBBC05] fill-[#FBBC05]" />
                                ))}
                            </div>
                            <span className="text-gray-500 text-xs uppercase tracking-wider font-bold">Excelência Máxima</span>
                        </div>
                    </div>
                 </div>
              </div>

              {/* Right Side: Call to Action to Verify */}
              <div className="flex-1 max-w-lg text-center md:text-right space-y-6">
                 <p className="text-gray-400 text-lg font-light leading-relaxed">
                    "Não criamos depoimentos. Nossos clientes falam por nós diretamente na plataforma mais confiável do mundo."
                 </p>
                 <a
                    href="https://www.google.com/maps" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[#D4AF37] text-black rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all duration-300 transform hover:-translate-y-1 shadow-2xl hover:shadow-[#D4AF37]/50"
                 >
                    Ler Avaliações no Google <ArrowUpRight className="w-4 h-4" />
                 </a>
              </div>
           </div>
        </div>

        {/* Prints Gallery Section - REPLACES Instagram Stories */}
        <div className="mb-12">
            <div className="flex items-center justify-between mb-12">
                 <div className="text-left">
                    <h3 className="text-3xl font-serif font-bold text-white mb-2">Galeria de <span className="text-[#D4AF37]">Resultados</span></h3>
                    <p className="text-gray-500 font-light">Capturas de tela reais de dashboards e feedbacks.</p>
                 </div>
                 <Globe className="w-8 h-8 text-[#D4AF37] opacity-50" />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {resultsGallery.map((item) => (
                    <div key={item.id} className="group relative aspect-[9/16] bg-[#111] rounded-[24px] overflow-hidden border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-500">
                        {/* Placeholder Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center opacity-30 group-hover:opacity-10 opacity-transition">
                           <Instagram className="w-12 h-12 text-gray-700 mb-4" />
                           <span className="text-gray-700 text-xs font-mono break-all">{item.url}</span>
                        </div>

                        <img 
                            src={item.url} 
                            alt={item.label} 
                            className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
                        
                        <div className="absolute bottom-6 left-6 right-6">
                             <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4AF37] text-black text-[10px] font-black uppercase tracking-wider rounded-full mb-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                Resultado Verificado
                             </div>
                             <p className="text-white font-bold leading-tight transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-100">
                                {item.label}
                             </p>
                        </div>
                    </div>
                ))}
            </div>
             <p className="text-center text-gray-600 text-xs mt-8 uppercase tracking-widest font-bold">
                * Prints fornecidos pelos clientes e autorizados para divulgação.
            </p>
        </div>

      </div>
    </section>
  );
};
