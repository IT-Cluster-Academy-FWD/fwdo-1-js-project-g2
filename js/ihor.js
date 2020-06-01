const $newCar = document.getElementById('.choose_new_car');
const $brandCar = document.getElementById('.brand_car');
const $yearCar = document.getElementById('year_car');
const $colorCar = document.getElementById('color_car');

console.log()
console.log($newCar);

$newCar.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('New car');
  console.log('$brandCar.value');
  console.log('$yearCar.value');
  console.log('$colorCar.value');
});
