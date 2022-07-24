let burgericon = document.querySelector('.burgericon');
let menuBtns = document.querySelectorAll('.navlinks')
let menu = document.querySelector('nav');
let app = document.querySelector('.app');
let scrollBtn = document.querySelector('.scroll-top');
let navlink1 = document.getElementById('navlink1');
let navlink3 = document.getElementById('navlink3');
let navlink1PC = document.getElementById('navlink1_pc');
let navlink3PC = document.getElementById('navlink3_pc');

scrollBtn.style.opacity = "0"

window.addEventListener('scroll', function() {
    hidden = (pageYOffset < document.documentElement.clientHeight * 2);
    if (hidden) {
        scrollBtn.style.opacity = "0"
    } else {
        scrollBtn.style.opacity = "1"
    }
});

navlink3PC.addEventListener('click', () => {
    window.scrollTo({
        top: 10000,
        left: 0,
        behavior: "smooth"
    })
})

navlink1PC.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})

navlink3.addEventListener('click', () => {
    window.scrollTo({
        top: 10000,
        left: 0,
        behavior: "smooth"
    })
})

navlink1.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})

burgericon.addEventListener('click', () => {
    menu.classList.toggle('close')
})

menuBtns.forEach((i) => {
    i.addEventListener('click', () => {
        menu.classList.add('close')
    })
})

app.addEventListener('click', () => {
    menu.classList.add('close')
})

