import google.generativeai as genai
import os
import json
from PIL import Image
import io

class GeminiService:
    def __init__(self):
        api_key = os.getenv("GOOGLE_API_KEY")
        if not api_key:
            raise ValueError("GOOGLE_API_KEY não configurada no ambiente")
        genai.configure(api_key=api_key)
        self.model = genai.GenerativeModel('gemini-1.5-flash')

    async def generate_carousel_content(self, images: list[bytes], brand_dna: dict = None):
        """
        Analisa as imagens e gera o conteúdo para um carrossel de 5-7 slides.
        
        Args:
            images: Lista de imagens em bytes
            brand_dna: Dicionário com DNA da marca (cores, fontes, tom de voz) - opcional
        """
        
        # Converte bytes para objetos PIL Image para o Gemini
        pil_images = [Image.open(io.BytesIO(img_bytes)) for img_bytes in images]

        # Constrói seção de Brand DNA se disponível
        brand_context = ""
        if brand_dna and "colors" in brand_dna:
            brand_context = f"""
        
        🎨 BRAND DNA DO CLIENTE (USE OBRIGATORIAMENTE):
        - Cores da marca: Primária {brand_dna['colors']['primary']}, Secundária {brand_dna['colors']['secondary']}, Accent {brand_dna['colors']['accent']}
        - Tipografia: {brand_dna.get('typography', {}).get('primary_font', 'Padrão')} ({brand_dna.get('typography', {}).get('style', 'modern')})
        - Tom de voz da marca: {brand_dna.get('tone_of_voice', {}).get('style', 'professional')}
        - Palavras-chave da marca: {', '.join(brand_dna.get('tone_of_voice', {}).get('keywords', [])[:5])}
        - Estética visual: {brand_dna.get('visual_style', {}).get('aesthetic', 'modern')}
        - Essência da marca: {brand_dna.get('brand_essence', 'Marca focada em resultados')}
        
        ⚠️ IMPORTANTE: Os slides DEVEM usar as cores da marca acima. Adapte o "TOM RODRIGO" para se alinhar com o tom de voz da marca do cliente.
        """

        prompt = f"""
        Você é um Especialista em Copywriting Viral para Instagram, com foco em NEUROMARKETING e CONVERSÃO.
        {brand_context}
        
        IDENTIDADE DE VOZ BASE (TOM RODRIGO - "Pé no Chão" - ADAPTE ao tom da marca acima se fornecido):
        - NUNCA use jargões corporativos. Substitua:
          • "ROI" → "dinheiro no bolso para a escola dos filhos"
          • "Otimização" → "fazer funcionar de verdade"
          • "Estratégia" → "plano que funciona"
          • "Implementação" → "colocar pra rodar"
        - Fale como se estivesse conversando com um amigo no bar, mas mantendo autoridade.
        - Use DIGNIDADE: conecte com a realidade do brasileiro (contas, família, sonhos).
        
        TÉCNICAS DE NEUROMARKETING OBRIGATÓRIAS:
        1. GATILHO DA FOFOCA: Se possível, estruture o slide 1 ou 2 como se fosse um print de WhatsApp/X/Threads.
        2. CONTRASTE COGNITIVO: Destaque números extremos (ex: "R$ 2.399,00 vs. R$ 0,00").
        3. LOOP DE RETENÇÃO: Fragmente frases entre slides. Ex: Slide 2 termina com "E o pior é que..." → Slide 3 completa.
        4. PROVA SOCIAL REALISTA: Use nomes comuns brasileiros (João, Maria, Seu Zé) em vez de "Cliente X".
        
        ESTRUTURA DO CARROSSEL (5-7 slides):
        Formato JSON estrito:
        {{
          "carousel": [
            {{
              "slide_number": 1,
              "type": "headline",
              "text": "Gancho MATADOR que gera curiosidade instantânea",
              "subtext": "Complemento que valida a dor",
              "visual_style": "lowfi_print" ou "clean_bold",
              "colors": {{"bg": "{brand_dna['colors']['primary'] if brand_dna else '#000000'}", "text": "#FFFFFF", "accent": "{brand_dna['colors']['accent'] if brand_dna else '#FF6B00'}"}}
            }},
            {{
              "slide_number": 2,
              "type": "content",
              "text": "Título do ponto de dor/desejo",
              "description": "Explicação CURTA e direta",
              "highlight_numbers": ["R$ 2.399", "80%"],
              "colors": {{"bg": "#FFFFFF", "text": "{brand_dna['colors']['primary'] if brand_dna else '#000000'}", "accent": "{brand_dna['colors']['accent'] if brand_dna else '#FF6B00'}"}}
            }},
            ...
            {{
              "slide_number": 7,
              "type": "cta",
              "text": "CTA direto e urgente",
              "subtext": "Comente 'QUERO' ou clique no link da bio",
              "colors": {{"bg": "{brand_dna['colors']['accent'] if brand_dna else '#FF6B00'}", "text": "#FFFFFF"}}
            }}
          ],
          "caption": "Legenda completa com storytelling + hashtags estratégicas (máx 5)."
        }}
        
        REGRAS FINAIS:
        - Cada slide deve ter NO MÁXIMO 15 palavras no texto principal.
        - A legenda deve contar uma história que COMPLEMENTA o carrossel, não repete.
        - Use emojis com moderação (máx 2 por slide).
        - SEMPRE inclua o campo "colors" em cada slide usando as cores da marca fornecidas.
        """

        response = self.model.generate_content([prompt] + pil_images)
        
        try:
            # Tenta extrair o JSON da resposta
            content_text = response.text
            # Limpeza básica em caso de markdown blocks
            if "```json" in content_text:
                content_text = content_text.split("```json")[1].split("```")[0].strip()
            
            return json.loads(content_text)
        except Exception as e:
            print(f"Erro ao processar resposta do Gemini: {e}")
            return {"error": "Falha ao gerar conteúdo", "raw_ref": response.text}
