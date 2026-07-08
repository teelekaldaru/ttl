# Tamsalu Tantsulaager

Super simple website for Tamsalu Tantsulaager.

## Prerequisites

- [Node.js](https://nodejs.org/) v22 or later
- npm (comes with Node.js)

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ttl
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173` by default.

## Available Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start Vite dev server with hot reload    |
| `npm run build`   | Type-check and build for production      |
| `npm run preview` | Preview the production build locally     |

## Deployment

Deployment is automated via GitHub Actions. When changes are pushed to the `master` branch, the workflow in `.github/workflows/deploy.yml` will:

1. Check out the code
2. Install dependencies (`npm ci`)
3. Build the project (`npm run build`)
4. Deploy the `dist/` folder to Hostinger via FTP

The following repository secrets must be configured in GitHub for deployment to work:

- `FTP_SERVER` – Hostinger FTP server address
- `FTP_USERNAME` – FTP username
- `FTP_PASSWORD` – FTP password
