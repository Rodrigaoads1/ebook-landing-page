
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { EbookPage } from './pages/EbookPage';
import { AnalysisPage } from './pages/AnalysisPage';
import { BioPage } from './pages/BioPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { WhatsAppChat } from './components/WhatsAppChat';

function App() {
  return (
    <BrowserRouter>
      <div className="relative">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ebook" element={<EbookPage />} />
          <Route path="/analise-profissional-de-presenca-digital-02" element={<AnalysisPage />} />
          <Route path="/bio-instagram" element={<BioPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <WhatsAppChat />
      </div>
    </BrowserRouter>
  );
}

export default App;
