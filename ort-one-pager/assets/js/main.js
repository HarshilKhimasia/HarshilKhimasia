gsap.registerPlugin(ScrollTrigger);




let mm = gsap.matchMedia();

//   Match Media For Desktop
mm.add("(min-width: 800px)", () => {
    var tl = gsap.timeline({scrollTrigger: {
        trigger: ".banner-section",
        start: "top top",
        end: "100%",
        scrub: true,
        pin: ".banner-section",
        pinSpacing: true,
        // toggleActions: "play none none none",
        //             play pause resume resest repeat complete none
        //              onenter onleave onenterback onleaveback
        // markers: true,
        
    }});
    
    tl.to(".banner-heading-one", { y: -360, duration: 8, });
    tl.to(".banner-heading-two", { y: -300, duration: 8, });
    tl.to(".banner-heading-three", { y: -360, duration: 8, });
    tl.to(".banner-heading-four", { y: -120, duration: 8, });


// second section timline start
    


    // second section timline end

// carousel section timeline start
    var tlc = gsap.timeline({scrollTrigger: {
      trigger: ".party-c",
      start: "50% 50%",
      end: "100%",
      scrub: true,
       pin: ".mixed-section",
      pinSpacing: true, 
      // toggleActions: "play none none none",
      //             play pause resume resest repeat complete none
      //              onenter onleave onenterback onleaveback
      markers: true,
      
  }});
  
  tlc.to(".party-c", { x: -1788, duration: 8});

  var tlc = gsap.timeline({scrollTrigger: {
    trigger: ".mood-c",
    start: "50% 50%",
    end: "100%",
    scrub: true,
    pinSpacing: true, 
    // toggleActions: "play none none none",
    //             play pause resume resest repeat complete none
    //              onenter onleave onenterback onleaveback
    markers: true,
    
}});

tlc.to(".mood-c", { x: -1788, duration: 8});

var tlc = gsap.timeline({scrollTrigger: {
    trigger: ".ambient-c",
    start: "50% 50%",
    end: "100%",
    scrub: true,
    pinSpacing: true, 
    // toggleActions: "play none none none",
    //             play pause resume resest repeat complete none
    //              onenter onleave onenterback onleaveback
    markers: true,
    
}});

tlc.to(".ambient-c", { x: -1788, duration: 8});

var tlc = gsap.timeline({scrollTrigger: {
  trigger: ".work-c",
  start: "50% 50%",
  end: "100%",
  scrub: true,
  pinSpacing: true, 
  // toggleActions: "play none none none",
  //             play pause resume resest repeat complete none
  //              onenter onleave onenterback onleaveback
  markers: true,
  
}});

tlc.to(".work-c", { x: -1788, duration: 8});

var tlc = gsap.timeline({scrollTrigger: {
  trigger: ".world-c",
  start: "50% 50%",
  end: "100%",
  scrub: true,
  pinSpacing: true, 
  // toggleActions: "play none none none",
  //             play pause resume resest repeat complete none
  //              onenter onleave onenterback onleaveback
  markers: true,
  
}});

tlc.to(".world-c", { x: -1788, duration: 8});

var tlc = gsap.timeline({scrollTrigger: {
  trigger: ".s-party-c",
  start: "50% 50%",
  end: "100%",
  scrub: true,
  pinSpacing: true, 
  // toggleActions: "play none none none",
  //             play pause resume resest repeat complete none
  //              onenter onleave onenterback onleaveback
  markers: true,
  
}});

tlc.to(".s-party-c", { x: -1788, duration: 8});

var tlc = gsap.timeline({scrollTrigger: {
  trigger: ".s-mood-c",
  start: "50% 50%",
  end: "100%",
  scrub: true,
  pinSpacing: true, 
  // toggleActions: "play none none none",
  //             play pause resume resest repeat complete none
  //              onenter onleave onenterback onleaveback
  markers: true,
  
}});

tlc.to(".s-mood-c", { x: -1788, duration: 8});

var tlc = gsap.timeline({scrollTrigger: {
  trigger: ".s-ambient-c",
  start: "50% 50%",
  end: "100%",
  scrub: true,
  pinSpacing: true, 
  // toggleActions: "play none none none",
  //             play pause resume resest repeat complete none
  //              onenter onleave onenterback onleaveback
  markers: true,
  
}});

tlc.to(".s-ambient-c", { x: -1788, duration: 8});



  });
  // carousel section timeline end

  

//   Match Media For Mobile
  mm.add("(max-width: 799px)", () => {
    var tlt = gsap.timeline({scrollTrigger: {
        trigger: ".banner-section",
        start: "top top",
        end: "100%",
        scrub: true,
        pin: ".banner-section",
        pinSpacing: true,
        // toggleActions: "play none none none",
        //             play pause resume resest repeat complete none
        //              onenter onleave onenterback onleaveback
        
        
    }});
    
    tlt.to(".banner-heading-one", { y: -780, duration: 8, });
    tlt.to(".banner-heading-two", { y: -775, duration: 8, });
    tlt.to(".banner-heading-three", { y: -895, duration: 8, });
    tlt.to(".banner-heading-four", { y: -620, duration: 8, });
  });

  // testimonials carousel start
const nextIcon = '<i class="fa-solid fa-chevron-right"></i>';
const prevIcon = '<i class="fa-solid fa-chevron-left"></i>';

  $('.testimonial-owl').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    navText:[
      prevIcon,
      nextIcon
    ],
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
  // testimonials carousel end

  // Sticky Navbar
  $(window).scroll(function(){
    if($(this).scrollTop() > 100){
        $('.ort-nav').addClass('sticky')
    } else{
        $('.ort-nav').removeClass('sticky')
    }
});