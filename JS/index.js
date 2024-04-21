const clock = document.querySelector("#clock");

function updateTime() {
    let date = new Date();
    let realTime = date.toLocaleTimeString();
    clock.innerText = realTime;
}

setInterval(function () {
    updateTime();
}, 1000);
