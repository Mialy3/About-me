var navbar = document.getElementById('navbar');

let changeColorNav = () => {
    var y = window.pageYOffset
    if(y <= 549){
        navbar.classList.replace('bg-dark','bg-transparent')
        navbar.classList.replace('bg-light','bg-transparent')
        navbar.classList.replace('navbar-light','navbar-dark')
    }
    if(y>=550 && y <= 1649){
        navbar.classList.replace('bg-transparent','bg-light')
        navbar.classList.replace('bg-dark','bg-light')
        navbar.classList.replace('navbar-dark','navbar-light')
    }
    if(y >= 1650 && y <= 2633){
        navbar.classList.replace('bg-transparent','bg-dark')
        navbar.classList.replace('bg-light','bg-dark')
        navbar.classList.replace('navbar-light','navbar-dark')
    }
    if(y >= 2634 && y <= 3999){
        navbar.classList.replace('bg-transparent','bg-light')
        navbar.classList.replace('bg-dark','bg-light')
        navbar.classList.replace('navbar-dark','navbar-light')
    }
    if(y >= 4000){
        navbar.classList.replace('bg-transparent','bg-dark')
        navbar.classList.replace('bg-light','bg-dark')
        navbar.classList.replace('navbar-light','navbar-dark')
    }
}
window.addEventListener('load',changeColorNav)
window.addEventListener('scroll',changeColorNav);
window.addEventListener('resize',changeColorNav)