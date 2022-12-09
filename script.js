const btn = document.querySelector(".btn");
const body = document.querySelector("body");

function toggleColor() {
  console.log(body);
  body.classList.toggle("is--on");
  if (body.classList.value === "is--on") {
    document.title = "Good Night";
  } else {
    document.title = "Good Morning";
  }
}

body.addEventListener("click", toggleColor);
