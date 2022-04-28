let firstName = prompt("What's your name?");
let age = Number(prompt("How old are you?"));
let distance = Number(prompt("How much kilometers you have to do?"));
let price;

// age = parseInt((Math.random() * 99) + 1);
// distance = Math.round((((Math.random()* 1000) * 1) + Number.EPSILON) * 100) / 100;

document.getElementById("firstName").innerHTML = firstName;
document.getElementById("age").innerHTML = age;
document.getElementById("distance").innerHTML = distance;

if (age >= 65){
    price = Math.round(((distance * 0.21 * 0.4) + Number.EPSILON) * 100) / 100;
}else if (age < 18){
    price = Math.round(((distance * 0.21 * 0.2) + Number.EPSILON) * 100) / 100;
}else{
    price = Math.round(((distance * 0.21) + Number.EPSILON) * 100) / 100;
}

document.getElementById("price").innerHTML = price;