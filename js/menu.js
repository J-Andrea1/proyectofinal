const hamburguer = document.querySelector('.hamburger');
const menu = document.querySelector('.menu-navegacion');

//console.log(menu);
//console.log(hamburguer);

hamburguer.addEventListener('click', ()=>{
    menu.classList.toggle("spread") /* al dar click en el menu hamburguesa se despliegla o se guarda*/
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != hamburguer){

        menu.classList.toggle("spread")
    } /*condicion para q al dar click en un lugar diferente de menu o hamburguer se oculte el menu */ 
}) 
