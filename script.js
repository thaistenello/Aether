//Locomotive Scroll
function locomotiveScroll(){
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"), 
      smooth: true
    });
    
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, 
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    ScrollTrigger.refresh();
}locomotiveScroll()

//GSAP from Menu Overlay
function menuOverlay(){
    document.addEventListener("DOMContentLoaded",function(){
        let tl = gsap.timeline({ paused: true });
    
        tl.to("#menu-overlay",{
            duration: 1,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%",
            ease: "power1.out",
        });
    
        tl.from(".menu-link, .btn",{
                opacity: 0,
                y: 60,
                stagger: 0.05,
                duration: 0.75,
                ease: "power1.inOut",
            },
        );
    
        tl.to("#video-preview",{
                duration: 1,
                height: "200px",
                ease: "power2.out",
            },
        "<",
        );
    
        tl.to(".menu-divider",{
                duration: 2,
                width: "100%",
                ease: "power4.out",
            },
        "<",
        );
    
        function openMenu() {
            document.querySelector("#menu-overlay").style.pointerEvents = "all";
            tl.play();
        }
    
        function closeMenu() {
            document.querySelector("#menu-overlay").style.pointerEvents = "none";
            tl.reverse();
        }
    
        document.querySelector(".menu-open-btn").addEventListener("click", openMenu);
        document.querySelector(".menu-close-btn").addEventListener("click", closeMenu);
        tl.reverse();  
    });
    
}menuOverlay()

//PAGE 1 / HOME - GSAP cursor ball effect 
function cursorEffect(){
    var page1Content = document.querySelector("#page1-content")
    var cursor = document.querySelector("#cursor")

page1Content.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y
    })
})

page1Content.addEventListener("mouseenter", function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})
page1Content.addEventListener("mouseleave", function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})
}cursorEffect()

//PAGE 2 / TEXT - GSAP text animation
function page2Animation(){
    gsap.from("#page2-text .elem h1",{
        y:120,
        stagger:0.25,
        duration:2,
        scrollTrigger:{
            trigger: "#page1-content h1",
            scroller:"#main",
            start:"top",
            end: "top 90%",
            // markers:true,
            scrub:3
        }
    })
}page2Animation()

//PAGE 3 / MARS - GSAP animation from Mars Moons
function marsMoons(){
    
    const phobos = document.querySelector('.phobos');
    const deimos = document.querySelector('.deimos');
    const seat = document.querySelector('#seat');

    gsap.to(phobos, {
      rotation: 360,
      duration: 8,
      repeat: -1,
      ease: 'none'
    });
  
    gsap.to(deimos, {
      rotation: -360,
      duration: 8,
      repeat: -1,
      ease: 'none'
    });

    // gsap.to(seat, {
    //   rotation: 360,
    //   duration: 8,
    //   repeat: -1,
    //   ease: 'none'
    // });

}marsMoons()

//PAGE 4 / TEXT - GSAP text animation
function page4Animation(){
    gsap.from("#page4-text .elem h1",{
        y:120,
        stagger:0.25,
        duration:2,
        scrollTrigger:{
            trigger: ".btn-seat",
            scroller:"#main",
            start:"top",
            end: "top 80%",
            // markers:true,
            scrub:3
        }
    })
}page4Animation()

//PAGE 6 / TEXT - GSAP text animation
function page6Animation(){
    gsap.from("#page6-text .elem h1",{
        y:120,
        stagger:0.25,
        duration:2,
        scrollTrigger:{
            trigger: "#page5-elements",
            scroller:"#main",
            start:"top -50%",
            end: "top 100%",
            // markers:true,
            scrub:3
        }
    })
}page6Animation()

//PAGE 7 / CAROUSSEL- GALLERY - SWIPER animation
function gallery(){
    const swiper = new Swiper(".swiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 500,
          disableOnInteraction: false,
        },
        speed: 10000,
        slidesPerView: 4,
        initialSlide: 2,
        loop: true,  
        
        breakpoints: {
            // when window width is >= 320px
            320: {
              slidesPerView: 1.5,
              spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
              spaceBetween: 40
            },
            // when window width is >= 900px
            900: {
              slidesPerView: 3.5,
              spaceBetween: 40
            },
            // when window width is >= 1000px
            1000: {
              slidesPerView: 4,
              spaceBetween: 40
            }
          }
    });







}gallery()

//FOOTER EATHER - GSAP text animation
function footer(){
    if (window.innerWidth<430) {
        var height=`70%`
    }

    else{
        var height=`20%`
    }

    gsap.from("#footer-bottom h1",{
        y:-350,
        stagger:0.2,
        // opacity:0,
        duration:3,
        scrollTrigger:{
            trigger:".swiper-slide",
            scroller:"#main",
            start:`bottom ${height}`,
            end:"bottom",
            scrub:5
        }
    })
}footer()

//LOADER
function loader(){
    var tl = gsap.timeline()

    tl.from("#loader h3", {
        x: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        delay: 0.5
    });
    
    tl.to("#loader h3", {
        x: -30,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        delay: 0.5
    });
    
    tl.to("#loader", {
        opacity: 0,
        y: "-100%"
    });
    
    tl.from("#page1-content h1 span", {
        y: 300,
        opacity: 0,
        stagger: 0.1,
        delay: -0.5
    });

    tl.to("#loader",{
        display: "none"
    })
}loader()

