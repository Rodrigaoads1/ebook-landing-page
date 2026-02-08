'use client';

import { useState } from 'react';
import Image from 'next/image';

interface BrandDNA {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    palette: string[];
  };
  typography: {
    primary_font: string;
    secondary_font: string;
    style: string;
  };
  tone_of_voice: {
    style: string;
    keywords: string[];
    sample_phrases: string[];
  };
  visual_style: {
    aesthetic: string;
    design_elements: string[];
    image_style: string;
  };
  brand_essence: string;
}

interface CarouselSlide {
  slide_number: number;
  image_b64: string;
}

export default function Home() {
  const [step, setStep] = useState<'url' | 'dna' | 'upload' | 'result'>('url');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [brandDNA, setBrandDNA] = useState<BrandDNA | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [carouselSlides, setCarouselSlides] = useState<CarouselSlide[]>([]);
  const [caption, setCaption] = useState('');
  const [error, setError] = useState('');

  const extractBrandDNA = async () => {
    if (!websiteUrl) {
      setError('Por favor, insira uma URL válida');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:8000/extract-brand-dna', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ website_url: websiteUrl }),
      });

      const data = await response.json();

      if (data.status === 'success') {
        setBrandDNA(data.brand_dna);
        setStep('dna');
      } else {
        setError('Erro ao extrair Brand DNA. Tente novamente.');
      }
    } catch (err) {
      setError('Erro de conexão com o servidor. Verifique se o backend está rodando.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  const generateCarousel = async () => {
    if (selectedFiles.length === 0) {
      setError('Selecione pelo menos uma imagem');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const formData = new FormData();
      selectedFiles.forEach((file) => {
        formData.append('files', file);
      });

      if (brandDNA) {
        formData.append('brand_dna_json', JSON.stringify(brandDNA));
      }

      const response = await fetch('http://localhost:8000/generate-carousel', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.status === 'success') {
        setCarouselSlides(data.slides);
        setCaption(data.caption);
        setStep('result');
      } else {
        setError('Erro ao gerar carrossel. Tente novamente.');
      }
    } catch (err) {
      setError('Erro de conexão com o servidor.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Visual SaaS AI
            </h1>
            <span className="text-sm text-purple-300">Powered by Gemini + Pomelli DNA</span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        {/* Step 1: URL Input */}
        {step === 'url' && (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-white mb-4">
                Crie Carrosséis Virais com IA
              </h2>
              <p className="text-xl text-purple-200">
                Extraímos o DNA da sua marca e geramos conteúdo alinhado com sua identidade
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <label className="block text-white font-semibold mb-3">
                🌐 Cole a URL do seu site
              </label>
              <input
                type="url"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
                placeholder="https://seunegocio.com.br"
                className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/20 text-white placeholder-purple-300/50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />

              {error && (
                <p className="mt-3 text-red-400 text-sm">{error}</p>
              )}

              <button
                onClick={extractBrandDNA}
                disabled={isLoading}
                className="mt-6 w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                {isLoading ? '🔍 Analisando seu site...' : '✨ Extrair Brand DNA'}
              </button>

              <button
                onClick={() => setStep('upload')}
                className="mt-4 w-full py-3 bg-white/5 hover:bg-white/10 text-purple-200 font-semibold rounded-xl transition-all border border-white/20"
              >
                Pular (gerar sem Brand DNA)
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Brand DNA Display */}
        {step === 'dna' && brandDNA && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-white mb-2">
                🎨 DNA da Sua Marca Extraído!
              </h2>
              <p className="text-purple-200">
                Veja como identificamos a essência da sua marca
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Colors */}
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">🎨 Paleta de Cores</h3>
                <div className="flex gap-3 mb-4">
                  {brandDNA.colors.palette.map((color, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2">
                      <div
                        className="w-12 h-12 rounded-lg shadow-lg border-2 border-white/30"
                        style={{ backgroundColor: color }}
                      />
                      <span className="text-xs text-purple-200 font-mono">{color}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typography */}
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">✍️ Tipografia</h3>
                <p className="text-purple-200">
                  <strong>Fonte Principal:</strong> {brandDNA.typography.primary_font}
                </p>
                <p className="text-purple-200 mt-2">
                  <strong>Estilo:</strong> {brandDNA.typography.style}
                </p>
              </div>

              {/* Tone of Voice */}
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">🗣️ Tom de Voz</h3>
                <p className="text-purple-200 mb-3">
                  <strong>Estilo:</strong> {brandDNA.tone_of_voice.style}
                </p>
                <div className="flex flex-wrap gap-2">
                  {brandDNA.tone_of_voice.keywords.map((keyword, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-purple-500/30 rounded-full text-sm text-purple-100"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* Visual Style */}
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">🎭 Estilo Visual</h3>
                <p className="text-purple-200">
                  <strong>Estética:</strong> {brandDNA.visual_style.aesthetic}
                </p>
                <p className="text-purple-200 mt-2">
                  <strong>Elementos:</strong> {brandDNA.visual_style.design_elements.join(', ')}
                </p>
              </div>
            </div>

            {/* Brand Essence */}
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-2xl p-8 border border-white/20 mb-8">
              <h3 className="text-2xl font-bold text-white mb-3">✨ Essência da Marca</h3>
              <p className="text-xl text-purple-100 italic">"{brandDNA.brand_essence}"</p>
            </div>

            <button
              onClick={() => setStep('upload')}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-xl transition-all transform hover:scale-105 shadow-lg"
            >
              Continuar para Upload de Imagens →
            </button>
          </div>
        )}

        {/* Step 3: Image Upload */}
        {step === 'upload' && (
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-white mb-2">
                📸 Envie suas Imagens
              </h2>
              <p className="text-purple-200">
                Faça upload das imagens que você quer transformar em carrossel viral
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <label className="block w-full cursor-pointer">
                <div className="border-2 border-dashed border-purple-400 rounded-2xl p-12 text-center hover:border-pink-400 transition-all">
                  <div className="text-6xl mb-4">📁</div>
                  <p className="text-white font-semibold mb-2">
                    Clique para selecionar imagens
                  </p>
                  <p className="text-purple-300 text-sm">
                    Suporta múltiplas imagens (JPG, PNG)
                  </p>
                </div>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </label>

              {selectedFiles.length > 0 && (
                <div className="mt-6">
                  <p className="text-white font-semibold mb-3">
                    {selectedFiles.length} arquivo(s) selecionado(s):
                  </p>
                  <ul className="space-y-2">
                    {selectedFiles.map((file, idx) => (
                      <li key={idx} className="text-purple-200 text-sm">
                        ✓ {file.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {error && (
                <p className="mt-4 text-red-400 text-sm">{error}</p>
              )}

              <button
                onClick={generateCarousel}
                disabled={isLoading || selectedFiles.length === 0}
                className="mt-8 w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                {isLoading ? '🎨 Gerando Carrossel Viral...' : '🚀 Gerar Carrossel com IA'}
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Results */}
        {step === 'result' && (
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-white mb-2">
                🎉 Seu Carrossel Viral Está Pronto!
              </h2>
              <p className="text-purple-200">
                Carrossel gerado com neuromarketing e alinhado ao DNA da sua marca
              </p>
            </div>

            {/* Caption */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 mb-8">
              <h3 className="text-xl font-bold text-white mb-3">📝 Legenda Sugerida</h3>
              <p className="text-purple-100 leading-relaxed">{caption}</p>
            </div>

            {/* Slides */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {carouselSlides.map((slide) => (
                <div
                  key={slide.slide_number}
                  className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20"
                >
                  <p className="text-purple-300 text-sm mb-2">Slide {slide.slide_number}</p>
                  <img
                    src={`data:image/png;base64,${slide.image_b64}`}
                    alt={`Slide ${slide.slide_number}`}
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                setStep('url');
                setWebsiteUrl('');
                setBrandDNA(null);
                setSelectedFiles([]);
                setCarouselSlides([]);
                setCaption('');
              }}
              className="w-full py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all border border-white/20"
            >
              ← Criar Novo Carrossel
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
