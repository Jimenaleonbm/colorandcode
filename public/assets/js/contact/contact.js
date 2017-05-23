function send(form){
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var message = document.getElementById("message");
    sendEmail(name.value, email.value, message.value);
}


function sendEmail(name,email,message){
    firebase.database().ref("messages").push({
        name:name,
        email:email,
        message:message
    });   
}
