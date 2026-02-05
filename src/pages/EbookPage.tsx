import React from 'react';
import { Hero } from '../components/Hero';
import { SocialProof } from '../components/SocialProof';
import { ContentSection } from '../components/ContentSection';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';

export function EbookPage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#D4AF37]/30 selection:text-[#D4AF37]">
            <main>
                <Hero />
                <SocialProof />
                <ContentSection />
                <FinalCTA />
            </main>
            <Footer />
        </div>
    );
}
