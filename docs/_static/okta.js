// Uses okta-signin-widget version 2.13.0

/* var widget = new OktaSignIn({
    baseUrl: "{{dev-366824.okta.com}}",
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
  }); */

<div id="widget-container"></div>

<script>
  var signIn = new OktaSignIn({baseUrl: 'https://${dev-366824.okta.com}'});
  signIn.renderEl({
    el: '#widget-container'
  }, function success(res) {
    if (res.status === 'SUCCESS') {
      console.log('Do something with this sessionToken', res.session.token);
    } else {
    // The user can be in another authentication state that requires further action.
    // For more information about these states, see:
    //   https://github.com/okta/okta-signin-widget#rendereloptions-success-error
    }
  });
</script>