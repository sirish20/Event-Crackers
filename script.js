function loading(){
    
    gsap.from(".line h1",{
        y: 150,
        stagger:0.5,
        duration:0.7,
        delay:0.5
    });
    var h5counter = document.querySelector("#line1-part1 h5");
    var grow =0;
    setInterval(function(){
        if(grow<100){
            grow++;
            h5counter.innerHTML=grow;
        }
        else{
            h5counter.innerHTML=grow;
        }
    },40);
    gsap.to("#loader",{
        opacity: 0,
        duration:0.7,
        delay:6
    })
    gsap.from("#nav",{
        opacity:0,
        delay:5.5
    });
}
loading();

gsap.from("#page1",{
    opacity:0,
    y:2000,
    duration:0.8
});
gsap.from(".worst h2",{
    y: 150,
    stagger:0.3,
    duration:0.4,
    delay:5
});
var loader = document.getElementById("loader");
function hideLoader() {
    loader.style.display = "none";
};
setTimeout(hideLoader, 5000);

function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
loco();

function sheryAnimation(){
    Shery.imageEffect("img-div",{
        style:5,
        debug: true,
        gooey: true
    })
}
sheryAnimation()

function cursorAnimation(){
    // Shery.mouseFollower({
    //     skew: true,
    //     ease: "cubic-bezier(0.3,1,0.3,1)",
    //     duration: 1
    // });
    // Shery.makeMagnet("#nav2 h5");

    var videoContainer = document.querySelector("#video-container");
    var video = document.querySelector("#video-container video")
    videoContainer.addEventListener("mouseenter", function () {
      videoContainer.addEventListener("mousemove", function (dets) {
        gsap.to(".mousefollower", {
          opacity: 0
        });
        gsap.to("#video-cursor", {
          left: dets.x - 570,
          y: dets.y - 300,
        });
      });
    });
    videoContainer.addEventListener("mouseleave", function () {
      gsap.to(".mousefollower", {
        opacity: 1
  
      });
      gsap.to("#video-cursor", {
        left: "70%",
        top: "-15%",
      });
    });

    var flag = 0
    videoContainer.addEventListener("click", function () {
      if (flag == 0) {
        video.play()
        video.style.opacity = 1
        document.querySelector("#video-cursor").innerHTML = `<i class="ri-pause-mini-fill"></i>`
        gsap.to("#video-cursor", {
          scale: 0.5
        })
        flag = 1
      } else {
        video.pause()
        video.style.opacity = 0
        document.querySelector("#video-cursor").innerHTML = `<i class="ri-play-mini-fill"></i>`
        gsap.to("#video-cursor", {
          scale: 1
        })
        flag = 0
      }
    })
}
cursorAnimation();

document.addEventListener("mousemove",function(dets){
    gsap.to("#flaging",{
        x:dets.x,
        y:dets.y,
    })
})

document.querySelector(".span").addEventListener("mouseenter",function(){
    gsap.to("#flaging",{
        opacity:1,
    })
})
document.querySelector(".span").addEventListener("mouseleave",function(){
    gsap.to("#flaging",{
        opacity:0,
    })
})


// document.addEventListener("mousemove",function(dets){
//     gsap.to("#crsr",{
//         left: dets.x,
//         top: dets.y
//     })
// })

// Shery.makeMagnet("#nav2 h5");
// Shery.makeMagnet("#nav2 h5" , {
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     duration: 1,
//   });

// gsap.from("#p12",{
//     y: 120,
//     stagger: 0.5
// });

