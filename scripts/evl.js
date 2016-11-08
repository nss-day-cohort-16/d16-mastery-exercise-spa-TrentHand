"use strict";
var userInput = document.getElementById("userInput");
var clearBTN = document.getElementById("clearBTN");



var CarLot = (function(oldCars){
	let DOMcars = document.getElementsByClassName("divObjects");
	oldCars.activateEvents = function(){


	// let output = document.getElementById("output");
	// console.log("output = ", output);
		Array.from(DOMcars).forEach(function(item){
			item.addEventListener("click", function(event){
				CarLot.resetClass(DOMcars);
				CarLot.switchClass(item);
				findP(item);
				document.getElementById("userInput").focus();
				});
			});
	};


		// console.log("userText", userText);
	return oldCars;
})(CarLot || {});

function findP(item){
	var userText = item.querySelector(".selected");
	console.log("userText = ", userText);
	userInput.addEventListener("keyup", function(event){
	userText.innerHTML = userInput.value;
		if(event.keyCode === 13){
			clearInput();
		}
	});

}

	clearBTN.addEventListener("click", function(event){
		clearInput();
	});


	function clearInput() {
		userInput.value = "";
	}