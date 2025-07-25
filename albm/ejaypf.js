document.querySelector(".menubar > button").addEventListener("click", function() {
    const popup = document.getElementById("pop-up");
    if (popup.classList.contains("active")) {
        popup.classList.remove("active");
        setTimeout(() => popup.style.display = "none", 300);
    } else {
        popup.style.display = "block";
        setTimeout(() => popup.classList.add("active"), 10);
    }
});