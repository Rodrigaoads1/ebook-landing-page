# 🚀 Visual SaaS AI - Gerador de Carrosséis Virais

## 🎯 O que é?

SaaS inspirado no **Pomelli Google** que:
1. **Extrai o "Brand DNA"** de qualquer site (cores, tipografia, tom de voz, estilo visual)
2. **Gera carrosséis virais** para Instagram usando IA (Gemini)
3. **Aplica neuromarketing** e o "Tom Rodrigo" de copywriting
4. **Personaliza automaticamente** o conteúdo com a identidade da marca do cliente

---

## 🏗️ Arquitetura

### Backend (FastAPI + Python)
- **`brand_dna_service.py`**: Extração de Brand DNA via web scraping + análise com Gemini
- **`gemini_service.py`**: Geração de conteúdo de carrossel com neuromarketing
- **`design_service.py`**: Renderização visual dos slides (Pillow)
- **`main.py`**: API REST com endpoints

### Frontend (Next.js + React)
- Interface moderna com glassmorphism
- Fluxo em 4 etapas:
  1. Input de URL do site
  2. Visualização do Brand DNA extraído
  3. Upload de imagens
  4. Resultado com carrossel gerado

---

## 🔧 Instalação e Execução

### 1. Backend

```bash
cd visual-saas/backend

# Instalar dependências
python -m pip install -r requirements.txt

# Configurar variável de ambiente
# Crie um arquivo .env com:
# GOOGLE_API_KEY=sua_chave_aqui

# Rodar servidor
python main.py
```

O backend estará rodando em `http://localhost:8000`

### 2. Frontend

```bash
cd visual-saas/frontend

# Instalar dependências
npm install

# Rodar dev server
npm run dev
```

O frontend estará rodando em `http://localhost:3000`

---

## 📡 Endpoints da API

### `POST /extract-brand-dna`
Extrai o DNA da marca de um site.

**Body:**
```json
{
  "website_url": "https://exemplo.com"
}
```

**Response:**
```json
{
  "status": "success",
  "brand_dna": {
    "colors": {
      "primary": "#000000",
      "secondary": "#666666",
      "accent": "#FF6B00",
      "palette": ["#000000", "#666666", ...]
    },
    "typography": {
      "primary_font": "Inter",
      "secondary_font": "Georgia",
      "style": "modern"
    },
    "tone_of_voice": {
      "style": "professional",
      "keywords": ["inovação", "resultados"],
      "sample_phrases": ["Transforme seu negócio"]
    },
    "visual_style": {
      "aesthetic": "minimal",
      "design_elements": ["clean", "shadows"],
      "image_style": "photography"
    },
    "brand_essence": "Marca moderna focada em resultados"
  }
}
```

### `POST /generate-carousel`
Gera carrossel viral com IA.

**Body (multipart/form-data):**
- `files`: Múltiplas imagens (File[])
- `brand_dna_json`: JSON string do Brand DNA (opcional)

**Response:**
```json
{
  "status": "success",
  "caption": "Legenda completa com storytelling...",
  "slides": [
    {
      "slide_number": 1,
      "image_b64": "base64_encoded_image..."
    },
    ...
  ]
}
```

---

## 🎨 Diferenciais

### 1. Brand DNA Extractor (estilo Pomelli)
- Análise automática de sites
- Extração de paleta de cores via CSS parsing
- Detecção de tipografia
- Análise de tom de voz com Gemini AI

### 2. Neuromarketing Integrado
- Gatilho da Fofoca (prints de WhatsApp/X)
- Contraste Cognitivo (números extremos)
- Loop de Retenção (frases fragmentadas entre slides)
- Prova Social Realista (nomes brasileiros)

### 3. Tom de Voz "Rodrigo"
- Linguagem "pé no chão"
- Sem jargões corporativos
- Conexão com a realidade brasileira
- Adaptável ao tom da marca do cliente

---

## 🔮 Próximos Passos

- [ ] Integração com Veo 3.1 para vídeos animados (como Pomelli)
- [ ] Sistema de templates de design (Photoshop Style)
- [ ] Análise de screenshots de sites (além de HTML/CSS)
- [ ] Exportação em múltiplos formatos (PDF, MP4, etc)
- [ ] Dashboard com histórico de carrosséis gerados
- [ ] Sistema de pagamento e planos

---

## 📚 Documentos de Referência

Os 5 documentos de engenharia reversa na pasta raiz contêm:
1. Framework completo de análise de carrosséis virais
2. Técnicas de copywriting e psicologia
3. Estrutura visual e design
4. Perguntas estratégicas para replicação

---

## 🛠️ Stack Tecnológica

- **Backend**: FastAPI, Python 3.14, Google Gemini AI, Pillow, BeautifulSoup4
- **Frontend**: Next.js 15, React, TypeScript, Tailwind CSS
- **IA**: Google Gemini 1.5 Pro
- **Design**: Glassmorphism, Gradientes, Micro-animações

---

## 📝 Licença

Projeto proprietário - Migração Digital © 2026
