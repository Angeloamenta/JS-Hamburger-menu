/*Hamburger menu:
mostrare / nascondere il menu principale
(per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile)
*/
let barsMenu = document.querySelector (".header-right .fas.fa-bars");
console.log (barsMenu.className);

let hamburgerMenu = document.querySelector (".hamburger-menu")
console.log(hamburgerMenu.className);

barsMenu.addEventListener("click", function(){ 
    
    hamburgerMenu.className = "active hamburger-menu";
    console.log(hamburgerMenu);
}); 

let closeMenu = document.querySelector (".close .fas.fa-times");
console.log (closeMenu.className);

closeMenu.addEventListener("click", function(){ 
    hamburgerMenu.className = "hamburger-menu";
    console.log(hamburgerMenu);
}); 

//cambio colore ad un elemento

let cta = document.querySelector (".cta");
cta.style.backgroundColor = "blue";

//aggiungo un elemento alla lista

let list = document.querySelector(".hamburger-menu>ul>li>a");
list.innerHTML = "ciao";
//aggiungo altri elementi con metodo differente
let listFine = document.querySelector(".hamburger-menu>ul");
listFine.innerHTML += 
`
<li><a>Prova1</a></li>
<li><a>Prova2</a></li>
`;