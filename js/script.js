const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementsByClassName("navbar-links")[0]

toggleButton.addEventListener("click", () => {
   navbarLinks.classList.toggle("active")
})

const HiringOption = document.getElementsByClassName("whenHiring")[0]
function ifHiring (){
   if(document.getElementById("option_hiring").checked){
      HiringOption.classList.add("true")
   }else {
      HiringOption.classList.remove("true")
   }
}