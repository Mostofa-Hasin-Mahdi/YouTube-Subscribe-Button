let subcribeBtn = document.getElementById("subscribeBtn");
let subscribe = false;

subcribeBtn.addEventListener('click', () => {
    if (subscribe){
        subcribeBtn.innerText = "SUBSCRIBED"
        subcribeBtn.style = "background-color: gray;"
        subscribe = false

    }
    else {
        subcribeBtn.innerText = "SUBSCRIBE"
        subcribeBtn.style = "background-color: rgb(200, 0 ,0);"
        subscribe = true
    }
})