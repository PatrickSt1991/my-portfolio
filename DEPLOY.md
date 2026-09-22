# Deploy

De site draait op Cloud86 (Plesk, LiteSpeed achter Cloudflare) en wordt
automatisch bijgewerkt bij elke push naar `main`.

```
push naar main
      |
      v
GitHub Actions (.github/workflows/deploy.yml)
  npm ci  ->  npm run lint  ->  npm run build
      |
      v
branch `deploy`   <- bevat exact de inhoud van dist/
      |
      v
Plesk pullt automatisch  ->  /httpdocs
```

## Waarom een aparte branch

`main` bevat broncode, geen gebouwde site. Zou Plesk `main` rechtstreeks naar
`/httpdocs` publiceren, dan kwamen `src/`, `package.json` en een `index.html`
die naar `/src/main.jsx` verwijst online te staan. De `deploy` branch bevat
alleen de statische build, zodat Plesk niets hoeft te bouwen en er geen Node,
SSH-sleutels of wachtwoorden op de server of in GitHub-secrets nodig zijn.

De workflow zet elke build als nieuwe commit bovenop de vorige. Er wordt niet
geforceerd gepusht, dus een simpele `git pull` op de server blijft werken.
Levert een build exact dezelfde bestanden op, dan wordt er niets gecommit.

## Instellingen in Plesk

Onder **Websites & Domeinen > Git > Repository aanmaken**:

| Veld | Waarde |
| --- | --- |
| Locatie van code | Extern repository |
| URL van repository | `https://github.com/PatrickSt1991/my-portfolio.git` |
| Te deployen branch | `deploy` |
| Publicatiemodus | Automatisch |
| Zoekpad server | `/httpdocs` |
| Aanvullende acties bij publicatie | uit laten staan |

Zet in GitHub onder **Settings > Webhooks** de webhook-URL die Plesk toont,
anders pullt Plesk pas bij het volgende interval in plaats van direct.

## Serverconfiguratie

`public/.htaccess` wordt meegebouwd naar `dist/` en dus meegepubliceerd. Die
regelt twee dingen:

1. **SPA-fallback.** Alles wat geen bestaand bestand of map is, gaat naar
   `index.html`, zodat een directe link naar `/projects` werkt in plaats van
   een 404 te geven.
2. **Cachebeleid.** Bestanden onder `assets/` dragen een contenthash en mogen
   een jaar gecachet worden; `index.html` juist nooit, anders blijven
   bezoekers na een deploy op de oude bundle hangen.

## Handmatig een deploy starten

Actions tab > **Deploy naar Cloud86** > **Run workflow**. Of lokaal
controleren wat er gepubliceerd zou worden:

```bash
npm ci
npm run build
npx vite preview
```
