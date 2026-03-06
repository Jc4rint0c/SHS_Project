function revealElements() {

  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((element) => {

    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      element.classList.add("active");
    }

  });

}

window.addEventListener("scroll", revealElements);
window.addEventListener("DOMContentLoaded", revealElements);