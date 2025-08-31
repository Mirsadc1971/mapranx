@echo off
echo Auto-saving MapRanx project...
cd /d C:\saas\mapranx
git add -A
git commit -m "Auto-save: %date% %time%"
git push origin main
echo Auto-save complete!
pause