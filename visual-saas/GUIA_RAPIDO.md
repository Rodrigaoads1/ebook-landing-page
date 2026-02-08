# ⚡ GUIA RÁPIDO - Visual SaaS AI

## 🎯 O que você tem agora?

Um **SaaS completo** inspirado no **Pomelli Google** que:

1. 🧬 **Extrai o DNA da marca** de qualquer site automaticamente
2. 🎨 **Gera carrosséis virais** para Instagram com IA
3. 🧠 **Aplica neuromarketing** (4 gatilhos psicológicos)
4. 🎭 **Personaliza** com as cores e tom de voz da marca do cliente

---

## 🚀 Como Começar (3 passos)

### 1️⃣ Configure a API Key do Google Gemini

```bash
# Entre na pasta backend
cd visual-saas\backend

# Copie o arquivo de exemplo
copy .env.example .env

# Edite o .env e adicione sua chave:
# GOOGLE_API_KEY=sua_chave_aqui
```

**Onde conseguir a chave?** https://aistudio.google.com/app/apikey

---

### 2️⃣ Rode o Script de Inicialização

```powershell
cd visual-saas
.\start.ps1
```

Isso vai:
- ✅ Verificar dependências
- ✅ Instalar o que estiver faltando
- ✅ Iniciar backend (porta 8000)
- ✅ Iniciar frontend (porta 3000)

---

### 3️⃣ Acesse no Navegador

Abra: **http://localhost:3000**

---

## 🎮 Como Usar

### Fluxo Completo:

1. **Cole a URL** de um site (ex: https://apple.com)
2. **Veja o DNA extraído** (cores, fontes, tom de voz)
3. **Faça upload** de imagens de referência
4. **Receba** o carrossel viral pronto!

### Fluxo Rápido (sem Brand DNA):

1. Clique em **"Pular (gerar sem Brand DNA)"**
2. **Faça upload** de imagens
3. **Receba** o carrossel com o "Tom Rodrigo" padrão

---

## 📁 Estrutura do Projeto

```
visual-saas/
├── backend/
│   ├── services/
│   │   ├── brand_dna_service.py    # 🧬 Extração de DNA (Pomelli-style)
│   │   ├── gemini_service.py       # 🤖 Geração de conteúdo com IA
│   │   └── design_service.py       # 🎨 Renderização visual dos slides
│   ├── main.py                     # 🚀 API FastAPI
│   ├── requirements.txt            # 📦 Dependências Python
│   └── .env                        # 🔑 Configurações (API key)
│
├── frontend/
│   ├── src/app/
│   │   └── page.tsx                # 💎 Interface premium (4 etapas)
│   └── package.json                # 📦 Dependências Node
│
├── start.ps1                       # ⚡ Script de inicialização
├── README.md                       # 📖 Documentação completa
└── IMPLEMENTACAO_V2.md             # 📝 Detalhes da implementação
```

---

## 🔧 Troubleshooting

### ❌ "GOOGLE_API_KEY não configurada"
**Solução:** Edite `backend\.env` e adicione sua chave do Gemini

### ❌ "Erro de conexão com o servidor"
**Solução:** Verifique se o backend está rodando em http://localhost:8000

### ❌ "pip não é reconhecido"
**Solução:** Use `python -m pip` no lugar de `pip`

### ❌ "npm não é reconhecido"
**Solução:** Instale Node.js: https://nodejs.org/

---

## 🎨 Exemplos de Sites para Testar

Teste o Brand DNA Extractor com:

- ✅ https://apple.com (minimal, premium)
- ✅ https://stripe.com (modern, tech)
- ✅ https://airbnb.com (friendly, colorful)
- ✅ https://tesla.com (bold, futuristic)
- ✅ Seu próprio site!

---

## 📊 Endpoints da API

### `GET /`
Verifica se a API está rodando

### `POST /extract-brand-dna`
Extrai DNA da marca de um site

**Body:**
```json
{
  "website_url": "https://exemplo.com"
}
```

### `POST /generate-carousel`
Gera carrossel viral com IA

**Body (multipart/form-data):**
- `files`: Imagens (File[])
- `brand_dna_json`: DNA da marca (opcional, string JSON)

---

## 💡 Dicas Pro

### 1. Use sites com identidade visual forte
Quanto mais definida a identidade do site, melhor o DNA extraído.

### 2. Envie 3-5 imagens de referência
Isso dá mais contexto para a IA gerar conteúdo relevante.

### 3. Teste diferentes tons de voz
Compare carrosséis com e sem Brand DNA para ver a diferença.

### 4. Salve os carrosséis gerados
Clique com botão direito nas imagens e "Salvar como..."

---

## 🔮 Próximos Passos

Depois de testar, você pode:

1. **Adicionar mais templates** de design
2. **Integrar com Instagram API** para publicação automática
3. **Criar sistema de usuários** e histórico
4. **Adicionar geração de vídeos** (Veo 3.1)
5. **Monetizar** com planos e pagamentos

---

## 📞 Suporte

Problemas? Verifique:
1. ✅ Backend rodando em http://localhost:8000
2. ✅ Frontend rodando em http://localhost:3000
3. ✅ GOOGLE_API_KEY configurada no .env
4. ✅ Dependências instaladas (requirements.txt e package.json)

---

## 🎉 Pronto!

Agora você tem um **SaaS de carrosséis virais com IA** completo e funcional!

**Desenvolvido por:** Migração Digital  
**Versão:** 2.0 (Pomelli-inspired)  
**Data:** 08/02/2026
