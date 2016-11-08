"use strict";

let selectedCar = null;


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
		});
	};

	return oldCars;
})(CarLot || {});