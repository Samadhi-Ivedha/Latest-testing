# PlatformNEX Cloud Build Test App

Minimal Node.js app + Dockerfile to test PlatformNEX "Cloud Build setup" flow.

## What this repo contains
- `server.js`: Tiny HTTP server that listens on **port 8080**.
- `package.json`: `start` script for Node.
- `Dockerfile`: Builds a container exposing **8080** (fits Cloud Run defaults).
- `.dockerignore` & `.gitignore`: keep images small and repos clean.
- `cloudbuild.yaml` *(optional)*: Only if you want to trigger Cloud Build **without** PlatformNEX generating it.

> If you are testing **PlatformNEX's Cloud Build setup generator**, you can **delete `cloudbuild.yaml`** before pushing.

## Local quick run
```bash
npm install
npm start
curl -s http://localhost:8080
```

## Build & run the container locally (optional)
```bash
docker build -t platformnex-cloudbuild-test .
docker run -p 8080:8080 platformnex-cloudbuild-test
```