# Quickflows.AI: Healthcare Credentialing Competitive Intelligence

Single-page briefing comparing ProviderTrust, symplr and Medallion. React, TypeScript, Vite, Tailwind CSS, Radix UI primitives (accordion, tooltip, dropdown menu) and Phosphor Icons (regular weight only).

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Build

```bash
npm run build     # typecheck + production build into dist/
npm run preview   # serve the built version
```

## Print / PDF

Use the **Print / PDF** button (or Ctrl+P), choose "Save as PDF". The layout is set to A4 landscape and prints as about eleven pages, one topic per page. Collapsed company details and sources expand automatically for print. Turn on "Background graphics" in the print dialog so the card tints and diagrams print in colour.

## Editing content

All report content lives in `src/data/research.ts`. Each statement carries an evidence label (`public`, `company-reported`, `case-study`, `interpretation`, `recommendation`, `unverified`) that drives the labels shown in the UI. Diagram placements and groupings in that file are qualitative and directional, not scores. Full research notes are in `research/`.
