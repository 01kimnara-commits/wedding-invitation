document.getElementById("openInvitation").addEventListener("click", function () {

    alert("Selamat datang di Undangan Pernikahan Regi & Ratu 💕");

});
// ==========================
// COUNTDOWN
// ==========================

const weddingDate = new Date("2026-12-20T08:00:00").getTime();

setInterval(function(){

    const now = new Date().getTime();

    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000*60*60*24));

    const hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));

    const minutes = Math.floor((distance % (1000*60*60)) / (1000*60));

    const seconds = Math.floor((distance % (1000*60)) / 1000);

    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;

},1000);
// ==========================
// OPENING SCREEN
// ==========================

const opening = document.getElementById("opening-screen");
const openButton = document.getElementById("openInvitation");

openButton.addEventListener("click", function(){

    opening.classList.add("hide-opening");

    setTimeout(() => {
        opening.style.display = "none";
    }, 800);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
// ==========================
// REVEAL ANIMATION
// ==========================

const reveals = document.querySelectorAll(".reveal");

function revealSection(){

    const trigger = window.innerHeight * 0.85;

    reveals.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        if(top < trigger){

            section.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revealSection);

revealSection();