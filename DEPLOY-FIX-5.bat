@echo off
echo ===================================
echo   DEPLOYMENT SCRIPT 5 (Auto-Config)
echo ===================================
echo.
echo 1. Adding updated cloud-sync.js...
git add cloud-sync.js

echo.
echo 2. Committing changes...
git commit -m "Auto-configure Firebase Cloud Sync"

echo.
echo 3. Pushing to GitHub...
git push origin main

echo.
echo ===================================
echo   DONE!
echo ===================================
echo.
echo INSTRUCTIONS:
echo 1. Wait 2 minutes for Vercel.
echo 2. Open any device.
echo 3. It will now sync AUTOMATICALLY without asking for keys!
echo.
pause
