const navToggle = document.querySelector(".nav-toggle");
const headerNav = document.querySelector(".header-nav");

navToggle.addEventListener("click", function(){
    headerNav.classList.toggle("show-nav");
})

const header = document.querySelector(".header");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function(){
    const scrollHeight = window.pageYOffset;
    const headerHeight = header.getBoundingClientRect().height;
    if (scrollHeight > headerHeight) {
        header.classList.add("fixed-nav")
    }  else{
        header.classList.remove("fixed-nav");
    }
    if (scrollHeight > 500) {
        topLink.classList.add("scroll-link")
    } else {
        topLink.classList.remove("scroll-link")
    }
})

