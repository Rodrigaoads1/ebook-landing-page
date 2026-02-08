import google.generativeai as genai
import os
import json
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import re
from collections import Counter

class BrandDNAService:
    """
    Serviço inspirado no Pomelli Google que extrai o 'DNA da Marca' de um site.
    Analisa cores, tipografia, tom de voz e estilo visual.
    """
    
    def __init__(self):
        api_key = os.getenv("GOOGLE_API_KEY")
        if not api_key:
            raise ValueError("GOOGLE_API_KEY não configurada no ambiente")
        genai.configure(api_key=api_key)
        self.model = genai.GenerativeModel('gemini-1.5-flash')
    
    async def extract_brand_dna(self, website_url: str) -> dict:
        """
        Extrai o DNA completo da marca a partir de uma URL.
        
        Returns:
            {
                "colors": {
                    "primary": "#HEX",
                    "secondary": "#HEX",
                    "accent": "#HEX",
                    "palette": ["#HEX1", "#HEX2", ...]
                },
                "typography": {
                    "primary_font": "Font Name",
                    "secondary_font": "Font Name",
                    "style": "modern|classic|bold|minimal"
                },
                "tone_of_voice": {
                    "style": "professional|casual|friendly|authoritative",
                    "keywords": ["palavra1", "palavra2"],
                    "sample_phrases": ["frase exemplo 1", "frase exemplo 2"]
                },
                "visual_style": {
                    "aesthetic": "minimal|luxury|bold|playful|corporate",
                    "design_elements": ["gradients", "shadows", "illustrations"],
                    "image_style": "photography|illustrations|mixed"
                },
                "brand_essence": "Descrição em uma frase do posicionamento da marca"
            }
        """
        
        try:
            # 1. Scrape do site
            html_content, css_content = await self._scrape_website(website_url)
            
            # 2. Extração de cores do CSS
            colors = self._extract_colors(css_content, html_content)
            
            # 3. Extração de fontes
            typography = self._extract_typography(css_content, html_content)
            
            # 4. Análise de conteúdo textual com Gemini
            text_content = self._extract_text_content(html_content)
            tone_analysis = await self._analyze_tone_with_gemini(text_content)
            
            # 5. Análise visual com Gemini (screenshot simulado via descrição HTML)
            visual_analysis = await self._analyze_visual_style(html_content, css_content)
            
            brand_dna = {
                "colors": colors,
                "typography": typography,
                "tone_of_voice": tone_analysis,
                "visual_style": visual_analysis,
                "brand_essence": await self._generate_brand_essence(
                    colors, typography, tone_analysis, visual_analysis
                )
            }
            
            return brand_dna
            
        except Exception as e:
            print(f"Erro ao extrair Brand DNA: {e}")
            return {"error": str(e)}
    
    async def _scrape_website(self, url: str) -> tuple[str, str]:
        """Faz scraping do HTML e CSS do site."""
        try:
            headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            }
            response = requests.get(url, headers=headers, timeout=10)
            response.raise_for_status()
            
            html = response.text
            soup = BeautifulSoup(html, 'html.parser')
            
            # Extrai CSS inline e de <style> tags
            css_content = ""
            for style_tag in soup.find_all('style'):
                css_content += style_tag.string or ""
            
            # Tenta pegar CSS externo (primeiro arquivo apenas)
            for link in soup.find_all('link', rel='stylesheet'):
                css_url = urljoin(url, link.get('href', ''))
                try:
                    css_response = requests.get(css_url, headers=headers, timeout=5)
                    css_content += css_response.text
                    break  # Pega apenas o primeiro para não sobrecarregar
                except:
                    continue
            
            return html, css_content
            
        except Exception as e:
            raise Exception(f"Falha ao acessar o site: {e}")
    
    def _extract_colors(self, css: str, html: str) -> dict:
        """Extrai paleta de cores do CSS e HTML."""
        # Regex para encontrar cores HEX, RGB, HSL
        hex_colors = re.findall(r'#(?:[0-9a-fA-F]{3}){1,2}\b', css + html)
        rgb_colors = re.findall(r'rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)', css)
        
        # Converte RGB para HEX e normaliza
        all_colors = []
        for hex_color in hex_colors:
            all_colors.append(hex_color.upper())
        
        # Conta frequência
        color_freq = Counter(all_colors)
        most_common = [color for color, _ in color_freq.most_common(10)]
        
        # Remove cores muito comuns (branco, preto)
        filtered_colors = [
            c for c in most_common 
            if c not in ['#FFFFFF', '#FFF', '#000000', '#000']
        ]
        
        return {
            "primary": filtered_colors[0] if filtered_colors else "#000000",
            "secondary": filtered_colors[1] if len(filtered_colors) > 1 else "#666666",
            "accent": filtered_colors[2] if len(filtered_colors) > 2 else "#0066CC",
            "palette": filtered_colors[:6]
        }
    
    def _extract_typography(self, css: str, html: str) -> dict:
        """Extrai informações de tipografia."""
        # Procura por font-family declarations
        font_families = re.findall(r'font-family:\s*([^;]+);', css, re.IGNORECASE)
        
        fonts = []
        for family in font_families:
            # Limpa e pega o primeiro font
            clean_font = family.split(',')[0].strip().strip('"').strip("'")
            if clean_font and clean_font not in ['serif', 'sans-serif', 'monospace']:
                fonts.append(clean_font)
        
        font_freq = Counter(fonts)
        top_fonts = [font for font, _ in font_freq.most_common(3)]
        
        # Detecta estilo baseado em font-weight
        bold_count = len(re.findall(r'font-weight:\s*(bold|[6-9]00)', css, re.IGNORECASE))
        style = "bold" if bold_count > 5 else "modern"
        
        return {
            "primary_font": top_fonts[0] if top_fonts else "Arial",
            "secondary_font": top_fonts[1] if len(top_fonts) > 1 else "Georgia",
            "style": style
        }
    
    def _extract_text_content(self, html: str) -> str:
        """Extrai texto limpo do HTML para análise."""
        soup = BeautifulSoup(html, 'html.parser')
        
        # Remove scripts e styles
        for script in soup(["script", "style"]):
            script.decompose()
        
        # Pega textos de headings e paragraphs
        text_elements = []
        for tag in soup.find_all(['h1', 'h2', 'h3', 'p']):
            text = tag.get_text(strip=True)
            if text:
                text_elements.append(text)
        
        return " ".join(text_elements[:50])  # Limita para não sobrecarregar
    
    async def _analyze_tone_with_gemini(self, text_content: str) -> dict:
        """Usa Gemini para analisar o tom de voz do conteúdo."""
        prompt = f"""
        Analise o seguinte texto de um site e identifique o TOM DE VOZ da marca.
        
        Texto:
        {text_content}
        
        Retorne APENAS um JSON no formato:
        {{
            "style": "professional" ou "casual" ou "friendly" ou "authoritative" ou "playful",
            "keywords": ["palavra-chave1", "palavra-chave2", "palavra-chave3"],
            "sample_phrases": ["frase exemplo 1", "frase exemplo 2"]
        }}
        """
        
        try:
            response = self.model.generate_content(prompt)
            content = response.text
            
            if "```json" in content:
                content = content.split("```json")[1].split("```")[0].strip()
            
            return json.loads(content)
        except:
            return {
                "style": "professional",
                "keywords": ["qualidade", "resultado", "sucesso"],
                "sample_phrases": ["Transforme seu negócio", "Resultados comprovados"]
            }
    
    async def _analyze_visual_style(self, html: str, css: str) -> dict:
        """Analisa o estilo visual baseado em HTML/CSS."""
        prompt = f"""
        Analise o seguinte CSS e estrutura HTML de um site e identifique o ESTILO VISUAL.
        
        CSS (primeiras 1000 chars):
        {css[:1000]}
        
        Retorne APENAS um JSON no formato:
        {{
            "aesthetic": "minimal" ou "luxury" ou "bold" ou "playful" ou "corporate",
            "design_elements": ["gradients", "shadows", "borders", "animations"],
            "image_style": "photography" ou "illustrations" ou "mixed"
        }}
        """
        
        try:
            response = self.model.generate_content(prompt)
            content = response.text
            
            if "```json" in content:
                content = content.split("```json")[1].split("```")[0].strip()
            
            return json.loads(content)
        except:
            return {
                "aesthetic": "modern",
                "design_elements": ["clean", "minimal"],
                "image_style": "photography"
            }
    
    async def _generate_brand_essence(self, colors, typography, tone, visual) -> str:
        """Gera uma descrição de uma frase do posicionamento da marca."""
        prompt = f"""
        Com base nos seguintes dados de uma marca, crie UMA FRASE que capture a essência do posicionamento:
        
        - Cores principais: {colors['primary']}, {colors['secondary']}
        - Tipografia: {typography['primary_font']} ({typography['style']})
        - Tom de voz: {tone['style']}
        - Estética visual: {visual['aesthetic']}
        
        Retorne APENAS a frase, sem aspas ou formatação extra.
        """
        
        try:
            response = self.model.generate_content(prompt)
            return response.text.strip().strip('"').strip("'")
        except:
            return "Marca moderna focada em resultados e inovação."
