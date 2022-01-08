function showValues() {
    InputRed.value = (LEN * K_RED).toFixed(1);
    InputYellow.value = (LEN * K_YELLOW).toFixed(1);
    InputGreen.value = (LEN * K_GREEN).toFixed(1);
    InputFull.value = LEN;

    generateAnimation();
    setAnimation();
}

function drawDiagram() {
    const endRed = K_RED * 100;
    const yellowWidth = K_YELLOW * 100 / 2;
    const yellowStart1 = endRed / 2;
    const greenWidth = K_GREEN * 100;

    DiagramBlockRed.style.width = `${endRed}%`;

    DiagramBlockYellow1.style.left = `${yellowStart1}%`;
    DiagramBlockYellow1.style.width = `${yellowWidth}%`;
    DiagramBlockYellow2.style.width = `${yellowWidth}%`;

    DiagramBlockGreen.style.left = `${endRed}%`;
    DiagramBlockGreen.style.width = `${greenWidth}%`;
}

function getTimeOut() {
    TrafficLightsRed.innerHTML = InputRed.value;

    let r = Number(InputRed.value);
    let idRed = setInterval(()=> {
        r--;
        
        if (r < 0) {
            clearInterval(idRed);
            TrafficLightsRed.innerHTML = '';
        } else if (r === InputRed.value/2) {
            timeOutYellow()
        } else if (r === 0) {
            timeOutGreen()
        }
         else {
            TrafficLightsRed.innerHTML = r.toFixed(1);
        }
    }, 1000);
}

let timerYellow = setTimeout(timeOutYellow, InputRed.value/2*1000);

function timeOutYellow() {
    TrafficLightsYellow.innerHTML = InputYellow.value/2;
    
    let y = Number(InputYellow.value/2);
    let idYellow = setInterval(()=> {
    y--;
            
    if (y < 0) {
        clearInterval(idYellow);
        TrafficLightsYellow.innerHTML = '';
    } else {
        console.log(y);
        TrafficLightsYellow.innerHTML = y.toFixed(1);
    }
}, 1000);
}

let timerGreen = setTimeout(timeOutGreen, InputRed.value*1000);

function timeOutGreen() {
    TrafficLightsGreen.innerHTML = InputGreen.value;
    
    let g  = Number(InputGreen.value);
    let idGreen = setInterval(()=> {
    g--;
            
    if (g < 0) {
        clearInterval(idGreen);
        TrafficLightsGreen.innerHTML = '';
    } else if (g===0) {
        timeOutYellow();
    } else {
        console.log(g);
        TrafficLightsGreen.innerHTML = g.toFixed(1);
    }
}, 1000);
}

function setAnimation() {
    TrafficLightsRed.style.animation = `_red ${LEN}s step-end infinite`;
    TrafficLightsYellow.style.animation = `_yellow ${LEN}s step-end infinite`;
    TrafficLightsGreen.style.animation = `_green ${LEN}s step-end infinite`;

    AnimationExample.style.animation = `example ${LEN}s linear infinite`;
}


function generateAnimation() {
    const redValue = K_RED * 100;
    const yellowValue = K_YELLOW * 100 / 2;
    const yellowStart1 = redValue / 2;
    const yellowStart2 = (K_RED + K_GREEN) * 100;

    const greenStart = redValue;
    const greenEnd = yellowStart2;

    animation.innerHTML = `<style>
        @keyframes _red {
            0% {
                background-color: red;
            }
        
            ${redValue}% {
                background-color: gray;
            }
        
            100% {
                background-color: gray;
            }
        }
        
        @keyframes _yellow {
            0% {
                background-color: gray;
            }
        
            ${yellowStart1}% {
                background-color: yellow;
            }
        
            ${yellowStart1 + yellowValue}% {
                background-color: gray;
            }
        
            ${yellowStart2}% {
                background-color: yellow;
            }
            100% {
                background-color: yellow;
            }
        }
        
        @keyframes _green {
            0% {
                background-color: gray;
            }
        
            ${greenStart}% {
                background-color: green;
            }

            ${greenEnd}% {
                background-color: gray;
            }
        
            100% {
                background-color: gray;
            }
        
        }
    </style>`;
}