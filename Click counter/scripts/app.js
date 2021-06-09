
let button = document.getElementById("klik");
let counterNum = document.getElementById("counter");
let resetButton = document.getElementById("reset");
let startButton = document.getElementById("start");
let clearButton = document.getElementById("clear");
var time = document.getElementById("seconds")
var myInt
let input = document.getElementById("choose-list")
input.onchange = update;


let countDown = 10
update();
let list = []
let started = false;



button.onclick = increase;
resetButton.onclick = reset;
startButton.onclick = start;
clearButton.onclick = clear;



function increase() {
    // button.style = "background-color: yellow"
    if (list.length == 0 && !started) {
        start()
    }
    counterNum.textContent++;

    let d = new Date()
    list.push(d.getTime())
}

function reset() {
    if (startButton.disabled = "true") {
        startButton.disabled = false;
    }
    button.disabled = false
    stopInterval();
    counterNum.textContent = 0;
    time.textContent = countDown;
    list = []
}

function clear() {
    document.querySelectorAll(".News").forEach((a) => a.remove());
}


function start() {
    started = true;
    if (button.disabled = false) {
        button.disabled = "true";
    }
    startButton.disabled = "true";
    startInterval();
}

function startInterval() {
    myInt = setInterval( function() {
        time.textContent--;
        if (time.textContent == 0) {
            button.disabled = "true"

            time.textContent = countDown;
            startButton.disabled = false;
            
            stopInterval();
            bestTime()
        }
    }, 1000   
    );
}

function stopInterval() {
    started = false;
    clearInterval(myInt);
}

function bestTime() {
    let min = list[1] - list[0]
    for (let i = 0; i < list.length - 1; i++) {
        for (let j = i + 1; j < list.length; j++) {
            if (list[j] - list[i] < min) {
                min = list[j] - list[i];
            }
            
        }
        
    }
    
    console.log(min)
    console.log(countDown / (min / 1000))

    let newEl = document.createElement("p");
    newEl.setAttribute("class", "News");
    var textNode = document.createTextNode("Shortest time between clicks: " + min + " ms. Best possible result according to that time: " + Math.round(countDown / (min / 1000)))
    newEl.appendChild(textNode);
    document.getElementById("results").appendChild(newEl)

}

function update() {
    time.textContent = input.value;
}



