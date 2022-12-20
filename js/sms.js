var sent = document.getElementById('send')
console.log(sent)
var smsBody = document.getElementById('sms-body')
var form = document.getElementById('form');
// var 

// function(messageBody) {
//     return `$messageBody`
// }
function send() {
    var message = document.getElementById('sms-reply').value;
    var response = document.createElement("div")
    var reply = `You have chosen ${message}`

    response.innerText = message;
    response.className = "message me";

    var nibssReply = document.createElement("div")

    nibssReply.innerText = reply;
    nibssReply.className = "message them";

    smsBody.appendChild(response);

    setTimeout(() => {  console.log("World!"); }, 50000);
    smsBody.appendChild(nibssReply);

}
