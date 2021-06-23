const score = document.querySelector(".score"),
  start = document.querySelector(".start"),
  gameArea = document.querySelector(".gameArea"),
  car = document.createElement("div");
car.classList.add("car");

start.onclick = function () {
  start.classList.add("hide");
};

document.addEventListener("keydown", startRun);
document.addEventListener("keyup", stopRun);

start.addEventListener("click", startGame);

const keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowRight: false,
  ArrowLeft: false,
};

const setting = {
  start: false,
  score: 0,
  speed: 3,
};

function startGame() {
  start.classList.add("hide");
  setting.start = true;
  requestAnimationFrame(playGame); //сначала запускается  playgame
  gameArea.appendChild(car);
}

function playGame() {
  console.log("play game");
  if (setting.start) {
    // проверяется условие
    requestAnimationFrame(playGame); //рекурсия снова выполняется ф-ция playgame по кругу пока старт true
  }
}

function startRun(event) {
  event.preventDefault();
  keys[event.key] = true;
}
function stopRun(event) {
  event.preventDefault();
  keys[event.key] = false;
}
