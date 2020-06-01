let formCar = document.getElementById("car");
let $selectColorful = document.getElementById("colorful");
let $selectMark = document.getElementById('mark');
let $selectYears = document.getElementById('years');


formCar.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log("Hello Car");
  console.log($selectColorful.value);
  console.log($selectMark.value);
  console.log($selectYears.value);

  let car = {
    colors: $selectColorful.value,
    name: $selectMark.value,
    data: $selectYears.value,
  }
  let colors = document.guerySelector($selectColorful.value),
  
  };
}); 