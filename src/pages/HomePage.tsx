import React from 'react';
import { Link } from 'react-router-dom';

export function HomePage() {
    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
            <div className="text-center px-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#D4AF37] to-[#F4D03F] bg-clip-text text-transparent">
                    Migração Digital
                </h1>
                <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                    Site institucional em construção. Em breve, conteúdo completo aqui.
                </p>
                <Link
                    to="/ebook"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B8960C] text-black font-bold rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-[#D4AF37]/25"
                >
                    📘 Baixe o Ebook Gratuito
                </Link>
            </div>
        </div>
    );
}
