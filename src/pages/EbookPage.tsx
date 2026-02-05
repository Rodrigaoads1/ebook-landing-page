import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { SocialProof } from '../components/SocialProof';
import { ContentSection } from '../components/ContentSection';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';
import { LeadModal } from '../components/LeadModal';

export function EbookPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#D4AF37]/30 selection:text-[#D4AF37]">
            <main>
                <Hero onOpenModal={openModal} />
                <SocialProof />
                <ContentSection />
                <FinalCTA onOpenModal={openModal} />
            </main>
            <Footer />
            <LeadModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
}
