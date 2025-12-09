@echo off
echo ===================================
echo   DEPLOYMENT FIX SCRIPT 2
echo ===================================
echo.
echo 1. Adding updated app.js (Edit Customer Fix)...
git add app.js

echo.
echo 2. Committing changes...
git commit -m "Fix Edit Customer button functionality"

echo.
echo 3. Pushing to GitHub...
git push origin main

echo.
echo ===================================
echo   DONE!
echo ===================================
echo.
echo Now wait 2 minutes and refresh your site.
echo You will be able to click Edit and update ID proofs!
echo.
pause
