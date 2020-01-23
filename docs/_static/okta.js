// Uses okta-signin-widget version 2.13.0

var widget = new OktaSignIn({
    baseUrl: "{{yourOktaDomain}}",
    logo: "https://wiki.edi-n.com/uk/latest/_static/logo_edin2.gif",
    i18n: {
      // Overriding English properties
      en: {
        "primaryauth.title": "Вход по пропускам!",
        "primaryauth.submit": "Кнопка, для бывалых"
      },
    },
    idps: [
    {
      "type": "GOOGLE",
      "id": "{{Your_GOOGLE_IDP_ID_Here}}"
    },
    {
      "type": "FACEBOOK",
      "id": "{{Your_FB_IDP_ID_Here}}"
    }
  ]
  });
  
  widget.renderEl({
    el: "#widget-container"
  });