var currentMode = 6;
var color = generateColors(currentMode);
var square = document.getElementsByClassName("square");
var heading = document.querySelector(".heading");
var comment = document.getElementById("comment");
var pickedColor = randomPick();
var rgbDisplay = document.getElementById("rgb");
rgbDisplay.textContent = pickedColor;
var reset = document.getElementById("reset");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");
hard.classList.add("mode");


reset.addEventListener("click", function () {
    color = generateColors(currentMode);
    pickedColor = randomPick();
    rgbDisplay.textContent = pickedColor;
    for (var i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = color[i];
    }
    heading.style.backgroundColor = "#1480ff";
    comment.textContent = "";
    reset.textContent = "Load New Color?"
})

easy.addEventListener("click", function () {
    easy.classList.add("mode");
    hard.classList.remove("mode");
    currentMode = 3;
    color = generateColors(currentMode);
    pickedColor = randomPick();
    rgbDisplay.textContent = pickedColor;
    for (var i = 0; i < square.length; i++) {
        if (color[i]) {
            square[i].style.backgroundColor = color[i];
        } else {
            square[i].style.display = "none";
        }
    }
    heading.style.backgroundColor = "#1480ff";
    comment.textContent = "";
})

hard.addEventListener("click", function () {
    hard.classList.add("mode");
    easy.classList.remove("mode");
    currentMode = 6;
    color = generateColors(currentMode);
    pickedColor = randomPick();
    rgbDisplay.textContent = pickedColor;
    for (var i = 0; i < square.length; i++) {
        square[i].style.backgroundColor = color[i];
        square[i].style.display = "block";
    }
    heading.style.backgroundColor = "#1480ff";
    comment.textContent = "";
})

function changeColor() {
    for (var i = 0; i < color.length; i++) {
        square[i].style.backgroundColor = pickedColor;
        heading.style.backgroundColor = pickedColor;
    }
}

function randomPick() {
    var random = Math.floor(Math.random() * color.length);
    return color[random];
}

function generateColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}


for (var i = 0; i < color.length; i++) {
    square[i].style.backgroundColor = color[i];
    square[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            comment.textContent = "Correct! You Got It."
            changeColor();
            reset.textContent = "Play Again?"
        } else {
            comment.textContent = "Wrong! Try Again.";
            this.style.backgroundColor = "#363636"
        }
    });
}
