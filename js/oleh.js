const $chooseCarInfo = document.getElementById("carform");
const $brandCar = document.getElementById("cars");
const $colorCar = document.getElementById("color-cars");
const $yearCar = document.getElementById("year-cars");
const $itemOfCars = document.querySelector(".item-of-cars")
const carArray = [];

$chooseCarInfo.addEventListener("submit", (event) => {
  event.preventDefault();
  const car = {
      brand: $brandCar.value,
      color: $colorCar.value,
      year: $yearCar.value
  }
  console.log($brandCar.value);
  console.log($colorCar.value);
  console.log($yearCar.value);
  $itemOfCars.innerHTML += '<li>' + car.brand + '</li>';

});
console.log($itemOfCars);

carArray.push(car);
console.log(carArray);

const $redtList = document.querySelector(".brand-list")
const $greentList = document.querySelector(".color-list")
const $whitetList = document.querySelector(".year-list")

