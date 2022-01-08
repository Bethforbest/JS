hiddenForm.addEventListener("input", (e) => {
  const isFormHidden = Boolean(e.target.checked);
  if (isFormHidden) {
    standbyMode();
    standbyDiagramOn();
    TrafficLightsRed.innerHTML = '';
    TrafficLightsYellow.innerHTML = '';
    TrafficLightsGreen.innerHTML = '';
  } else {
    showValues();
    standbyDiagramOff();
    drawDiagram();
    getTimeOut()
  }
});

function standbyMode() {
  animation.innerHTML = `<style>
  @keyframes _standby {
      0% {
          background-color: yellow;
      }
      10% {
          background-color: grey;
      }
      20% {
          background-color: yellow;
      }
      30% {
          background-color: grey;
      }
      40% {
          background-color: yellow;
      }
      50% {
          background-color: grey;
      }
      60% {
          background-color: yellow;
      }
      70% {
          background-color: grey;
      }
      80% {
          background-color: yellow;
      } 
      90% {
          background-color: grey;
      } 
      100% {
          background-color: yellow;
      } 
      </style>`;
  TrafficLightsYellow.style.animation = `_standby ${LEN}s step-end infinite`;
}

function standbyDiagramOn() {
  DiagramBlockRed.style.display="none";
  DiagramBlockGreen.style.display="none";
  DiagramBlockYellow1.style.display="none";
  DiagramBlockYellow2.style.display="none";
  AnimationExample.style.animation = null;

}
function standbyDiagramOff() {
  DiagramBlockRed.style.display="block";
  DiagramBlockGreen.style.display="block";
  DiagramBlockYellow1.style.display="block";
  DiagramBlockYellow2.style.display="block";
  
}

document.querySelectorAll('input[type="number"]').forEach((e) => {
  e.addEventListener("keydown", (e) => e.preventDefault());
});

document.forms[0].addEventListener("submit", (e) => e.preventDefault());

showValues();
drawDiagram();
getTimeOut();

InputRed.addEventListener("input", (e) => {
  const redValue = +e.target.value;

  K_RED = redValue / LEN;
  K_YELLOW = K_RED;
  K_GREEN = 1 - 1.5 * K_RED;

  showValues();
  drawDiagram();
  getTimeOut();
});

InputYellow.addEventListener("input", (e) => {
  const yellowValue = +e.target.value;

  K_YELLOW = yellowValue / LEN;
  K_RED = K_YELLOW;
  K_GREEN = 1 - 1.5 * K_YELLOW;

  showValues();
  drawDiagram();
  getTimeOut();
});

InputGreen.addEventListener("input", (e) => {
  const greenValue = +e.target.value;
  K_GREEN = greenValue / LEN;
  K_RED = (1 - K_GREEN) / 1.5;
  K_YELLOW = K_RED;

  showValues();
  drawDiagram();
  getTimeOut();
});

InputFull.addEventListener("input", (e) => {
  LEN = e.target.value;

  showValues();
  drawDiagram();
  getTimeOut();
});

document.querySelector("#pause").addEventListener("click", (e) => {
  if (AnimationExample.style.animationPlayState === "paused") {
    AnimationExample.style.animationPlayState = "running";
    TrafficLightsRed.style.animationPlayState = "running";
    TrafficLightsYellow.style.animationPlayState = "running";
    TrafficLightsGreen.style.animationPlayState = "running";
  } else {
    AnimationExample.style.animationPlayState = "paused";
    TrafficLightsRed.style.animationPlayState = "paused";
    TrafficLightsYellow.style.animationPlayState = "paused";
    TrafficLightsGreen.style.animationPlayState = "paused";
  }
});
