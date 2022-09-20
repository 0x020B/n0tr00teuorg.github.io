#!/bin/sh
gpg --yes --recipient 8AB7E34964AF8C6E6F95FD97AF4B799C81488887 --encrypt-files content/**/*.md
git add .
git commit -m "$(date -R)"
git pull
git push -u origin main
