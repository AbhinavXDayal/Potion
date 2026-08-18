const Clock = document.getElementById("clock");

setInterval(function () {
  let Date = new Date();

  Clock.innerHTML = Date.toLocaleTimeString();
}, 1000);