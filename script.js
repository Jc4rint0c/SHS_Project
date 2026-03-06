document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("myModal");
  const modalImg = document.getElementById("modalImg");
  const captionText = document.getElementById("caption");

  const images = document.querySelectorAll(".column img");
  images.forEach(img => {
    img.onclick = () => {
      modal.style.display = "block";
      modalImg.src = img.src;
      captionText.innerHTML = img.alt || "";
    };
  });

  document.querySelector(".close").onclick = () => {
    modal.style.display = "none";
  };
});

document.addEventListener("DOMContentLoaded", () => {
  // =========================
  // VIDEO MODAL
  // =========================
  const videoModal = document.getElementById("videoModal");
  const modalVideo = document.getElementById("modalVideo");

  function openVideoModal(videoSrc) {
    videoModal.style.display = "flex";
    modalVideo.src = videoSrc;
    modalVideo.play();
  }

  function closeVideoModal() {
    videoModal.style.display = "none";
    modalVideo.pause();
    modalVideo.src = "";
  }

  // Attach openVideoModal to overlays
  document.querySelectorAll(".video-overlay").forEach((overlay) => {
    overlay.addEventListener("click", () => {
      const video = overlay.nextElementSibling.querySelector("source").src;
      openVideoModal(video);
    });
  });

  // Close button
  document.querySelector("#videoModal .close").addEventListener("click", closeVideoModal);

  // Close when clicking outside
  videoModal.addEventListener("click", (e) => {
    if (e.target === videoModal) closeVideoModal();
  });
});

// // =================
// // EVENT SLIDER
// // =================

const eventSlides = document.querySelector(".events-track");
const slideWidth = 200;

document.getElementById("next-event").onclick = () => {
  if (eventSlides.scrollLeft + eventSlides.clientWidth >= eventSlides.scrollWidth) {
    eventSlides.scrollTo({ left: 0, behavior: "smooth" });
  } else {
    eventSlides.scrollBy({ left: slideWidth, behavior: "smooth" });
  }
};

document.getElementById("prev-event").onclick = () => {
  if (eventSlides.scrollLeft <= 0) {
    eventSlides.scrollTo({
      left: eventSlides.scrollWidth - eventSlides.clientWidth,
      behavior: "smooth"
    });
  } else {
    eventSlides.scrollBy({ left: -slideWidth, behavior: "smooth" });
  }
};

// =================
// Slideshow
// =================

let slideIndex = 0;

const wrapper = document.querySelector(".slides-wrapper");
const slides = document.querySelectorAll(".mySlides");
const totalSlides = slides.length;

function showSlides() {
  if (slideIndex >= totalSlides) slideIndex = 0;
  if (slideIndex < 0) slideIndex = totalSlides - 1;

  wrapper.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function plusSlides(n) {
  slideIndex += n;
  showSlides();
}

setInterval(() => {
  slideIndex++;
  showSlides();
}, 5000);

