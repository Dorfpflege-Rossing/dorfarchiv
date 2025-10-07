# Geschützte Dokumentations-Vorlage

Eine moderne Vorlage für die Erstellung **geschützter Dokumentations-Websites**, die die Leistungsfähigkeit von [Docusaurus](https://docusaurus.io/) mit robuster Authentifizierung und Zugriffskontrolle kombiniert.

![Protected Docs Template](https://img.shields.io/badge/docs-protected-green)
![Docusaurus](https://img.shields.io/badge/Docusaurus-3.8-blue)
![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![Docker](https://img.shields.io/badge/Docker-ready-blue)

## 🎯 Was ist das?

Diese Vorlage bietet eine vollständige Lösung für die Erstellung von Dokumentations-Websites, die nur für authentifizierte Benutzer zugänglich sind. Perfekt geeignet für:

- **Interne Unternehmensdokumentation**, die nur für Mitarbeiter zugänglich sein soll
- **Mitglieder-exklusive Inhalte** für Organisationen, Communities oder Premium-Nutzer
- **Private API-Dokumentation**, die Benutzerauthentifizierung erfordert
- **Kundenportale** mit eingeschränktem Zugriff für bestimmte Benutzergruppen
- **Bildungsinhalte** mit Zugriffskontrolle basierend auf Anmeldung oder Mitgliedschaft

## 🏗️ Wie es funktioniert

Die Vorlage besteht aus zwei Hauptkomponenten, die zusammenarbeiten:

### 1. Dokumentations-Website (Docusaurus)
- Erstellt mit **Docusaurus 3.8**, einem modernen statischen Website-Generator
- Unterstützt **Markdown** für einfache Inhaltserstellung
- Bietet **Internationalisierungs**-Support (i18n)
- Beinhaltet **Blog-Funktionalität** und **Versionierung**
- Responsives Design mit Dunkel-/Hell-Modus-Unterstützung

### 2. Authentifizierungs-Server (Node.js + Express)
- **OAuth-Authentifizierung** über GitHub, Google und andere Anbieter
- **PocketBase**-Integration für Benutzerverwaltung und Zugriffskontrolle
- **Gruppenbasierte Zugriffskontrolle** - Benutzer müssen Mitglieder bestimmter Gruppen sein
- **Session-Management** mit sicheren Cookies
- **Mehrsprachige Unterstützung** (deutsche und englische Login-Seiten)

### Authentifizierungs-Ablauf
1. Benutzer besucht die Dokumentations-Website
2. Server prüft auf gültiges Authentifizierungs-Cookie
3. Falls nicht authentifiziert, wird der Benutzer zur Login-Seite weitergeleitet
4. Benutzer authentifiziert sich über OAuth-Anbieter (GitHub, Google, etc.)
5. Server überprüft, ob Benutzer Mitglied der erforderlichen Gruppe(n) ist
6. Falls autorisiert, erhält der Benutzer Zugriff auf die geschützte Dokumentation

## 🚀 Schnellstart

### Voraussetzungen
- **Node.js 18+**
- **Docker** (optional, für containerisierte Bereitstellung)
- **PocketBase-Instanz** (für Benutzerverwaltung)

### 1. Klonen und Installieren
```bash
git clone <ihr-fork-dieses-repos>
cd protected-docs-template
npm install
```

### 2. Umgebung Konfigurieren
Erstellen Sie eine `.env.local`-Datei im Stammverzeichnis:
```env
POCKETBASE_URL=https://ihre-pocketbase-instanz.com
POCKETBASE_GROUP=ihr-gruppen-name
PORT=8000
```

### 3. PocketBase Einrichten
1. Erstellen Sie eine PocketBase-Instanz (selbst gehostet oder Cloud)
2. Erstellen Sie eine `groups`-Sammlung mit `user_id` und `ihr-gruppen-name` Feldern
3. Konfigurieren Sie OAuth-Anbieter (GitHub, Google, etc.)
4. Fügen Sie Benutzer zu den entsprechenden Gruppen hinzu

### 4. Ihre Dokumentation Anpassen
Navigieren Sie zum `website/`-Verzeichnis und:
```bash
cd website
# Bearbeiten Sie Ihre Dokumentationsdateien in docs/
# Passen Sie die Website-Konfiguration in docusaurus.config.ts an
# Fügen Sie Ihr Branding, Farben und Inhalte hinzu
```

### 5. Erstellen und Ausführen

#### Entwicklungsmodus
```bash
# Website-Entwicklungsserver starten
cd website
npm run start

# In einem anderen Terminal den Auth-Server starten
cd server
npm run start
```

#### Produktionsmodus
```bash
# Website erstellen
cd website
npm run build

# Produktionsserver starten
cd server
npm run start
```

#### Docker-Bereitstellung
```bash
docker compose up --build
```

Die Anwendung ist unter `http://localhost:8000` verfügbar

## 📁 Projekt-Struktur

```
protected-docs-template/
├── website/                 # Docusaurus-Dokumentations-Website
│   ├── docs/               # Dokumentationsinhalte (Markdown-Dateien)
│   ├── blog/               # Blog-Beiträge
│   ├── src/                # React-Komponenten und Seiten
│   ├── static/             # Statische Assets
│   └── docusaurus.config.ts # Website-Konfiguration
├── server/                 # Authentifizierungs-Server
│   ├── index.ts            # Haupt-Server-Datei
│   └── views/              # Login-Seiten-Vorlagen
├── Dockerfile              # Container-Konfiguration
├── docker-compose.yaml     # Multi-Container-Setup
└── package.json            # Workspace-Konfiguration
```

## 🔧 Konfiguration

### Authentifizierungs-Anbieter
Das System unterstützt mehrere OAuth-Anbieter über PocketBase:
- **GitHub** (Standard)
- **Google** (Standard)
- **Microsoft**
- **Facebook**
- **GitLab**
- **Discord**
- **Spotify**
- Und viele mehr...

Um neue Anbieter hinzuzufügen, konfigurieren Sie diese in Ihrem PocketBase-Admin-Panel.

### Zugriffskontrolle
Benutzer müssen Mitglieder einer bestimmten Gruppe sein, um auf die Dokumentation zugreifen zu können. Konfigurieren Sie dies in Ihrer `.env.local`:
```env
POCKETBASE_GROUP=mitarbeiter  # Nur Benutzer in der "mitarbeiter"-Gruppe können zugreifen
```

### Internationalisierung
Die Vorlage beinhaltet standardmäßig deutsche Sprachunterstützung. Um weitere Sprachen hinzuzufügen:

1. Aktualisieren Sie `docusaurus.config.ts`:
```typescript
i18n: {
  defaultLocale: 'de',
  locales: ['de', 'en', 'fr'], // Fügen Sie Ihre Sprachen hinzu
},
```

2. Erstellen Sie Übersetzungsdateien in `website/i18n/`

### Anpassung
- **Branding**: Bearbeiten Sie `website/docusaurus.config.ts` und `website/src/css/custom.css`
- **Inhalte**: Fügen Sie Ihre Dokumentation zu `website/docs/` hinzu
- **Login-Seiten**: Passen Sie `server/views/login.ejs` und `server/views/not_a_member.ejs` an

## 🎨 Anwendungsfälle

### Interne Unternehmensdokumentation
Perfekt für Unternehmen, die interne Dokumentation, Prozesse oder Wissensdatenbanken nur mit Mitarbeitern teilen müssen.

```env
POCKETBASE_GROUP=mitarbeiter
```

### Kundenportale
Erstellen Sie Dokumentationsportale für spezifische Kunden oder Kundensegmente.

```env
POCKETBASE_GROUP=premium_kunden
```

### Bildungsplattformen
Stellen Sie Kursmaterialien oder Lernressourcen für eingeschriebene Studenten oder Mitglieder bereit.

```env
POCKETBASE_GROUP=kurs_teilnehmer
```

### API-Dokumentation
Teilen Sie private API-Dokumentation mit autorisierten Entwicklern oder Partnern.

```env
POCKETBASE_GROUP=api_partner
```

## 🛠️ Entwicklung

### Neue Inhalte Hinzufügen
1. Erstellen Sie Markdown-Dateien in `website/docs/`
2. Aktualisieren Sie `website/sidebars.ts` falls nötig
3. Fügen Sie Blog-Beiträge zu `website/blog/` hinzu

### Authentifizierung Anpassen
- Ändern Sie `server/index.ts` um die Authentifizierungslogik zu modifizieren
- Aktualisieren Sie Login-Vorlagen in `server/views/`
- Konfigurieren Sie zusätzliche OAuth-Anbieter in PocketBase

### Styling und Theming
- Bearbeiten Sie `website/src/css/custom.css` für globale Styles
- Ändern Sie `website/docusaurus.config.ts` für Theme-Konfiguration
- Erstellen Sie benutzerdefinierte React-Komponenten in `website/src/components/`

## 🚀 Bereitstellung

### Docker (Empfohlen)
```bash
docker compose up --build -d
```

### Manuelle Bereitstellung
1. Website erstellen: `cd website && npm run build`
2. Server mit erstellten Dateien bereitstellen
3. Umgebungsvariablen konfigurieren
4. Reverse Proxy einrichten (nginx, Apache, etc.)

### Cloud-Plattformen
Die Vorlage funktioniert gut mit:
- **Vercel** (für die Dokumentations-Website)
- **Railway** / **Heroku** (für den Auth-Server)
- **Digital Ocean** / **AWS** / **Google Cloud** (vollständiger Stack)

## 🔒 Sicherheitsfeatures

- **Nur OAuth-Authentifizierung** - keine Passwort-Speicherung erforderlich
- **Gruppenbasierte Zugriffskontrolle** - feingliedrige Berechtigungen
- **Sicheres Session-Management** - httpOnly-Cookies mit ordnungsgemäßen Einstellungen
- **CSRF-Schutz** - in den Authentifizierungsablauf integriert
- **Regelmäßige Sicherheitsupdates** - basierend auf gewarteten Abhängigkeiten

## 📝 Lizenz

Diese Vorlage ist Open Source und unter der [MIT-Lizenz](LICENSE) verfügbar.

## 🤝 Mitwirken

1. Repository forken
2. Feature-Branch erstellen
3. Änderungen vornehmen
4. Tests hinzufügen falls zutreffend
5. Pull Request einreichen

## 📞 Support

- **Issues**: Melden Sie Bugs oder fordern Sie Features über GitHub Issues an
- **Diskussionen**: Nehmen Sie an Community-Diskussionen in GitHub Discussions teil
- **Dokumentation**: Prüfen Sie die [Docusaurus-Dokumentation](https://docusaurus.io/docs) für Website-Anpassungen

## 🏷️ Version

Aktuelle Version: **1.0.0**

Erstellt mit:
- Docusaurus 3.8.1
- Node.js 18+
- PocketBase 0.26
- Express 4.21
- TypeScript 5.6

---

**Mit ❤️ für die Entwickler-Community gemacht**