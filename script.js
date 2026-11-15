document.getElementById("openInvitation").addEventListener("click", function () {

    alert("Selamat datang di Undangan Pernikahan Regi & Ratu 💕");


 // ==========================
 // COUNTDOWN
 // ==========================

const weddingDate = new Date("2027-03-20T08:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance <= 0) {
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

// Jalankan langsung saat halaman dibuka
updateCountdown();

// Perbarui setiap satu detik
setInterval(updateCountdown, 1000);

/* =================================
   ANIMASI REVEAL SAAT SCROLL
================================= */

(() => {
    const elements = document.querySelectorAll(`
        .hero-content,
        section,
        .section-title,
        .quote-text,
        .couple-wrapper,
        .person-card,
        .timeline-item,
        .countdown-wrapper,
        .time-box,
        .event-card,
        .maps-button,
        .gallery-item,
        .rsvp-card,
        .gift-card,
        .gift-thanks
    `);

    elements.forEach((element, index) => {
        element.classList.add("reveal-item");
        element.style.setProperty(
            "--reveal-delay",
            `${Math.min(index * 70, 420)}ms`
        );
    });

    document.body.classList.add("reveal-ready");

    if (!("IntersectionObserver" in window)) {
        elements.forEach(element => {
            element.classList.add("is-visible");
        });
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    elements.forEach(element => {
        observer.observe(element);
    });
})();
