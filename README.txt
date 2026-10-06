FITTRACK ONEDRIVE V2
====================

Questa versione sincronizza i dati tramite il OneDrive dell'account Microsoft autenticato.
Non salva pesate, BIA, allenamenti o diario alimentare nel localStorage.

PRIMA DI USARLA
1. Leggi GUIDA_CONFIGURAZIONE.md.
2. Registra una SPA in Microsoft Entra.
3. Inserisci il Client ID in config.js.
4. Pubblica la cartella su HTTPS.
5. Accedi con Microsoft.

FILE CLOUD
Il dataset e salvato come fittrack-data-v2.json nella cartella applicativa OneDrive.

NOTA
OneDrive non e un database. La v2 usa UUID, eTag e merge dei record per ridurre il rischio di conflitto tra PC e iPhone.
