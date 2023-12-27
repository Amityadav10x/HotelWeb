let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
let searchIcon = document.querySelector('#search-icon');
let searchForm = document.querySelector('#search-form');

let prevScrollPos = window.scrollY;

menu.onclick = () => {
    console.log('Menu clicked');
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    let currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
        console.log('Scrolling down');
        navbar.classList.remove('active');
        menu.classList.remove('fa-times');
    } else {
        console.log('Scrolling up');
        navbar.classList.add('active');
    }

    prevScrollPos = currentScrollPos;

    sections.forEach(sec => {
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if (currentScrollPos >= offset && currentScrollPos < offset + height) {
            console.log('Active section:', id);
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header .navbar a[href="#' + id + '"]').classList.add('active');
            });
        }
    });
};

searchIcon.onclick = () => {
    console.log('Search icon clicked');
    searchForm.classList.toggle('active');
};

document.querySelector('#close').onclick = () => {
    console.log('Close icon clicked');
    searchForm.classList.remove('active');
};





var swiper = new Swiper(".home-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  keyboard: {
      enabled: true,
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});




var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableInteraction: false,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});



function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');

}

function fadeOut(){
    setInterval(loader,3000);
}

window.onload = fadeOut;