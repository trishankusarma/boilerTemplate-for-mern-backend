const { User } = require('../../models')

const {
    serverError, googleAuth
} = require('../../utils')

let { oAuth2ClientUser, SCOPES_USER,  google } = googleAuth;

const userController = {
     
 // 1) Get URL for google api authentication
 googleAuthUrl: async (req, res) => {
    try {
    const url = oAuth2ClientUser.generateAuthUrl({
        access_type: "offline",
        scope: SCOPES_USER,
    });

    console.log(url);

    res.json({
        success: 1,
        url,
    });
    } catch (error) {
    res.json(serverError);
    }
},

// 2) Google callback for login, register
googleCallBack: async (req, res) => {
    try {
        const code = req.query.code;

        if (code) {
            // Get an access token based on our OAuth code

            oAuth2ClientUser.getToken(code, async function (err, tokens) {
            if (err) {
                console.log("Error authenticating");
                console.log(err);

                res.json({
                    success: 0,
                    msg: "Error authenticating",
                });
            } else {
                console.log("Successfully authenticated");

                console.log(tokens);

                oAuth2ClientUser.setCredentials(tokens);

                var oauth2 = google.oauth2({
                
                    auth: oAuth2ClientUser,
                    version: "v2",
                });

                oauth2.userinfo.get(async function (err, response) {
                    
                    if (err) {
                        console.log(err);

                        res.json({
                        success: 0,
                        msg: "Error Authenticating",
                        });
                    } else {

                        const { name , picture , email , verified_email } = response.data

                        if(!verified_email){

                            return res.json({
                                success : 0,
                                msg:'Email is not verified by google'
                            }) 
                        }

                        const user = {
                            name,
                            email,
                            picture
                        }
                        
                        res.json({
                            success: 1,
                            user
                        });
                    }
                });
              }
            });
        }
    } catch (error) {
        res.json(serverError);
    }
   }
}

module.exports = userController