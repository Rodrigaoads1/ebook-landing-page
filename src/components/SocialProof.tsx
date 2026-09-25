import React, { useRef, useState, useEffect } from 'react';
import { Quote, Star, Globe, CheckCircle2, ArrowUpRight, Instagram, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { OptimizedImage } from './OptimizedImage';

// --- DATA ---
const resultsGallery = [
   { id: 1, type: 'video', url: '/assets/social_proof/video_1.mp4', label: 'Dashboard em Tempo Real' },
   { id: 2, type: 'image', url: '/assets/social_proof/print_1.png', label: 'Crescimento de Leads' },
   { id: 3, type: 'video', url: '/assets/social_proof/video_2.mp4', label: 'Feedback de Cliente' },
   { id: 4, type: 'image', url: '/assets/social_proof/print_2.png', label: 'Agenda Lotada' },
   { id: 5, type: 'video', url: '/assets/social_proof/video_3.mp4', label: 'Análise de Métricas' },
   { id: 6, type: 'image', url: '/assets/social_proof/print_3.png', label: 'Resultados Consolidados' },
   { id: 7, type: 'video', url: '/assets/social_proof/video_4.mp4', label: 'Visão Geral da Conta' },
   { id: 8, type: 'image', url: '/assets/social_proof/print_4.png', label: 'Escala de Vendas' },
];

const videoTestimonials = [
   { id: 1, url: '/assets/testimonials/depoimento_1.mp4', label: 'Parceiro Verificado' },
   { id: 2, url: '/assets/testimonials/depoimento_2.mp4', label: 'Parceiro Verificado' },
   { id: 3, url: '/assets/testimonials/depoimento_3.mp4', label: 'Parceiro Verificado' },
   { id: 4, url: '/assets/testimonials/depoimento_4.mp4', label: 'Parceiro Verificado' },
   { id: 5, url: '/assets/testimonials/depoimento_5.mp4', label: 'Parceiro Verificado' },
];

// --- COMPONENTS ---

// 1. Phone Mockup Frame
const PhoneMockup = ({ children, className = '' }) => (
   <div className={`relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-[2.5rem] h-[500px] w-[280px] shadow-2xl flex flex-col justify-center items-center overflow-hidden ${className}`}>
      {/* Notch */}
      <div className="absolute top-0 w-32 h-6 bg-black rounded-b-xl z-20 left-1/2 transform -translate-x-1/2 flex justify-center items-center">
         <div className="w-16 h-1 bg-gray-800 rounded-full opacity-30"></div>
      </div>
      {/* Screen Content */}
      <div className="h-[calc(100%-4px)] w-[calc(100%-4px)] bg-[#050505] rounded-[2rem] overflow-hidden relative group">
         {children}
         {/* Glass Reflection */}
         <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none z-10" />
      </div>
   </div>
);

// 2. Glass Card Mockup (for cleaner look)
const GlassCardMockup = ({ children, label }) => (
   <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      className="relative min-w-[260px] h-[460px] rounded-[24px] overflow-hidden border border-white/10 bg-[#111] shadow-2xl group cursor-pointer"
   >
      {children}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
      <div className="absolute bottom-6 left-6 right-6 z-20">
         <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4AF37] text-black text-[10px] font-black uppercase tracking-wider rounded-full mb-3 opacity-90">
            Resultado Verificado <CheckCircle2 className="w-3 h-3" />
         </div>
         <p className="text-white font-bold leading-tight drop-shadow-lg text-lg">
            {label}
         </p>
      </div>
   </motion.div>
);


// 3. Draggable Carousel
const DraggableCarousel = ({ items, renderItem }) => {
   const scrollRef = useRef(null);
   const [canScrollLeft, setCanScrollLeft] = useState(false);
   const [canScrollRight, setCanScrollRight] = useState(true);

   const checkScroll = () => {
      if (scrollRef.current) {
         const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
         setCanScrollLeft(scrollLeft > 0);
         setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
      }
   };

   useEffect(() => {
      checkScroll();
      window.addEventListener('resize', checkScroll);
      return () => window.removeEventListener('resize', checkScroll);
   }, [items]);

   const scroll = (direction) => {
      if (scrollRef.current) {
         const { current } = scrollRef;
         const scrollAmount = direction === 'left' ? -350 : 350;
         current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
         setTimeout(checkScroll, 300); // Check after scroll animation
      }
   };

   return (
      <div className="relative group">
         {/* Controls */}
         <AnimatePresence>
            {canScrollLeft && (
               <motion.button
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  onClick={() => scroll('left')}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-[#D4AF37] hover:text-black transition-all hidden md:flex"
               >
                  <ChevronLeft className="w-6 h-6" />
               </motion.button>
            )}
         </AnimatePresence>
         <AnimatePresence>
            {canScrollRight && (
               <motion.button
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  onClick={() => scroll('right')}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-30 p-3 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-[#D4AF37] hover:text-black transition-all hidden md:flex"
               >
                  <ChevronRight className="w-6 h-6" />
               </motion.button>
            )}
         </AnimatePresence>

         {/* Scroll Container */}
         <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto pb-8 px-4 hide-scrollbar snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
         >
            {items.map((item, index) => (
               <div key={item.id} className="snap-center shrink-0 first:pl-4 last:pr-4">
                  {renderItem(item, index)}
               </div>
            ))}
         </div>
      </div>
   );
};


export const SocialProof: React.FC = () => {
   const sectionRef = useRef(null);
   const { scrollYProgress } = useScroll({
      target: sectionRef,
      offset: ["start end", "end start"]
   });

   const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
   const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

   return (
      <section ref={sectionRef} className="py-32 bg-[#050505] relative overflow-hidden">
         {/* Background Elements */}
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#4285F4]/5 rounded-full blur-[120px]" />
         </div>

         <div className="max-w-7xl mx-auto px-6 relative z-10">

            {/* --- HEADER --- */}
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="text-center mb-24"
            >
               <motion.div
                  className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] font-black uppercase tracking-[0.3em] rounded-full mb-8 border border-[#D4AF37]/20"
                  whileHover={{ scale: 1.05 }}
               >
                  <Star className="w-3 h-3 fill-current" /> Autoridade Comprovada
               </motion.div>

               <h2 className="text-4xl md:text-7xl font-serif font-bold mb-8 text-white tracking-tight">
                  Resultados <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F7E7CE] italic">Inquestionáveis.</span>
               </h2>

               <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
                  Ultrapassamos a barreira das promessas. Aqui, mostramos a realidade nua e crua de operações que escalam.
               </p>
            </motion.div>



            {/* --- RESULTS GALLERY (CAROUSEL) --- */}
            <div className="mb-32">
               <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                  <div className="text-left max-w-2xl">
                     <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Galeria de <span className="text-[#D4AF37]">Bastidores</span></h3>
                     <p className="text-gray-500 font-light text-lg">Swipe para ver capturas reais de dashboards, conversas e resultados brutos.</p>
                  </div>
                  <div className="hidden md:flex gap-2 text-[#D4AF37] opacity-60 text-sm font-mono items-center">
                     <ChevronLeft className="w-4 h-4" /> ARRASTE PARA NAVEGAR <ChevronRight className="w-4 h-4" />
                  </div>
               </div>

               <DraggableCarousel
                  items={resultsGallery}
                  renderItem={(item) => (
                     <GlassCardMockup label={item.label}>
                        {item.type === 'video' ? (
                           <video
                              src={item.url}
                              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                              autoPlay
                              loop
                              muted
                              playsInline
                           />
                        ) : (
                           <OptimizedImage
                              src={item.url}
                              alt={item.label}
                              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                           />
                        )}
                     </GlassCardMockup>
                  )}
               />
            </div>

            {/* --- VIDEO TESTIMONIALS (CAROUSEL) --- */}
            <div className="mb-12">
               <div className="text-center mb-16">
                  <h3 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Veja a <span className="text-[#D4AF37]">experiência de alguns clientes</span> que já atendemos</h3>
                  <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full opacity-50" />
               </div>

               <DraggableCarousel
                  items={videoTestimonials}
                  renderItem={(video) => (
                     <PhoneMockup className="mx-4 group">
                        <video
                           src={video.url}
                           controls
                           className="w-full h-full object-cover"
                           playsInline
                        />
                        {/* Overlay for "Play" styling if native controls are hidden or custom poster is used */}
                        {/* Using native controls for usability as requested */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent pointer-events-none">
                           <p className="text-white font-bold text-sm text-center opacity-80">
                              {video.label}
                           </p>
                        </div>
                     </PhoneMockup>
                  )}
               />

               <div className="mt-16 text-center">
                  <p className="text-gray-600 text-xs uppercase tracking-[0.2em] font-bold">
                     * Conteúdo 100% autêntico e não roteirizado.
                  </p>
               </div>
            </div>

         </div>
      </section>
   );
};
