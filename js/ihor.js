const $newCar = document.getElementById('choose-new-car');

console.log($newCar);

$newCar.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('New car');
});
