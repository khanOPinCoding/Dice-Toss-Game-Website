window.onload = choosePic;



var basePath = "C:/The complete web development - Udemy/The Boss Project- Dicee/images";

function choosePic() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    document.getElementById("image1").setAttribute("src", ("dice" + randomNumber1 + ".png"));
    document.getElementById("image2").setAttribute("src", ("dice" + randomNumber2 + ".png"));
    if (randomNumber1 > randomNumber2) {
        document.getElementById("bigHeading").innerText = "🎃Player 1 Wins!"
    } else if (randomNumber1 === randomNumber2) {
        document.getElementById("bigHeading").innerText = "It's a Tie !"
    } else if (randomNumber1 < randomNumber2) {
        document.getElementById("bigHeading").innerText = "Player 2 Wins!🎃"
    }
}