// Search Form
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');

    navMenuBar.classList.remove("active");
    shoppingCart.classList.remove("active");
    loginForm.classList.remove('active');
}

// Shopping Cart
let shoppingCart = document.querySelector(".shopping-cart");
let btncloseCart = document.querySelector(".shopping-cart .icon-close");

document.querySelector('#shopping-cart-btn').onclick = () => {
    shoppingCart.classList.toggle("active");

    navMenuBar.classList.remove("active");
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
}
btncloseCart.onclick = () => {
    shoppingCart.classList.remove("active");
}

// Form Login
let loginForm = document.querySelector(".login-form");
let btncloseLoginForm = document.querySelector(".login-form .icon-close");

document.querySelector("#login-btn").onclick = () => {
    loginForm.classList.toggle('active');

    navMenuBar.classList.remove("active");
    searchForm.classList.remove('active');
    shoppingCart.classList.remove("active");
}
btncloseLoginForm.onclick = () => {
    loginForm.classList.remove('active');
}

// Menu Bars
let navMenuBar = document.querySelector(".navbar");

document.querySelector("#menu-bar-btn").onclick = () => {
    navMenuBar.classList.toggle("active");

    searchForm.classList.remove('active');
    shoppingCart.classList.remove("active");
    loginForm.classList.remove('active');
}

let scrollTop = document.querySelector('.scroll-top i');

window.onscroll = () => {
    navMenuBar.classList.remove("active");
    searchForm.classList.remove('active');
    shoppingCart.classList.remove("active");
    loginForm.classList.remove('active');

    // scroll to top
    if(scrollY > 400) {
        scrollTop.classList.add('active');
    }
    else {
        scrollTop.classList.remove('active');
    }
}

// scroll to top on click
scrollTop.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

// Function onload loading gif
function loading() {
    document.querySelector(".loading-container").classList.add("active");
}
function fadeOut() {
    setInterval(loading, 2500);
}
window.onload = fadeOut();



// SwiperJS
var swiper = new Swiper(".products-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
var swiper = new Swiper(".reviews-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});