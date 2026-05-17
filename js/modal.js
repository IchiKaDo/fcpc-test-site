document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("imageModalImg");

    const images = document.querySelectorAll(".modal-trigger");
    const closeButtons = document.querySelectorAll("[data-close-modal]");

    // Open modal
    images.forEach((img) => {
        img.addEventListener("click", () => {
            modalImg.src = img.src;
            modal.classList.add("show");
        });
    });

    // Close modal
    closeButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            modal.classList.remove("show");
        });
    });
});