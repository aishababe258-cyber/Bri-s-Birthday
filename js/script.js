/* ===================================================
   THE WOMAN BEHIND BRI XKLUSIVE WEAR
   Luxury Birthday Experience
   PART 3 - INTERACTIONS
=================================================== */


/* =========================
   PAGE LOADER
========================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.transition = "1s ease";

        setTimeout(() => {

            loader.style.display = "none";

        },1000);


    },2000);


});



/* =========================
   SCROLL FADE ANIMATION
========================= */


const revealElements = document.querySelectorAll(
    "#story, #gallery, #letter, #surprise, #ending"
);


function revealOnScroll(){

    revealElements.forEach(section => {

        const position =
        section.getBoundingClientRect().top;

        const screen =
        window.innerHeight * 0.85;


        if(position < screen){

            section.style.opacity="1";
            section.style.transform="translateY(0)";

        }

    });

}


revealElements.forEach(section=>{

    section.style.opacity="0";

    section.style.transform="translateY(50px)";

    section.style.transition="1s ease";

});


window.addEventListener(
"scroll",
revealOnScroll
);


revealOnScroll();



/* =========================
   SMOOTH NAVIGATION
========================= */


document.querySelectorAll(
".navbar a"
).forEach(link=>{


link.addEventListener(
"click",
function(e){

const target =
document.querySelector(
this.getAttribute("href")
);


if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth"

});

}


});


});



/* =========================
   SURPRISE BUTTON
========================= */


const surpriseBtn =
document.getElementById(
"surpriseBtn"
);


if(surpriseBtn){


surpriseBtn.addEventListener(
"click",
()=>{


surpriseBtn.innerHTML =
"✨ A Special Gift Awaits ✨";


surpriseBtn.style.background =
"linear-gradient(135deg,#fff,#D4AF37)";


createConfetti();



});


}



/* =========================
   GOLD CONFETTI EFFECT
========================= */


function createConfetti(){


for(let i=0;i<80;i++){


const confetti =
document.createElement("div");


confetti.innerHTML="✨";


confetti.style.position="fixed";

confetti.style.left=
Math.random()*100+"vw";


confetti.style.top="-20px";


confetti.style.fontSize=
Math.random()*20+10+"px";


confetti.style.zIndex="9999";


confetti.style.animation=
`drop ${Math.random()*3+2}s linear`;


document.body.appendChild(confetti);



setTimeout(()=>{

confetti.remove();

},5000);



}


}




/* =========================
   FLOATING GOLD PARTICLES
========================= */


const particles =
document.getElementById(
"particles"
);



function createParticles(){


for(let i=0;i<40;i++){


const particle =
document.createElement("span");


particle.innerHTML="✦";


particle.style.position="absolute";


particle.style.left=
Math.random()*100+"%";


particle.style.top=
Math.random()*100+"%";


particle.style.color=
"#D4AF37";


particle.style.opacity=
Math.random();


particle.style.fontSize=
Math.random()*15+5+"px";


particle.style.animation=
`float ${Math.random()*5+5}s infinite ease-in-out`;


particles.appendChild(particle);


}


}


createParticles();




/* =========================
   ADD ANIMATION KEYFRAMES
========================= */


const style =
document.createElement("style");


style.innerHTML=`

@keyframes drop{

from{

transform:
translateY(-20px)
rotate(0deg);

}


to{

transform:
translateY(110vh)
rotate(360deg);

}

}



@keyframes float{


0%,100%{

transform:
translateY(0);

}


50%{

transform:
translateY(-30px);

}


}

`;



document.head.appendChild(style);

/* =========================
   PART 4 JAVASCRIPT
========================= */


/* MUSIC CONTROL */


const music =
document.getElementById(
"birthdayMusic"
);


const musicBtn =
document.getElementById(
"musicBtn"
);



let playing=false;


musicBtn.addEventListener(
"click",
()=>{


if(!playing){

music.play();

musicBtn.innerHTML="⏸";

playing=true;


}else{


music.pause();

musicBtn.innerHTML="🎵";

playing=false;


}


});




/* LUXURY CURSOR */


const cursor =
document.querySelector(
".cursor"
);


document.addEventListener(
"mousemove",
(e)=>{


cursor.style.left =
e.clientX+"px";


cursor.style.top =
e.clientY+"px";


});



/* CURSOR HOVER EFFECT */


document.querySelectorAll(
"a,button"
).forEach(item=>{


item.addEventListener(
"mouseenter",
()=>{

cursor.style.transform=
"translate(-50%,-50%) scale(2)";

});


item.addEventListener(
"mouseleave",
()=>{

cursor.style.transform=
"translate(-50%,-50%) scale(1)";

});


});