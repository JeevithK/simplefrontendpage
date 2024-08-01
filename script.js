let search = document.querySelector(".searchbox");
let searchicon = document.querySelector("#searchicon");

searchicon.addEventListener("click", () => {
    search.classList.toggle("active"); // Remove the extra space
});

let nav = document.querySelector(".navbar");
let menu=document.querySelector("#menuicon")
document.addEventListener("click", () => {
    nav.classList.toggle("active"); // Remove the extra space
});