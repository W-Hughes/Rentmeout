#!/usr/bin/env sh

# Abort on errors
set -e

# Build the project
npm run build

# Navigate into the build output directory
cd dist

# Copy index.html to 404.html to handle SPA routing
cp index.html 404.html

# Initialize a new git repo in the dist folder
git init
git add -A
git commit -m 'Deploy to GitHub Pages'

# Push to the gh-pages branch of your repository
git push -f git@github.com:<your-username>/rentmeout.git main:gh-pages

cd -
