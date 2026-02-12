import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { ContentSection } from '../components/ContentSection';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';
import { LeadModal } from '../components/LeadModal';
import { SocialProof } from '../components/SocialProof';

export function EbookPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="min-h-screen bg-[#FAF9F6] text-[#111111] selection:bg-[#BD9F67]/20 selection:text-[#BD9F67] selection-prestige">
            <main>
                <Hero onOpenModal={openModal} />
                <ContentSection onOpenModal={openModal} />
                <SocialProof />
                <FinalCTA onOpenModal={openModal} />
            </main>
            <Footer />
            <LeadModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
}
