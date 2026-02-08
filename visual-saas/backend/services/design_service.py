from PIL import Image, ImageDraw, ImageFont
import io
import os

class DesignService:
    """
    Serviço para criar os slides visuais do carrossel baseado no conteúdo gerado.
    """
    
    def __init__(self):
        # Configurações padrão
        self.slide_width = 1080
        self.slide_height = 1080
        
    def create_slide(self, slide_data: dict, reference_image: bytes = None) -> bytes:
        """
        Cria um slide visual baseado nos dados fornecidos.
        
        Args:
            slide_data: Dicionário com informações do slide (text, colors, type, etc)
            reference_image: Imagem de referência do usuário (opcional)
            
        Returns:
            Bytes da imagem PNG gerada
        """
        
        # Extrai cores do slide_data ou usa padrão
        colors = slide_data.get('colors', {})
        bg_color = colors.get('bg', '#000000')
        text_color = colors.get('text', '#FFFFFF')
        accent_color = colors.get('accent', '#FF6B00')
        
        # Cria imagem base
        img = Image.new('RGB', (self.slide_width, self.slide_height), bg_color)
        draw = ImageDraw.Draw(img)
        
        # Tenta carregar fonte (fallback para fonte padrão se não encontrar)
        try:
            title_font = ImageFont.truetype("arial.ttf", 80)
            subtitle_font = ImageFont.truetype("arial.ttf", 50)
            body_font = ImageFont.truetype("arial.ttf", 40)
        except:
            title_font = ImageFont.load_default()
            subtitle_font = ImageFont.load_default()
            body_font = ImageFont.load_default()
        
        slide_type = slide_data.get('type', 'content')
        
        # Renderiza baseado no tipo de slide
        if slide_type == 'headline':
            self._render_headline_slide(draw, slide_data, title_font, subtitle_font, text_color, accent_color)
        elif slide_type == 'cta':
            self._render_cta_slide(draw, slide_data, title_font, subtitle_font, text_color, accent_color)
        else:
            self._render_content_slide(draw, slide_data, title_font, body_font, text_color, accent_color)
        
        # Adiciona número do slide no canto
        slide_number = slide_data.get('slide_number', 1)
        draw.text((self.slide_width - 80, self.slide_height - 80), 
                  f"{slide_number}", 
                  fill=text_color, 
                  font=body_font)
        
        # Converte para bytes
        img_bytes = io.BytesIO()
        img.save(img_bytes, format='PNG')
        img_bytes.seek(0)
        
        return img_bytes.getvalue()
    
    def _render_headline_slide(self, draw, slide_data, title_font, subtitle_font, text_color, accent_color):
        """Renderiza slide de headline (primeiro slide)"""
        text = slide_data.get('text', '')
        subtext = slide_data.get('subtext', '')
        
        # Título principal centralizado
        bbox = draw.textbbox((0, 0), text, font=title_font)
        text_width = bbox[2] - bbox[0]
        text_height = bbox[3] - bbox[1]
        
        x = (self.slide_width - text_width) // 2
        y = (self.slide_height - text_height) // 2 - 100
        
        # Adiciona retângulo de destaque
        padding = 40
        draw.rectangle(
            [x - padding, y - padding, x + text_width + padding, y + text_height + padding],
            fill=accent_color
        )
        
        draw.text((x, y), text, fill=text_color, font=title_font)
        
        # Subtexto
        if subtext:
            bbox_sub = draw.textbbox((0, 0), subtext, font=subtitle_font)
            sub_width = bbox_sub[2] - bbox_sub[0]
            x_sub = (self.slide_width - sub_width) // 2
            y_sub = y + text_height + 100
            draw.text((x_sub, y_sub), subtext, fill=text_color, font=subtitle_font)
    
    def _render_content_slide(self, draw, slide_data, title_font, body_font, text_color, accent_color):
        """Renderiza slide de conteúdo"""
        text = slide_data.get('text', '')
        description = slide_data.get('description', '')
        
        # Título
        y_offset = 200
        draw.text((100, y_offset), text, fill=accent_color, font=title_font)
        
        # Descrição
        y_offset += 150
        
        # Quebra de linha manual para descrição longa
        words = description.split(' ')
        lines = []
        current_line = []
        
        for word in words:
            current_line.append(word)
            test_line = ' '.join(current_line)
            bbox = draw.textbbox((0, 0), test_line, font=body_font)
            if bbox[2] - bbox[0] > self.slide_width - 200:
                current_line.pop()
                lines.append(' '.join(current_line))
                current_line = [word]
        
        if current_line:
            lines.append(' '.join(current_line))
        
        for line in lines:
            draw.text((100, y_offset), line, fill=text_color, font=body_font)
            y_offset += 60
        
        # Números destacados se houver
        highlight_numbers = slide_data.get('highlight_numbers', [])
        if highlight_numbers:
            y_offset += 100
            for number in highlight_numbers:
                draw.text((100, y_offset), number, fill=accent_color, font=title_font)
                y_offset += 100
    
    def _render_cta_slide(self, draw, slide_data, title_font, subtitle_font, text_color, accent_color):
        """Renderiza slide de CTA (último slide)"""
        text = slide_data.get('text', '')
        subtext = slide_data.get('subtext', '')
        
        # CTA centralizado e grande
        bbox = draw.textbbox((0, 0), text, font=title_font)
        text_width = bbox[2] - bbox[0]
        text_height = bbox[3] - bbox[1]
        
        x = (self.slide_width - text_width) // 2
        y = (self.slide_height - text_height) // 2 - 50
        
        draw.text((x, y), text, fill=text_color, font=title_font)
        
        # Subtexto (instruções)
        if subtext:
            bbox_sub = draw.textbbox((0, 0), subtext, font=subtitle_font)
            sub_width = bbox_sub[2] - bbox_sub[0]
            x_sub = (self.slide_width - sub_width) // 2
            y_sub = y + text_height + 80
            draw.text((x_sub, y_sub), subtext, fill=accent_color, font=subtitle_font)
