var functions = require("firebase-functions");
const admin = require("firebase-admin");
//const nodemailer = require("nodemailer");

const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
//const mailTransport = nodemailer.createTransport("smtps://" + gmailEmail + ":" + gmailPassword + "@smtp.gmail.com");

admin.initializeApp(functions.config().firebase);
/*exports.addMessage = functions.https.onRequest((req, res) => {
    const original = req.query.text;
    admin.database().ref("/messages").push({ original: original }).then(snapshot => {
        res.redirect(303, snapshot.ref);
    });
});*/

exports.newContact = functions.database.ref("/messages").onWrite(event => {
    const original = event.data.val();
    console.log(original);
    const mailOptions = {
        from: "Notificacion de contacto",
        to: "estebanlopez.co@gmail.com",
        subject: "Solicitud de contcato",
        text: original
    }
    /*  return mailTransport.sendMail(mailOptions).then(() => {
        console.log("Enviado")
    });*/
    //   console.log("Uppercasing",event.params.pushId,original);
    //  const uppercase = original.toUpperCase();
    //  return event.data.ref.parent.child("uppercase").set(uppercase);
});
