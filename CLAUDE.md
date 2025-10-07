# CLAUDE.md - Entwicklungsrichtlinien für das Dorfarchiv-Projekt

## Über dieses Projekt

Das Dorfarchiv ist eine Docusaurus-basierte Dokumentationswebsite für die Dorfpflege Rossing. Es dient zur Verwaltung und Präsentation von Dorf-relevanten Dokumenten, Informationen und Archiven.

## Technologie-Stack

- **Framework**: Docusaurus 3.8.1
- **Sprache**: TypeScript 5.6
- **Runtime**: Node.js 22.0+
- **Paketmanager**: npm
- **Backend**: PocketBase 0.26.2
- **UI-Framework**: React 19.0
- **Linting**: Biome

## Projektstruktur

```
dorfarchiv/
├── docs/                    # Dokumentationsinhalte (Markdown)
├── blog/                    # Blog-Beiträge
├── src/                     # React-Komponenten und Seiten
├── static/                  # Statische Assets (Bilder, Dateien)
├── .devcontainer/          # Development Container Konfiguration
├── .github/                # GitHub Actions und Workflows
├── docusaurus.config.ts    # Docusaurus-Hauptkonfiguration
├── sidebars.ts             # Sidebar-Navigation
├── package.json            # Projekt-Abhängigkeiten
├── biome.json              # Biome-Linter-Konfiguration
└── tsconfig.json           # TypeScript-Konfiguration
```

## Entwicklungs-Workflow

### Installation

```bash
npm install
```

### Entwicklungsserver starten

```bash
npm start
```

Der Entwicklungsserver läuft standardmäßig unter `http://localhost:3000`.

### Build erstellen

```bash
npm run build
```

Der Build-Prozess:
1. Kopiert PocketBase UMD-Datei nach `static/public/`
2. Erstellt eine produktionsreife statische Website im `build/`-Verzeichnis

### Weitere nützliche Befehle

```bash
npm run serve          # Produktions-Build lokal testen
npm run clear          # Cache und generierte Dateien löschen
npm run typecheck      # TypeScript-Typenprüfung durchführen
```

## Coding-Standards

### Sprache

- **Code und Kommentare**: Englisch
- **Dokumentationsinhalte**: Deutsch (Standard für das Dorfarchiv)
- **Commit-Messages**: Deutsch (mit englischen GitHub-Keywords wie `fix`, `feat`, etc.)
- **Pull Request Titel/Beschreibungen**: Deutsch

### Code-Stil

- Das Projekt verwendet **Biome** für Linting und Formatierung
- TypeScript-strict-Mode ist aktiviert
- Folgen Sie den React-Best-Practices für Komponenten

### Commit-Konventionen

Verwenden Sie konventionelle Commit-Messages mit deutschen Beschreibungen:

- `feat: [Beschreibung]` - Neue Features
- `fix: [Beschreibung]` - Fehlerbehebungen
- `docs: [Beschreibung]` - Dokumentationsänderungen
- `style: [Beschreibung]` - Code-Formatierung (keine funktionalen Änderungen)
- `refactor: [Beschreibung]` - Code-Refactoring
- `test: [Beschreibung]` - Tests hinzufügen oder ändern
- `chore: [Beschreibung]` - Wartungsaufgaben

Beispiele:
```
feat: Navigation für Archiv-Kategorien hinzugefügt
fix: Darstellungsfehler in der mobilen Ansicht behoben
docs: Anleitung für neue Mitglieder erweitert
```

## Dokumentation schreiben

### Markdown-Dateien

- Alle Dokumentationsdateien liegen in `docs/`
- Verwenden Sie Frontmatter für Metadaten:

```markdown
---
id: eindeutige-id
title: Seitentitel
sidebar_label: Label in der Sidebar
---

# Überschrift

Inhalt hier...
```

### Bilder und Assets

- Statische Assets in `static/img/` ablegen
- Referenzierung in Markdown: `/img/dateiname.png`

### Interne Links

```markdown
[Link-Text](./andere-seite.md)
[Link zu Section](./seite.md#section-id)
```

## Docker-Unterstützung

Das Projekt kann mit Docker betrieben werden:

```bash
docker compose up --build
```

Die Konfiguration befindet sich in:
- `Dockerfile` - Container-Definition
- `docker-compose.yaml` - Multi-Container-Setup
- `.devcontainer/` - VS Code Dev Container

## PocketBase Integration

Das Projekt nutzt PocketBase für Backend-Funktionalität:

- PocketBase UMD-Datei wird beim Build automatisch kopiert
- Konfiguration für Authentifizierung und Datenverwaltung

## Testing und Qualitätssicherung

### Vor dem Commit

1. TypeScript-Prüfung durchführen: `npm run typecheck`
2. Build testen: `npm run build`
3. Entwicklungsserver testen: `npm start`

### Pull Requests

- Beschreiben Sie Änderungen auf Deutsch
- Referenzieren Sie relevante Issues mit `closes #<issue-nummer>` oder `fixes #<issue-nummer>`
- Stellen Sie sicher, dass der Build erfolgreich ist
- Fügen Sie Screenshots hinzu bei UI-Änderungen

## Häufige Aufgaben

### Neue Dokumentationsseite hinzufügen

1. Markdown-Datei in `docs/` erstellen
2. Frontmatter hinzufügen
3. Bei Bedarf `sidebars.ts` aktualisieren

### Blog-Post erstellen

1. Datei in `blog/` erstellen mit Format: `YYYY-MM-DD-titel.md`
2. Frontmatter mit `author`, `title`, `tags` hinzufügen

### Styling anpassen

- CSS-Variablen in `src/css/custom.css` bearbeiten
- Komponenten-Styles in jeweiligen `.module.css` Dateien

## Hilfreiche Links

- [Docusaurus Dokumentation](https://docusaurus.io/docs)
- [Markdown Guide](https://www.markdownguide.org/)
- [React Dokumentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## Support und Fragen

- Issues auf GitHub erstellen für Bugs oder Feature-Anfragen
- Diskussionen für allgemeine Fragen nutzen

## Hinweise für Claude AI

### Bevorzugte Vorgehensweise

- Lesen Sie immer zuerst die bestehenden Dateien, bevor Sie Änderungen vornehmen
- Verwenden Sie `Edit` für Änderungen an bestehenden Dateien statt `Write`
- Testen Sie Änderungen mit `npm run typecheck` und `npm run build`
- Halten Sie sich an die Projektstruktur und bestehende Patterns

### Wichtige Einschränkungen

- Ändern Sie keine Dateien in `.github/workflows/` (erfordert spezielle Berechtigungen)
- Behalten Sie die deutsche Sprache für Dokumentationsinhalte bei
- Verwenden Sie englische GitHub-Keywords (`fix`, `fixes`, `closes`, etc.) in Commit-Messages

### Testing-Workflow

Nach Änderungen sollten folgende Befehle erfolgreich durchlaufen:

```bash
npm run typecheck  # TypeScript-Prüfung
npm run build      # Build-Test
```

Falls diese Befehle aufgrund fehlender Berechtigungen nicht ausgeführt werden können, dokumentieren Sie dies im Pull Request, damit der Benutzer die Tests manuell durchführen kann.
