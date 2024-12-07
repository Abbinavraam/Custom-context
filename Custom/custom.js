// Event listener for right-click to display the context menu
window.addEventListener("contextmenu", function (event) {
    event.preventDefault();

    // Get the custom context menu element
    const contextMenu = document.getElementById("context-menu");

    // Set the position of the menu based on the cursor's location
    contextMenu.style.top = `${event.pageY}px`;
    contextMenu.style.left = `${event.pageX}px`;

    //'active' class make's the menu visible
    contextMenu.classList.add("active");
});

// Event listener for a click anywhere else to hide the context menu
window.addEventListener("click", function () {
    const contextMenu = document.getElementById("context-menu");
    contextMenu.classList.remove("active");
});
