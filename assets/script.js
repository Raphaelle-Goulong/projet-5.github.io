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

let index = 0
console.log(slides[index].image);

// evenement click
const arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", function(){
	console.log("vous avez cliqué sur le bouton gauche")
});
const arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", () =>{
	console.log("vous avez cliqué sur le bouton droit")
});
// evenement click


// evenement ajout dot
let dots = document.querySelector(".dots")
// let html = `
// 	<div class="dot"></div>
	
// `
// body.innerHTML = html
// evenement ajout dot


// ajout d'une class

// ajout d'une class


// evenement ajout dot
// let main = document.querySelector("#banner")
// console.log(main);
// let mainImages = `
// 	<img class="banner-img" src="./assets/images/slideshow/slide2.jpg" alt="Banner Print-it">
// `
// body.innerHTML = mainImages
// evenement ajout dot




// boucle image
for (let i = 0; i < slides.length; i++) {
	let div = document.createElement("div")
	div.classList.add("dot")
	// console.log(test);
	dots.appendChild(div)
		// console.log(slides[1]);
}
// boucle image

let addClass = document.querySelectorAll(".dot")
addClass[0].classList.add("dot_selected")

