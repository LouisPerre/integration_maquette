const menuBurger = document.querySelector(".material-icons")
const menuBurgerContent = document.querySelector(".toggle")

menuBurger.addEventListener("click", function() {
    menuBurgerContent.classList.toggle('open')
    //choice.classList.toggle('open')
})

window.addEventListener('resize', () =>{
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
})
