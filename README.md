# Quantix Desk

This is my summative lab project — a React SPA e-commerce admin portal. It uses Vite, React Router, and a json-server backend.

## How to Start

You need **two terminals** running at the same time.

### Terminal 1 — Backend (JSON Server)
```bash
npm install
npm run server
```
This starts the API at `http://localhost:5000`

### Terminal 2 — Frontend (Vite)
```bash
npm run dev
```
Then open the URL it gives you (usually `http://localhost:5173`)

### Running Tests
```bash
npm test
```

## What This App Does

- **Home** (`/`): Landing page with welcome message
- **Products** (`/products`): View all products with live search filter and delete
- **Add Product** (`/add`): Form to add new products to inventory
- **Product Detail** (`/products/:id`): View full details, update price (PATCH), or delete (DELETE)
- **404**: Catch-all for bad routes

## Tech Stack

- React 18 + Vite
- React Router v6
- Custom hook (`useProducts`) for all data fetching
- Vitest + React Testing Library for tests
- json-server as fake backend
