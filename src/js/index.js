window.addEventListener('DOMContentLoaded', () => {

    const social = document.querySelector(".social");

    social.addEventListener('click', () => {
        social.classList.contains("active") ? social.classList.remove("active") : social.classList.add("active");
    })

});