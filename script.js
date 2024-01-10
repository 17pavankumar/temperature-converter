

// Example: Toggle the display of the education section on button click
const educationSection = document.querySelector(".main-block.concise");
const educationButton = document.getElementById("toggleEducation");

educationButton.addEventListener("click", function () {
  educationSection.style.display =
    educationSection.style.display === "none" ? "block" : "none";
});


