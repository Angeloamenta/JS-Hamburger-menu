/*Hamburger menu:
mostrare / nascondere il menu principale
(per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile)
*/
let bars = document.getElementsByClassName ("fa-bars");
console.log (bars);
let hamburgerMenu = document.getElementsByClassName("hamburger-menu");
console.log(hamburgerMenu);

bars.addEventListener("click" function () {
    let hamburgerMenu = document.getElementsByClassName("hamburger-menu");
    hamburgerMenu.style.display = "block"; 
});