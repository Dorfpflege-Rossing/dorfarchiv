# Digitales Dorfarchiv Rössing

Dieses digitale Archiv dokumentiert die Geschichte und Geschichten aus Rössing. Die Website wurde mit [Docusaurus](https://docusaurus.io/) erstellt, einem modernen Static-Site-Generator.

## Lizenzierung

Dieses Projekt verwendet ein Doppellizenz-Modell:

### Inhalte (Content)

- **Standard-Lizenz**: Alle Inhalte des Archivs (Texte, Bilder, Dokumente) stehen unter der [**CC0 1.0 Universal (Public Domain)**](https://creativecommons.org/publicdomain/zero/1.0/deed.de), sofern nicht ausdrücklich anders angegeben.

- **HAWK-Projektunterlagen**: Die Unterlagen des HAWK Studienprojekts (Projektdokumentation, Karten, CAD-Dateien) wurden von den Autorinnen Lea von Berg, Felina Freiberg, Caroline Rabe und Charlotte Schemm erstellt und stehen unter der [**Creative Commons Namensnennung 4.0 International (CC BY 4.0)**](https://creativecommons.org/licenses/by/4.0/deed.de).

### Source Code

Der Quellcode dieser Website (alle `.ts`, `.tsx`, `.js`, `.jsx`, `.css` und Konfigurationsdateien) ist unter der [**MIT-Lizenz**](./LICENSE) lizenziert.

**Zusammengefasst**: Sie können die Inhalte frei verwenden (CC0/CC BY 4.0) und den Code frei nutzen, modifizieren und verteilen (MIT).

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
