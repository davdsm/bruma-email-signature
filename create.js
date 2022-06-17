"use strict";

var fs = require('fs');
const { exit } = require('process');

const doIt = async () => {

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    var name, position, email, contact1, contact2 = false;


    await new Promise(
        (resolve, reject) => {
            readline.question(`Nome - `, _name => {
                name = _name
                resolve()
            });
        }
    )

    await new Promise(
        (resolve, reject) => {
            readline.question(`Posição - `, _pos => {
                position = _pos
                resolve();
            });
        }
    )

    await new Promise(
        (resolve, reject) => {
            readline.question(`Email - `, _email => {
                email = _email
                resolve();
            });
        }
    )

    await new Promise(
        (resolve, reject) => {
            readline.question(`Contacto 1 - (com espaços e indicativo) (ex: +351 918 659 324) - `, _contact => {
                contact1 = _contact
                resolve();
            });
        }
    )

    await new Promise(
        (resolve, reject) => {
            readline.question(`Contacto 2 - (com espaços e indicativo) (ex: +351 918 659 324) - `, _contact => {
                contact2 = _contact
                resolve();
            });
        }
    )


    var slug = name.trim();

    await new Promise(
        (resolve, reject) => {
            fs.writeFile(`${slug}.html`, `

        <!doctype html>
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

        <head>
        <title> Bruma </title>
        <!--[if !mso]><!-->
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <!--<![endif]-->
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style type="text/css">
            #outlook a {
            padding: 0;
            }

            body {
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
            }

            table,
            td {
            border-collapse: collapse;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            }

            img {
            border: 0;
            height: auto;
            line-height: 100%;
            outline: none;
            text-decoration: none;
            -ms-interpolation-mode: bicubic;
            }

            p {
            display: block;
            margin: 13px 0;
            }
        </style>
        <!--[if mso]>
                <noscript>
                <xml>
                <o:OfficeDocumentSettings>
                <o:AllowPNG/>
                <o:PixelsPerInch>96</o:PixelsPerInch>
                </o:OfficeDocumentSettings>
                </xml>
                </noscript>
                <![endif]-->
        <!--[if lte mso 11]>
                <style type="text/css">
                .mj-outlook-group-fix { width:100% !important; }
                </style>
                <![endif]-->
        <style type="text/css">
            @media only screen and (min-width:480px) {
            .mj-column-px-350 {
                width: 350px !important;
                max-width: 350px;
            }

            .mj-column-px-300 {
                width: 300px !important;
                max-width: 300px;
            }
            }
        </style>
        <style media="screen and (min-width:480px)">
            .moz-text-html .mj-column-px-350 {
            width: 350px !important;
            max-width: 350px;
            }

            .moz-text-html .mj-column-px-300 {
            width: 300px !important;
            max-width: 300px;
            }
        </style>
        <style type="text/css">
            @media only screen and (max-width:480px) {
            table.mj-full-width-mobile {
                width: 100% !important;
            }

            td.mj-full-width-mobile {
                width: auto !important;
            }
            }
        </style>
        </head>

        <body style="word-spacing:normal;">
        <p style="padding: 0 30px;margin:0;font-family: 'Roboto', sans-serif;">FRASE OPCIONAL</p>
        <br />
        <div style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;"> Assinatura Bruma </div>
        <div style>
            <!--[if mso | IE]><table align="center" border="0" cellpadding="0" cellspacing="0" class="" style="width:700px;" width="700" ><tr><td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;"><![endif]-->
            <div style="margin:0px 0px;max-width:650px;width: 650px;display: block;text-align: left;float: left;">
            <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;float: left;text-align: left;">
                <tbody>
                <tr>
                    <td style="direction:;font-size:0px;padding:0;padding-left:0px;text-align:left;">
                    <!--[if mso | IE]><table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td class="" style="vertical-align:top;width:350px;" ><![endif]-->
                    <div class="mj-column-px-350 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                        <tbody>
                            <tr>
                            <td style="background-color:#dee6ed;vertical-align:top;padding-left:20px;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style width="100%">
                                <tbody>
                                    <tr>
                                    <td align="left" style="font-size:0px;padding:10px 25px;padding-bottom:0;word-break:break-word;">
                                        <div style="font-family:Georgia Bold;font-size:17px;font-weight:400;line-height:24px;text-align:left;color:#002e6b;"><strong>${name}</strong></div>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td align="left" style="font-size:0px;padding:10px 25px;padding-top:0;padding-bottom:0;word-break:break-word;">
                                        <div style="font-family:'Arial Neue', Helvetica, Arial, sans-serif;font-size:14px;font-weight:400;line-height:24px;text-align:left;color:#002e6b;">${position}</div>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td align="left" style="font-size:0px;padding:10px 25px;padding-bottom:0;word-break:break-word;">
                                        <div style="font-family:'Arial Neue', Helvetica, Arial, sans-serif;font-size:14px;font-weight:400;line-height:24px;text-align:left;color:#002e6b;"><a class="text-link" href="mailto:${email}" style="color: #002e6b; text-decoration: none; font-size: 15px;">${email}</a></div>
                                    </td>
                                    </tr>
                                    <tr>
                                        <td align="left" style="font-size:0px;padding:10px 25px;padding-top:0;padding-bottom:0;word-break:break-word;">
                                            <div style="font-family:'Arial Neue', Helvetica, Arial, sans-serif;font-size:14px;font-weight:400;line-height:24px;text-align:left;color:#002e6b;"><a class="text-link" href="tel:${contact1.trim()}" style="color: #002e6b; text-decoration: none; font-size: 15px;">${contact1} ${contact2 ? `- <a class="text-link" href="tel:${contact2.trim()}" style="color: #002e6b; text-decoration: none; font-size: 15px;">${contact2}</a>` : `</a>`}</div>
                                        </td>
                                    </tr>
                                    <tr>
                                    <td align="left" style="font-size:0px;padding:10px 25px;padding-bottom:13px;padding-left:20px;word-break:break-word;">
                                        <!--[if mso | IE]><table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation" ><tr><td><![endif]-->
                                        <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                                        <tr>
                                            <td style="padding:4px;vertical-align:middle;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:3px;width:30px;">
                                                <tr>
                                                <td style="font-size:0;height:30px;vertical-align:middle;width:30px;">
                                                    <a href="https://facebook.com/torneirasbruma" target="_blank">
                                                    <img height="30" src="https://bruma.pt/assets/email/facebook.png" style="border-radius:3px;display:block;" width="30">
                                                    </a>
                                                </td>
                                                </tr>
                                            </table>
                                            </td>
                                        </tr>
                                        </table>
                                        <!--[if mso | IE]></td><td><![endif]-->
                                        <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                                        <tr>
                                            <td style="padding:4px;vertical-align:middle;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:3px;width:30px;">
                                                <tr>
                                                <td style="font-size:0;height:30px;vertical-align:middle;width:30px;">
                                                    <a href="https://instagram.com/brumataps" target="_blank">
                                                    <img height="30" src="https://bruma.pt/assets/email/instagram.png" style="border-radius:3px;display:block;" width="30">
                                                    </a>
                                                </td>
                                                </tr>
                                            </table>
                                            </td>
                                        </tr>
                                        </table>
                                        <!--[if mso | IE]></td><td><![endif]-->
                                        <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                                        <tr>
                                            <td style="padding:4px;vertical-align:middle;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:3px;width:30px;">
                                                <tr>
                                                <td style="font-size:0;height:30px;vertical-align:middle;width:30px;">
                                                    <a href="https://vimeo.com/brumataps" target="_blank">
                                                    <img height="30" src="https://bruma.pt/assets/email/vimeo.png" style="border-radius:3px;display:block;" width="30">
                                                    </a>
                                                </td>
                                                </tr>
                                            </table>
                                            </td>
                                        </tr>
                                        </table>
                                        <!--[if mso | IE]></td><td><![endif]-->
                                        <table align="left" border="0" cellpadding="0" cellspacing="0" role="presentation" style="float:none;display:inline-table;">
                                        <tr>
                                            <td style="padding:4px;vertical-align:middle;">
                                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-radius:3px;width:30px;">
                                                <tr>
                                                <td style="font-size:0;height:30px;vertical-align:middle;width:30px;">
                                                    <a href="https://youtube.com/user/brumapt" target="_blank">
                                                    <img height="30" src="https://bruma.pt/assets/email/youtube.png" style="border-radius:3px;display:block;" width="30">
                                                    </a>
                                                </td>
                                                </tr>
                                            </table>
                                            </td>
                                        </tr>
                                        </table>
                                        <!--[if mso | IE]></td></tr></table><![endif]-->
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    <!--[if mso | IE]></td><td class="" style="vertical-align:top;width:300px;" ><![endif]-->
                    <div class="mj-column-px-300 mj-outlook-group-fix" style="font-size:0px;text-align:left;direction:ltr;display:inline-block;vertical-align:top;width:100%;">
                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:top;" width="100%">
                        <tbody>
                            <tr>
                            <td align="center" style="font-size:0px;padding:0;word-break:break-word;">
                                <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                <tbody>
                                    <tr>
                                    <td style="width:300px;">
                                        <img alt height="auto" src="https://bruma.pt/assets/email/bruma.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="300">
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    <!--[if mso | IE]></td></tr></table><![endif]-->
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
            <!--[if mso | IE]></td></tr></table><![endif]-->
        </div>
        </body>

        </html>
`, () => { console.log("✅ Done"), resolve() })

        })

    process.exit();

}

doIt()