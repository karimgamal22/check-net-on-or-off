let title = document.querySelector(".titel");
let ul = document.querySelector("ul");
let btnrelode = document.querySelector(".relode");

window.onload = function () {
  if (window.navigator.onLine) {
    online();
  } else {
    offline();
  }
};

window.addEventListener("online", function () {
  online();
});

window.addEventListener("offline", function () {
  offline();
});

// reload windows 
btnrelode.onclick = function () {
  window.location.reload();
};

// mode online
function online() {
  title.innerHTML = "online now";
  title.style.color = "green";
  ul.classList.add("hide");
  btnrelode.classList.add("hide");
}


// mode offline
function offline() {
  title.innerHTML = "offline now";
  title.style.color = "#666";
  ul.classList.remove("hide");
  btnrelode.classList.remove("hide");
}
