"use strict";

let selectedCar = null;
var userInput = document.getElementById("userInput");


var CarLot = (function (oldCars){
	oldCars.switchClass = function(item){
	selectedCar = item;
	selectedCar.classList.add("activeCard");
	selectedCar.querySelector("p").classList.add("selected");

	};
	oldCars.resetClass = function(DOMcars){
		Array.from(DOMcars).forEach(function(car){
			car.classList.remove("activeCard");
			car.querySelector("p").classList.remove("selected");
			userInput.removeEventListener("click", CarLot.editText);
			console.log("editText: ", CarLot.editText);
		});
	};

	return oldCars;
})(CarLot || {});