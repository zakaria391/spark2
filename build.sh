#! /usr/bin/sh

echo "Cleaning build directory"
rm -rf ./dist/*

echo "Copying static assets"
cp -r ./src/js ./dist/
cp -r ./src/img ./dist/

yarn vite build
