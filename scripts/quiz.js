"use strict";

var output = document.getElementById("output");

function makeCarCards (inventory) {
	inventory.forEach(function(item, index){
		let carCard = `<div class="col-md-4 addBlack divObjects" id="car--${index}">
										<h4>Make: ${item.make}</h4>
										<h4>Model: ${item.model}</h4>
										<h4>Year: ${item.year}</h4>
										<h4>Price: $${item.price}</h4>
										<p>Description: ${item.description}</p>
									 </div>`;
									 output.innerHTML += `${carCard}`;
									 let carID = document.getElementById(`car--${index}`);
									 let descriptionArea = document.getElementById(`p--${index}`);

	});
	CarLot.activateEvents();
}



		// selectedCar = item;
		// console.log("selectedCar", selectedCar);
		// selectedCar.classList.add("activeCard");
		// userText = selectedCar.getElementsByTagName("p")[0];
		// userInput.focus();






CarLot.loadInventory(makeCarCards);