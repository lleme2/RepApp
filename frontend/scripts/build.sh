#!/bin/bash

# Build the frontend
npx electron-forge import
npx electron-forge make

cp -r /app/out/ /host/

echo "Build complete."