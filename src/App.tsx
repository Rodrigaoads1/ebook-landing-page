
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { EbookPage } from './pages/EbookPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ebook" element={<EbookPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
