export const environment = {
    production: false,
    apiBaseUrl: "https://contosoqbot.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "cc88ed14-c42e-4fa9-bdd2-329627ebe066",
        clientId: "22819696-429f-41c4-83d9-09527598fc1d",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
};
