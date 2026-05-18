document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("imageModalImg");
    const closeButtons = document.querySelectorAll("[data-close-modal]");

    document.addEventListener("click", (event) => {
        const clickedElement = event.target;

        if (clickedElement && clickedElement.classList.contains("modal-trigger")) {
            modalImg.src = clickedElement.src;
            modal.classList.add("show");
            console.log("Modal opened for:", clickedElement.src);
        }
    });

    closeButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            modal.classList.remove("show");
        });
    });
});