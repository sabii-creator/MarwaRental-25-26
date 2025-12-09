@echo off
echo ===================================
echo   DEPLOYMENT PREPARATION SCRIPT
echo ===================================
echo.
echo 1. Adding all new files (including id-proofs.js)...
git add .

echo.
echo 2. Committing changes...
git commit -m "Fix ID proof upload, add status feedback, ensure id-proofs.js is tracked"

echo.
echo 3. Pushing to GitHub...
git push origin main

echo.
echo ===================================
echo   DONE!
echo ===================================
echo.
echo Now check Vercel dashboard. It should auto-deploy.
echo IMPORTANT: If you see "Everything up-to-date" but Vercel is broken,
echo try force pushing or verify id-proofs.js is in your GitHub repo.
echo.
pause
