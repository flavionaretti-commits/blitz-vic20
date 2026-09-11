# BLITZ · VIC-20 remake

Webapp/PWA del progetto Scratch **BLITZ**, riprogrammato da zero da **Flavio Naretti** e ispirato all'omonimo gioco per Commodore VIC-20 del 1982.

## Avvio e comandi

La schermata del gioco mantiene volutamente la storica indicazione **PRESS F1**. Nella webapp:

- **click/tap sullo schermo** oppure **F1**: avvio della partita; dopo l'avvio attendere qualche secondo per la sequenza iniziale
- **SPAZIO** o click/tap durante il gioco: sgancia la bomba
- **↻ RIPARTI**: riavvia la partita
- **⛶ SCHERMO INTERO**: fullscreen

## Crediti

- **Riprogrammazione Scratch, ricostruzione tecnica e sprite ridisegnati:** Flavio Naretti, 2026
- **Acquisizione, montaggio e integrazione dei suoni:** Flavio Naretti, a partire dall'audio del gioco originale
- **Gioco originale per Commodore VIC-20 (1982):** Simon Taylor e Steve Battle
- **Runtime web:** TurboWarp Scaffolding (MPL-2.0)

Vedi anche `COPYRIGHT-NOTICE.txt` e `THIRD-PARTY-NOTICES.txt`.

## Attribuzione e riuso

© 2026 Flavio Naretti. Tutti i diritti riservati sulle parti originali della presente ricostruzione, in particolare codice e logica Scratch, organizzazione del progetto e sprite ridisegnati.

È consentito giocare gratuitamente e condividere il link alla webapp. Non è autorizzato rimuovere o alterare l'attribuzione all'autore, né presentare questa specifica riprogrammazione come opera propria. I diritti sul gioco originale e sugli elementi derivati restano ai rispettivi aventi diritto.

## Pubblicazione su GitHub Pages

Caricare nella radice del repository:

- `index.html`
- `blitz.sb3`
- `manifest.webmanifest`
- `service-worker.js`
- `COPYRIGHT-NOTICE.txt`
- `THIRD-PARTY-NOTICES.txt`
- cartella `icons` con le tre icone PNG

Poi attivare GitHub Pages da **Settings → Pages → Deploy from a branch → main / root**.

> Nota: usando l'interfaccia web di GitHub, creare prima la cartella `icons` nel repository e poi caricare al suo interno i singoli file.

## Record BEST

La variabile `BEST` viene salvata in locale nel browser (`localStorage`), così il record resta memorizzato sul dispositivo anche chiudendo la webapp.

## Runtime

Il progetto Scratch viene eseguito tramite `@turbowarp/scaffolding` 0.4.0, caricato da jsDelivr e memorizzato nella cache della PWA dopo il primo avvio riuscito.
