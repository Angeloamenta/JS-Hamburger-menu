/*Hamburger menu:
mostrare / nascondere il menu principale
(per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile)
*/
let barsMenu = document.querySelector (".fa-bars");
console.log (barsMenu);
let hamburgerMenu = document.querySelector (".hamburger-menu")
console.log(hamburgerMenu);

barsMenu.addEventListener("click", function(){ 
    hamburgerMenu.style.display = "block"; 
}); 