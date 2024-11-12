
//checking how many buttons there are 
let n = document.querySelectorAll(".drum").length;

//detecting button on the screen pressed
for( let i=0; i<n; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick)
}

function handleClick(){
    let key = this.innerHTML;
    playSound(key);
    buttonAnimation(key);
    // this keyword inside the event listener function refers to the element that the event 
    // listener is attached to. In this case, it refers to the individual .drum button that 
    // was clicked.

    // When you use console.log(this), it will log the specific DOM element that triggered 
    // the event. For example, if you click on a button with the .drum class, this will refer 
    // to that particular button element, and it will be printed in the console.
}

//detecting keybord press 
document.addEventListener("keydown", function(event){
    playSound(event.key);
    buttonAnimation(event.key);}
);

function playSound(key){
    switch(key){
        case "w":
            let crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        
        case "a":
            let kick = new Audio('./sounds/kick-bass.mp3');
            kick.play();
            break;
        case "s":
            let snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            let tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case"j":
            let tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case"k":
            let tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case"l":
            let tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
            alert("Somthing is not working right");
    }
}

function buttonAnimation(key){
    let activeButton = document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(function(){activeButton.classList.remove("pressed")}, 100);
}

