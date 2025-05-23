// theme-change-btn
const themeChangeButton = document.getElementById("theme-change-btn");
themeChangeButton.addEventListener("click", function (event) {
  event.preventDefault();

  // predefined color list
  const presetColors = [
    "#FF6B6B",
    "#6BCB77",
    "#4D96FF",
    "#FFD93D",
    "#C34A36",
    "#845EC2",
    "#FF9671",
    "#0081CF",
    "#FFC75F",
    "#B39CD0",
  ];
  const color = presetColors[Math.floor(Math.random() * presetColors.length)];
  document.body.style.backgroundColor = color;

  // 🔥 Save the selected color in localStorage
  localStorage.setItem("selectedBackground", color);
});

// On page load, apply saved theme color if exists
const savedColor = localStorage.getItem("selectedBackground");
if (savedColor) {
  document.body.style.backgroundColor = savedColor;
}
