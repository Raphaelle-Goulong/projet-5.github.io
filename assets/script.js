const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// evenement click
let arrow = document.querySelector(".arrow_left");
arrow.addEventListener("click", function(){
	console.log("vous avez cliqué sur le bouton gauche")
});
let arrow1 = document.querySelector(".arrow_right");
arrow1.addEventListener("click", () =>{
	console.log("vous avez cliqué sur le bouton droit")
});
// evenement click


// evenement ajout dot
let body = document.querySelector(".dots")
let html = `
	<div class="dot"></div>
	<div class="dot"></div>
	<div class="dot"></div>
	<div class="dot"></div>
`
body.innerHTML = html
// evenement ajout dot


// ajout d'une class
let addClass = document.querySelector(".dot")
addClass.classList.add("dot_selected")
// ajout d'une class


// boucle image
for (let i = 0; i < slides.length; i++) {
	// const element = dot[slides];
	console.log(slides );
}
// boucle image


