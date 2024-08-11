// background theme toggle --------------------------------------

const body = document.querySelector("body")
const whiteThemeIcon = document.querySelector(".white-bk")
const blackThemeIcon = document.querySelector(".black-bk")
const whiteLogo = document.querySelector("[data-white-logo]")
const blackLogo = document.querySelector("[data-black-logo]")


function whiteBackgroundToDark(){
    localStorage.setItem("theme", "dark")
    body.classList.add("black-theme")

    whiteThemeIcon.classList.add("hidden")
    blackThemeIcon.classList.remove("hidden")
    
    blackLogo.classList.add("header__logo-hidden")
    whiteLogo.classList.remove("header__logo-hidden")
}

function blackBackgroundToWhite(){
    localStorage.setItem("theme", "white")
    body.classList.remove("black-theme")

    whiteThemeIcon.classList.remove("hidden")
    blackThemeIcon.classList.add("hidden")

    blackLogo.classList.remove("header__logo-hidden")
    whiteLogo.classList.add("header__logo-hidden")
}

if(localStorage.getItem("theme") === "dark"){
    whiteBackgroundToDark();
}


// --------------------------------------------------------

document.addEventListener("click", e => {

    // desctop dropwdown ----------

    const desctopDropdownBtn = e.target.matches("[data-dropdown-btn]")
    const descDropdown = document.querySelector("[data-dropdown-desc]")

    if(desctopDropdownBtn){
        descDropdown.classList.toggle("active")
    }

    if(e.target.matches(".header__dropdown__box-content")){
        descDropdown.classList.remove("active")
    }

    if(!e.target.closest("[data-dropdown-desc]")){
        descDropdown.classList.remove("active")
    }

    // burger icon dropdown -----------

    const burgerDropdownBtn = e.target.closest("[data-burger-dropdown-btn]")
    const burgerDropdown = document.querySelector("[data-dropdown-burger]")

    if(burgerDropdownBtn){
        e.target.closest("[data-dropdown-burger]").classList.toggle("dropdown--active")
    }

    if(e.target.matches("[data-gallery-btn]")){
        e.target.closest("[data-gallery-dropdown]").classList.toggle("active")
    }

    if(e.target.matches(".menu-dropdown__content-box") && !e.target.matches("[data-gallery-btn]") || e.target.matches(".gallery-dropdown__box-content")){
        e.target.closest("[data-dropdown-burger]").classList.remove("dropdown--active")
    }

    if(!e.target.closest("[data-dropdown-burger]")){
        burgerDropdown.classList.remove("dropdown--active")
    }
    
})


