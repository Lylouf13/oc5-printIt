// Getting Arrow elements
const arrows = document.querySelectorAll(".arrow")

// Getting Dots Container
const dotsContainer = document.querySelector(".dots")
const dots = []

// Getting the caroussel img
const carousselCurrent = document.querySelector(".banner-img")
let carousselIndex = 0
// Getting the caroussel txt
const carousselText = document.getElementById("banner-txt")

// Container for image paths to give to the caroussel
const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Dots Generation
for (let i=0; i<slides.length; i++){
	let newDot = document.createElement("div")
	newDot.classList.add("dot")
	if(i===0){
		newDot.classList.add("dot_selected")
	}
	dotsContainer.appendChild(newDot)
	dots.push(newDot)
}

// Arrow Functions => will modify the caroussel state
arrows[0].addEventListener("click", () =>{
	dots[carousselIndex].classList.remove("dot_selected")

	if(carousselIndex === 0){
		carousselIndex=slides.length-1
	}
	else{	
		carousselIndex--
	}

	dots[carousselIndex].classList.add("dot_selected")
	carousselCurrent.setAttribute("src", slides[carousselIndex].image)
	carousselText.innerHTML=slides[carousselIndex].tagLine
})

arrows[1].addEventListener("click", () =>{
	dots[carousselIndex].classList.remove("dot_selected")
	carousselIndex++

	if(carousselIndex === slides.length){
		carousselIndex = 0
	}

	dots[carousselIndex].classList.add("dot_selected")
	carousselCurrent.setAttribute("src", slides[carousselIndex].image)
	carousselText.innerHTML=slides[carousselIndex].tagLine
})

