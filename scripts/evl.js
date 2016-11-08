"use strict";
var userInput = document.getElementById("userInput");
var clearBTN = document.getElementById("clearBTN");
var userText = "";


var CarLot = (function(oldCars){
	let DOMcars = document.getElementsByClassName("divObjects");
	oldCars.activateEvents = function(){


	// let output = document.getElementById("output");
	// console.log("output = ", output);
		Array.from(DOMcars).forEach(function(item){
			item.addEventListener("click", function(event){
				CarLot.resetClass(DOMcars);
				CarLot.switchClass(item);
				oldCars.findParagraph(item);
				document.getElementById("userInput").focus();
				});
			});
	};


		// console.log("userText", userText);

	oldCars.findParagraph = function(item){
		userText = item.querySelector(".selected");
		userInput.addEventListener("keyup", oldCars.editText);
	};

		clearBTN.addEventListener("click", function(event){
			oldCars.clearInput();
		});


		oldCars.clearInput = function() {
			userInput.value = "";
		};

		oldCars.editText = function() {
			userText.innerHTML = userInput.value;
			if(event.keyCode === 13){
				oldCars.clearInput();
			}
		};
	return oldCars;
})(CarLot || {});