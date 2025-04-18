// scroll up button animation 

let scrollButton = document.getElementById("scroll");
let scrollUpButton = document.getElementById("scroll-up");
let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
let scrollValue = Math.round((document.documentElement.scroll * 100 /calcHeight));
window.onscroll = function () {
    if(document.body.scrollTop>400 || document.documentElement.scrollTop> 400){
        scrollButton.style.display = "grid";
    }
    else{
        scrollButton.style.display = "none";
    }
    scrollButton.addEventListener("click", function () {
        window.scrollTo({top:0, behavior:"smooth"});
    });

    scrollButton.style.backgroundColor = `conic-gradient(#143C3C ${scrollValue}%, ${scrollValue}%  #2E6868)`;
};


































// window.addEventListener('scroll', reveal);

// function reveal(){
//     let reveals = document.getElementById("reveal");

//     for(let i=0; i < reveal.length; i++){

//         let windowHeight = window.innerHeight;
//         let revealTop = reveals[i].getBoundingClientRect().top;
//         let revealPoint = 150;

//         if (revealTop < windowHeight - revealPoint) {
//             reveals[i].classList.add("active");
//         }
//         else{
//             reveals[i].classList.add("active");
//         }
//     }
// }