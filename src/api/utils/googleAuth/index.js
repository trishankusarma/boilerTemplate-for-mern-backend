let { google } = require("googleapis");

let OAuth2Data = require("../../../../credentials.json");

let CLIENT_ID = OAuth2Data.web.client_id;
let CLIENT_SECRET = OAuth2Data.web.client_secret;
let REDIRECT_URL_USER = OAuth2Data.web.redirect_uris[0];

let oAuth2ClientUser = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URL_USER
);

// If modifying these scopes, delete token.json.
let SCOPES_USER =
    "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email";

module.exports = {
    oAuth2ClientUser,
     SCOPES_USER,
     google
} 