"use strict";

var carLot = document.getElementById("carLot");
var userInput = document.getElementById("userInput");
var selectedCar = null;
var userText = null;

function makeCarCards (inventory) {
	inventory.forEach(function(item, index){
		let carCard = `<div class="col-md-4 addBlack" id="car--${index}">
										<h4>Make: ${item.make}</h4>
										<h4>Model: ${item.model}</h4>
										<h4>Year: ${item.year}</h4>
										<h4>Price: $${item.price}</h4>
										<p>Description: ${item.description}</p>
									 </div>`;
									 carLot.innerHTML += `<div class="divObjects">${carCard}</div>`;
									 let carID = document.getElementById(`car--${index}`);
	});
}

Array.from(carLot.children).forEach(function(item){
	item.addEventListener("click", function(event){
		if(selectedCar !== null){
		selectedCar.classList.remove("activeCard");
		}
		selectedCar = item;
		console.log("selectedCar", selectedCar);
		selectedCar.classList.add("activeCard");
		userText = selectedCar.getElementsByTagName('p')[0];
		userInput.focus();

	});
});

userInput.addEventListener("keyup", function(event){
	userText.innerHTML = userInput.value;
		if(event.keyCode === 13){
			userInput.value = "";
		}
});



CarLot.loadInventory(makeCarCards);