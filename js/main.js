var form = document.getElementById('form');

var smsResponse = document.getElementById('smsResponse');

var modal = document.getElementById('modal');
console.log(modal)

var container = document.getElementById('container')
console.log(container)

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    await postData();
    modal.style.display = 'block';
    container.style.opacity = 0.5
});


async function postData() {

    var userId = document.getElementById('userid').value;

    var enquirer = document.getElementById('enquirer').value;

    var reason = document.getElementById('reason').value;

    const smsRequest = {
        userId, enquirer, reason
    }

    console.log(smsRequest);

    // const response = await fetch("", {
    //     method: "POST",
    //     body: JSON.stringify(smsRequest),
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // });

    // if (!response.ok) {

    //     if (response["message"]) {
    //         smsResponse.textContent = response["message"];
    //     } else {
    //         smsResponse.textContent = "Something went wrong";
    //     }
    //     throw new Error(`Request failed with status ${response.status}`)
    // } else {
    //     smsResponse.textContent = response["message"];
    // }


}