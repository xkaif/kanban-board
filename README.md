# kanban-board

A self-developed Kanban board for practicing OOP architecture, SCRUM methodology, and full-stack development. The project also serves as a training environment for my own sprints and is used as an internal Scrum board for other software projects.

## Tech Stack

- **Electron** - Desktop-App Framework
- **React** - UI Framework
- **TypeScript** - Type-Safe JavaScript
- **Vite** - Build Tool & Dev Server
- **LowDB** - Lokale JSON-Datenbank

## Projektstruktur

```
kanban-board/
├── electron/          # Electron main process (Node.js)
│   ├── main.ts        # Startet die Desktop-App
│   └── preload.ts     # Sichere Bridge zwischen Electron & Frontend
├── src/               # React-Anwendung (Renderer)
│   ├── components/
│   ├── pages/
│   ├── models/        # OOP Klassen: Board, Column, Card
│   ├── storage/       # Lokale Speicherung (LowDB)
│   ├── App.tsx
│   └── main.tsx
├── docs/              # Projekt-Dokumentation
└── README.md
```

## Installation

```bash
npm install
```

## Entwicklung

Starte die App im Entwicklungsmodus:

```bash
npm run electron:dev
```

Dies startet:
- Vite Dev Server auf http://localhost:5173
- Electron App mit Hot Reload

## Build

Erstelle eine produktionsreife Version:

```bash
npm run build
```

Die gebauten Dateien befinden sich im `release/` Ordner.

## Verfügbare Skripte

- `npm run dev` - Startet nur den Vite Dev Server
- `npm run electron:dev` - Startet Electron mit Vite Dev Server
- `npm run build` - Baut die komplette App für Production
- `npm run build:electron` - Baut nur den Electron Main Process
- `npm run build:react` - Baut nur die React App
- `npm start` - Startet die gebaute Electron App