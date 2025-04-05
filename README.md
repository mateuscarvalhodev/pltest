# React + TypeScript + Vite

This project is a technical test for the Full Stack Developer role at Lumi. It provides a complete dashboard application to extract, organize, and display energy bill data. The project includes features for:


- Extracting and processing data from energy bill PDFs.
- Persisting data in a PostgreSQL database.
- Exposing a REST API to serve statistics and energy bill data.
- Extracting and processing data from energy bill PDFs.
- A front-end dashboard built with React that displays statistics via charts and summary cards.

## Features

- Display overall energy consumption, compensated energy, total amount without DG, and DG savings
- Visualize energy and financial results with interactive bar charts.
- View energy bills with options to view or download PDFs.
- Upload energy bill PDFs to the backend.
- Open PDFs directly in a new browser tab without forcing a download.
- Handle paginated data from the backend.

## Technologies

- React with Vite
- TypeScript
- Yarn
- Tailwind CSS
- Lucide React Icons
- Recharts (for charts)
- @tanstack/react-table (for data tables)

## Installation and usage
```bash
git clone git@github.com:mateuscarvalhodev/pltest.git
yarn
yarn dev
```
