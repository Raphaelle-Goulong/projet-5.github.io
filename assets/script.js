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

let text = 0
console.log(slides[text].tagLine);


// evenement click
const arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", function(){
	index--
	if (index < slides.length) {
		console.log("repeat");
		index = index
	} 
	console.log(index)
	let bannerImg= document.querySelector(".banner-img")
	bannerImg.src= "./assets/images/slideshow/" + slides[index].image

	text--
	if (text >= slides.length) {
		console.log("repeat");
		text = 0
	} 
	let paragraphe = document.querySelector("p")
	paragraphe.innerHTML = "" + slides[text].tagLine 
	console.log(paragraphe);
});
const arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", () =>{
	index++
	// let repeatAgain = 0
	if (index >= slides.length) {
		console.log("repeat");
		index = 0
	} 
	//(faire la condition ici)
	// console.log(index)
	let bannerImg= document.querySelector(".banner-img")
	bannerImg.src= "./assets/images/slideshow/" + slides[index].image

    text++
	if (text >= slides.length) {
		console.log("repeat");
		text = 0
	} 
	let paragraphe = document.querySelector("p")
	// paragraphe.textContent = " " + slides[text].tagLine
	paragraphe.innerHTML = "" + slides[text].tagLine 
	console.log(paragraphe);
});
// evenement click


// evenement ajout dot
let dots = document.querySelector(".dots")

// boucle dot
for (let i = 0; i < slides.length; i++) {
	let div = document.createElement("div")
	div.classList.add("dot")
	// console.log(test);
	dots.appendChild(div)
		// console.log(slides[1]);
}
// boucle dot
let dotMove = 0

let addClass = document.querySelectorAll(".dot")
addClass[0].classList.add("dot_selected")

dotMove++ 
	if (addClass >= slides.length ) {
		addClass = 0
		
	}

// }

