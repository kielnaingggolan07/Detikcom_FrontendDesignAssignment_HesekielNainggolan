function scrollToBrand() {
    const aboutSection = document.getElementById("brand");
    const yOffset = -70; // Penyesuaian offset agar header navbar tidak menutupi bagian atas About
    const y = aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
}

// Event listener untuk menambahkan fungsi scrollToAbout() saat tombol "About" diklik
document.addEventListener("DOMContentLoaded", function() {
    const aboutLink = document.querySelector(".navbar-brand[href='#brand']");
    aboutLink.addEventListener("click", function(event) {
        event.preventDefault();
        scrollToBrand();
    });
});

// Mengatur scroll ke bagian "About" saat tombol "About" diklik
function scrollToAbout() {
    const aboutSection = document.getElementById("about");
    const yOffset = -70; // Penyesuaian offset agar header navbar tidak menutupi bagian atas About
    const y = aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
}

// Event listener untuk menambahkan fungsi scrollToAbout() saat tombol "About" diklik
document.addEventListener("DOMContentLoaded", function() {
    const aboutLink = document.querySelector(".nav-link[href='#about']");
    aboutLink.addEventListener("click", function(event) {
        event.preventDefault();
        scrollToAbout();
    });
});

// Mengatur scroll ke bagian "About" saat tombol "Mechanism" diklik
function scrollToMechanism() {
    const aboutSection = document.getElementById("mechanism");
    const yOffset = -70; // Penyesuaian offset agar header navbar tidak menutupi bagian atas About
    const y = aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
}

// Event listener untuk menambahkan fungsi scrollToMechanism() saat tombol "About" diklik
document.addEventListener("DOMContentLoaded", function() {
    const aboutLink = document.querySelector(".nav-link[href='#mechanism']");
    aboutLink.addEventListener("click", function(event) {
        event.preventDefault();
        scrollToMechanism();
    });
});

function scrollToLatestupdate() {
    const aboutSection = document.getElementById("latestupdate");
    const yOffset = -70; // Penyesuaian offset agar header navbar tidak menutupi bagian atas About
    const y = aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
}

// Event listener untuk menambahkan fungsi scrollToMechanism() saat tombol "About" diklik
document.addEventListener("DOMContentLoaded", function() {
    const aboutLink = document.querySelector(".nav-link[href='#latestupdate']");
    aboutLink.addEventListener("click", function(event) {
        event.preventDefault();
        scrollToLatestupdate();
    });
});