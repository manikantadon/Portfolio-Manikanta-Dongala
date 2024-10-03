// JavaScript for Modal Image Preview
function openModal(imageSrc) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  modal.style.display = "flex";
  modalImg.src = imageSrc;
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

// JavaScript for Scroll Progress
window.onscroll = function () {
  const scrollProgress = document.getElementById("scrollProgress");
  const scrollTop = document.documentElement.scrollTop;
  const windowHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const progressPercentage = (scrollTop / windowHeight) * 100;
  scrollProgress.style.width = progressPercentage + "%";
};
