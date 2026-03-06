document.addEventListener("DOMContentLoaded", () => {
  // Get modal elements
  const videoModal = document.getElementById("videoModal");
  const modalVideo = document.getElementById("modalVideo");
  const closeBtn = videoModal.querySelector(".close");

  // Function to open the video modal
  function openVideoModal(videoSrc) {
    videoModal.style.display = "flex";
    modalVideo.src = videoSrc;
    modalVideo.play();
  }

  // Function to close the video modal
  function closeVideoModal() {
    videoModal.style.display = "none";
    modalVideo.pause();
    modalVideo.src = ""; // Reset video to prevent it from continuing
  }

  // Attach click events to each video overlay
  document.querySelectorAll(".video-card .video-overlay").forEach(overlay => {
    overlay.addEventListener("click", () => {
      // Find the <source> element inside the sibling <video>
      const videoElement = overlay.parentElement.querySelector("video source");
      if (videoElement && videoElement.src) {
        openVideoModal(videoElement.src);
      }
    });
  });

  // Close modal when clicking the close button
  closeBtn.addEventListener("click", closeVideoModal);

  // Close modal when clicking outside the video
  videoModal.addEventListener("click", (e) => {
    if (e.target === videoModal) closeVideoModal();
  });
});