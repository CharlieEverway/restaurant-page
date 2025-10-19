import "./styles.css";
import { loadHomePage } from "./home.js";
loadHomePage();


// import { testing } from "./index2.js";

// console.log(testing)


//when page loads, load homepage
//when a button is clicked (event listeners) wipe the DOM 
//load the next export function

const homeButton = document.getElementById('home');
function homeClicked() {
    alert('home was clicked!');
    loadHomePage();
}
homeButton.addEventListener('click', homeClicked);
//STOP ANY DOUBLE LOADING

const menuButton = document.getElementById('menu');
function menuClicked() {
    alert('menu was clicked!');
    document.getElementById('content').innerHTML = '';
}
menuButton.addEventListener('click', menuClicked);


const aboutButton = document.getElementById('about');
function aboutClicked() {
    alert('about was clicked!');
    document.getElementById('content').innerHTML = '';
}
aboutButton.addEventListener('click', aboutClicked);


const bookButton = document.getElementById('bookingButton');
function bookButtonClicked() {
    alert('book was clicked!');
    document.getElementById('content').innerHTML = '';
}
bookButton.addEventListener('click', bookButtonClicked);

//navbar buttons