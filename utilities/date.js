const today = new Date();
const parts = today.toDateString().split(" "); // ["Sat", "Feb", "28", "2025"]

const dayName = parts[0]; // "Sat"
const dateRest = parts.slice(1).join(" "); // "Feb 28 2025"

document.getElementById("day-name").textContent = dayName;
document.getElementById("date-rest").textContent = dateRest;
