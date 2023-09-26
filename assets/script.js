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
	console.log(index)
	let bannerImg= document.querySelector(".banner-img")
	bannerImg.src= "./assets/images/slideshow/" + slides[index].image

	let paragraphe = document.querySelector("p")
	paragraphe.p =  " " + slides[index].tagLine
	console.log(paragraphe);
});
const arrowRight = document.querySelector(".arrow_right");
arrowRight.addEventListener("click", () =>{
	index++
	//(faire la condition ici)
	console.log(index)

	let bannerImg= document.querySelector(".banner-img")
	bannerImg.src= "./assets/images/slideshow/" + slides[index].image

	let paragraphe = document.querySelector("p")
	paragraphe.textContent = + slides[text].tagLine
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

let addClass = document.querySelectorAll(".dot")
addClass[0].classList.add("dot_selected")


