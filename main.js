var myVar = setInterval(generateBubble, 500);
var timerStart = Date.now();

function generateBubble() {
  var timerCheck = Date.now();
  if (timerCheck - timerStart < 60000) {
    var xPosition = getRandomInt(0, 100);
    var yPosition = getRandomInt(0, 100);
    var duration = getRandomInt(1, 4);
    var body = document.querySelector('body');
    var div = document.createElement("div");
    div.classList.add('bubble');
    body.appendChild(div);
    div.style.top = `${xPosition}%`;
    div.style.left = `${yPosition}%`;
    div.style.animationDuration = `${duration}s`;
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return (Math.floor(Math.random() * (max - min)) + min).toString();
}
