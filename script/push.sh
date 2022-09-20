#!/usr/bin/zsh
git add .
git commit -m "$(date -R)"
git pull
git push -u origin main
