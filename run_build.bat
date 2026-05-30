@echo off
rem ============================================================
rem  IATF Pro - Build y Deploy a Firebase
rem  Flujo: version-bump → build → firebase deploy
rem ============================================================

rem Localizar Node.js
set "FOUND_NODE=0"
if exist "%ProgramFiles%\nodejs\node.exe"        set "NODE_PATH=%ProgramFiles%\nodejs"        & set "FOUND_NODE=1"
if "%FOUND_NODE%"=="0" if exist "%ProgramFiles(x86)%\nodejs\node.exe" set "NODE_PATH=%ProgramFiles(x86)%\nodejs" & set "FOUND_NODE=1"
if "%FOUND_NODE%"=="0" if exist "%LocalAppData%\Programs\nodejs\node.exe" set "NODE_PATH=%LocalAppData%\Programs\nodejs" & set "FOUND_NODE=1"

if "%FOUND_NODE%"=="0" (
  echo [ERROR] Node.js no encontrado. Instálalo o añade su ruta al PATH.
  pause
  exit /b 1
)
set "PATH=%PATH%;%NODE_PATH%"

node -v >nul 2>&1
if errorlevel 1 (
  echo [ERROR] Node.js no está disponible.
  pause
  exit /b 1
)

echo.
echo ==== [1/3] Actualizando versión ====
node scripts\version-bump.js
if errorlevel 1 (
  echo [ERROR] Falló el bump de versión.
  pause
  exit /b 1
)

echo.
echo ==== [2/3] Compilando y ofuscando ====
node build.js
if errorlevel 1 (
  echo [ERROR] Falló el build.
  pause
  exit /b 1
)

echo.
echo ==== [3/3] Desplegando a Firebase Hosting ====
where firebase >nul 2>&1
if errorlevel 1 (
  echo [AVISO] firebase-tools no encontrado en PATH.
  echo         Instálalo con:  npm install -g firebase-tools
  echo         Luego ejecuta:  firebase login
  pause
  exit /b 1
)

firebase deploy --only hosting --project iatf-pro-by-solugan-sg
if errorlevel 1 (
  echo [ERROR] Falló el deploy a Firebase.
  pause
  exit /b 1
)

echo.
echo ============================================================
echo  Deploy completado exitosamente.
echo ============================================================
echo.
pause
