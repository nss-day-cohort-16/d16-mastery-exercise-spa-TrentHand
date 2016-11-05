"use strict";

var carLot = document.getElementById("carLot");

function makeCarCards (inventory) {
	inventory.forEach(function(item, index){
		let carCard = `<div class="col-md-4" id="car--${index}">
										<h4>Make: ${item.make}</h4>
										<h4>Model: ${item.model}</h4>
										<h4>Year: ${item.year}</h4>
										<h4>Price: ${item.price}</h4>
										<p>Description: ${item.desciption}</p>
									 </div>`;
									 carLot.innerHTML += `<div class="divObjects">${carCard}</div>`;
									 let carID = document.getElementById(`car--${index}`);
	});
}