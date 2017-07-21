const inputArea = document.getElementById("input");
const createButton = document.getElementById("create-btn");
const cardDeck = document.getElementById("card-deck");

/* 
When the user enters in text into the text area and then clicks the create button,
 create a new card element in the DOM that includes it's own delete button.
 You decide the height/width of the card.
*/

createButton.addEventListener("click", event => {
	cardDeck.innerHTML = `
			<div id="card">
				<p>${input.value}</p>
				<br>
				<button id="delete-btn">Delete</button>
			</div>`;

	/*
	When the user clicks the Delete button, the containing card, 
	and no other cards, should then be removed from the DOM. 
	Not just made invisible, actually removed from the DOM.
	*/

	document.getElementById("delete-btn").addEventListener("click", event => {
		document.getElementById("card").remove();
	});
});	


	
