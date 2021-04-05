function randomGenerate() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var winner;

    if (randomNumber1 > randomNumber2) {
        winner = "🚩 player 1 Wins";
    } else if (randomNumber1 < randomNumber2) {
        winner = "player 2 Wins 🚩";
    } else {
        winner = "draw";
    }
    //document.getElementsByTagName("h1")[0].textContent = winner;
    document.querySelector("h1").innerHTML = winner;
    var images = document.querySelectorAll("img")
    images[0].setAttribute("src", "./images/dice" + randomNumber1 + ".png");
    images[1].setAttribute("src", "./images/dice" + randomNumber2 + ".png");
    //document.getElementById("img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");
    //document.getElementById("img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");



}