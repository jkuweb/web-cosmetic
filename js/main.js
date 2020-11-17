const text = document.querySelector(".text-animation");
console.log(text);
const stringText = text.textContent;
const splitText = stringText.split("");
text.textContent = "";
for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span>";
  
}

let char = 0;
let timer = setInterval(onTick, 50);
function onTick() {
  const span = text.querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;
  if (char === splitText.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}
let timer02 = setInterval(addClass, 50);
function addClass() {
  const background = document.querySelector(".box-background");
  const social = document.querySelector(".social");
  const socialList = document.querySelector(".social__list");
  const btn = document.querySelector(".btn");
  background.classList.add("box-background-animate");
  social.classList.add("social-animate");
  socialList.classList.add("social-animate__list");
  btn.classList.add("btn-animate");
}
