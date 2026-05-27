@echo off
setlocal enabledelayedexpansion

echo ==== Iniciando IatfPro ====

REM Revisar si hay cambios pendientes
set "CHANGES="
for /f "delims=" %%i in ('git status --porcelain') do set "CHANGES=%%i"

if "!CHANGES!"=="" (
    echo.
    echo [OK] No se detectaron actualizaciones en el codigo.
    echo Abriendo la aplicacion localmente...
) else (
    echo.
    echo [ALERTA] Se detectaron modificaciones en el codigo.
    echo 1. Actualizando version de la aplicacion de forma autonoma...
    call npm run bump-version
    
    echo.
    echo 2. Subiendo nueva version a GitHub y Vercel...
    git add .
    git commit -m "Actualizacion autonoma de version y cambios"
    git push
    
    echo.
    echo [EXITO] Los cambios han sido enviados. Vercel actualizara la app en linea.
    echo Abriendo la aplicacion localmente...
)

echo.
npm run dev
