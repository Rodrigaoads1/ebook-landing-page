
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { EbookPage } from './pages/EbookPage';
import { AnalysisPage } from './pages/AnalysisPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ebook" element={<EbookPage />} />
        <Route path="/analise-profissional-de-presenca-digital-02" element={<AnalysisPage />} />
        {/* Redirecionar qualquer outra coisa para a home ou ebook se preferir */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
