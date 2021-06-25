

//////////////////////////
// Define our Variables
//////////////////////////

// hamburger menu
const burgerIcon = document.querySelector("#burger");
const navbarMenu = document.querySelector(".navbar-menu");
//Carousel
let image = 1;
const $img = $("#carousel-images");
const $back = $("#back");
const $forward = $("#forward");


// Event listener for hamburger menu
burgerIcon.addEventListener("click", () => {
  console.log(burgerIcon);
  navbarMenu.classList.toggle("is-active");
});

// Carousel Images Array

const images = [
  "https://cdn2.thedogapi.com/images/xJJyuYXJS.jpg",
  "https://cdn2.thedogapi.com/images/r1VV7pTV7.gif",
  "https://cdn2.thedogapi.com/images/SkFt1gc47_1280.jpg",
  "https://cdn2.thedogapi.com/images/qwqPTppkA.jpg",
  "https://cdn2.thedogapi.com/images/PJvRHYfs1.jpg",
  "https://cdn2.thedogapi.com/images/GZeDDro7-.jpg",
  "https://cdn2.thedogapi.com/images/Sypubg54Q_1280.jpg",
  "https://cdn2.thedogapi.com/images/IRrPFImEC.jpg",
  "https://cdn2.thedogapi.com/images/6f5n_42mB.jpg",
];

// Handler for forward button

const forwardClick = (event) => {
  console.log("logo");
  if (image === images.length) {
    image = 0;
    $img.attr("src", images[image]);
  } else {
    $img.attr("src", images[image]);
    image++;
  }
};

const backClick = (event) => {
  console.log("image");
  if (image === images.length) {
    image = 8;
    $img.attr("src", images[image]);
  } else {
    $img.attr("src", images[image]);
    image--;
  }
};


// Event Listeners for forward/back buttons

$forward.on("click", forwardClick);
$back.on("click", backClick);


/////////////
