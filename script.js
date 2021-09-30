let searchForm = document.querySelector(".search-form");
document.querySelector('#search-btn').onclick = () =>{
    
    searchForm.classList.toggle("active");
    navBar.classList.remove("active");
}

let navBar= document.querySelector(".navbar");
document.querySelector('#menu-btn').onclick = () =>{
    
    navBar.classList.toggle("active");
    searchForm.classList.remove("active");
}

window.onscroll = ()=>{
    searchForm.classList.remove("active");
    navBar.classList.remove("active");

    if(window.scrollY>0){
        document.querySelector(".header").classList.add("active");
    }
    else{
        document.querySelector(".header").classList.remove("active");
    }

}
window.onload = ()=>{
    if(window.scrollY>0){
        document.querySelector(".header").classList.add("active");
    }
    else{
        document.querySelector(".header").classList.remove("active");
    }

}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    centeredSlides: true,
    autoplay: {
    delay: 9500,
    disableOnInteraction: false,
    },
  });


  var swiper = new Swiper(".products-slider", {
    spaceBetween: 20,
   
    loop:true,
    
    centeredSlides: true,
    autoplay: {
    delay: 9500,
    disableOnInteraction: false,
    },
    grabCursor:true,
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,

        },
        991: {
          slidesPerView: 3,
        
        },
      },
  });