const menuBurger = document.querySelector(".material-icons")
const menuBurgerContent = document.querySelector(".toggle")

menuBurger.addEventListener("click", function() {
    menuBurgerContent.classList.toggle('open')
    //choice.classList.toggle('open')
})