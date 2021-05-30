const menu = document.querySelector("#btnHamburger")
const header = document.querySelector(".header")
const overlay = document.querySelector(".overlay")
const mobileMenu = document.querySelector("#mobileMenu")
const body = document.querySelector("body")

menu.addEventListener("click", () => {

    if (header.classList.contains("open")) {
        header.classList.remove("open")
        overlay.classList.remove("fade-in")
        overlay.classList.add("fade-out")
        body.classList.remove("noScroll")
    } else {
        header.classList.add("open")
        overlay.classList.remove("fade-out")
        overlay.classList.add("fade-in")
        body.classList.add('noScroll')

    }

})


//Close mobile menu on click
mobileMenu.addEventListener('click', (e) => {
    if (e.target.nodeName === 'A') {
        header.classList.remove("open")
        overlay.classList.remove("fade-in")
        overlay.classList.add("fade-out")
        body.classList.remove('noScroll')
    }
})