let firstName = "Gianni";
let age = 28;
let distance = 10;
let price;

if (age >= 65){
    price = Math.round(((distance * 0.21 * 0.4) + Number.EPSILON) * 100) / 100;
}else if (age < 18){
    price = Math.round(((distance * 0.21 * 0.2) + Number.EPSILON) * 100) / 100;
}else{
    price = Math.round(((distance * 0.21) + Number.EPSILON) * 100) / 100;
}

console.log(price);