

let picture = document.querySelector("#image");
let button = document.querySelector(".button");
//created a function that makes the image display
let hide = document.querySelector(".close");
let hide_div = document.querySelector("#close-button");


function displayimage(){

//style the image that was hidden by
    picture.style.display ="block";
    button.innerHTML = "Here is something for you!"
}
    
button.addEventListener("click", displayimage);


function hideImg(){
    picture.style.display = "none";
    button.innerHTML = "view";
}

hide.addEventListener("click", hideImg);