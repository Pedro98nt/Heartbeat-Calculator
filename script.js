idade = prompt("How old are you?");
console.log(idade);

function batidas(idade){
heart = (1440*(365*idade));
return heart
}
console.log("seu coração bateu " + batidas(idade));

document.getElementById("resultado").innerHTML = "His heart beat, on average, about " + heart + " times during his life.";

//his heart beat, on average, about 10 times during his life.