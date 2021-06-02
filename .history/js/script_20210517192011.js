let btn1= document.querySelector(".box1");
let btn2 = document.querySelector(".box2");
let text = document.querySelector(".greeting");
let frontpage = document.querySelector(".frontpage");
let secondpage = document.querySelector(".secondpage");
let button = document.querySelector(".button");
let logo = document.querySelector(".logo");



btn1.addEventListener("click", function() {
    btn1.classList.add("box1transition");
    btn1.style.transition = "transform 3s";
    btn2.classList.add("box2transition");
    btn2.style.transition = "transform 3s";
    text.style.animationName = "hidecontent";
    logo.style.zIndex = "1";

    setTimeout(function () {
        window.open('Pages/backpage.html', '_self');
    }, 2500);

});


btn2.addEventListener("click", function() {
    btn1.classList.add("box1transition");
    btn1.style.transition = "transform 3s";
    btn2.classList.add("box2transition");
    btn2.style.transition = "transform 3s";
    text.style.animationName = "hidecontent";
    setTimeout(function () {
        window.open('Pages/backpage.html', '_self');
    }, 2500);

});


text.addEventListener("click", function() {
    btn1.classList.add("box1transition");
    btn1.style.transition = "transform 3s";
    btn2.classList.add("box2transition");
    btn2.style.transition = "transform 3s";
    text.style.animationName = "hidecontent";
    setTimeout(function () {
        window.open('Pages/backpage.html', '_self');
    }, 2500);

});