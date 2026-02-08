# 🚀 Script de Inicialização Rápida - Visual SaaS AI

Write-Host "🎨 Visual SaaS AI - Iniciando..." -ForegroundColor Cyan
Write-Host ""

# Verifica se o .env existe
if (-not (Test-Path "backend\.env")) {
    Write-Host "⚠️  Arquivo .env não encontrado!" -ForegroundColor Yellow
    Write-Host "📝 Criando .env a partir do .env.example..." -ForegroundColor Yellow
    Copy-Item "backend\.env.example" "backend\.env"
    Write-Host ""
    Write-Host "🔑 IMPORTANTE: Edite o arquivo backend\.env e adicione sua GOOGLE_API_KEY" -ForegroundColor Red
    Write-Host "   Obtenha sua chave em: https://aistudio.google.com/app/apikey" -ForegroundColor Yellow
    Write-Host ""
    Read-Host "Pressione ENTER após configurar a API key"
}

Write-Host "🔧 Verificando dependências do backend..." -ForegroundColor Cyan
Set-Location backend

# Verifica se as dependências estão instaladas
$pipList = python -m pip list
if ($pipList -notmatch "fastapi") {
    Write-Host "📦 Instalando dependências do backend..." -ForegroundColor Yellow
    python -m pip install -r requirements.txt
} else {
    Write-Host "✅ Dependências do backend já instaladas" -ForegroundColor Green
}

Write-Host ""
Write-Host "🚀 Iniciando backend na porta 8000..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD'; python main.py"

Set-Location ..
Write-Host ""
Write-Host "🎨 Verificando frontend..." -ForegroundColor Cyan
Set-Location frontend

# Verifica se node_modules existe
if (-not (Test-Path "node_modules")) {
    Write-Host "📦 Instalando dependências do frontend..." -ForegroundColor Yellow
    npm install
} else {
    Write-Host "✅ Dependências do frontend já instaladas" -ForegroundColor Green
}

Write-Host ""
Write-Host "🚀 Iniciando frontend na porta 3000..." -ForegroundColor Cyan
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD'; npm run dev"

Set-Location ..

Write-Host ""
Write-Host "✨ Visual SaaS AI está rodando!" -ForegroundColor Green
Write-Host ""
Write-Host "📍 Backend:  http://localhost:8000" -ForegroundColor Cyan
Write-Host "📍 Frontend: http://localhost:3000" -ForegroundColor Cyan
Write-Host ""
Write-Host "🎯 Acesse http://localhost:3000 no seu navegador!" -ForegroundColor Yellow
Write-Host ""
