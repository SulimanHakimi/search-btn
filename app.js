let searchBtn = document.getElementById("search");
let closeBtn = document.getElementById("close");
let input = document.getElementById("input");

  searchBtn.addEventListener("click", () => {
    searchBtn.style.left = "39.7%";
    closeBtn.style.display = "flex";
    searchBtn.style.border = "none";
    input.style.opacity = "1";
    searchBtn.style.fontSize = "18px";
})
closeBtn.addEventListener("click", () => {
    searchBtn.style.left = "57%";
    closeBtn.style.display = "none";
    searchBtn.style.border = "2px solid black";
    input.style.opacity = "0";

});
