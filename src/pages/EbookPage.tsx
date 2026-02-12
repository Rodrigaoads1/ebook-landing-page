import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { ContentSection } from '../components/ContentSection';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';
import { LeadModal } from '../components/LeadModal';
import { SocialProof } from '../components/SocialProof';
import { FAQ } from '../components/FAQ';

import { ExitIntentPopup } from '../components/ExitIntentPopup';

export function EbookPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#D4AF37]/30 selection:text-[#D4AF37]">
            <ExitIntentPopup ctaLink="https://pay.kiwify.com.br/GhaKpCv" />
            <main>
                <Hero onOpenModal={openModal} />
                <ContentSection onOpenModal={openModal} />
                <SocialProof />
                <FAQ />
                <FinalCTA onOpenModal={openModal} />
            </main>
            <Footer />
            <LeadModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
}
