function openModal(imageSrc) {
    console.log("Opening modal with image:", imageSrc);
    var modal = document.getElementById("modal");
    var modalImage = document.getElementById("modalImage");
    modal.style.display = "flex";  // Use flex to display modal
    modalImage.src = imageSrc;
}

function closeModal() {
    console.log("Closing modal");
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Add an event listener to check for page load
document.addEventListener("DOMContentLoaded", function() {
    console.log("Page fully loaded");
});
