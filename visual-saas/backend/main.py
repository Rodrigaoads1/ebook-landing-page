from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import uvicorn
import os
import io
import base64
import json
from dotenv import load_dotenv

from services.gemini_service import GeminiService
from services.design_service import DesignService
from services.brand_dna_service import BrandDNAService

load_dotenv()

app = FastAPI(title="Visual SaaS API - Migração Digital")

# Inicializa serviços
gemini = GeminiService()
design = DesignService()
brand_dna_service = BrandDNAService()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Visual SaaS API is running!"}

@app.post("/extract-brand-dna")
async def extract_brand_dna(request: dict):
    """
    Endpoint estilo Pomelli: extrai o DNA da marca de um site.
    
    Body: {"website_url": "https://exemplo.com"}
    """
    website_url = request.get("website_url")
    if not website_url:
        raise HTTPException(status_code=400, detail="website_url é obrigatório")
    
    try:
        dna = await brand_dna_service.extract_brand_dna(website_url)
        
        if "error" in dna:
            return JSONResponse(status_code=500, content=dna)
        
        return {
            "status": "success",
            "brand_dna": dna
        }
    except Exception as e:
        print(f"Erro ao extrair Brand DNA: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/generate-carousel")
async def generate_carousel(
    files: list[UploadFile] = File(...),
    brand_dna_json: str = None  # JSON string opcional com o Brand DNA
):
    if not files:
        raise HTTPException(status_code=400, detail="Nenhum arquivo enviado")
    
    try:
        # Lê os bytes das imagens
        image_bytes_list = []
        for file in files:
            content = await file.read()
            image_bytes_list.append(content)
        
        # Parse do Brand DNA se fornecido
        brand_dna = None
        if brand_dna_json:
            try:
                brand_dna = json.loads(brand_dna_json)
            except:
                print("Erro ao parsear brand_dna_json, continuando sem DNA")
        
        # 1. Gera o conteúdo via Gemini (com ou sem Brand DNA)
        generated_data = await gemini.generate_carousel_content(image_bytes_list, brand_dna)
        
        if "error" in generated_data:
            return JSONResponse(status_code=500, content=generated_data)

        # 2. Gera as imagens baseadas no conteúdo
        slides_base64 = []
        user_img_for_design = image_bytes_list[0] if image_bytes_list else None
        
        for slide_data in generated_data.get("carousel", []):
            slide_img_bytes = design.create_slide(slide_data, user_img_for_design)
            # Converte para base64 para facilitar o envio ao frontend
            b64_img = base64.b64encode(slide_img_bytes).decode('utf-8')
            slides_base64.append({
                "slide_number": slide_data.get("slide_number"),
                "image_b64": b64_img
            })

        return {
            "status": "success",
            "caption": generated_data.get("caption"),
            "slides": slides_base64
        }
    except Exception as e:
        print(f"Erro no processamento: {e}")
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
