// Typing characters
var i = 0;
var typingWord = "How much of your hobbies do you know ? Click the button below to find out...";
var speed = 50;
var typer = document.querySelector("#typer");
var typer2 = document.querySelector("#typer2");

function typeWriter() {
    if ( i < 39 ) {
        typer.innerHTML += typingWord.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else if ( i < typingWord.length ) {
        typer2.innerHTML += typingWord.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        return false;
    }
}

document.addEventListener('load', typeWriter());