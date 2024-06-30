const heart = document.getElementById("heartIcon");
heart.addEventListener("mouseover",()=>{
    heart.classList.remove("ri-heart-line");
    heart.classList.add("ri-heart-fill");
})
heart.addEventListener("mouseout",()=>{
    heart.classList.remove("ri-heart-fill");
    heart.classList.add("ri-heart-line");
})

var tl = gsap.timeline();
tl.from("#navPart2 img",{
    opacity:0,
    delay:1,
    duration:1,
    y:-40,
})
tl.from("#navPart2 h5",{
    opacity:0,
    duration:1,
    y:-30,

})
let t2 = gsap.timeline();
t2.from("#left h1 ", {
    opacity: 0,
    duration: 0.5,
    x:-100
});

t2.from("#left h1 span", {
    opacity: 0,
    duration: 1,
});
t2.from("#left p", {
    opacity: 0,
    duration: 0.5,
    x:-100
});

