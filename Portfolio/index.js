var typingeffect=new Typed("#typingeff",{
    strings:["programmer.","web-developer."],
    typeSpeed:150,
    backSpeed:150,
    loop:true
});
var t1=gsap.timeline();
t1.from(".profile img",{
    x:-400
});
t1.from(".links a",{
    x:-400
});
t1.from("#part2 img",{
    y:-500
});
t1.from(".tabs a span",{
    opacity:0
});
 
var toggleBtn=document.querySelector(".toggle");
var closeBtn=document.querySelector(".closeBtn");
var sidebar=document.querySelector(".sidebar");

toggleBtn.addEventListener("click",function(){
    sidebar.classList.toggle("tggle");
});

closeBtn.addEventListener("click",function(){
    sidebar.classList.remove("tggle");
});