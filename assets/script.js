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

// evenement click left
const arrowLeft = document.querySelector(".arrow_left");
arrowLeft.addEventListener("click", function(){
	// ceci supp les dots 
	dots[index].classList.remove("dot_selected")
	// ceci supp les dots 
	index--
	// condition qui permet de revenir à la fin du tableau
	if (index === -1) {
		console.log(index);
		index = slides.length -1
	} 
	// condition qui permet de revenir à la fin du tableau

	// ceci permet au point de s'afficher sur l'image de l'index
	dots[index].classList.add("dot_selected")
	// ceci permet au point de s'afficher sur l'image de l'index
	let bannerImg= document.querySelector(".banner-img")
	bannerImg.src= "./assets/images/slideshow/" + slides[index].image

	let paragraphe = document.querySelector("p")
	paragraphe.innerHTML = "" + slides[index].tagLine 
	console.log(paragraphe);
});
// evenement click left end

// evenement click right
const arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", () =>{
	dots[index].classList.remove("dot_selected")
	index++
	
	if (index >= slides.length) {
		console.log("repeat");
		index = 0
	} 
	// ceci permet au point de s'afficher sur l'image de l'index
	dots[index].classList.add("dot_selected")
	// ceci permet au point de s'afficher sur l'image de l'index

	let bannerImg= document.querySelector(".banner-img")
	bannerImg.src= "./assets/images/slideshow/" + slides[index].image

	let paragraphe = document.querySelector("p")
	paragraphe.innerHTML = "" + slides[index].tagLine 
	console.log(paragraphe);
});
// evenement click right end


// evenement ajout dot
let dot = document.querySelector(".dots")

// boucle dot
for (let i = 0; i < slides.length; i++) {
	let div = document.createElement("div")
	div.classList.add("dot")
	dot.appendChild(div)	
}
// boucle dot


let dots = document.querySelectorAll(".dot")
dots[0].classList.add("dot_selected")


