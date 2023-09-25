// Get the popup element, close button, and popup content
const popup = document.getElementById("popup");
const closeButton = document.getElementById("close-popup");
const popupContent = document.getElementById("popup-content");

// Function to show the popup at a specific position with content
function showPopup(x, y, content) {
    popup.style.left = x + "px";
    popup.style.top = y + "px";
    popupContent.innerHTML = content;
    popup.style.display = "block";
}

// Function to hide the popup
function hidePopup() {
    popup.style.display = "none";
}

// Event listener for the close button
closeButton.addEventListener("click", hidePopup);

// Event listener for the document to show the popup where clicked
document.addEventListener("click", function (event) {
    if (event.target.classList.contains("image")) {
        const content = event.target.getAttribute("data-content");
        showPopup(event.clientX, event.clientY, content);
    }
});
