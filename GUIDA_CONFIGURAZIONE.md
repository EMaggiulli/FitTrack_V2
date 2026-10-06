# FitTrack OneDrive v2 - Configurazione

## 1. Registrare l'applicazione Microsoft

1. Accedi al portale Microsoft Entra.
2. Apri **App registrations** e crea una nuova registrazione.
3. Nome suggerito: `FitTrack OneDrive`.
4. Tipi di account supportati: **Account Microsoft personali**. Se vuoi anche account aziendali, scegli l'opzione multitenant con account personali.
5. In **Authentication**, aggiungi una piattaforma **Single-page application**.
6. Inserisci l'URL HTTPS completo dove pubblicherai `index.html`, per esempio `https://tuonome.github.io/fittrack-v2/`.
7. Copia l'**Application (client) ID**.
8. In **API permissions**, aggiungi le autorizzazioni delegate:
   - `Files.ReadWrite.AppFolder`
   - `User.Read`

Non creare e non inserire un client secret nel frontend.

## 2. Configurare FitTrack

Apri `config.js` e sostituisci:

```js
clientId: "INSERISCI_QUI_IL_CLIENT_ID"
```

con il Client ID copiato dal portale.

## 3. Pubblicare tramite HTTPS

L'autenticazione SPA richiede un'origine web valida. Pubblica l'intera cartella senza modificare la struttura. Opzioni adatte:

- GitHub Pages;
- Azure Static Web Apps;
- Netlify;
- Cloudflare Pages.

L'URL pubblicato deve corrispondere esattamente al Redirect URI registrato in Microsoft Entra.

## 4. Primo accesso

1. Apri l'URL pubblicato.
2. Premi **Accedi con Microsoft**.
3. Usa il tuo account Microsoft personale collegato a OneDrive.
4. Accetta il permesso della cartella applicativa.
5. FitTrack creerà `fittrack-data-v2.json` nella propria cartella applicativa OneDrive.

## 5. Migrazione dalla v1

1. Apri FitTrack v1.
2. Esporta **Backup JSON**.
3. Apri FitTrack v2 e accedi.
4. Vai in **Altro**.
5. Seleziona **Importa backup locale v1**.
6. Verifica pesate, BIA, allenamenti e diario.

## Sicurezza

- I dati sanitari non vengono salvati nel localStorage.
- MSAL usa `sessionStorage` per la sessione di autenticazione.
- Il codice usa solo il permesso `Files.ReadWrite.AppFolder`.
- Non inserire client secret, password o token in `config.js`.
- Usa esclusivamente HTTPS in produzione.
