// Apply saved background color on all pages
const savedColor = localStorage.getItem("selectedBackground");
if (savedColor) {
  document.body.style.backgroundColor = savedColor;
}

// Only add the event listener if the button exists (i.e. index.html)
const themeChangeButton = document.getElementById("theme-change-btn");
if (themeChangeButton) {
  themeChangeButton.addEventListener("click", function (event) {
    event.preventDefault();

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

    localStorage.setItem("selectedBackground", color);
  });
}
