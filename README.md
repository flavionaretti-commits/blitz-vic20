# BLITZ · VIC-20 remake

Webapp/PWA del progetto Scratch **BLITZ**, ispirato all'omonimo gioco per Commodore VIC-20 del 1982.

## Pubblicazione su GitHub Pages

Caricare nella radice del repository:

- `index.html`
- `blitz.sb3`
- `manifest.webmanifest`
- `service-worker.js`
- cartella `icons` con le tre icone PNG

Poi attivare GitHub Pages da **Settings → Pages → Deploy from a branch → main / root**.

> Nota: usando l'interfaccia web di GitHub, creare prima la cartella `icons` nel repository e poi caricare al suo interno i singoli file.

## Comandi

- **F1** oppure pulsante **F1 · PLAY**: avvio/ripartenza
- **SPAZIO** o click/tap sul gioco: sgancia la bomba
- pulsante **⛶ SCHERMO INTERO**: fullscreen

## Record BEST

La variabile `BEST` viene salvata in locale nel browser (`localStorage`), così il record resta memorizzato sul dispositivo anche chiudendo la webapp.

## Runtime

Il progetto Scratch viene eseguito tramite `@turbowarp/scaffolding` 0.4.0, caricato da jsDelivr e memorizzato nella cache della PWA dopo il primo avvio riuscito.
