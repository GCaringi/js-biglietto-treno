let firstName = "Gianni"

let age = parseInt((Math.random() * 99) + 1);
let distance = Math.round((((Math.random()* 1000) + 1) + Number.EPSILON) * 100) / 100;

document.getElementById("firstName").innerHTML = firstName;
document.getElementById("age").innerHTML = age;
document.getElementById("distance").innerHTML = distance;

let price;

if (age >= 65){
    price = Math.round(((distance * 0.21 * 0.4) + Number.EPSILON) * 100) / 100;
}else if (age < 18){
    price = Math.round(((distance * 0.21 * 0.2) + Number.EPSILON) * 100) / 100;
}else{
    price = Math.round(((distance * 0.21) + Number.EPSILON) * 100) / 100;
}

document.getElementById("price").innerHTML = price;