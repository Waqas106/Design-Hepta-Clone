document.getElementById("menu").addEventListener("click", function(){

    list.style.display = (list.style.display === "none")? "flex" : "none" ;
    
});


let list = document.getElementById("site-navbar");
let close = document.getElementById("close-menu");

close.addEventListener("click", function(){
    list.style.display = "none";
});