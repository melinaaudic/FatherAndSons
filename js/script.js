// Contact form
var form = document.querySelector("form");
var regEx = /^[^\W][a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\@[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)*\.[a-zA-Z]{2,4}$/;

function f_valid(e) {
  for (var i = 0; i < form.elements.length; i++) {
    if (form.elements[i].type == "text" || form.elements[i].type == "textarea" || form.elements[i].type == "email") {
      var idMissing = document.querySelector("#" + form.elements[i].id + "_missing");

      if (document.getElementById(form.elements[i].id).value === "") {
        e.preventDefault();
        idMissing.classList.remove("hide");
      } else if (form.elements[i].type == "email" && regEx.test(email.value) == false) {
        e.preventDefault();
        idMissing.classList.remove("hide");
        idMissing.textContent = "Le format de l'email n'est pas valide";
      } else {
        idMissing.classList.add("hide");
      }
    }
  }
}

document.getElementById("submit").addEventListener("click", f_valid);


// Compte à rebours
var deadline = new Date("September 30, 2018 00:00:00").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var t = deadline - now;
var days = Math.floor(t / (1000 * 60 * 60 * 24));
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((t % (1000 * 60)) / 1000);
document.getElementById("timer").innerHTML = days + "j " 
+ hours + "h " + minutes + "m " + seconds + "s ";
    if (t < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);