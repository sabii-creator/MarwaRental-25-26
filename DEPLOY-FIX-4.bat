@echo off
echo ===================================
echo   DEPLOYMENT SCRIPT 4 (Sync & Navigation)
echo ===================================
echo.
echo 1. Adding new files...
git add index.html app.js cloud-sync.js building-dashboard.js

echo.
echo 2. Committing changes...
git commit -m "Add Cloud Sync and Building Dashboards"

echo.
echo 3. Pushing to GitHub...
git push origin main

echo.
echo ===================================
echo   DONE!
echo ===================================
echo.
echo INSTRUCTIONS:
echo 1. Wait for Vercel to deploy.
echo 2. Open your website.
echo 3. To turn on Sync, click "Sync" in the top menu and paste your Firebase Config.
echo.
pause
