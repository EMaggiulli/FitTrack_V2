export const CONFIG = {
  clientId: "INSERISCI_QUI_IL_CLIENT_ID",
  authority: "https://login.microsoftonline.com/consumers",
  redirectUri: window.location.origin + window.location.pathname,
  scopes: ["Files.ReadWrite.AppFolder", "User.Read"],
  dataFile: "fittrack-data-v2.json"
};
