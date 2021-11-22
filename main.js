/*Hamburger menu:
mostrare / nascondere il menu principale
(per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile)
*/
let barsMenu = document.querySelector (".fa-bars");
console.log (barsMenu.className);

let hamburgerMenu = document.querySelector (".hamburger-menu")
console.log(hamburgerMenu.className);

barsMenu.addEventListener("click", function(){ 
    hamburgerMenu.style.display = "block"; 
}); 

let closeMenu = document.querySelector (".fa-times");
console.log (closeMenu.className);

closeMenu.addEventListener("click", function(){ 
    hamburgerMenu.style.display = "none"; 
}); 