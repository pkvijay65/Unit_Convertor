/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let num = 0;
let type = document.getElementById("type");
let length = document.getElementById("length");
let volume = document.getElementById("volume");
let mass = document.getElementById("mass");

function pEnter() {
  num = type.value;
  convertMeters();
  convertLiters();
  convertKilo();
}

function convertMeters() {
  let meters = (num * 0.3048).toFixed(2);
  let feet = (num * 3.2808).toFixed(2);
  length.textContent = `${num} meters = ${feet} feet | ${num} feet = ${meters} meters`;
}

function convertLiters() {
  let liters = (num * 0.264172).toFixed(2);
  let gallons = (num * 3.78541).toFixed(2);
  volume.textContent = `${num} liters = ${liters} gallons | ${num} gallons = ${gallons} liters`;
}

function convertKilo() {
  let kilos = (num * 2.20462).toFixed(2);
  let pounds = (num * 0.453592).toFixed(2);
  mass.textContent = `${num} kilos = ${kilos} pounds | ${num} pounds = ${pounds} kilos`;
}