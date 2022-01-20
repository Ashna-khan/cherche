const toggleButton = document.getElementById("toggle-button");
const closeButton = document.getElementById("close-button");
const navList = document.getElementById("nav-list");

if(toggleButton)
{
    toggleButton.addEventListener("click", ()=>{
    navList.classList.add("show")
    })
}
if(closeButton)
{
    closeButton.addEventListener("click", ()=>{
        navList.classList.remove("show");
    })
}
const navItems = document.querySelectorAll(".nav-item");
for(var i=0;i<navItems.length;i++)
{
    navItems[i].addEventListener("click", ()=>{
        navList.classList.remove("show");
    })
}
 

const serviceToggle = document.getElementById("service-toggle");
const Filter = document.getElementById("filter");
const serviceCloseButton = document.getElementById("service-close-button");
serviceToggle.addEventListener("click", ()=>{
    console.log("clicked");
    Filter.classList.remove("hide");
})
serviceCloseButton.addEventListener("click", ()=>{
    Filter.classList.add("hide");
})

